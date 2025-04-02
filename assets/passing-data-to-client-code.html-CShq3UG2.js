import{_ as p,r as t,o as c,c as r,a as s,b as e,d as a,w as l,e as o}from"./app-BPhq52BI.js";const i={},d=s("h1",{id:"向客户端代码传递数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#向客户端代码传递数据"},[s("span",null,"向客户端代码传递数据")])],-1),D=s("p",null,"我们知道，VuePress 插件入口和主题入口是在 Node 端处理的，但有时候你可能需要向客户端动态传递数据。例如，你希望在用户传入不同的选项时生成不同的数据。",-1),y=s("h2",{id:"使用-define-hook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用-define-hook"},[s("span",null,[e("使用 "),s("code",null,"define"),e(" Hook")])])],-1),u=o(`<p>首先，通过 <code>define</code> Hook 定义一些常量：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#9CDCFE;">  define:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    __FOO__:</span><span style="color:#9CDCFE;"> options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> || </span><span style="color:#CE9178;">&#39;str&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    __OBJ__:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      bar:</span><span style="color:#9CDCFE;"> options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> || </span><span style="color:#B5CEA8;">123</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在客户端代码中直接使用它们：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__FOO__</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> obj</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__OBJ__</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些全局常量的类型：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> __FOO__</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> __OBJ__</span><span style="color:#D4D4D4;">: { </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写入并加载临时文件" tabindex="-1"><a class="header-anchor" href="#写入并加载临时文件"><span>写入并加载临时文件</span></a></h2><p>如果你需要实现一些更复杂的功能，你可以写入临时文件，并在客户端代码中动态加载它们。</p>`,8),m=s("code",null,"foo.js",-1),C=o(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#569CD6;">  async</span><span style="color:#DCDCAA;"> onPrepared</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    // 写入临时文件</span></span>
<span class="line"><span style="color:#C586C0;">    await</span><span style="color:#9CDCFE;"> app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">writeTemp</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;foo.js&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      \`export const foo = </span><span style="color:#569CD6;">\${</span><span style="color:#4FC1FF;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    )</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在客户端代码中通过 <code>@temp</code> 别名来加载临时文件：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@temp/foo&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些临时模块的类型：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> module</span><span style="color:#CE9178;"> &#39;@temp/foo&#39;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> foo</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(h,b){const n=t("RouteLink");return c(),r("div",null,[d,D,y,s("p",null,[e("插件 API 提供了一个 "),a(n,{to:"/reference/plugin-api.html#define"},{default:l(()=>[e("define")]),_:1}),e(" Hook 来定义客户端代码中的全局常量。你可以利用它来向客户端传递数据。")]),u,s("p",null,[e("首先，写入一个名为 "),m,e(" 的临时文件，它将会生成在 "),a(n,{to:"/reference/config.html#temp"},{default:l(()=>[e("temp")]),_:1}),e(" 目录中：")]),C])}const _=p(i,[["render",v],["__file","passing-data-to-client-code.html.vue"]]),k=JSON.parse('{"path":"/advanced/cookbook/passing-data-to-client-code.html","title":"向客户端代码传递数据","lang":"zh-CN","frontmatter":{"description":"向客户端代码传递数据 我们知道，VuePress 插件入口和主题入口是在 Node 端处理的，但有时候你可能需要向客户端动态传递数据。例如，你希望在用户传入不同的选项时生成不同的数据。 使用 define Hook 插件 API 提供了一个 Hook 来定义客户端代码中的全局常量。你可以利用它来向客户端传递数据。 首先，通过 define Hook 定...","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/advanced/cookbook/passing-data-to-client-code.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"向客户端代码传递数据"}],["meta",{"property":"og:description","content":"向客户端代码传递数据 我们知道，VuePress 插件入口和主题入口是在 Node 端处理的，但有时候你可能需要向客户端动态传递数据。例如，你希望在用户传入不同的选项时生成不同的数据。 使用 define Hook 插件 API 提供了一个 Hook 来定义客户端代码中的全局常量。你可以利用它来向客户端传递数据。 首先，通过 define Hook 定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T09:33:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-02T09:33:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"向客户端代码传递数据\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-02T09:33:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用 define Hook","slug":"使用-define-hook","link":"#使用-define-hook","children":[]},{"level":2,"title":"写入并加载临时文件","slug":"写入并加载临时文件","link":"#写入并加载临时文件","children":[]}],"git":{"updatedTime":1725269605000,"contributors":[{"name":"yanggw","email":"yanggw@glodon.com","commits":2}]},"autoDesc":true,"filePathRelative":"advanced/cookbook/passing-data-to-client-code.md"}');export{_ as comp,k as data};
