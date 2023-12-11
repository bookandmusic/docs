import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-802747a1.js";const t={},p=e(`<h1 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h1><p>流程控制是每种编程语言控制逻辑走向和执行次序的重要部分，流程控制可以说是一门语言的“经脉&quot;</p><p>Go 语言中最常用的流程控制有if和for，而switch和goto主要是为了简化代码、降低重复代码而生的结构，属于扩展类的流程控制。</p><h2 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h2><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> <strong>if-else</strong></h3><p>条件语句用于根据给定的条件来执行不同的代码块。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    age <span class="token operator">:=</span> <span class="token number">18</span>
    <span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;You are an adult.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;You are a minor.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if的另外一种写法，区别是 <strong>age是局部变量</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> age <span class="token operator">:=</span> <span class="token number">18</span><span class="token punctuation">;</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;You are an adult.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;You are a minor.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> <strong>switch</strong></h3><p>​<code>switch</code>​ 语句根据表达式的值来执行不同的分支,同时一个分支可以有多个值。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> day <span class="token operator">:=</span> <span class="token string">&quot;Wednesday&quot;</span><span class="token punctuation">;</span> day <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;Monday&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;It&#39;s the beginning of the week.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">&quot;Friday&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Saturday&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;It&#39;s the end of the week.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;It&#39;s a regular day.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>tip</strong>：break可以不写，也能够跳出case，而不会执行其它的分支。</p></blockquote><p>​<code>fallthrough</code>​ 用于控制 <code>switch</code>​ 语句中的分支穿透行为。当在一个 <code>case</code>​ 分支中使用了 <code>fallthrough</code>​ 关键字时，程序会继续执行下一个 <code>case</code>​ 分支，而不会像通常情况下自动跳出 <code>switch</code>​ 语句。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num <span class="token operator">:=</span> <span class="token number">2</span>

    <span class="token keyword">switch</span> num <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">fallthrough</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Two&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">fallthrough</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Three&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Other&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​<code>fallthrought</code>​ 只能穿透紧挨着的一层，不会一直穿透，但是如果每一层都写的话，就会导致每一层都进行穿透</p><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> <strong>循环语句</strong></h2><p>循环语句允许你多次执行一段代码，可以用于遍历集合、执行重复操作等。</p><p>Go语言中的所有循环类型均可使用<code>for</code>​关键字来完成</p><ul><li>​<code>break</code>​ 用于退出当前循环。</li><li>​<code>continue</code>​ 用于跳过当前循环迭代，继续下一次迭代。</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">3</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">4</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>for</code>​ 关键字创建一个无限循环，需要在循环体内使用 <code>break</code>​ 或其他条件(<code>return</code>​、<code>goto</code>​、<code>pantic</code>​)来终止循环。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Infinite loop&quot;</span><span class="token punctuation">)</span>
        count<span class="token operator">++</span>
        <span class="token keyword">if</span> count <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>标签是一个标识符，用于标记代码中的特定位置</p></blockquote><p>在多层循环中，如果你想要在内层循环中使用 <code>break</code>​ 语句来直接结束所有循环，可以借助标签（label）来实现这个目标。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    outerLoop<span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Outer loop iteration: %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;    Inner loop iteration: %d\\n&quot;</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
      
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
                <span class="token comment">// 使用标签和 break 结束所有循环</span>
                <span class="token keyword">break</span> outerLoop
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，还可以借助goto实现这个目标，<strong>但是要小心使用，确保代码的可读性和可维护性</strong>。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Outer loop iteration: %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;    Inner loop iteration: %d\\n&quot;</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>

            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
                <span class="token keyword">goto</span> endLoop
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

endLoop<span class="token punctuation">:</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;All loops ended.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>‍</p>`,29),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","流程控制.html.vue"]]);export{r as default};
