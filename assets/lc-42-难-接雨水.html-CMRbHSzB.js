import{_ as s,o as n,c as a,e as l}from"./app-BPhq52BI.js";const e={},o=l(`<h1 id="lc-42-难-接雨水" tabindex="-1"><a class="header-anchor" href="#lc-42-难-接雨水"><span>lc-42-难-接雨水</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/trapping-rain-water/description/</span></span>
<span class="line"><span style="color:#6A9955;">给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> trap</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">height</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">//todo</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">trap</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// 6</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">trap</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// 9</span></span>
<span class="line"><span style="color:#6A9955;">// console.log(trap(xxxxxxx)); // xxxxxxxx</span></span>
<span class="line"><span style="color:#6A9955;">// console.log(trap(xxxxxxx)); // xxxxxxxx</span></span>
<span class="line"><span style="color:#6A9955;">// console.log(trap(xxxxxxx)); // xxxxxxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function t(c,r){return n(),a("div",null,p)}const D=s(e,[["render",t],["__file","lc-42-难-接雨水.html.vue"]]),y=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-42-%E9%9A%BE-%E6%8E%A5%E9%9B%A8%E6%B0%B4.html","title":"lc-42-难-接雨水","lang":"zh-CN","frontmatter":{"description":"lc-42-难-接雨水","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-42-%E9%9A%BE-%E6%8E%A5%E9%9B%A8%E6%B0%B4.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-42-难-接雨水"}],["meta",{"property":"og:description","content":"lc-42-难-接雨水"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-42-难-接雨水\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-42-难-接雨水.md"}');export{D as comp,y as data};
