import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-45b6ee47.js";const e={},p=t(`<h1 id="协程并发" tabindex="-1"><a class="header-anchor" href="#协程并发" aria-hidden="true">#</a> 协程并发</h1><h2 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine" aria-hidden="true">#</a> goroutine</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>在 Go 中，协程（goroutine）是一种轻量级的并发执行单位，允许你在同一个程序中同时执行多个函数，而无需显式地创建多个线程。协程是 Go 并发模型的核心组成部分，它们更加高效地利用了系统资源，使并发编程更加简洁和易于管理。</p><p><strong>协程的特点和优势：</strong></p><ol><li><strong>轻量级：</strong> 协程的创建和销毁开销很小，相比线程，可以创建更多的协程。</li><li><strong>低成本：</strong> 在 Go 中，创建协程的成本远低于创建线程。</li><li><strong>并发执行：</strong> 协程允许多个函数同时执行，但是它们在一个或多个线程上运行，由 Go 运行时调度管理。</li><li><strong>通信通过共享内存：</strong> 协程之间通过共享内存来通信，但是 Go 也提供了通道（channel）作为一种更安全、更强大的通信机制。</li><li><strong>高度抽象：</strong> Go 的并发模型使得编写并发程序变得更加简洁和直观。</li></ol><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><p>演示了如何使用协程并发地下载多个网页内容</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io/ioutil&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">fetchURL</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">,</span> wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 通知 WaitGroup，协程已完成</span>

    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error fetching %s: %s\\n&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    body<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error reading response body: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Fetched %s, Length: %d\\n&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    urls <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token string">&quot;https://www.example.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https://www.google.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https://www.openai.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https://www.wikipedia.org&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> url <span class="token operator">:=</span> <span class="token keyword">range</span> urls <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 增加 WaitGroup 计数器</span>
        <span class="token keyword">go</span> <span class="token function">fetchURL</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token operator">&amp;</span>wg<span class="token punctuation">)</span> <span class="token comment">// 启动协程</span>
    <span class="token punctuation">}</span>

    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 等待所有协程完成</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;All downloads completed.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用 <code>sync.WaitGroup</code>​ 来等待所有协程完成。遍历一组网址，并为每个网址启动一个协程。每个协程负责下载一个网页内容，并在完成时通过 <code>Done()</code>​ 方法通知 <code>WaitGroup</code>​。</p><h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h2><p>管道是Golang在语言级别上提供的goroutine间的通讯方式，我们可以使用channel在多个goroutine之间传递消息。如果说goroutine是Go程序并发的执行体，channel就是它们之间的连接。channel是可以让一个goroutine发送特定值到另一个goroutine的通信机制。</p><p>Golang的并发模型是CSP（Communicating Sequential Processes），提倡通过通信共享内存而不是通过共享内存而实现通信。</p><p>Go语言中的管道（channel）是一种特殊的类型。管道像一个传送带或者队列，总是遵循先入先出（First In First Out）的规则，保证收发数据的顺序。每一个管道都是一个具体类型的导管，也就是声明channel的时候需要为其指定元素类型。</p><h3 id="channel类型" tabindex="-1"><a class="header-anchor" href="#channel类型" aria-hidden="true">#</a> channel类型</h3><p>channel是一种类型，一种引用类型。声明管道类型的格式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明一个传递整型的管道</span>
<span class="token keyword">var</span> ch1 <span class="token keyword">chan</span> <span class="token builtin">int</span>
<span class="token comment">// 声明一个传递布尔类型的管道</span>
<span class="token keyword">var</span> ch2 <span class="token keyword">chan</span> <span class="token builtin">bool</span>
<span class="token comment">// 声明一个传递int切片的管道</span>
<span class="token keyword">var</span> ch3 <span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建channel" tabindex="-1"><a class="header-anchor" href="#创建channel" aria-hidden="true">#</a> 创建channel</h3><p>声明管道后，需要使用make函数初始化之后才能使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> 元素类型<span class="token punctuation">,</span> 容量<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 创建一个能存储10个int类型的数据管道</span>
ch1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个能存储4个bool类型的数据管道</span>
ch2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个能存储3个[]int切片类型的管道</span>
ch3 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="channel操作" tabindex="-1"><a class="header-anchor" href="#channel操作" aria-hidden="true">#</a> channel操作</h3><p>管道有发送，接收和关闭的三个功能</p><p>发送和接收 都使用 &lt;- 符号</p><p>现在我们先使用以下语句定义一个管道：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="发送" tabindex="-1"><a class="header-anchor" href="#发送" aria-hidden="true">#</a> 发送</h4><p>将数据放到管道内，将一个值发送到管道内</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 把10发送到ch中</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取操作" tabindex="-1"><a class="header-anchor" href="#取操作" aria-hidden="true">#</a> 取操作</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>x <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="关闭管道" tabindex="-1"><a class="header-anchor" href="#关闭管道" aria-hidden="true">#</a> 关闭管道.</h4><p>通过调用内置的close函数来关闭管道</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="完整示例" tabindex="-1"><a class="header-anchor" href="#完整示例" aria-hidden="true">#</a> 完整示例</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 创建管道</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// 给管道里面存储数据</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
ch <span class="token operator">&lt;-</span> <span class="token number">21</span>
ch <span class="token operator">&lt;-</span> <span class="token number">32</span>

