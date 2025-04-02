import{_ as s,o as n,c as l,e as a}from"./app-BPhq52BI.js";const p={},e=a(`<h1 id="lc-31-中-下一个排列" tabindex="-1"><a class="header-anchor" href="#lc-31-中-下一个排列"><span>lc-31-中-下一个排列</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/next-permutation/description/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。</span></span>
<span class="line"><span style="color:#6A9955;">整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。</span></span>
<span class="line"><span style="color:#6A9955;">类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。</span></span>
<span class="line"><span style="color:#6A9955;">而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。</span></span>
<span class="line"><span style="color:#6A9955;">给你一个整数数组 nums ，找出 nums 的下一个排列。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">必须 原地 修改，只允许使用额外常数空间。</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">    1. 看了好几遍题解才明白，自己写了一遍就更清晰了，回头复习，2024年1月25日</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> nextPermutation</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">  // find the first i from right, which nums[i]&lt;nums[i+1]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;"> || </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> === </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#D4D4D4;"> [];</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> === </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> === </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    // console.log([nums[1], nums[0]]);</span></span>
<span class="line"><span style="color:#6A9955;">    // return [nums[1], nums[0]];</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">reverse</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> k</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;"> &gt;= </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">--) {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">] &lt; </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">]) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      i</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">      break</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> == </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    // is the largest one ,reverse it to get the smallest one</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">reverse</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // find the first j from right which nums[i]&lt;nums[j]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> j</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> k</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;"> &gt; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">--) {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">] &gt; </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      j</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">      break</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // switch nums[i] and nums[j]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> tmp</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#9CDCFE;">  nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#9CDCFE;">  nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">tmp</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // revert new array from i to end, to make it asc so it is smallest</span></span>
<span class="line"><span style="color:#6A9955;">//   console.log(nums);</span></span>
<span class="line"><span style="color:#6A9955;">//   console.log(\`i: \${i}, j:\${j}\`);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> [...</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">slice</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">+</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">), ...</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">slice</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">+</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">reverse</span><span style="color:#D4D4D4;">()]</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">nextPermutation</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [1,3,2]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">nextPermutation</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [1,2,3]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">nextPermutation</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [1,5,1]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">nextPermutation</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [2,1]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">nextPermutation</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [2,1,3]</span></span>
<span class="line"><span style="color:#6A9955;">// console.log(nextPermutation(xxxxx)); // xxxxxxx</span></span>
<span class="line"><span style="color:#6A9955;">// console.log(nextPermutation(xxxxx)); // xxxxxxx</span></span>
<span class="line"><span style="color:#6A9955;">// console.log(nextPermutation(xxxxx)); // xxxxxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(r,D){return n(),l("div",null,o)}const i=s(p,[["render",c],["__file","lc-31-中-下一个排列.html.vue"]]),y=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-31-%E4%B8%AD-%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%8E%92%E5%88%97.html","title":"lc-31-中-下一个排列","lang":"zh-CN","frontmatter":{"description":"lc-31-中-下一个排列","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-31-%E4%B8%AD-%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%8E%92%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-31-中-下一个排列"}],["meta",{"property":"og:description","content":"lc-31-中-下一个排列"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-31-中-下一个排列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-31-中-下一个排列.md"}');export{i as comp,y as data};
