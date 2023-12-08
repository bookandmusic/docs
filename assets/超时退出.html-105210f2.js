import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-b2b64365.js";const p={},e=t(`<p>最近在项目中调用第三方接口时候，经常会出现请求超时的情况，或者参数的问题导致调用异代码异常。针对超时异常，查询了python 相关文档，没有并发现完善的包来根据用户自定义<br> 的时间来抛出超时异常的模块。所以自己干脆自己来实现一个自定义的超时异常。</p><h2 id="基于-signal模块实现" tabindex="-1"><a class="header-anchor" href="#基于-signal模块实现" aria-hidden="true">#</a> 基于 signal模块实现</h2><p>signal包负责在Python程序内部处理信号，典型的操作包括预设信号处理函数，暂 停并等待信号，以及定时发出SIGALRM等。要注意，signal包主要是针对UNIX平台(比如Linux, MAC OS)，而Windows内核中由于对信号机制的支持不充分，所以在Windows上的Python不能发挥信号系统的功能。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> functools
<span class="token keyword">import</span> time
<span class="token keyword">import</span> signal


<span class="token keyword">def</span> <span class="token function">time_out</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> callback<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">handler</span><span class="token punctuation">(</span>signum<span class="token punctuation">,</span> frame<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> TimeoutError<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;run </span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string"> timeout&quot;</span></span><span class="token punctuation">)</span>

        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                signal<span class="token punctuation">.</span>signal<span class="token punctuation">(</span>signal<span class="token punctuation">.</span>SIGALRM<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
                signal<span class="token punctuation">.</span>alarm<span class="token punctuation">(</span>interval<span class="token punctuation">)</span>  <span class="token comment"># interval秒后向进程发送SIGALRM信号</span>
                result <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
                signal<span class="token punctuation">.</span>alarm<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 函数在规定时间执行完后关闭alarm闹钟</span>
                <span class="token keyword">return</span> result
            <span class="token keyword">except</span> TimeoutError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
                <span class="token keyword">return</span> callback<span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token keyword">if</span> callback <span class="token keyword">else</span> e

        <span class="token keyword">return</span> wrapper

    <span class="token keyword">return</span> decorator


<span class="token keyword">def</span> <span class="token function">timeout_callback</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@time_out</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> timeout_callback<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">task1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task1 start&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task1 end&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@time_out</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> timeout_callback<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">task2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task2 start&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task2 end&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    task1<span class="token punctuation">(</span><span class="token punctuation">)</span>
    task2<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>task1 start
run task1 timeout
task2 start
task2 end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于子线程阻塞实现" tabindex="-1"><a class="header-anchor" href="#基于子线程阻塞实现" aria-hidden="true">#</a> 基于子线程阻塞实现</h2><p>原理：将要调用的功能函数放入子线程，通过设定主线程的阻塞等待时间，超时则主线程并不会等待子线程的执行。主线程退出，子线程就不存在了。<br> 核心就是在主线程中添加 join()方法，用于等待线程结束。join()的作用是，在子线程完成运行之前，这个子线程的父线程将会被一直阻塞.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> functools
<span class="token keyword">import</span> time
<span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>_target<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>result <span class="token operator">=</span> self<span class="token punctuation">.</span>_target<span class="token punctuation">(</span><span class="token operator">*</span>self<span class="token punctuation">.</span>_args<span class="token punctuation">,</span> <span class="token operator">**</span>self<span class="token punctuation">.</span>_kwargs<span class="token punctuation">)</span>
        <span class="token keyword">finally</span><span class="token punctuation">:</span>
            <span class="token keyword">del</span> self<span class="token punctuation">.</span>_target<span class="token punctuation">,</span> self<span class="token punctuation">.</span>_args<span class="token punctuation">,</span> self<span class="token punctuation">.</span>_kwargs


<span class="token keyword">def</span> <span class="token function">time_out</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> callback<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            t <span class="token operator">=</span> MyThread<span class="token punctuation">(</span>target<span class="token operator">=</span>func<span class="token punctuation">,</span> args<span class="token operator">=</span>args<span class="token punctuation">,</span> kwargs<span class="token operator">=</span>kwargs<span class="token punctuation">)</span>
            t<span class="token punctuation">.</span>setDaemon<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 设置主线程为守护线程，一旦主线程结束，子线程立刻结束</span>
            t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
            t<span class="token punctuation">.</span>join<span class="token punctuation">(</span>interval<span class="token punctuation">)</span>  <span class="token comment"># 主线程阻塞等待interval秒</span>
            <span class="token keyword">if</span> t<span class="token punctuation">.</span>is_alive<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> threading<span class="token punctuation">.</span>Timer<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span>
                                       args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;run </span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string"> timeout&quot;</span></span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> callback <span class="token keyword">else</span> <span class="token boolean">None</span>  <span class="token comment"># 立即执行回调函数</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> t<span class="token punctuation">.</span>result

        <span class="token keyword">return</span> wrapper

    <span class="token keyword">return</span> decorator


<span class="token keyword">def</span> <span class="token function">timeout_callback</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@time_out</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> timeout_callback<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">task1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task1 start&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task1 end&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@time_out</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> timeout_callback<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">task2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task2 start&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task2 end&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    task1<span class="token punctuation">(</span><span class="token punctuation">)</span>
    task2<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>task1 start
run task1 timeout
task2 start
task2 end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于协程gevent实现" tabindex="-1"><a class="header-anchor" href="#基于协程gevent实现" aria-hidden="true">#</a> 基于协程gevent实现</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> functools
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">time_out</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> callback<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment">########## 该部分必选在requests之前导入</span>
            <span class="token keyword">import</span> gevent
            <span class="token keyword">from</span> gevent <span class="token keyword">import</span> monkey
            monkey<span class="token punctuation">.</span>patch_all<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">##########</span>

            <span class="token keyword">try</span><span class="token punctuation">:</span>
                gevent<span class="token punctuation">.</span>with_timeout<span class="token punctuation">(</span>interval<span class="token punctuation">,</span> func<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token keyword">except</span> gevent<span class="token punctuation">.</span>timeout<span class="token punctuation">.</span>Timeout <span class="token keyword">as</span> e<span class="token punctuation">:</span>
                callback<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string"> 执行时间大于 </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">if</span> callback <span class="token keyword">else</span> <span class="token boolean">None</span>

        <span class="token keyword">return</span> wrapper

    <span class="token keyword">return</span> decorator


<span class="token keyword">def</span> <span class="token function">timeout_callback</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@time_out</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> timeout_callback<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">task1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task1 start&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task1 end&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@time_out</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> timeout_callback<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">task2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task2 start&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;task2 end&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    task1<span class="token punctuation">(</span><span class="token punctuation">)</span>
    task2<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>task1 start
task1 执行时间大于 <span class="token number">2</span> seconds
task2 start
task2 end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","超时退出.html.vue"]]);export{r as default};
