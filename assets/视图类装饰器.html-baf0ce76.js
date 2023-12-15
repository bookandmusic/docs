import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-45b6ee47.js";const t={},p=e(`<h1 id="视图类装饰器" tabindex="-1"><a class="header-anchor" href="#视图类装饰器" aria-hidden="true">#</a> 视图类装饰器</h1><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><blockquote><p>定义装饰器，判断请求头中，是否存在用户名？</p><ul><li>存在，认为用户是合法用户，允许通过</li><li>不存在，拒绝用户访问</li></ul></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> request


<span class="token keyword">def</span> <span class="token function">login_auth</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 1. 获取用户请求头中的 用户名 信息</span>
        username <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;USERNAME&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># 2. 判断用户名</span>
        <span class="token keyword">if</span> username<span class="token punctuation">:</span>
            <span class="token comment"># 2.1 存在，继续执行</span>
            <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># 2.2 不存在，拒绝访问</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                       <span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;认证失败&#39;</span>
                   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">401</span>

    <span class="token keyword">return</span> wrapper

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有方法添加装饰器" tabindex="-1"><a class="header-anchor" href="#所有方法添加装饰器" aria-hidden="true">#</a> 所有方法添加装饰器</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask_restful <span class="token keyword">import</span> Resource
<span class="token keyword">from</span> utils<span class="token punctuation">.</span>auth <span class="token keyword">import</span> login_auth


<span class="token comment"># 图书的所有操作：增、查 都需要通过装饰器验证权限</span>
<span class="token keyword">class</span> <span class="token class-name">BookResource</span><span class="token punctuation">(</span>Resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    method_decorators <span class="token operator">=</span> <span class="token punctuation">[</span>login_auth<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;图书1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;图书2&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
                   <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;图书3&#39;</span>
               <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">201</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为单个方法指定装饰器" tabindex="-1"><a class="header-anchor" href="#为单个方法指定装饰器" aria-hidden="true">#</a> 为单个方法指定装饰器</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask_restful <span class="token keyword">import</span> Resource
<span class="token keyword">from</span> utils<span class="token punctuation">.</span>auth <span class="token keyword">import</span> login_auth


<span class="token comment"># 此时，只有图书的 添加操作需要 通过装饰器验证权限，而查询操作就不需要验证权限</span>
<span class="token keyword">class</span> <span class="token class-name">BookResource</span><span class="token punctuation">(</span>Resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    method_decorators <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;post&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>login_auth<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;图书1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;图书2&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;图书3&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">201</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","视图类装饰器.html.vue"]]);export{d as default};
