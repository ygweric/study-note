# qiankun 实现隔离原理

在微前端架构中，**应用隔离**是核心需求之一，目的是避免不同微应用之间的 JS 变量污染和 CSS 样式冲突。qiankun（乾坤）作为主流的微前端框架，通过一套完善的机制实现了 JS 和 CSS 的隔离，下面分别解析其原理：


### 一、JS 隔离：基于沙箱（Sandbox）机制
qiankun 的 JS 隔离核心是**沙箱**，它能让每个微应用在独立的执行环境中运行，避免对全局 window 或其他应用造成污染。根据浏览器环境的不同，qiankun 提供了 3 种沙箱实现：


#### 1. 代理沙箱（ProxySandbox）：适用于支持 Proxy 的现代浏览器
这是 qiankun 推荐的沙箱模式，性能最优，原理如下：
- **创建独立的代理对象**：为每个微应用创建一个基于 `window` 的 Proxy 代理对象（`fakeWindow`），微应用的所有 JS 操作（如读写变量、添加事件监听等）都会通过这个代理对象进行。
- **拦截全局访问**：
  - 当微应用读取 `window.xxx` 时，代理会优先从 `fakeWindow` 中查找，若不存在则 fallback 到真实 `window`。
  - 当微应用修改 `window.xxx` 时（如 `window.a = 1`），代理会将修改保存到 `fakeWindow` 中，而非直接修改真实 `window`，避免全局污染。
  - 对于全局方法（如 `addEventListener`），代理会拦截并记录微应用添加的事件，在微应用卸载时自动清除，防止残留。
- **隔离性**：每个微应用的 `fakeWindow` 相互独立，因此不同应用的变量修改不会互相影响。


#### 2. 快照沙箱（SnapshotSandbox）：适用于不支持 Proxy 的低版本浏览器（如 IE）
原理是通过**快照备份与恢复**实现隔离：
- **激活时（mount）**：
  - 对当前全局 `window` 的状态（如变量、属性）进行快照（深拷贝关键属性），保存为 `windowSnapshot`。
  - 将微应用上次运行时修改的状态（保存在 `modifiedMap` 中）恢复到 `window` 中。
- **失活时（unmount）**：
  - 将当前 `window` 中被微应用修改的状态记录到 `modifiedMap`。
  - 用之前的 `windowSnapshot` 覆盖当前 `window`，恢复到微应用激活前的状态。
- 缺点：性能较差（频繁深拷贝），且只能支持单应用激活（多应用同时运行时快照会冲突）。


#### 3. LEGACY 沙箱（LegacySandbox）：兼容更早期的浏览器
与快照沙箱类似，但采用更简化的快照逻辑，仅记录微应用新增或修改的属性，而非全量快照，性能略优于快照沙箱，但隔离性稍弱。


#### 沙箱的工作流程
- **激活（active）**：微应用挂载时，启用对应的沙箱，将其 `fakeWindow` 或恢复的快照作为当前执行环境。
- **失活（inactive）**：微应用卸载时，沙箱暂停，恢复全局 `window` 到初始状态（或切换到其他应用的沙箱）。

通过沙箱机制，qiankun 确保了每个微应用的 JS 执行环境相互隔离，避免了变量污染和残留。


### 二、CSS 隔离：多种方案结合
CSS 隔离的目标是防止不同微应用的样式互相干扰（如同名类选择器冲突）。qiankun 提供了 3 种主流的 CSS 隔离方案，可根据需求选择：


#### 1. Shadow DOM 隔离（推荐）
**原理**：利用浏览器原生的 Shadow DOM 特性，将微应用的 DOM 树挂载到一个 Shadow Root 中，实现样式的天然隔离。
- **Shadow DOM 的特性**：
  - 内部样式不会泄露到外部（即微应用的样式只作用于 Shadow Root 内的 DOM）。
  - 外部样式也无法穿透到 Shadow Root 内部（除非使用 `::part` 或 `::slotted` 等特殊选择器）。
