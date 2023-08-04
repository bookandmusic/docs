import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-5fd09ffe.js";const p={},t=e(`<p>Python中已经有了threading模块，为什么还需要线程池呢，线程池又是什么东西呢？</p><p>在爬虫案例中，需要控制同时爬取的线程数，例子中创建了20个线程，而同时只允许3个线程在运行，但是20个线程都需要创建和销毁，线程的创建是需要消耗系统资源的，有没有更好的方案呢？其实只需要三个线程就行了，每个线程各分配一个任务，剩下的任务排队等待，当某个线程完成了任务的时候，排队任务就可以安排给这个线程继续执行。</p><p>这就是线程池的思想（当然没这么简单），但是自己编写线程池很难写的比较完美，还需要考虑复杂情况下的线程同步，很容易发生死锁。从Python3.2开始，标准库为我们提供了<code>concurrent.futures</code>模块，它提供了<code>ThreadPoolExecutor</code>和<code>ProcessPoolExecutor</code>两个类，实现了对<code>threading</code>和<code>multiprocessing</code>的进一步抽象。</p><p>这里主要关注线程池，不仅可以帮我们自动调度线程，还可以做到：</p><ul><li>主线程可以获取某一个线程（或者任务的）的状态，以及返回值。</li><li>当一个线程完成的时候，主线程能够立即知道。</li><li>让多线程和多进程的编码接口一致。</li></ul><h2 id="threadpoolexecutor" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor" aria-hidden="true">#</a> ThreadPoolExecutor</h2><h3 id="submit" tabindex="-1"><a class="header-anchor" href="#submit" aria-hidden="true">#</a> submit</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor
<span class="token keyword">import</span> time


<span class="token comment"># 参数times用来模拟网络请求时间</span>
<span class="token keyword">def</span> <span class="token function">get_html</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>times<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;get page {}s finished&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> times


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    executor <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment"># 通过submit函数提交执行的函数到线程池中，submit函数立即返回,不阻塞</span>
    task1 <span class="token operator">=</span> executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>get_html<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    task2 <span class="token operator">=</span> executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>get_html<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment"># done方法用于判断某个任务是否完成</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>task1<span class="token punctuation">.</span>done<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># cancel方法用于取消某个任务，该任务没有放到线程池中才能被取消</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>task2<span class="token punctuation">.</span>cancel<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>task1<span class="token punctuation">.</span>done<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># result方法可以获取task的执行结果</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>task1<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当创建的线程池大小为2时，即同一时刻允许两个线程运行</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 执行结果</span>
<span class="token boolean">False</span>
<span class="token boolean">False</span>
<span class="token boolean">False</span>
get page 2s finished
get page 3s finished
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当创建的线程池大小为1时，即同一时刻只允许一个线程运行</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 执行结果</span>
<span class="token boolean">False</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
get page 3s finished
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ThreadPoolExecutor</code> 构造实例的时候，传入 <code>max_workers</code> 参数来设置线程中最多能同时运行的线程数目</li><li>使用 <code>submit</code> 函数来提交线程需要执行任务 (函数名和参数) 到线程池中，并返回该任务的句柄(类似于文件操作符)，注意 <strong><code>submit()</code> 不是阻塞的，而是立即返回</strong>。</li><li>通过 <code>submit</code> 函数返回的任务句柄, 能够使用 <code>done()</code> 方法判断该任务是否结束</li><li>使用 <code>result()</code> 方法可以获取任务的返回值，注意：<strong>这个方法是阻塞的</strong></li></ul><h3 id="as-completed" tabindex="-1"><a class="header-anchor" href="#as-completed" aria-hidden="true">#</a> as_completed</h3><p>上面虽然提供了判断任务是否结束的方法，但是不能在主线程中一直判断，有时候我们是得知某个任务结束了，就去获取结果，而不是一直判断每个任务有没有结束。这是就可以使用 <code>as_completed</code> 方法一次取出所有任务的结果。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor<span class="token punctuation">,</span> as_completed
<span class="token keyword">import</span> time


<span class="token comment"># 参数times用来模拟网络请求时间</span>
<span class="token keyword">def</span> <span class="token function">get_html</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>times<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;get page {}s finished&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> times


