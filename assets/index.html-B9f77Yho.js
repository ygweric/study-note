import{_ as e,o as s,c as a,e as t}from"./app-BPhq52BI.js";const n={},o=t(`<h1 id="常用设置" tabindex="-1"><a class="header-anchor" href="#常用设置"><span>常用设置</span></a></h1><h1 id="修改单个仓库作者和邮箱" tabindex="-1"><a class="header-anchor" href="#修改单个仓库作者和邮箱"><span>修改单个仓库作者和邮箱</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> config</span><span style="color:#CE9178;"> user.name</span><span style="color:#CE9178;"> &quot;国wei&quot;</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> config</span><span style="color:#CE9178;"> user.email</span><span style="color:#CE9178;"> &quot;ygweric@gmail.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改默认remote" tabindex="-1"><a class="header-anchor" href="#修改默认remote"><span>修改默认remote</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch</span><span style="color:#569CD6;"> --set-upstream-to</span><span style="color:#CE9178;"> origin/master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="子模块-submodule" tabindex="-1"><a class="header-anchor" href="#子模块-submodule"><span>子模块 submodule</span></a></h2><h3 id="更新、初始化" tabindex="-1"><a class="header-anchor" href="#更新、初始化"><span>更新、初始化</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> submodule</span><span style="color:#CE9178;"> update</span><span style="color:#569CD6;"> --init</span><span style="color:#569CD6;"> --recursive</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> submodule</span><span style="color:#CE9178;"> update</span><span style="color:#569CD6;"> --remote</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[o];function i(r,c){return s(),a("div",null,l)}const d=e(n,[["render",i],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/tools/git/config/","title":"常用设置","lang":"zh-CN","frontmatter":{"description":"常用设置 修改单个仓库作者和邮箱 修改默认remote 子模块 submodule 更新、初始化","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/tools/git/config/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"常用设置"}],["meta",{"property":"og:description","content":"常用设置 修改单个仓库作者和邮箱 修改默认remote 子模块 submodule 更新、初始化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-14T01:52:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-14T01:52:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用设置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-14T01:52:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"修改默认remote","slug":"修改默认remote","link":"#修改默认remote","children":[]},{"level":2,"title":"子模块 submodule","slug":"子模块-submodule","link":"#子模块-submodule","children":[{"level":3,"title":"更新、初始化","slug":"更新、初始化","link":"#更新、初始化","children":[]}]}],"git":{"updatedTime":1726278750000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":4}]},"autoDesc":true,"filePathRelative":"tools/git/config/index.md"}');export{d as comp,u as data};
