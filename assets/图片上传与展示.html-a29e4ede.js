import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-757930e5.js";const p={},t=e(`<h1 id="图片上传与展示" tabindex="-1"><a class="header-anchor" href="#图片上传与展示" aria-hidden="true">#</a> 图片上传与展示</h1><p>通过以下demo简单演示在flask项目中的图片上传流程。</p><h2 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os


<span class="token keyword">class</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    DEBUG <span class="token operator">=</span> <span class="token boolean">True</span>
    SQLALCHEMY_DATABASE_URI <span class="token operator">=</span> <span class="token string">&#39;mysql://root:mysql@127.0.0.1:3306/day08&#39;</span>
    SQLALCHEMY_TRACK_MODIFICATIONS <span class="token operator">=</span> <span class="token boolean">False</span>

    <span class="token comment"># 构建项目所在的 绝对路径，也就是 day08 的绝对路径</span>
    BASE_DIR <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 静态资源存放路径</span>
    STATIC_ROOT <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;static/&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 自定义的 图片上传路径</span>
    MEDIA_ROOT <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;media/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传与展示" tabindex="-1"><a class="header-anchor" href="#上传与展示" aria-hidden="true">#</a> 上传与展示</h2><h3 id="static静态资源方式" tabindex="-1"><a class="header-anchor" href="#static静态资源方式" aria-hidden="true">#</a> static静态资源方式</h3><blockquote><p>采用此种方式：</p><ul><li>创建APP时，一定要指明静态资源的路径</li><li>然后在上传图片时，将上传的图片存放到上一步指明的静态资源路径中</li><li>就可以使用static内置的服务，展示图片资源</li></ul></blockquote><h4 id="app创建" tabindex="-1"><a class="header-anchor" href="#app创建" aria-hidden="true">#</a> app创建</h4><blockquote><p>创建app时,指明静态资源目录</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">,</span> static_folder<span class="token operator">=</span>Config<span class="token punctuation">.</span>STATIC_ROOT<span class="token punctuation">,</span> static_url_path<span class="token operator">=</span><span class="token string">&#39;/static&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>static_folder</code>： 静态资源路径</li><li><code>static_url_path</code>： 静态资源展示的url前缀</li></ul><h4 id="图片上传" tabindex="-1"><a class="header-anchor" href="#图片上传" aria-hidden="true">#</a> 图片上传</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">from</span> uuid <span class="token keyword">import</span> uuid4
<span class="token keyword">from</span> flask_restful <span class="token keyword">import</span> Resource<span class="token punctuation">,</span> reqparse
<span class="token keyword">from</span> werkzeug<span class="token punctuation">.</span>datastructures <span class="token keyword">import</span> FileStorage

<span class="token keyword">from</span> app<span class="token punctuation">.</span>config <span class="token keyword">import</span> Config
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">def</span> <span class="token function">img_upload</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> img<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>

    <span class="token comment"># 将图片名按照 .  进行切分， 找到最后一个元素，也就是  文件的后缀名</span>
    end_name <span class="token operator">=</span> img<span class="token punctuation">.</span>filename<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token comment"># 通过文件的后缀名判断 身份为 合法的  图片</span>
    <span class="token keyword">if</span> end_name <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&#39;jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;gif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jpeg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>

    filename <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>uuid4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">+</span> end_name  <span class="token comment"># 为了生成一个不重复的 文件名</span>
    img_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>Config<span class="token punctuation">.</span>STATIC_ROOT<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>  <span class="token comment"># 将路径和文件名拼接在一起，方便保存文件</span>

    img<span class="token punctuation">.</span>save<span class="token punctuation">(</span>img_path<span class="token punctuation">)</span>  <span class="token comment"># 将图片对象保存到 本地</span>

    <span class="token keyword">return</span> filename


