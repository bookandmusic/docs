import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-802747a1.js";const p={},e=t(`<h1 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h1><p>Go中没有“类”的概念，Golang中的结构体和其他语言中的类有点相似。和其他面向对象语言中的类相比，Go中的结构体具有更高的扩展性和灵活性。</p><p>Go中的基础数据类型可以装示一些事物的基本属性，但是当我们想表达一个事物的全部或部分属性时，这时候再用单一的基本数据类型就无法满足需求了，Golang提供了一种自定义数据类型，可以封装多个基本数据类型，这种数据类型叫结构体，英文名称struct。也就是我们可以通过struct来定义自己的类型了。</p><h2 id="type关键字" tabindex="-1"><a class="header-anchor" href="#type关键字" aria-hidden="true">#</a> Type关键字</h2><p>Golang中通过type关键词定义一个结构体，需要注意的是，数组和结构体都是值类型</p><h3 id="自定义类型" tabindex="-1"><a class="header-anchor" href="#自定义类型" aria-hidden="true">#</a> 自定义类型</h3><p>在Go语言中有一些基本的数据类型，如string、整型、浮点型、布尔等数据类型，Go语言中可以使用type关键字来定义自定义类型。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> myInt <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码表示：将mylnt定义为int类型，通过type关键字的定义，mylnt就是一种新的类型，它具有int的特性。</p><p>示例：如下所示，我们定义了一个myInt类型和myFn方法类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> myInt <span class="token builtin">int</span>
<span class="token keyword">type</span> myFn <span class="token keyword">func</span><span class="token punctuation">(</span>myInt<span class="token punctuation">,</span> myInt<span class="token punctuation">)</span> myInt

<span class="token keyword">func</span> <span class="token function">fun</span><span class="token punctuation">(</span>x myInt<span class="token punctuation">,</span> y myInt<span class="token punctuation">)</span> myInt <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fn myFn <span class="token operator">=</span> fun
    result <span class="token operator">:=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>     <span class="token comment">// OutPut: main.myFn</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span> <span class="token comment">// OutPut: main.myInt</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>        <span class="token comment">// OutPut: 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h3><p>Golang1.9版本以后添加的新功能</p><p>类型别名规定：TypeAlias只是Type的别名，本质上TypeAlias与Type是同一个类型。就像一个孩子小时候有大名、小名、英文名，但这些名字都指的是他本人</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TypeAlias <span class="token operator">=</span> Type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们之前见过的rune 和 byte 就是类型别名，他们的底层代码如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token builtin">uint8</span>
<span class="token keyword">type</span> <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token builtin">int32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类型别名</strong>与<strong>类型定义</strong>表面上看只有一个等号的差异，我们通过下面的这段代码来理解它们之间的区别。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> myInt <span class="token operator">=</span> <span class="token builtin">int</span>
<span class="token keyword">type</span> myFn <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>myInt<span class="token punctuation">,</span> myInt<span class="token punctuation">)</span> myInt

<span class="token keyword">func</span> <span class="token function">fun</span><span class="token punctuation">(</span>x myInt<span class="token punctuation">,</span> y myInt<span class="token punctuation">)</span> myInt <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fn myFn <span class="token operator">=</span> fun
    result <span class="token operator">:=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>     <span class="token comment">// OutPut: func(int, int) int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span> <span class="token comment">// OutPut: int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>        <span class="token comment">// OutPut: 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​<code>myInt</code>​和<code>myFn</code>​类型只会在代码中存在，编译完成时并不会有<code>MyInt</code>​和<code>myFn</code>​类型。</p><p><strong>总结</strong></p><ol><li>类型定义:<code>type 类型名 类型</code>​ , 自定义类型和原类型是两种不同的类型, <strong>会创建新类型</strong></li><li>类型别名:<code>type 类型名 = 类型</code>​ , 类型别名和原类型一样, <strong>没有创建新类型</strong></li></ol><h2 id="结构体定义和初始化" tabindex="-1"><a class="header-anchor" href="#结构体定义和初始化" aria-hidden="true">#</a> 结构体定义和初始化</h2><p>使用type 和 struct关键字来定义结构体，具体代码格式如下所示：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">/*
