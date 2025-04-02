import{_ as s,o as n,c as l,e as a}from"./app-BPhq52BI.js";const p={},o=a(`<h1 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序"><span>归并排序</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://juejin.cn/post/7287418444647546914</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">看了概念和deme，一把搞定，比较复杂烧脑，回头在复习下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> mergeSort</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> &lt;= </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 合并两个“有序”数组为一个“有序数组”</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#DCDCAA;"> merge</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">mid</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">tmpArr</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    //  此时 &quot;left ~ mid -1&quot; 和 &quot; mid + 1 ~ right&quot; 都是排过序的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">    let</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">    let</span><span style="color:#9CDCFE;"> j</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">mid</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">    let</span><span style="color:#9CDCFE;"> k</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // 左右两侧已经排过序的，所以这个while循环，把前面互相交错的数组进行有序合并</span></span>
<span class="line"><span style="color:#C586C0;">    while</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt;= </span><span style="color:#9CDCFE;">mid</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;"> &lt;= </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">      if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] &lt; </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">]) {</span></span>
<span class="line"><span style="color:#9CDCFE;">        tmpArr</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#9CDCFE;">        k</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#9CDCFE;">        i</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#D4D4D4;">      } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        tmpArr</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#9CDCFE;">        k</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#9CDCFE;">        j</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // 前面交错的有序合并后，左侧、右侧如有剩余，肯定比已合并的大，则直接加到最后</span></span>
<span class="line"><span style="color:#C586C0;">    while</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt;= </span><span style="color:#9CDCFE;">mid</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      tmpArr</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#9CDCFE;">      k</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#9CDCFE;">      i</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#C586C0;">    while</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;"> &lt;= </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      tmpArr</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#9CDCFE;">      k</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#9CDCFE;">      j</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // tmpArr 已经合并结束，复制到原数组 nums</span></span>
<span class="line"><span style="color:#569CD6;">    let</span><span style="color:#9CDCFE;"> t</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">    while</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">t</span><span style="color:#D4D4D4;"> &lt;= </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">t</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">tmpArr</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">t</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#9CDCFE;">      t</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 原地排序“left ~ right”之间的数组</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#DCDCAA;"> sort</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">tmpArr</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">      let</span><span style="color:#9CDCFE;"> mid</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Math</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">floor</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">) / </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#DCDCAA;">      sort</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">mid</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">tmpArr</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#DCDCAA;">      sort</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">mid</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">tmpArr</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#DCDCAA;">      merge</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">mid</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">tmpArr</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> tmpArr</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> Array</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#DCDCAA;">  sort</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">tmpArr</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">mergeSort</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">]));</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">mergeSort</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">55</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">363</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">]));</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">mergeSort</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">]));</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">mergeSort</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">]));</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">mergeSort</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">9</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">]));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function D(c,r){return n(),l("div",null,e)}const i=s(p,[["render",D],["__file","归并排序.html.vue"]]),y=JSON.parse('{"path":"/interview/algorithm/%E6%8E%92%E5%BA%8F/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.html","title":"归并排序","lang":"zh-CN","frontmatter":{"description":"归并排序","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E6%8E%92%E5%BA%8F/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"归并排序"}],["meta",{"property":"og:description","content":"归并排序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"归并排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/排序/归并排序/归并排序.md"}');export{i as comp,y as data};