<span class="token keyword">class</span> <span class="token class-name">NewsView</span><span class="token punctuation">(</span>Resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 1. 创建解析参数的对象</span>
        parser <span class="token operator">=</span> reqparse<span class="token punctuation">.</span>RequestParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 2. 指明需要解析的参数</span>
        parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> location<span class="token operator">=</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">,</span> required<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span>FileStorage<span class="token punctuation">,</span> location<span class="token operator">=</span><span class="token string">&#39;files&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># 3. 获取具体的参数</span>
        args <span class="token operator">=</span> parser<span class="token punctuation">.</span>parse_args<span class="token punctuation">(</span><span class="token punctuation">)</span>

        title <span class="token operator">=</span> args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>
        img <span class="token operator">=</span> args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># 利用自定义函数，将图片保存到本地</span>
        filename <span class="token operator">=</span> img_upload<span class="token punctuation">(</span>img<span class="token punctuation">)</span>

        <span class="token comment"># 4. 创建对象, 注意：图片存储的只是 从media之后的  图片路径</span>
        news <span class="token operator">=</span> News<span class="token punctuation">(</span>title<span class="token operator">=</span>title<span class="token punctuation">,</span> img<span class="token operator">=</span>filename<span class="token punctuation">)</span>
        <span class="token comment"># 5. 添加到 事务中</span>
        db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>add<span class="token punctuation">(</span>news<span class="token punctuation">)</span>
        <span class="token comment"># 6. 提交事务</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                       <span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;添加失败&#39;</span>
                   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span>
        <span class="token comment"># 7. 返回响应</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
                   <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> news<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span>
                   <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> news<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
                   <span class="token string">&#39;img&#39;</span><span class="token punctuation">:</span> news<span class="token punctuation">.</span>img
               <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">201</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图片访问" tabindex="-1"><a class="header-anchor" href="#图片访问" aria-hidden="true">#</a> 图片访问</h4><blockquote><p>通过 <code>http://127.0.0.1:5000/static/filename</code>就可以访问图片</p></blockquote><ul><li><code>static</code>是app创建时，配置的<code>url</code>前缀</li></ul><h3 id="自定义方式" tabindex="-1"><a class="header-anchor" href="#自定义方式" aria-hidden="true">#</a> 自定义方式</h3><blockquote><p>自定义方式实现：</p><ul><li>app创建时，不需要指明静态资源有关的任何参数</li><li>图片的存放路径，可以是 任何一个合适的路径</li><li>展示图片时，需要自己定义视图和路由，实现图片展示</li></ul></blockquote><h4 id="图片上传-1" tabindex="-1"><a class="header-anchor" href="#图片上传-1" aria-hidden="true">#</a> 图片上传</h4><blockquote><p>和上面的图片上传的流程一样，只是 图片存放的路径可以自由指定，不必一定存放到 某个特定路径</p></blockquote><h4 id="图片访问-1" tabindex="-1"><a class="header-anchor" href="#图片访问-1" aria-hidden="true">#</a> 图片访问</h4><blockquote><p>图片访问时，可以自己读取文件内容，也可以调用flask内置的 方法，返回响应</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> flask <span class="token keyword">import</span> make_response
<span class="token keyword">from</span> app<span class="token punctuation">.</span>config <span class="token keyword">import</span> Config


<span class="token keyword">class</span> <span class="token class-name">ImgView</span><span class="token punctuation">(</span>Resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 1. 拼接除图片的完成路径</span>
        img_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>Config<span class="token punctuation">.</span>MEDIA_ROOT<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>

        <span class="token comment"># 2. 按照二进制方式打开文件，读到的内容为 二进制文件流，方便接下来的网络传输</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>img_path<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                img <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> FileNotFoundError<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token number">404</span>

        <span class="token comment"># 3. 自定义响应</span>
        resp <span class="token operator">=</span> make_response<span class="token punctuation">(</span>img<span class="token punctuation">)</span>
        <span class="token comment"># 4. 声明响应体的类型 为  图片</span>
        resp<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;image/png&#39;</span>
        <span class="token comment"># 5. 返回响应</span>
        <span class="token keyword">return</span> resp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> flask <span class="token keyword">import</span> send_from_directory

<span class="token keyword">from</span> app<span class="token punctuation">.</span>config <span class="token keyword">import</span> Config


<span class="token keyword">class</span> <span class="token class-name">ImgView</span><span class="token punctuation">(</span>Resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># 2. 使用flask 内置的函数提供响应</span>
        <span class="token keyword">return</span> send_from_directory<span class="token punctuation">(</span>Config<span class="token punctuation">.</span>MEDIA_ROOT<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过 <code>http://127.0.0.1:5000/media/filename</code>就可以访问图片</p></blockquote><ul><li><code>media</code>是自己配置的路由前缀</li></ul>`,26),o=[t];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","图片上传与展示.html.vue"]]);export{d as default};
