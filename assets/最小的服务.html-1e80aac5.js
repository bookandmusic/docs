import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as s,b as n,e as p,d as a}from"./app-505788a4.js";const c={},u=a(`<h1 id="最小的服务" tabindex="-1"><a class="header-anchor" href="#最小的服务" aria-hidden="true">#</a> 最小的服务</h1><h2 id="flask" tabindex="-1"><a class="header-anchor" href="#flask" aria-hidden="true">#</a> Flask</h2><blockquote><p><code>django</code>是大而全，提供所有常用的功能<br><code>flask</code>是小而精，只提供核心功能</p></blockquote><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><ul><li>命令直接安装： <code>pip install flask==1.1.2</code></li><li>使用环境依赖文件 <code>requirements.txt</code>，提供命令 <code>pip install -r requirements.txt</code></li></ul><h2 id="基本流程" tabindex="-1"><a class="header-anchor" href="#基本流程" aria-hidden="true">#</a> 基本流程</h2><ul><li>创建<code>flask</code>APP</li><li>定义视图函数</li><li>使用装饰器，配置路由</li><li>直接运行APP</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello Flask&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h2><h3 id="配置对象" tabindex="-1"><a class="header-anchor" href="#配置对象" aria-hidden="true">#</a> 配置对象</h3><ul><li>提供<code>config</code>对象直接设置即可，适用于 少量的配置项</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;DEBUG&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello Flask&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p>通过专门的配置文件，读取配置项，适用于配置项较多</p><p><code>config.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    DEBUG <span class="token operator">=</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>主模块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>from_object<span class="token punctuation">(</span><span class="token string">&#39;config.Config&#39;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello Flask&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>from_object</code>和<code>from_pyfile</code>的区别</p></blockquote><ul><li><code>from_object</code> 接受的是一个模块对象，需求<code>import config</code>导入; <ul><li>先创建<code>config.py</code></li><li>从主模块中导入</li></ul></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span>  config
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>from_object<span class="token punctuation">(</span><span class="token string">&#39;config&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>from_pyfile接受的是一个<code>文件名</code>，文件可以是<code>.py</code>文件也可以是<code>.txt</code>文件等等；</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>from_pyfile<span class="token punctuation">(</span><span class="token string">&quot;config.py&quot;</span><span class="token punctuation">,</span>silent<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># silent=True表示如果配置文件不存在的时候不抛出异常，默认是为False，会抛出异常。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><p>通过环境变量导入, 有些配置项和电脑环境有关系，需要从电脑读取，不能写死</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;DEBUG&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&#39;DEBUG&#39;</span><span class="token punctuation">)</span> <span class="token keyword">if</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&#39;DEBUG&#39;</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token boolean">True</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello Flask&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由映射" tabindex="-1"><a class="header-anchor" href="#路由映射" aria-hidden="true">#</a> 路由映射</h2><h3 id="指明请求方法" tabindex="-1"><a class="header-anchor" href="#指明请求方法" aria-hidden="true">#</a> 指明请求方法</h3>`,28),d=s("code",null,"GET",-1),r={href:"https://dormousehole.readthedocs.io/en/latest/api.html#flask.Flask.route",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"route()",-1),v=s("code",null,"methods",-1),m=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> request

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> do_the_login<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> show_the_login_form<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=s("code",null,"HEAD",-1),h={href:"https://www.ietf.org/rfc/rfc2068.txt",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"HEAD",-1),g=s("code",null,"OPTIONS",-1),f=a(`<h3 id="唯一的-url-重定向行为" tabindex="-1"><a class="header-anchor" href="#唯一的-url-重定向行为" aria-hidden="true">#</a> 唯一的 URL / 重定向行为</h3><p>以下两条规则的不同之处在于是否使用尾部的斜杠。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/projects/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">projects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;The project page&#39;</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">about</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;The about page&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>projects</code> 的 URL 是中规中矩的，尾部有一个斜杠，看起来就如同一个文件夹。 访问一个没有斜杠结尾的 URL 时 Flask 会自动进行重定向，帮你在尾部加上一个斜杠。</p><p><code>about</code> 的 URL 没有尾部斜杠，因此其行为表现与一个文件类似。如果访问这个 URL 时添加了尾部斜杠就会得到一个 404 错误。这样可以保持 URL 唯一，并帮助 搜索引擎避免重复索引同一页面。</p><h3 id="查看所有路由映射" tabindex="-1"><a class="header-anchor" href="#查看所有路由映射" aria-hidden="true">#</a> 查看所有路由映射</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello flask&quot;</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/post_only&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">post_only</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;post only page&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 通过url_map可以查看整个flask中的路由信息</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>url_map<span class="token punctuation">)</span>
    <span class="token comment"># 启动flask程序</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目启动" tabindex="-1"><a class="header-anchor" href="#项目启动" aria-hidden="true">#</a> 项目启动</h2><h3 id="命令行启动" tabindex="-1"><a class="header-anchor" href="#命令行启动" aria-hidden="true">#</a> 命令行启动</h3><blockquote><p>注意： flaskAPP所在的文件，应该是 <code>app.py</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>
 app.py      config.py

$ flask run <span class="token parameter variable">-h</span> <span class="token number">0.0</span>.0.0 <span class="token parameter variable">-p</span> <span class="token number">7000</span> <span class="token comment"># 指定网络ip和端口号</span>
 * Environment: production
   WARNING: This is a development server. Do not use it <span class="token keyword">in</span> a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on all addresses.
   WARNING: This is a development server. Do not use it <span class="token keyword">in</span> a production deployment.
 * Running on http://192.168.0.105:7000/ <span class="token punctuation">(</span>Press CTRL+C to quit<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码运行" tabindex="-1"><a class="header-anchor" href="#代码运行" aria-hidden="true">#</a> 代码运行</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello Flask&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># app.run(host=&#39;0.0.0.0&#39;, port=7000, debug=True)</span>
    Flask<span class="token punctuation">.</span>run<span class="token punctuation">(</span>self<span class="token operator">=</span>app<span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">7000</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h3><p>如果在一个函数中 创建对象，那么就可以创建多个实例。</p><p>那么这样做有什么用呢？</p><ol><li>用于测试。可以针对不同的情况使用不同的配置来测试应用。</li><li>用于多实例，如果你需要运行同一个应用的不同版本的话。当然你可以在服务器上 使用不同配置运行多个相同应用，但是如果使用应用工厂，那么你可以只使用一个 应用进程而得到多个应用实例，这样更容易操控。</li></ol><p><code>app/__init__.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask


<span class="token keyword">def</span> <span class="token function">create_app</span><span class="token punctuation">(</span>config_file_name<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>from_pyfile<span class="token punctuation">(</span>config_file_name<span class="token punctuation">,</span> silent<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主模块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> app <span class="token keyword">import</span> create_app

app <span class="token operator">=</span> create_app<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello Flask&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">7000</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function y(w,x){const e=o("ExternalLinkIcon");return i(),l("div",null,[u,s("p",null,[n("Web 应用使用不同的 HTTP 方法处理 URL 。当你使用 Flask 时，应当熟悉 HTTP 方法。 缺省情况下，一个路由只回应 "),d,n(" 请求。 可以使用 "),s("a",r,[k,p(e)]),n(" 装饰器的 "),v,n(" 参数来处理不同的 HTTP 方法:")]),m,s("p",null,[n("如果当前使用了 GET 方法， Flask 会自动添加 "),b,n(" 方法支持，并且同时还会 按照 "),s("a",h,[n("HTTP RFC"),p(e)]),n(" 来处理 "),_,n(" 请求。同样， "),g,n(" 也会自动实现。")]),f])}const F=t(c,[["render",y],["__file","最小的服务.html.vue"]]);export{F as default};
