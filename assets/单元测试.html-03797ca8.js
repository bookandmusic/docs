import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-45b6ee47.js";const t={},p=e(`<h1 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h1><h3 id="数据库配置" tabindex="-1"><a class="header-anchor" href="#数据库配置" aria-hidden="true">#</a> 数据库配置</h3><p>为了防止影响其他功能，可以给单元测试设置一个单独的数据库</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;django.db.backends.mysql&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;HOST&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PORT&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django_db1&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 真实的数据库</span>
        <span class="token string">&#39;USER&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PASSWORD&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;TEST&#39;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
            <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;django_db_test&#39;</span> <span class="token comment"># 用于单元测试的数据库</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元测试文件" tabindex="-1"><a class="header-anchor" href="#单元测试文件" aria-hidden="true">#</a> 单元测试文件</h3><blockquote><p>在每个APP里面，都有一个<code>test.py</code>​文件，可以在里面去定义测试类，并可以直接运行</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>test <span class="token keyword">import</span> TestCase<span class="token punctuation">,</span> Client
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Goods


<span class="token comment"># Create your tests here.</span>
<span class="token keyword">class</span> <span class="token class-name">GoodsTestCase</span><span class="token punctuation">(</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_goods_list</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 创建一个客户端</span>
        client <span class="token operator">=</span> Client<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 模拟客户端访问首页</span>
        response <span class="token operator">=</span> client<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;/goods/&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># 测试，self.assertEqual接收3个参数(被测试对象，正确的测试结果，如果不正确输出什么）</span>
        <span class="token comment"># 如果第一个参数的返回值不等于第二个参数，输出第三个参数</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>
            response<span class="token punctuation">.</span>status_code<span class="token punctuation">,</span>
            <span class="token number">200</span><span class="token punctuation">,</span>
            <span class="token string">&#39;商品查询失败&#39;</span>
        <span class="token punctuation">)</span>

        result <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>
            <span class="token builtin">type</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token builtin">list</span><span class="token punctuation">,</span>
            <span class="token string">&#39;商品查询结果不对&#39;</span>
        <span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    userTestCase <span class="token operator">=</span> GoodsTestCase<span class="token punctuation">(</span><span class="token punctuation">)</span>
    userTestCase<span class="token punctuation">.</span>test_goods_list<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>‍</p>`,8),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","单元测试.html.vue"]]);export{r as default};