- **qiankun 中的实现**：
  - 当配置 `sandbox: { strictStyleIsolation: true }` 时，qiankun 会为微应用的容器创建 Shadow Root，并将微应用的 DOM 挂载到其中。
  - 微应用加载的 CSS 会被自动注入到 Shadow Root 内，确保样式仅作用于自身。
- 优点：隔离彻底，原生支持，无额外性能开销。
- 缺点：部分场景存在限制（如 Shadow DOM 内无法使用 `document.body` 等全局选择器，部分第三方组件可能不兼容）。


#### 2. CSS 前缀隔离（Scoped CSS）
**原理**：通过为微应用的所有样式自动添加唯一前缀，确保其选择器仅匹配自身 DOM 元素。
- **实现步骤**：
  - qiankun 为每个微应用生成一个唯一标识（如 `__qiankun_microapp_wrapper_${appName}__`）。
  - 微应用加载 CSS 时，qiankun 会通过 PostCSS 等工具遍历所有样式规则，为选择器添加前缀（如将 `.box` 转换为 `[data-qiankun="${appId}"] .box`）。
  - 同时，微应用的容器 DOM 会被添加该前缀属性（如 `<div data-qiankun="app1">...</div>`），确保样式仅匹配容器内的元素。
- 配置方式：`sandbox: { experimentalStyleIsolation: true }`。
- 优点：兼容性好，对第三方组件友好。
- 缺点：需要遍历和修改 CSS 规则，存在一定性能开销；若样式中存在全局选择器（如 `body`），可能需要额外处理。


#### 3. 手动隔离（推荐结合使用）
qiankun 也支持开发者通过手动约定实现 CSS 隔离，常见方案包括：
- **CSS Modules**：通过工具将类名转换为唯一哈希值（如 `box` → `box_123`），避免冲突。
- **BEM 命名规范**：为每个微应用的样式添加统一前缀（如 `app1-button`、`app2-card`），通过命名空间隔离。
- **CSS-in-JS**：使用 styled-components 等工具，生成带唯一标识的样式类。


### 三、总结
qiankun 的隔离机制通过“沙箱+样式隔离”双重保障，实现了微应用的独立运行：
- **JS 隔离**：通过 Proxy 代理或快照备份，确保每个应用的全局变量和方法互不干扰。
- **CSS 隔离**：通过 Shadow DOM 原生隔离或 CSS 前缀转换，避免样式冲突。

这些机制使得多个技术栈不同、开发团队独立的应用能够无缝集成到同一页面，是微前端架构落地的核心保障。




### 1. 关于 Shadow DOM 在 qiankun 中的使用
qiankun 提供了多种样式隔离方案，其中一种就是通过 Shadow DOM 实现：
- 当配置 `sandbox: { strictStyleIsolation: true }` 时，qiankun 会为子应用的容器创建 Shadow DOM，将子应用的 DOM 树挂载到 Shadow Root 中。
- 此时子应用的样式会被 Shadow DOM 隔离，不会影响主应用或其他子应用（类似 scoped CSS 的效果，但隔离级别更高）。

但需要注意：
- Shadow DOM 是**可选功能**，默认不启用（qiankun 默认使用较为轻量的 `experimentalStyleIsolation` 方案，通过 CSS 前缀隔离样式）。
- Shadow DOM 仅解决**样式隔离和 DOM 树隔离**，不涉及 JavaScript 执行环境的隔离。


### 总结
- qiankun **支持使用 Shadow DOM**，但主要用于样式隔离，且为可选配置。
- Shadow DOM **不直接具备 JavaScript 沙箱功能**，qiankun 的 JS 沙箱通过 Proxy 代理机制独立实现，与 Shadow DOM 无关。
- 实际使用中，可根据需求单独或同时启用样式隔离（如 Shadow DOM）和 JS 沙箱。