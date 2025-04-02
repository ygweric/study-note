import{_ as s,o as n,c as a,e as l}from"./app-BPhq52BI.js";const e={},o=l(`<h1 id="lc-3-中-无重复字符的最长子串" tabindex="-1"><a class="header-anchor" href="#lc-3-中-无重复字符的最长子串"><span>lc-3-中-无重复字符的最长子串</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/</span></span>
<span class="line"><span style="color:#6A9955;">给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">比较简单</span></span>
<span class="line"><span style="color:#6A9955;">双指针，用slice切割字符串</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">官方的解法其实比我的还要多计算几次</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">优化：上一次用了 slice，是js特有的函数，现在尝试用基础的数据类型来做</span></span>
<span class="line"><span style="color:#6A9955;">  这次看了题解，回头还要再练习一次 （</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> lengthOfLongestSubstring</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">lengthOfLongestSubstring</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;abcabcbb&quot;</span><span style="color:#D4D4D4;">)); </span><span style="color:#6A9955;">// 3</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">lengthOfLongestSubstring</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;bbbbb&quot;</span><span style="color:#D4D4D4;">)); </span><span style="color:#6A9955;">// 1</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">lengthOfLongestSubstring</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;pwwkew&quot;</span><span style="color:#D4D4D4;">)); </span><span style="color:#6A9955;">// 3</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">lengthOfLongestSubstring</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;nfpdmpi&quot;</span><span style="color:#D4D4D4;">)); </span><span style="color:#6A9955;">// 5</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">lengthOfLongestSubstring</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;abcdcd&quot;</span><span style="color:#D4D4D4;">)); </span><span style="color:#6A9955;">// 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function t(c,i){return n(),a("div",null,p)}const D=s(e,[["render",t],["__file","lc-3-中-无重复字符的最长子串.html.vue"]]),d=JSON.parse('{"path":"/interview/algorithm/%E6%8E%92%E5%BA%8F/%E6%8E%92%E5%BA%8F_%E5%8F%8C%E6%8C%87%E9%92%88/lc-3-%E4%B8%AD-%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.html","title":"lc-3-中-无重复字符的最长子串","lang":"zh-CN","frontmatter":{"description":"lc-3-中-无重复字符的最长子串","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E6%8E%92%E5%BA%8F/%E6%8E%92%E5%BA%8F_%E5%8F%8C%E6%8C%87%E9%92%88/lc-3-%E4%B8%AD-%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-3-中-无重复字符的最长子串"}],["meta",{"property":"og:description","content":"lc-3-中-无重复字符的最长子串"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-3-中-无重复字符的最长子串\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/排序/排序+双指针/lc-3-中-无重复字符的最长子串.md"}');export{D as comp,d as data};
