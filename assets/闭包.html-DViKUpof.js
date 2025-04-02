import{_ as s,o as n,c as a,e as l}from"./app-BPhq52BI.js";const e={},p=l(`<h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h1><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://segmentfault.com/a/1190000023356598" target="_blank" rel="noopener noreferrer">深入理解JavaScript闭包之什么是闭包</a></li></ul><h2 id="什么是闭包" tabindex="-1"><a class="header-anchor" href="#什么是闭包"><span>什么是闭包</span></a></h2><ul><li>当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行的。</li><li>闭包是指有权访问另一个函数作用域中变量的函数</li></ul><h2 id="常见的一些闭包" tabindex="-1"><a class="header-anchor" href="#常见的一些闭包"><span>常见的一些闭包</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> foo</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#DCDCAA;">    setTimeout</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> timer</span><span style="color:#D4D4D4;">(){</span></span>
<span class="line"><span style="color:#9CDCFE;">        console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }, </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">var</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#DCDCAA;">    setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    }, </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础闭包代码" tabindex="-1"><a class="header-anchor" href="#基础闭包代码"><span>基础闭包代码</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">var</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#DCDCAA;">  setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }, </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">var</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  (</span><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> x</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#DCDCAA;">    setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">      return</span><span style="color:#9CDCFE;"> console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    }, </span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  })(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hook-usestate实现" tabindex="-1"><a class="header-anchor" href="#hook-usestate实现"><span>hook-useState实现</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// let throttleLastFireTimes = []</span></span>
<span class="line"><span style="color:#6A9955;">// function throttle(delay = 500, func) {</span></span>
<span class="line"><span style="color:#6A9955;">//   return (function (index) {</span></span>
<span class="line"><span style="color:#6A9955;">//     return function () {</span></span>
<span class="line"><span style="color:#6A9955;">//       let now = Date.now()</span></span>
<span class="line"><span style="color:#6A9955;">//       if (!throttleLastFireTimes[index] || (now - throttleLastFireTimes[index] &gt; delay)) {</span></span>
<span class="line"><span style="color:#6A9955;">//         throttleLastFireTimes[index] = now</span></span>
<span class="line"><span style="color:#6A9955;">//         func &amp;&amp; func()</span></span>
<span class="line"><span style="color:#6A9955;">//       }</span></span>
<span class="line"><span style="color:#6A9955;">//     }</span></span>
<span class="line"><span style="color:#6A9955;">//   })(throttleLastFireTimes.length)</span></span>
<span class="line"><span style="color:#6A9955;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// let throttleRender = throttle(500, render)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> memorizedData</span><span style="color:#D4D4D4;"> = []</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#9CDCFE;"> index</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> useState</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">initValue</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">  index</span><span style="color:#D4D4D4;">++</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> val</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">memorizedData</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">] || </span><span style="color:#9CDCFE;">initValue</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#DCDCAA;"> setVal</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">newVal</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    memorizedData</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">newVal</span></span>
<span class="line"><span style="color:#6A9955;">    // throttleRender()</span></span>
<span class="line"><span style="color:#DCDCAA;">    render</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">val</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">setVal</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> render</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;">  index</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#D4D4D4;"> [</span><span style="color:#4FC1FF;">age</span><span style="color:#D4D4D4;">, </span><span style="color:#4FC1FF;">setAge</span><span style="color:#D4D4D4;">] = </span><span style="color:#DCDCAA;">useState</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">18</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#D4D4D4;"> [</span><span style="color:#4FC1FF;">price</span><span style="color:#D4D4D4;">, </span><span style="color:#4FC1FF;">setPrice</span><span style="color:#D4D4D4;">] = </span><span style="color:#DCDCAA;">useState</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">\`age: </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">age</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">, price: </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">price</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#DCDCAA;">  setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">    setAge</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;">    setPrice</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">price</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }, </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">render</span><span style="color:#D4D4D4;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hook-useeffect" tabindex="-1"><a class="header-anchor" href="#hook-useeffect"><span>hook-useEffect</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> memorizedData</span><span style="color:#D4D4D4;"> = []</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#9CDCFE;"> index</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> useState</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">initValue</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">  index</span><span style="color:#D4D4D4;">++</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> val</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">memorizedData</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">] || </span><span style="color:#9CDCFE;">initValue</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#DCDCAA;"> setVal</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">newVal</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    memorizedData</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">newVal</span></span>
<span class="line"><span style="color:#DCDCAA;">    render</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">val</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">setVal</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> render</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> age</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">18</span></span>
<span class="line"><span style="color:#DCDCAA;">  useEffect</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">\`age: </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">age</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }, [</span><span style="color:#9CDCFE;">age</span><span style="color:#D4D4D4;">])</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">render</span><span style="color:#D4D4D4;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function c(t,r){return n(),a("div",null,o)}const D=s(e,[["render",c],["__file","闭包.html.vue"]]),d=JSON.parse('{"path":"/interview/code/%E9%97%AD%E5%8C%85.html","title":"闭包","lang":"zh-CN","frontmatter":{"description":"闭包 参考 深入理解JavaScript闭包之什么是闭包 什么是闭包 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行的。 闭包是指有权访问另一个函数作用域中变量的函数 常见的一些闭包 基础闭包代码 hook-useState实现 hook-useEffect","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/code/%E9%97%AD%E5%8C%85.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"闭包"}],["meta",{"property":"og:description","content":"闭包 参考 深入理解JavaScript闭包之什么是闭包 什么是闭包 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行的。 闭包是指有权访问另一个函数作用域中变量的函数 常见的一些闭包 基础闭包代码 hook-useState实现 hook-useEffect"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T09:06:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T09:06:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"闭包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T09:06:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]},{"level":2,"title":"什么是闭包","slug":"什么是闭包","link":"#什么是闭包","children":[]},{"level":2,"title":"常见的一些闭包","slug":"常见的一些闭包","link":"#常见的一些闭包","children":[]},{"level":2,"title":"基础闭包代码","slug":"基础闭包代码","link":"#基础闭包代码","children":[]},{"level":2,"title":"hook-useState实现","slug":"hook-usestate实现","link":"#hook-usestate实现","children":[]},{"level":2,"title":"hook-useEffect","slug":"hook-useeffect","link":"#hook-useeffect","children":[]}],"git":{"updatedTime":1732093606000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/code/闭包.md"}');export{D as comp,d as data};
