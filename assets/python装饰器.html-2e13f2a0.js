import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-3c21af73.js";const t={},p=e(`<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="返回函数" tabindex="-1"><a class="header-anchor" href="#返回函数" aria-hidden="true">#</a> 返回函数</h3><blockquote><p><code>python</code>的常识，函数和其他任何东西一样，都是对象。这意味着可以将<code>函数</code>当做<code>实参</code>传递给函数，或者在函数中将<code>函数</code>作为<code>返回值</code>返回。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">lazy_sum</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        ax <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> n <span class="token keyword">in</span> args<span class="token punctuation">:</span>
            ax <span class="token operator">=</span> ax <span class="token operator">+</span> n
        <span class="token keyword">return</span> ax
    <span class="token keyword">return</span> <span class="token builtin">sum</span>
f <span class="token operator">=</span> lazy_sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
f<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><p>闭包是“返回函数”的一个典型应用</p><p>闭包的定义：</p><blockquote><ul><li>在一个外函数(<code>outer</code>)中定义了一个内函数(<code>inner</code>)</li><li>内函数里运用了外函数的临时变量</li><li>并且外函数的返回值是内函数的引用</li></ul></blockquote><p>闭包的使用，可以隐藏内部函数的工作细节，只给外部使用者提供一个可以执行的内部函数的引用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#闭包函数的实例</span>
  <span class="token comment"># outer是外部函数 a和b都是外函数的临时变量</span>
  <span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span><span class="token punctuation">:</span>
    b <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># inner是内函数</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>  <span class="token comment">#在内函数中 用到了外函数的临时变量</span>
    <span class="token keyword">return</span> inner  <span class="token comment"># 外函数的返回值是内函数的引用</span>

  <span class="token comment"># 在这里我们调用外函数传入参数5</span>
  <span class="token comment">#此时外函数两个临时变量 a是5 b是10 ，并创建了内函数，然后把内函数的引用返回存给了demo</span>
  <span class="token comment"># 外函数结束的时候发现内部函数将会用到自己的临时变量，这两个临时变量就不会释放，会绑定给这个内部函数</span>
  demo <span class="token operator">=</span> outer<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

  <span class="token comment"># 我们调用内部函数，看一看内部函数是不是能使用外部函数的临时变量</span>
  <span class="token comment"># demo存了外函数的返回值，也就是inner函数的引用，这里相当于执行inner函数</span>
  demo<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>inner</code>函数修改<code>outer</code>函数变量</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  i <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">def</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
     <span class="token keyword">nonlocal</span> i <span class="token comment"># 指定外部函数的局部变量</span>
     i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
     <span class="token keyword">return</span> i
  <span class="token keyword">return</span> counter

counterA <span class="token operator">=</span> createCounter<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>counterA<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> counterA<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> counterA<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> counterA<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> counterA<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1 2 3 4 5</span>
counterB <span class="token operator">=</span> createCounter<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span>counterB<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> counterB<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> counterB<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> counterB<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;测试通过!&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;测试失败!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器介绍" tabindex="-1"><a class="header-anchor" href="#装饰器介绍" aria-hidden="true">#</a> 装饰器介绍</h2><p>要了解python中<code>@</code>装饰器的作用，首先要记住这么几点：</p><blockquote><p>装饰器符号<code>@</code>属于语法糖</p></blockquote><p>什么意思呢？</p><ul><li>就是说，我不按照<code>@</code>装饰器的语法要求来写，而是按照一般<code>python</code>的语法要求来写完全可以。</li><li>那么用<code>@</code>装饰器的格式来写的目的就是为了书写简单方便</li></ul><p><strong>注意：装饰器是用于拓展已有函数功能的一种函数，这个函数的特殊之处在于它的返回值也是一个函数，实际上就是利用闭包语法实现的。</strong></p><h2 id="装饰器语法" tabindex="-1"><a class="header-anchor" href="#装饰器语法" aria-hidden="true">#</a> 装饰器语法</h2><p>装饰器的作用是什么呢？ 简单的理解就是：装饰原有的函数。什么意思呢？</p><p>比如有一个函数<code>func(a, b)</code>，它的功能是求<code>a</code>,<code>b</code>的差值</p><p>现在有一个新需求，就是想对函数功能再装饰下，求完差值后再取绝对值，但是不能能修改原有函数，这时候就需要装饰器装饰函数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
函数闭包实现求差值之后，再求绝对值
&quot;&quot;&quot;</span>
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a<span class="token operator">-</span> b