executor <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
times_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
all_task <span class="token operator">=</span> <span class="token punctuation">[</span>executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>get_html<span class="token punctuation">,</span> times<span class="token punctuation">)</span> <span class="token keyword">for</span> times <span class="token keyword">in</span> times_list<span class="token punctuation">]</span>
<span class="token keyword">for</span> future <span class="token keyword">in</span> as_completed<span class="token punctuation">(</span>all_task<span class="token punctuation">)</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> future<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;in main:get page {}s success&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>执行结果为：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>get page 2s finished
<span class="token keyword">in</span> main<span class="token punctuation">:</span>get page 2s success
get page 3s finished
<span class="token keyword">in</span> main<span class="token punctuation">:</span>get page 3s success
get page 4s finished
<span class="token keyword">in</span> main<span class="token punctuation">:</span>get page 4s success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p>除了上面的 <code>as_completed</code> 方法, 还可以使用 <code>map</code> 方法，但是有一点不同, 使用 <code>map</code> 方法，不需提前使用 <code>submit</code> 方法，<code>map</code> 方法与 python 标准库中的 <code>map</code> 含义相同，都是将序列中的每个元素都执行同一个函数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor<span class="token punctuation">,</span> as_completed
<span class="token keyword">import</span> time


<span class="token comment"># 参数times用来模拟网络请求时间</span>
<span class="token keyword">def</span> <span class="token function">get_html</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>times<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;get page {}s finished&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> times


executor <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
times_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> data <span class="token keyword">in</span> executor<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>get_html<span class="token punctuation">,</span> times_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;in main:get page {}s success&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
executor<span class="token punctuation">.</span>shutdown<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码就是对 <code>times_list</code> 的每个元素都执行 <code>get_html</code> 函数，并分配各线程池。</p><blockquote><p>执行结果为：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>get page 2s finished
get page 3s finished
<span class="token keyword">in</span> main<span class="token punctuation">:</span>get page 3s success
<span class="token keyword">in</span> main<span class="token punctuation">:</span>get page 2s success
get page 4s finished
<span class="token keyword">in</span> main<span class="token punctuation">:</span>get page 4s success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到执行结果与上面的 <code>as_completed</code> 方法的结果不同，输出顺序和 <code>times_list</code> 列表的顺序相同，就算 2s 的任务先执行完成，也会先打印出 <code>3s</code> 的任务先完成，再打印 <code>2s</code> 的任务完成。</p><h3 id="wait" tabindex="-1"><a class="header-anchor" href="#wait" aria-hidden="true">#</a> wait</h3><p><code>wait</code> 方法可以让主线程阻塞, 直到满足设定的要求。wait 方法接收 3 个参数：等待的任务序列、超时时间以及等待条件。等待条件 return_when 默认为 ALL_COMPLETED, 表明要等待所有的任务都结束。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> ALL_COMPLETED<span class="token punctuation">,</span> FIRST_COMPLETED
<span class="token keyword">import</span> time


<span class="token comment"># 参数times用来模拟网络请求时间</span>
<span class="token keyword">def</span> <span class="token function">get_html</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>times<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;get page {}s finished&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> times


