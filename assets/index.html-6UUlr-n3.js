import{_ as s,o as n,c as a,e}from"./app-DPxqg4KM.js";const l={},o=e(`<h1 id="详解-import-meta-glob" tabindex="-1"><a class="header-anchor" href="#详解-import-meta-glob"><span>详解 <code>import.meta.glob</code></span></a></h1><hr><p>Generated by TongYi</p><hr><p><code>import.meta.glob</code> 是在编译时工作的。这意味着当你使用 <code>import.meta.glob</code> 时，构建工具（如 Vite）会在构建阶段解析你提供的文件模式，并生成相应的动态导入语句。具体来说，以下是一些关键点：</p><h3 id="编译时工作原理" tabindex="-1"><a class="header-anchor" href="#编译时工作原理"><span>编译时工作原理</span></a></h3><ol><li><p><strong>文件匹配</strong>：</p><ul><li>构建工具在编译时会扫描项目目录，查找符合给定模式的文件。例如，如果你使用 <code>import.meta.glob(&#39;./components/*.vue&#39;)</code>，构建工具会找到 <code>./components</code> 目录下所有扩展名为 <code>.vue</code> 的文件。</li></ul></li><li><p><strong>生成导入语句</strong>：</p><ul><li>构建工具会生成一个对象，其中每个键是匹配到的文件路径，值是一个动态导入的 Promise。这个对象会在运行时被使用。</li></ul></li><li><p><strong>代码分割</strong>：</p><ul><li>构建工具还会根据匹配到的文件进行代码分割，确保每个文件被单独打包成一个 chunk，从而实现按需加载。</li></ul></li></ol><h3 id="运行时行为" tabindex="-1"><a class="header-anchor" href="#运行时行为"><span>运行时行为</span></a></h3><ol><li><p><strong>动态加载</strong>：</p><ul><li>在运行时，当你访问 <code>import.meta.glob</code> 返回的对象时，每个文件路径对应的 Promise 会被解析，从而异步加载对应的模块。</li></ul></li><li><p><strong>按需加载</strong>：</p><ul><li>由于返回的是 Promise，你可以根据需要异步加载模块，这有助于优化应用的初始加载时间和性能。</li></ul></li></ol><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><p>假设你有以下项目结构：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>/src</span></span>
<span class="line"><span>  /components</span></span>
<span class="line"><span>    Button.vue</span></span>
<span class="line"><span>    Input.vue</span></span>
<span class="line"><span>    Select.vue</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在代码中使用 <code>import.meta.glob</code>：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> modules</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">glob</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./components/*.vue&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> path</span><span style="color:#569CD6;"> in</span><span style="color:#9CDCFE;"> modules</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">  modules</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">]().</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">module</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">\`Loaded module: </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">path</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  });</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译后的代码示例" tabindex="-1"><a class="header-anchor" href="#编译后的代码示例"><span>编译后的代码示例</span></a></h3><p>构建工具（如 Vite）会在编译时将上述代码转换为类似以下的形式：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> modules</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#CE9178;">  &#39;./components/Button.vue&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#569CD6;"> import</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./components/Button.vue&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#CE9178;">  &#39;./components/Input.vue&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#569CD6;"> import</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./components/Input.vue&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#CE9178;">  &#39;./components/Select.vue&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#569CD6;"> import</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./components/Select.vue&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> path</span><span style="color:#569CD6;"> in</span><span style="color:#9CDCFE;"> modules</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">  modules</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">]().</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">module</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">\`Loaded module: </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">path</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  });</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><ul><li><strong>编译时</strong>：<code>import.meta.glob</code> 在编译时解析文件模式并生成动态导入语句。</li><li><strong>运行时</strong>：生成的动态导入语句在运行时按需加载模块。</li></ul><p>这种机制使得 <code>import.meta.glob</code> 成为一种强大的工具，适用于组件库、路由配置和国际化等场景，能够显著提高开发效率和应用性能。</p>`,20),p=[o];function t(r,c){return n(),a("div",null,p)}const d=s(l,[["render",t],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/fe/module/import/import.meta.glob/","title":"详解 import.meta.glob","lang":"zh-CN","frontmatter":{"description":"详解 import.meta.glob Generated by TongYi import.meta.glob 是在编译时工作的。这意味着当你使用 import.meta.glob 时，构建工具（如 Vite）会在构建阶段解析你提供的文件模式，并生成相应的动态导入语句。具体来说，以下是一些关键点： 编译时工作原理 文件匹配： 构建工具在编译时会扫描项...","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/fe/module/import/import.meta.glob/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"详解 import.meta.glob"}],["meta",{"property":"og:description","content":"详解 import.meta.glob Generated by TongYi import.meta.glob 是在编译时工作的。这意味着当你使用 import.meta.glob 时，构建工具（如 Vite）会在构建阶段解析你提供的文件模式，并生成相应的动态导入语句。具体来说，以下是一些关键点： 编译时工作原理 文件匹配： 构建工具在编译时会扫描项..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-05T03:54:59.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-05T03:54:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解 import.meta.glob\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-05T03:54:59.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"编译时工作原理","slug":"编译时工作原理","link":"#编译时工作原理","children":[]},{"level":3,"title":"运行时行为","slug":"运行时行为","link":"#运行时行为","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"编译后的代码示例","slug":"编译后的代码示例","link":"#编译后的代码示例","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1730778899000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":2}]},"autoDesc":true,"filePathRelative":"fe/module/import/import.meta.glob/index.md"}');export{d as comp,D as data};