<span class="token keyword">def</span> <span class="token function">abs_num</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> func<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
    <span class="token keyword">return</span> inner

<span class="token decorator annotation punctuation">@abs_num</span>
func<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当<code>abs_num</code>装饰函数<code>func</code>时，类似于将函数<code>func</code>作为参数传给<code>abs_num</code>,并将返回值即内层函数(<code>inner</code>)名重新赋值给变量<code>func</code></li><li>当调用函数<code>func</code>时，实质是调用内层函数<code>inner</code>，在内层函数中执行<code>func</code>函数，即最原始的函数<code>func</code></li></ul><h2 id="装饰器分类" tabindex="-1"><a class="header-anchor" href="#装饰器分类" aria-hidden="true">#</a> 装饰器分类</h2><h3 id="被装饰函数有参数" tabindex="-1"><a class="header-anchor" href="#被装饰函数有参数" aria-hidden="true">#</a> 被装饰函数有参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
        func<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>  <span class="token comment"># 新版的 func  才是 原来的 add</span>

    <span class="token keyword">return</span> inner


<span class="token decorator annotation punctuation">@outer</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span>


add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 新版的 add  是 内层 inner</span>

<span class="token comment"># add(1, 2)   ====&gt;  inner(1, 2)  ====&gt;  func(1, 2)  ===&gt; 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>被装饰函数 有参数，<code>inner</code>和 <code>func ​</code>需要同样的参数</p></blockquote><h3 id="被装饰的函数有不定长参数" tabindex="-1"><a class="header-anchor" href="#被装饰的函数有不定长参数" aria-hidden="true">#</a> 被装饰的函数有不定长参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">set_func</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">call_func</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        
        <span class="token comment"># func(args, kwargs),此时得到的是元组和字典</span>
        <span class="token comment"># func(*args, **kwargs),此时则是把元素拆包为单个数值和键值对</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">return</span> call_func

<span class="token decorator annotation punctuation">@set_func</span>
<span class="token keyword">def</span> <span class="token function">s</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> args<span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span>


s<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> d<span class="token operator">=</span><span class="token number">56</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>形参 <ul><li><code>*args</code>：接收多余的参数，得到元组(args)</li><li><code>**kwargs</code>:接收多余的关键字参数，得到字典(kwargs)</li></ul></li><li>实参 <ul><li><code>*args</code>：对元组(args)进行拆包，得到单个数值</li><li><code>**kwargs</code>：对字典(kwargs)拆包，得到单个的键值对</li></ul></li></ul><h3 id="被装饰函数有返回值" tabindex="-1"><a class="header-anchor" href="#被装饰函数有返回值" aria-hidden="true">#</a> 被装饰函数有返回值</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>

        r <span class="token operator">=</span> func<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>  <span class="token comment"># 装饰器装饰之后， func才是真正的add求和函数</span>
        
        r <span class="token operator">+=</span> <span class="token number">10</span>  <span class="token comment"># 将两数之和再加 10</span>
        
        <span class="token keyword">return</span> r

    <span class="token keyword">return</span> inner


<span class="token decorator annotation punctuation">@outer</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y


<span class="token comment"># 在装饰器中 对函数的执行结果 加10 处理</span>
r <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>  <span class="token comment"># add实际是inner</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>被装饰函数有返回值， <code>inner</code>需要将 <code>func</code> 的结果 返回</p></blockquote><h3 id="多个装饰器装饰函数" tabindex="-1"><a class="header-anchor" href="#多个装饰器装饰函数" aria-hidden="true">#</a> 多个装饰器装饰函数</h3><ul><li>多个装饰器装饰同一个函数，装饰顺序和执行顺序正好相反</li><li>装饰器函数的执行顺序和装饰器的顺序有关</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">set_func1</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这是测试1...&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">call_func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这是装饰器1...&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> call_func1


<span class="token keyword">def</span> <span class="token function">set_func2</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这是测试2...&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">call_func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这是装饰器2...&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> call_func2


<span class="token decorator annotation punctuation">@set_func1</span>
<span class="token decorator annotation punctuation">@set_func2</span>
<span class="token keyword">def</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello...&quot;</span><span class="token punctuation">)</span>


