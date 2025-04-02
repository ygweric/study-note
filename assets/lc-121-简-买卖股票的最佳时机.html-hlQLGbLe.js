import{_ as s,o as n,c as a,e as l}from"./app-BPhq52BI.js";const e={},p=l(`<h1 id="lc-121-简-买卖股票的最佳时机" tabindex="-1"><a class="header-anchor" href="#lc-121-简-买卖股票的最佳时机"><span>lc-121-简-买卖股票的最佳时机</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/best-time-to-buy-and-sell-stock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：[7,1,5,3,6,4]</span></span>
<span class="line"><span style="color:#6A9955;">输出：5</span></span>
<span class="line"><span style="color:#6A9955;">解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。</span></span>
<span class="line"><span style="color:#6A9955;">     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。</span></span>
<span class="line"><span style="color:#6A9955;">示例 2：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：prices = [7,6,4,3,1]</span></span>
<span class="line"><span style="color:#6A9955;">输出：0</span></span>
<span class="line"><span style="color:#6A9955;">解释：在这种情况下, 没有交易完成, 所以最大利润为 0。</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> maxProfit</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">prices</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;"> // todo 毫无头绪</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">maxProfit</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// 5</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">maxProfit</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// 0</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">maxProfit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">xxxx</span><span style="color:#D4D4D4;">)); </span><span style="color:#6A9955;">// xxxx</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">maxProfit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">xxxx</span><span style="color:#D4D4D4;">)); </span><span style="color:#6A9955;">// xxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,t){return n(),a("div",null,o)}const D=s(e,[["render",c],["__file","lc-121-简-买卖股票的最佳时机.html.vue"]]),d=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-121-%E7%AE%80-%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html","title":"lc-121-简-买卖股票的最佳时机","lang":"zh-CN","frontmatter":{"description":"lc-121-简-买卖股票的最佳时机","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-121-%E7%AE%80-%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-121-简-买卖股票的最佳时机"}],["meta",{"property":"og:description","content":"lc-121-简-买卖股票的最佳时机"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-121-简-买卖股票的最佳时机\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-121-简-买卖股票的最佳时机.md"}');export{D as comp,d as data};