<span class="token comment">// 获取管道里面的内容</span>
a <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打印出管道的值：&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打印出管道的值：&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span> ch<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;打印出管道的值：&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span> ch<span class="token punctuation">)</span>

<span class="token comment">// 管道的值、容量、长度</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;地址：%v 容量：%v 长度：%v \\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 管道的类型</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T \\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>

<span class="token comment">// 管道阻塞（当没有数据的时候取，会出现阻塞，同时当管道满了，继续存也会）</span>
<span class="token operator">&lt;-</span> ch  <span class="token comment">// 没有数据取，出现阻塞</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span> <span class="token comment">// 管道满了，继续存，也出现阻塞</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>通道的原理：</strong></p><p>通道的底层实现使用了 Go 运行时的调度机制，它们是并发安全的数据结构。当协程发送数据到通道时，数据会被复制到通道中，而不是直接传递指针。当协程从通道接收数据时，数据会从通道中移出。Go 运行时确保在合适的时机执行数据的复制和移动，从而避免了竞争条件和并发冲突。</p><h3 id="goroutine和channel" tabindex="-1"><a class="header-anchor" href="#goroutine和channel" aria-hidden="true">#</a> goroutine和channel</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;math&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">putNum</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">120000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        intChan <span class="token operator">&lt;-</span> i
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">primeNum</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> primeChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> intChan <span class="token punctuation">{</span>
        <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> value<span class="token operator">%</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                flag <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> flag <span class="token punctuation">{</span>
            primeChan <span class="token operator">&lt;-</span> value
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printPrime</span><span class="token punctuation">(</span>primeChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> primeChan <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    primeChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token function">putNum</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token function">primeNum</span><span class="token punctuation">(</span>intChan<span class="token punctuation">,</span> primeChan<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">printPrime</span><span class="token punctuation">(</span>primeChan<span class="token punctuation">,</span> <span class="token operator">&amp;</span>wg<span class="token punctuation">)</span>

    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;主线程执行完毕&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单向管道" tabindex="-1"><a class="header-anchor" href="#单向管道" aria-hidden="true">#</a> 单向管道</h3><p>有时候我们会将管道作为参数在多个任务函数间传递，很多时候我们在不同的任务函数中，使用管道都会对其进行限制，比如限制管道在函数中只能发送或者只能接受</p><blockquote><p>默认的管道是 可读可写</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一种可读可写的管道</span>
<span class="token keyword">var</span> ch <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
<span class="token operator">&lt;-</span> ch

<span class="token comment">// 管道声明为只写管道，只能够写入，不能读</span>
<span class="token keyword">var</span> ch2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
ch2 <span class="token operator">&lt;-</span> <span class="token number">10</span>

<span class="token comment">// 声明一个只读管道</span>
<span class="token keyword">var</span> ch3 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token operator">&lt;-</span> ch3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select多路复用" tabindex="-1"><a class="header-anchor" href="#select多路复用" aria-hidden="true">#</a> Select多路复用</h2><p>在某些场景下我们需要同时从多个通道接收数据。这个时候就可以用到golang中给我们提供的select多路复用。<br> 通常情况通道在接收数据时，如果没有数据可以接收将会发生阻塞。</p><p>select的使用类似于switch 语句，它有一系列case分支和一个默认的分支。每个case会对应一个管道的通信（接收或发送）过程。select会一直等待，直到某个case的通信操作完成时，就会执行case分支对应的语句。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">&lt;-</span>channel1<span class="token punctuation">:</span>
    <span class="token comment">// 执行 channel1 接收操作</span>
<span class="token keyword">case</span> channel2 <span class="token operator">&lt;-</span> value<span class="token punctuation">:</span>
    <span class="token comment">// 执行 channel2 发送操作</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">// 当没有通道操作可以进行时执行的语句</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用select语法模拟一个网络监控程序：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">checkService</span><span class="token punctuation">(</span>serviceName <span class="token builtin">string</span><span class="token punctuation">,</span> url <span class="token builtin">string</span><span class="token punctuation">,</span> statusChan <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            statusChan <span class="token operator">&lt;-</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;[%s] is down&quot;</span><span class="token punctuation">,</span> serviceName<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            statusChan <span class="token operator">&lt;-</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;[%s] is up&quot;</span><span class="token punctuation">,</span> serviceName<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    httpStatusChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    dbStatusChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token function">checkService</span><span class="token punctuation">(</span><span class="token string">&quot;HTTP Server&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">,</span> httpStatusChan<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">checkService</span><span class="token punctuation">(</span><span class="token string">&quot;Database Server&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:5432&quot;</span><span class="token punctuation">,</span> dbStatusChan<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> httpStatus <span class="token operator">:=</span> <span class="token operator">&lt;-</span>httpStatusChan<span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>httpStatus<span class="token punctuation">)</span>
        <span class="token keyword">case</span> dbStatus <span class="token operator">:=</span> <span class="token operator">&lt;-</span>dbStatusChan<span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dbStatus<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tip：使用select来获取数据的时候，不需要关闭chan，不然会出现问题</p></blockquote><h2 id="go中的并发安全和锁" tabindex="-1"><a class="header-anchor" href="#go中的并发安全和锁" aria-hidden="true">#</a> Go中的并发安全和锁</h2><p>在 Go 语言中，并发锁用于控制对共享资源的访问，以避免多个 goroutine 同时修改共享资源而引发的数据竞争和不一致性问题。Go 提供了两种主要类型的并发锁：互斥锁（Mutex）和读写锁（RWMutex）。</p><h3 id="互斥锁-mutex" tabindex="-1"><a class="header-anchor" href="#互斥锁-mutex" aria-hidden="true">#</a> 互斥锁（Mutex）:</h3><p>互斥锁用于在同一时刻只允许一个 goroutine 访问被保护的资源。它实现了基本的互斥机制，确保任何时刻只有一个 goroutine 可以进入临界区。</p><h4 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理：</h4><p>当一个 goroutine 需要访问共享资源时，它会尝试获取互斥锁。如果锁当前未被其他 goroutine 持有，那么该 goroutine 将获得锁并可以安全地执行操作。如果锁已经被其他 goroutine 持有，那么当前 goroutine 将被阻塞，直到锁被释放为止。</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例：</h4><p>下面是一个使用互斥锁的简单示例，展示了如何安全地对共享资源进行操作：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    counter <span class="token builtin">int</span>
    mutex   sync<span class="token punctuation">.</span>Mutex
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    counter<span class="token operator">++</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Counter:&quot;</span><span class="token punctuation">,</span> counter<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>sync.Mutex</code>​ 用于创建一个互斥锁。多个 goroutine 同时调用 <code>increment</code>​ 函数，但由于使用了互斥锁，每次只有一个 goroutine 能够获得锁并修改 <code>counter</code>​ 变量，从而避免了竞争条件。</p><h3 id="读写锁-rwmutex" tabindex="-1"><a class="header-anchor" href="#读写锁-rwmutex" aria-hidden="true">#</a> 读写锁（RWMutex）:</h3><p>读写锁允许多个 goroutine 同时读取共享资源，但只允许一个 goroutine 写入共享资源。这对于读操作远远超过写操作的情况非常有用，因为它可以提高并发性能。</p><h4 id="工作原理-1" tabindex="-1"><a class="header-anchor" href="#工作原理-1" aria-hidden="true">#</a> 工作原理：</h4><p>读写锁维护了两个状态：读锁定和写锁定。多个 goroutine 可以同时获取读锁定，但只有一个 goroutine 可以获取写锁定。当写锁定被持有时，不允许获取读锁定，以避免写入和读取同时进行的情况。</p><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例：</h4><p>下面是一个使用读写锁的示例，演示了读取和写入共享资源时的情况：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    data    <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    rwMutex sync<span class="token punctuation">.</span>RWMutex
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">readData</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rwMutex<span class="token punctuation">.</span><span class="token function">RLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> rwMutex<span class="token punctuation">.</span><span class="token function">RUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Reading:&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">writeData</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rwMutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> rwMutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Writing:&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token function">writeData</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token function">readData</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，多个 goroutine 同时读取 &quot;key1&quot; 的值，而在同一时刻只有一个 goroutine 写入数据。使用 <code>sync.RWMutex</code>​ 读写锁，我们可以实现读取的并发性，同时确保写操作的互斥性。</p>`,70),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","协程并发.html.vue"]]);export{d as default};