s<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>代码从上到下，依次执行，同时装饰器是用来装饰函数的</p><ul><li><p>执行到装饰器set_func1时，无法装饰，先跳过</p></li><li><p>执行装饰器set_func2时，装饰原始函数s，</p><ul><li>先执行set_func2,输出&quot;这是测试2...&quot;，</li><li>然后得到s = call_func2(s)，此时的s是原始函数s</li></ul></li><li><p>然后装饰器set_func1装饰新得到的函数s = call_func2(s)</p><ul><li>先执行set_func1,输出&quot;这是测试1...&quot;</li><li>然后得到s = call_func1(s)，此时的s是新得到的函数s = call_func2(s)</li></ul></li><li><p>最后得到函数s = call_func1(call_func(s))</p></li><li><p>最后执行函数s</p><ul><li>先执行call_func1,输出&quot;这是装饰器1...&quot;</li><li>再执行call_func2,输出&quot;这是装饰器2...&quot;</li><li>最后执行原始函数s，输出&quot;hello...&quot;</li></ul></li></ul></li></ul><h3 id="装饰器带参" tabindex="-1"><a class="header-anchor" href="#装饰器带参" aria-hidden="true">#</a> 装饰器带参</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">set_pars</span><span class="token punctuation">(</span>pars<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">set_func</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">call_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;這是測試級別%d&quot;</span> <span class="token operator">%</span> pars<span class="token punctuation">)</span>
            <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> call_func
    <span class="token keyword">return</span> set_func

<span class="token decorator annotation punctuation">@set_pars</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># 装饰分两步</span>
<span class="token keyword">def</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello...&quot;</span><span class="token punctuation">)</span>

s<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>装饰器带参时，装饰函数过程分两步： <ul><li>将参数传给函数set_pars，进行执行</li><li>将函数返回结果作为函数s的装饰器进行装饰</li></ul></li></ul><h3 id="类作为装饰器" tabindex="-1"><a class="header-anchor" href="#类作为装饰器" aria-hidden="true">#</a> 类作为装饰器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>func <span class="token operator">=</span> func

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>  
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        魔法方法__call__可以将对象设置为可调用对象（callable）,允许一个类的实例像函数一样被调用 
        &#39;&#39;&#39;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这是类装饰器...&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@Test</span>  <span class="token comment"># s = Test(s)</span>
<span class="token keyword">def</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello python...&quot;</span><span class="token punctuation">)</span>

s<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>自定义的函数、内置函数和类都属于可调用对象，但凡是可以把一对括号()应用到某个对象身上都可称之为可调用对象</li><li>判断对象是否为可调用对象可以用函数 callable</li><li>如果在类中实现了 <code>__call__</code> 方法，那么实例对象也将成为一个可调用对象</li></ul><h3 id="装饰类的装饰器" tabindex="-1"><a class="header-anchor" href="#装饰类的装饰器" aria-hidden="true">#</a> 装饰类的装饰器</h3><h4 id="装饰类方法" tabindex="-1"><a class="header-anchor" href="#装饰类方法" aria-hidden="true">#</a> 装饰类方法</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">godme</span><span class="token punctuation">(</span>fun<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__godme</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;before&#39;</span><span class="token punctuation">)</span>
        fun<span class="token punctuation">(</span>self<span class="token punctuation">,</span>message<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;after&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> __godme
 
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">show</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@godme</span>
    <span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
 
person <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token string">&#39;happy&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时装饰器和一般的函数装饰器类似，只是多了一个参数：<code>self</code>， 并且<code>self</code>可以调用实例对象的属性和方法</p><h4 id="装饰类" tabindex="-1"><a class="header-anchor" href="#装饰类" aria-hidden="true">#</a> 装饰类</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">singleton</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get_instance</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token string">&#39;__instance&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token builtin">setattr</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token string">&#39;__instance&#39;</span><span class="token punctuation">,</span> cls<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token string">&#39;__instance&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> get_instance


<span class="token decorator annotation punctuation">@singleton</span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>a <span class="token operator">=</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实此时和普通的装饰函数的用法类似，就是将cls作为参数，传递给装饰器即可。</p>`,51),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","python装饰器.html.vue"]]);export{r as default};
