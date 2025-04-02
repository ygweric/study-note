import{_ as e,o as s,c as a,e as t}from"./app-BPhq52BI.js";const n={},o=t(`<h1 id="object-xxx" tabindex="-1"><a class="header-anchor" href="#object-xxx"><span>Object.xxx</span></a></h1><h2 id="object-create" tabindex="-1"><a class="header-anchor" href="#object-create"><span><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create" target="_blank" rel="noopener noreferrer">Object.create()</a></span></a></h2><p><strong><code>Object.create(proto, propertiesObject)</code></strong> 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> person</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#9CDCFE;">  isHuman:</span><span style="color:#569CD6;"> false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#DCDCAA;">  printIntroduction</span><span style="color:#9CDCFE;">:</span><span style="color:#569CD6;"> function</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">\`My name is </span><span style="color:#569CD6;">\${</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">. Am I human? </span><span style="color:#569CD6;">\${</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isHuman</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span><span style="color:#B5CEA8;">000</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> me</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Object</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">create</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">person</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">me</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">__proto__</span><span style="color:#D4D4D4;"> === </span><span style="color:#9CDCFE;">person</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign"><span>Object.assign()</span></a></h2><p><strong><code>Object.assign()</code></strong> 方法将所有<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" target="_blank" rel="noopener noreferrer">可枚举</a>（<code>Object.propertyIsEnumerable()</code> 返回 true）和<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" target="_blank" rel="noopener noreferrer">自有</a>（<code>Object.hasOwnProperty()</code> 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。</p>`,6),r=[o];function c(l,p){return s(),a("div",null,r)}const d=e(n,[["render",c],["__file","Object.xxx.html.vue"]]),D=JSON.parse('{"path":"/interview/code/Object.xxx.html","title":"Object.xxx","lang":"zh-CN","frontmatter":{"description":"Object.xxx Object.create() Object.create(proto, propertiesObject) 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype） Object.assign() Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable(...","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/code/Object.xxx.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Object.xxx"}],["meta",{"property":"og:description","content":"Object.xxx Object.create() Object.create(proto, propertiesObject) 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype） Object.assign() Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable(..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T09:06:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T09:06:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Object.xxx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T09:06:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Object.create()","slug":"object-create","link":"#object-create","children":[]},{"level":2,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[]}],"git":{"updatedTime":1732093606000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/code/Object.xxx.md"}');export{d as comp,D as data};
