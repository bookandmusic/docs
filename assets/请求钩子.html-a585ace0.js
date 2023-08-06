import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-8955ab6e.js";const t={},p=e(`<h1 id="请求钩子" tabindex="-1"><a class="header-anchor" href="#请求钩子" aria-hidden="true">#</a> 请求钩子</h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><blockquote><p>什么是请求钩子？</p></blockquote><p>在客户端和服务器交互的过程中，有些准备工作或扫尾工作需要统一处理，为了让每个视图函数避免编写重复功能的代码，<code>flask</code>提供了统一的接口可以添加这些处理函数，即<strong>请求钩子</strong>。</p><p><code>flask</code>的请求钩子类似于<code>Django</code>的中间件, <code>flask</code>的请求钩子分为四种, 如下所示:</p><ul><li><code>before_first_request</code>: 请求处理前执行, 只执行一次</li><li><code>before_request</code>: 请求处理前执行, 每次请求处理前都会执行</li><li><code>after_request</code>: 请求处理后执行, 但其是在请求无异常的基础上执行的, 该钩子接受一个参数为响应对象, 并且钩子函数最后需要将参数传递来的响应return返回</li><li><code>teardown_request</code>: 请求处理后执行, 其无论请求是否存在异常都会执行, 该钩子也接受一个参数为异常信息</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">helloworld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello world&#39;</span>


<span class="token comment"># 在第一次请求之前运行.</span>
<span class="token comment"># 例子: 比如连接数据库操作, 只需要执行一次</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>before_first_request</span>
<span class="token keyword">def</span> <span class="token function">before_first_request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;before_first_request&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># 在每一次请求都会执行</span>
<span class="token comment"># 例子: 可以在这里做权限校验操作，比如说某用户是黑名单用户，黑名单用户登录系统将遭到拒绝访问，可以使用 before_request进行权限校验</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>before_request</span>
<span class="token keyword">def</span> <span class="token function">before_request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;before_request&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># 在请求之后运行</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>after_request</span>
<span class="token keyword">def</span> <span class="token function">after_request</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># response: 就是前面的请求处理完毕之后, 返回的响应数据</span>
    <span class="token comment"># 如果需要对响应做额外处理,可以再这里进行</span>
    <span class="token comment"># 例子：在响应头中，配置响应类型</span>
    <span class="token comment"># response.headers[&quot;Content-Type&quot;] = &quot;application/json&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;after_request&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> response


<span class="token comment"># 每一次请求之后都会调用，会接受一个参数，参数是服务器出现的错误信息</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>teardown_request</span>
<span class="token keyword">def</span> <span class="token function">teardown_request</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 数据库的扩展, 可以实现自动提交数据库</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teardown_request: error %s&#39;</span> <span class="token operator">%</span> error<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例演示" tabindex="-1"><a class="header-anchor" href="#案例演示" aria-hidden="true">#</a> 案例演示</h2><blockquote><p>使用请求钩子实现用户权限的判断</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> request<span class="token punctuation">,</span> make_response<span class="token punctuation">,</span> redirect
<span class="token keyword">import</span> json

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello goods&#39;</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/login/&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    username <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span>
    password <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> username <span class="token operator">==</span> <span class="token string">&#39;admin&#39;</span> <span class="token keyword">and</span> password <span class="token operator">==</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> make_response<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
        resp<span class="token punctuation">.</span>set_cookie<span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> resp

    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;登录失败&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">400</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/goods&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    goods <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;华为P40&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>goods<span class="token punctuation">)</span>


<span class="token comment"># 在每一次请求都会执行，判断 用户是否登录</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>before_request</span>
<span class="token keyword">def</span> <span class="token function">before_request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>path <span class="token operator">==</span> <span class="token string">&#39;/login/&#39;</span> <span class="token keyword">or</span> request<span class="token punctuation">.</span>path <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        username <span class="token operator">=</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> username<span class="token punctuation">:</span>
            <span class="token keyword">return</span> redirect<span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># 在请求之后运行, 设置响应体为 json</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>after_request</span>
<span class="token keyword">def</span> <span class="token function">after_request</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;application/json&quot;</span>
    <span class="token keyword">return</span> response


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","请求钩子.html.vue"]]);export{d as default};