executor <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
time_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
all_task <span class="token operator">=</span> <span class="token punctuation">[</span>executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>get_html<span class="token punctuation">,</span> time<span class="token punctuation">)</span> <span class="token keyword">for</span> time <span class="token keyword">in</span> time_list<span class="token punctuation">]</span>
wait<span class="token punctuation">(</span>all_task<span class="token punctuation">,</span> return_when<span class="token operator">=</span>ALL_COMPLETED<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span>

executor<span class="token punctuation">.</span>shutdown<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>执行结果为：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>get page 2s finished
get page 3s finished
get page 4s finished
main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到运行结果中，确实是所有任务都完成了，主线程才打印出 <code>main</code>, 等待条件还可以设置为 <code>FIRST_COMPLETED</code>, 表示第一个任务完成就停止等待。</p><h2 id="processpoolexecutor" tabindex="-1"><a class="header-anchor" href="#processpoolexecutor" aria-hidden="true">#</a> ProcessPoolExecutor</h2><p>ProcessPoolExecutor已经做到让多线程和多进程的编码接口一致，屏蔽底层差异。因此，两者的调用方法基本一致。</p><h2 id="同步与异步" tabindex="-1"><a class="header-anchor" href="#同步与异步" aria-hidden="true">#</a> 同步与异步</h2><blockquote><p>下文以<code>ProcessPoolExecutor</code>为例，说明不同的调用方法产生的执行效率差异；而<code>ThreadPoolExecutor</code>性质相似，不再单独说明</p></blockquote><h3 id="同步等待" tabindex="-1"><a class="header-anchor" href="#同步等待" aria-hidden="true">#</a> 同步等待</h3><p>提交任务，原地等待任务执行结束，拿到任务返回结果，再执行下一行代码，会导致任务串行执行。</p><p>优点：解耦合</p><p>缺点: 速度慢</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ProcessPoolExecutor
<span class="token keyword">import</span> time<span class="token punctuation">,</span> random<span class="token punctuation">,</span> os


<span class="token keyword">def</span> <span class="token function">task</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s %s is running&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> n


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> ProcessPoolExecutor<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 设置进程池内进程数</span>

    s <span class="token operator">=</span> <span class="token number">0</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 同步调用方式，调用和等值</span>
        obj <span class="token operator">=</span> p<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token string">&quot;进程pid：&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 传参方式(任务名，参数),参数使用位置或者关键字参数</span>
        res <span class="token operator">=</span> obj<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span>
        s <span class="token operator">+=</span> res
    p<span class="token punctuation">.</span>shutdown<span class="token punctuation">(</span>wait<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 关闭进程池的入口，等待池内任务运行结束</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">,</span> s<span class="token punctuation">,</span> <span class="token string">&quot;主&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>执行结果为：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>进程pid： <span class="token number">38873</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38874</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38875</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38876</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38873</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38874</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38875</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38876</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38873</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">38874</span> <span class="token keyword">is</span> running
<span class="token number">20.03743004798889</span> <span class="token number">20</span> 主
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步回调" tabindex="-1"><a class="header-anchor" href="#异步回调" aria-hidden="true">#</a> 异步回调</h3><p>缺点：存在耦合</p><p>优点：速度快</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ProcessPoolExecutor
<span class="token keyword">import</span> time<span class="token punctuation">,</span> random<span class="token punctuation">,</span> os


<span class="token keyword">def</span> <span class="token function">task</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s %s is running&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> n


<span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>future<span class="token punctuation">)</span><span class="token punctuation">:</span>
    results<span class="token punctuation">.</span>append<span class="token punctuation">(</span>future<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> ProcessPoolExecutor<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 设置进程池内进程数</span>
    results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        obj <span class="token operator">=</span> p<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token string">&quot;进程pid：&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 传参方式(任务名，参数),参数使用位置或者关键字参数</span>
        obj<span class="token punctuation">.</span>add_done_callback<span class="token punctuation">(</span>parse<span class="token punctuation">)</span>  <span class="token comment"># 执行结束，异步执行回调函数</span>
    p<span class="token punctuation">.</span>shutdown<span class="token punctuation">(</span>wait<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 关闭进程池的入口，等待池内任务运行结束</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;主&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>执行结果为：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
进程pid： <span class="token number">39061</span> <span class="token keyword">is</span> running
<span class="token number">7.007356882095337</span> <span class="token number">23</span> 主
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当然， 在多任务的执行过程中，往往使用<code>map</code>函数会更加方便</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ProcessPoolExecutor
<span class="token keyword">import</span> time<span class="token punctuation">,</span> random<span class="token punctuation">,</span> os


<span class="token keyword">def</span> <span class="token function">task</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s %s is running&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> n


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> ProcessPoolExecutor<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">as</span> p<span class="token punctuation">:</span>  <span class="token comment"># 使用上下文管理器，等待池内任务运行结束，自动关闭进程池</span>
        obj <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;进程pid： &quot;</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;主&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>执行结果为：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>进程pid：  <span class="token number">39151</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39149</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39150</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39149</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39152</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39150</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39149</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39152</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39151</span> <span class="token keyword">is</span> running
进程pid：  <span class="token number">39150</span> <span class="token keyword">is</span> running
<span class="token number">4.018141269683838</span> <span class="token number">15</span> 主
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ol><li><p>线程不是越多越好，会涉及 cpu 上下文的切换（会把上一次的记录保存）。</p></li><li><p>进程比线程消耗资源，进程相当于一个工厂，工厂里有很多人，里面的人共同享受着福利资源，，一个进程里默认只有一个主线程，比如：开启程序是进程，里面执行的是线程，线程只是一个进程创建多个人同时去工作。</p></li><li><p>线程里有 GIL 全局解锁器：不允许 cpu 调度</p></li><li><p>计算密度型适用于多进程</p></li><li><p>线程：线程是计算机中工作的最小单元</p></li><li><p>进程：默认有主线程 (帮工作) 可以多线程共存</p></li><li><p>协程：一个线程，一个进程做多个任务, 使用进程中一个线程去做多个任务，微线程</p></li><li><p>GIL 全局解释器锁：保证同一时刻只有一个线程被 cpu 调度</p></li></ol>`,54),o=[t];function i(c,l){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","线程池和进程池.html.vue"]]);export{r as default};