定义一个人结构体
*/</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 实例化结构体,得到结构体值</span>
    <span class="token keyword">var</span> person Person
    person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;p1&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span> <span class="token comment">// Output: main.Person{name:&quot;p1&quot;}</span>

    <span class="token comment">// 2. 通过new关键字来实例化结构体，得到结构体地址</span>
    <span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span>
    person2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;p2&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>person2<span class="token punctuation">)</span> <span class="token comment">// Output: main.Person{name:&quot;p2&quot;}</span>

    <span class="token comment">// 3. &amp;对结构体进行取地址操作，相当于对该结构体类型进行了一次new实例化操作</span>
    <span class="token keyword">var</span> person3 <span class="token operator">=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span><span class="token punctuation">}</span>
    person3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;p2&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>person3<span class="token punctuation">)</span> <span class="token comment">// Output: main.Person{name:&quot;p3&quot;}</span>

    <span class="token comment">// 4. 键值对的方式来实例化结构体</span>
    <span class="token keyword">var</span> person4 <span class="token operator">=</span> Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token string">&quot;p4&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> person4<span class="token punctuation">)</span> <span class="token comment">// Output: main.Person{name:&quot;p4&quot;}</span>

    <span class="token comment">// 5. 键值对的方式来实例化结构体,得到结构体地址</span>
    <span class="token keyword">var</span> person5 <span class="token operator">=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token string">&quot;p5&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>person5<span class="token punctuation">)</span> <span class="token comment">// Output: main.Person{name:&quot;p5&quot;}</span>

    <span class="token comment">// 6. 简写结构体里面的key</span>
    <span class="token keyword">var</span> person6 <span class="token operator">=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>
        <span class="token string">&quot;p6&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>person6<span class="token punctuation">)</span> <span class="token comment">// Output: main.Person{name:&quot;p6&quot;}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：结构体首字母可以大写也可以小写，大写表示这个结构体是公有的，在其它的包里面也可以使用，小写表示结构体属于私有的，在其它地方不能使用</p></blockquote><h2 id="结构体方法和接收者" tabindex="-1"><a class="header-anchor" href="#结构体方法和接收者" aria-hidden="true">#</a> 结构体方法和接收者</h2><p>在go语言中，没有类的概念但是可以给类型（结构体，自定义类型）定义方法。所谓方法就是定义了接收者的函数。接收者的概念就类似于其他语言中的this 或者self。</p><p>方法的定义格式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>接收者变量 接收者类型<span class="token punctuation">)</span> 方法名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span><span class="token punctuation">(</span>返回参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    函数体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其中</strong></p><ul><li>接收者变量：接收者中的参数变量名在命名时，官方建议使用接收者类型名的第一个小写字母，而不是self、this之类的命名。例如，Person类型的接收者变量应该命名为p，Connector类型的接收者变量应该命名为c等。、</li><li>接收者类型：接收者类型和参数类似，可以是指针类型和非指针类型。 <ul><li>非指针类型：表示不修改结构体的内容</li><li>指针类型：表示修改结构体中的内容</li></ul></li><li>方法名、参数列表、返回参数：具体格式与函数定义相同</li></ul><p>示例所示：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">/**
