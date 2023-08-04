import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-757930e5.js";const p={},o=e(`<h1 id="flaskrestful" tabindex="-1"><a class="header-anchor" href="#flaskrestful" aria-hidden="true">#</a> FlaskRestful</h1><blockquote><p><code>Flask-RESTful</code>是flask的扩展，为快速构建 REST API 增加了支持。</p></blockquote><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> flask-restful
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程" aria-hidden="true">#</a> 使用流程</h2><h3 id="主app" tabindex="-1"><a class="header-anchor" href="#主app" aria-hidden="true">#</a> 主<code>APP</code></h3><ol><li>导入<code>Api</code>与<code>Resource</code>, <code>api</code>用于创建<code>api</code>对象, <code>Resource</code>用于类视图的形式实现</li><li>创建<code>api</code>对象</li><li>自定义视图类, 必须继承<code>Resource</code></li><li>视图类中定义请求方法</li><li>使用<code>api</code>对象添加路由</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token comment"># 1.导入Api, Resource</span>
<span class="token keyword">from</span> flask_restful <span class="token keyword">import</span> Api<span class="token punctuation">,</span> Resource

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
<span class="token comment"># 2.创建api对象</span>
api <span class="token operator">=</span> Api<span class="token punctuation">(</span>app<span class="token punctuation">)</span>


<span class="token comment"># 3.自定义类视图, 必须继承于Resource</span>
<span class="token keyword">class</span> <span class="token class-name">BookResource</span><span class="token punctuation">(</span>Resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 4.在视图类中定义请求方法</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 返回响应</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;图书1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;图书2&#39;</span><span class="token punctuation">]</span>


<span class="token comment"># 5.使用api对象的add_resource()添加路由</span>
<span class="token comment"># IndexResource是视图</span>
<span class="token comment"># &#39;/&#39;是路由</span>
<span class="token comment"># endpoint是路由别名</span>
api<span class="token punctuation">.</span>add_resource<span class="token punctuation">(</span>BookResource<span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> endpoint<span class="token operator">=</span><span class="token string">&#39;book_list&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 程序入口</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="蓝图" tabindex="-1"><a class="header-anchor" href="#蓝图" aria-hidden="true">#</a> 蓝图</h3><blockquote><p>**<code>Flask-RESTful</code>**配合蓝图:</p></blockquote><ul><li>创建蓝图文件, 编写蓝图代码: <ul><li>创建蓝图对象</li><li>创建蓝图api接口对象</li><li>编写蓝图的视图类</li><li>给蓝图视图添加路由</li></ul></li><li>创建主程序, 编写主程序代码: <ul><li>导入蓝图对象, 用于后续的注册</li><li>创建Flask实例对象</li><li>注册蓝图</li><li>程序入口</li></ul></li></ul><blockquote><p><strong>注:</strong> 简单实用, 将蓝图集中化与apps目录下统一管理</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">.</span>
├── app<span class="token punctuation">.</span>py
└── book
    ├── __init__<span class="token punctuation">.</span>py
    └── views<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="视图类" tabindex="-1"><a class="header-anchor" href="#视图类" aria-hidden="true">#</a> 视图类</h4><p><code>book/views.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> jsonify
<span class="token keyword">from</span> flask_restful <span class="token keyword">import</span> Resource


<span class="token comment"># 3. 编写蓝图的视图类</span>
<span class="token keyword">class</span> <span class="token class-name">BookResource</span><span class="token punctuation">(</span>Resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;图书1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;图书2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="蓝图对象" tabindex="-1"><a class="header-anchor" href="#蓝图对象" aria-hidden="true">#</a> 蓝图对象</h4><p><code>book/__init__.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> blueprints
<span class="token keyword">from</span> flask_restful <span class="token keyword">import</span> Api
<span class="token keyword">from</span> <span class="token punctuation">.</span>views <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment"># 1. 创建蓝图对象</span>
book <span class="token operator">=</span> blueprints<span class="token punctuation">.</span>Blueprint<span class="token punctuation">(</span><span class="token string">&#39;book&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">,</span> url_prefix<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 2. 创建蓝图api接口对象</span>
api <span class="token operator">=</span> Api<span class="token punctuation">(</span>book<span class="token punctuation">)</span>

<span class="token comment"># 4. 给蓝图视图添加路由</span>
api<span class="token punctuation">.</span>add_resource<span class="token punctuation">(</span>BookResource<span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="主app-1" tabindex="-1"><a class="header-anchor" href="#主app-1" aria-hidden="true">#</a> 主APP</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

<span class="token keyword">from</span> book <span class="token keyword">import</span> book

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;DEBUG&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
app<span class="token punctuation">.</span>register_blueprint<span class="token punctuation">(</span>book<span class="token punctuation">)</span>

<span class="token comment"># 程序入口</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),i=[o];function l(t,c){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","FlaskRestful.html.vue"]]);export{r as default};