定义一个人结构体
*/</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
    sex  <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个结构体方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot; 姓名: &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot; 年龄: &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot; 性别: &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">SetInfo</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">,</span> sex <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>name <span class="token operator">=</span> name
    p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
    p<span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> person <span class="token operator">=</span> Person<span class="token punctuation">{</span>
        <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
        <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token string">&quot;女&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    person<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    person<span class="token punctuation">.</span><span class="token function">SetInfo</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span>
    person<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> 姓名: 张三 年龄: <span class="token number">18</span> 性别: 女
 姓名: 李四 年龄: <span class="token number">18</span> 性别: 男
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，因为结构体是值类型，所以我们修改的时候，传入的指针</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">SetInfo</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">,</span> sex <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>name <span class="token operator">=</span> name
	p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
	p<span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给任意类型添加方法" tabindex="-1"><a class="header-anchor" href="#给任意类型添加方法" aria-hidden="true">#</a> 给任意类型添加方法</h2><p>在Go语言中，接收者的类型可以是任何类型，不仅仅是结构体，任何类型都可以拥有方法。</p><p>举个例子，我们基于内置的int类型使用type关键字可以定义新的自定义类型，然后为我们的自定义类型添加方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> myInt <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m myInt<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;我是自定义类型里面的自定义方法&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a myInt <span class="token operator">=</span> <span class="token number">10</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v %T \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体的匿名字段" tabindex="-1"><a class="header-anchor" href="#结构体的匿名字段" aria-hidden="true">#</a> 结构体的匿名字段</h2><p>结构体允许其成员字段在声明时没有字段名而只有类型，这种没有名字的字段就被称为匿名字段</p><p>匿名字段默认采用类型名作为字段名，结构体要求字段名称必须唯一，因此一个结构体中同种类型的匿名字段只能一个</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">/*
  定义一个人结构体
*/</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span>
    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 结构体的匿名字段</span>
    <span class="token keyword">var</span> person <span class="token operator">=</span> Person<span class="token punctuation">{</span>
        <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
        <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构体的字段类型可以是：基本数据类型，也可以是切片、Map 以及结构体</p><p>如果结构体的字段类型是：指针、slice、和 map 等零值是<code>nil</code>​(即还没有分配空间)的类型</p><p>使用这样的字段，需要先<code>make</code>​，才能使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">/**
定义一个人结构体
*/</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name     <span class="token builtin">string</span>
    age      <span class="token builtin">int</span>
    hobby    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    mapValue <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 结构体的匿名字段</span>
    <span class="token keyword">var</span> person <span class="token operator">=</span> Person<span class="token punctuation">{</span><span class="token punctuation">}</span>
    person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
    person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">10</span>

    <span class="token comment">// 给切片申请内存空间</span>
    person<span class="token punctuation">.</span>hobby <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
    person<span class="token punctuation">.</span>hobby<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;睡觉&quot;</span>
    person<span class="token punctuation">.</span>hobby<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;吃饭&quot;</span>
    person<span class="token punctuation">.</span>hobby<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;打豆豆&quot;</span>

    <span class="token comment">// 给map申请存储空间</span>
    person<span class="token punctuation">.</span>mapValue <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
    person<span class="token punctuation">.</span>mapValue<span class="token punctuation">[</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;北京&quot;</span>
    person<span class="token punctuation">.</span>mapValue<span class="token punctuation">[</span><span class="token string">&quot;phone&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span>

    <span class="token comment">// 加入#打印完整信息</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span> 
    <span class="token comment">// Output: main.Person{name:&quot;张三&quot;, age:10, hobby:[]string{&quot;睡觉&quot;, &quot;吃饭&quot;, &quot;打豆豆&quot;, &quot;&quot;}, mapValue:map[string]string{&quot;address&quot;:&quot;北京&quot;, &quot;phone&quot;:&quot;123456789&quot;}}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体嵌套" tabindex="-1"><a class="header-anchor" href="#结构体嵌套" aria-hidden="true">#</a> 结构体嵌套</h2><p>同时我们还支持结构体的嵌套，如下所示</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 用户结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    userName <span class="token builtin">string</span>
    password <span class="token builtin">string</span>
    sex      <span class="token builtin">string</span>
    age      <span class="token builtin">int</span>
    address  Address <span class="token comment">// User结构体嵌套Address结构体</span>
<span class="token punctuation">}</span>

<span class="token comment">// 收货地址结构体</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name  <span class="token builtin">string</span>
    phone <span class="token builtin">string</span>
    city  <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    user <span class="token operator">:=</span> User<span class="token punctuation">{</span>
        <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;man&quot;</span><span class="token punctuation">,</span>
        <span class="token number">18</span><span class="token punctuation">,</span>
        Address<span class="token punctuation">{</span>
            <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;17311111111&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;北京市&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>
    <span class="token comment">// Output: main.User{userName:&quot;zhangsan&quot;, password:&quot;123456&quot;, sex:&quot;man&quot;, age:18, address:main.Address{name:&quot;张三&quot;, phone:&quot;17311111111&quot;, city:&quot;北京市&quot;}}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体的继承" tabindex="-1"><a class="header-anchor" href="#结构体的继承" aria-hidden="true">#</a> 结构体的继承</h2><p>结构体的继承，其实就类似于结构体的嵌套，只不过使用的是匿名字段</p><p>如下所示，我们定义了两个结构体，分别是Animal 和 Dog，其中每个结构体都有各自的方法，然后通过Dog结构体 继承于 Animal结构体</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 定义父结构体</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    FirstName <span class="token builtin">string</span>
    LastName  <span class="token builtin">string</span>
    Age       <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s.%s的年龄是%d&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>LastName<span class="token punctuation">,</span> p<span class="token punctuation">.</span>FirstName<span class="token punctuation">,</span> p<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义子结构体，嵌套父结构体</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Person <span class="token comment">// 嵌套 Person 结构体</span>
    School <span class="token builtin">string</span>
    Grade  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建子结构体对象</span>
    student <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
        Person<span class="token punctuation">:</span> Person<span class="token punctuation">{</span>
            FirstName<span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
            LastName<span class="token punctuation">:</span>  <span class="token string">&quot;Smith&quot;</span><span class="token punctuation">,</span>
            Age<span class="token punctuation">:</span>       <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        School<span class="token punctuation">:</span> <span class="token string">&quot;ABC School&quot;</span><span class="token punctuation">,</span>
        Grade<span class="token punctuation">:</span>  <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 访问继承的属性</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Student:&quot;</span><span class="token punctuation">,</span> student<span class="token punctuation">.</span>FirstName<span class="token punctuation">,</span> student<span class="token punctuation">.</span>LastName<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Age:&quot;</span><span class="token punctuation">,</span> student<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;School:&quot;</span><span class="token punctuation">,</span> student<span class="token punctuation">.</span>School<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Grade:&quot;</span><span class="token punctuation">,</span> student<span class="token punctuation">.</span>Grade<span class="token punctuation">)</span>

    <span class="token comment">// 调用继承的方法</span>
    student<span class="token punctuation">.</span><span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go中的结构体和json相互转换" tabindex="-1"><a class="header-anchor" href="#go中的结构体和json相互转换" aria-hidden="true">#</a> Go中的结构体和Json相互转换</h2><p>JSON（JavaScript Object Notation）是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。RESTfull Api返回的数据都是json数据。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如要给App或者小程序提供Api接口数据，这个时候就需要涉及到结构体和Json之间的相互转换<br> 序列化是指把结构体数据转化成JSON格式的字符串，反序列化是指把JSON数据转化成Golang中的结构体对象</p><p>Go中的序列化和反序列化主要通过<code>encoding/json</code>​包中的 <code>json.Marshal()</code>​ 和 <code>json.Unmarshal()</code>​</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 定义一个学生结构体，注意结构体的首字母必须大写，代表公有，否则将无法转换</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID     <span class="token builtin">string</span>
    Gender <span class="token builtin">string</span>
    Name   <span class="token builtin">string</span>
    Sno    <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> s1 <span class="token operator">=</span> Student<span class="token punctuation">{</span>
        ID<span class="token punctuation">:</span>     <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
        Gender<span class="token punctuation">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
        Name<span class="token punctuation">:</span>   <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span>
        Sno<span class="token punctuation">:</span>    <span class="token string">&quot;s001&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 结构体转换成Json（返回的是byte类型的切片）</span>
    jsonByte<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
    jsonStr <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>jsonByte<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> jsonStr<span class="token punctuation">)</span>
    <span class="token comment">// Output: {&quot;ID&quot;:&quot;12&quot;,&quot;Gender&quot;:&quot;男&quot;,&quot;Name&quot;:&quot;李四&quot;,&quot;Sno&quot;:&quot;s001&quot;}</span>

    <span class="token comment">// Json字符串转换成结构体</span>
    <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">\`{&quot;ID&quot;:&quot;12&quot;,&quot;Gender&quot;:&quot;男&quot;,&quot;Name&quot;:&quot;李四&quot;,&quot;Sno&quot;:&quot;s001&quot;}\`</span>
    <span class="token keyword">var</span> s2 <span class="token operator">=</span> Student<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 第一个是需要传入byte类型的数据，第二参数需要传入转换的地址</span>
    err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;转换失败 \\n&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v \\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
        <span class="token comment">// Output: main.Student{ID:&quot;12&quot;, Gender:&quot;男&quot;, Name:&quot;李四&quot;, Sno:&quot;s001&quot;}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>想要实现结构体转换成字符串，必须保证结构体中的字段是公有的，也就是首字母必须是大写的，这样才能够实现结构体 到 Json字符串的转换。</p></blockquote><h2 id="结构体标签tag" tabindex="-1"><a class="header-anchor" href="#结构体标签tag" aria-hidden="true">#</a> 结构体标签Tag</h2><p>Tag是结构体的元信息，可以在运行的时候通过反射的机制读取出来。Tag在结构体字段的后方定义，由一对反引号包裹起来，具体的格式如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>key1：<span class="token string">&quot;value1&quot;</span> key2：<span class="token string">&quot;value2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结构体tag由一个或多个键值对组成。键与值使用冒号分隔，值用双引号括起来。</p><p>同一个结构体字段可以设置多个键值对tag，不同的键值对之间使用空格分隔。</p><p>如下所示，我们通过tag标签，来转换字符串的key</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;encoding/xml&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name    <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot; xml:&quot;full_name&quot;\`</span>
    Age     <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age&quot; xml:&quot;age&quot;\`</span>
    Country <span class="token builtin">string</span> <span class="token string">\`json:&quot;country&quot; xml:&quot;birth_country&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// JSON 序列化</span>
    p <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span>    <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
        Age<span class="token punctuation">:</span>     <span class="token number">30</span><span class="token punctuation">,</span>
        Country<span class="token punctuation">:</span> <span class="token string">&quot;USA&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// JSON 序列化</span>
    jsonData<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">MarshalIndent</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;    &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;JSON Marshal Error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;JSON Data:&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// JSON 反序列化</span>
    <span class="token keyword">var</span> p2 Person
    err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">,</span> <span class="token operator">&amp;</span>p2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;JSON Unmarshal Error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;JSON Unmarshaled Data: %+v\\n\\n&quot;</span><span class="token punctuation">,</span> p2<span class="token punctuation">)</span>

    <span class="token comment">// XML 序列化</span>
    xmlData<span class="token punctuation">,</span> err <span class="token operator">:=</span> xml<span class="token punctuation">.</span><span class="token function">MarshalIndent</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;    &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;XML Marshal Error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;XML Data:&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>xmlData<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// XML 反序列化</span>
    <span class="token keyword">var</span> p3 Person
    err <span class="token operator">=</span> xml<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>xmlData<span class="token punctuation">,</span> <span class="token operator">&amp;</span>p3<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;XML Unmarshal Error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;XML Unmarshaled Data: %+v\\n&quot;</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先定义了 <code>Person</code>​ 结构体，然后分别进行了 JSON 和 XML 的序列化和反序列化操作。</p><p>输出结果：</p><div class="language-plaintext line-numbers-mode" data-ext="plaintext"><pre class="language-plaintext"><code>JSON Data:
{
    &quot;name&quot;: &quot;Alice&quot;,
    &quot;age&quot;: 30,
    &quot;country&quot;: &quot;USA&quot;
}
JSON Unmarshaled Data: {Name:Alice Age:30 Country:USA}

XML Data:
&lt;Person&gt;
    &lt;full_name&gt;Alice&lt;/full_name&gt;
    &lt;age&gt;30&lt;/age&gt;
    &lt;birth_country&gt;USA&lt;/birth_country&gt;
&lt;/Person&gt;
XML Unmarshaled Data: {Name:Alice Age:30 Country:USA}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>‍</p>`,75),o=[e];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","结构体.html.vue"]]);export{d as default};
