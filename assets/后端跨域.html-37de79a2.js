import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-757930e5.js";const i={},t=e(`<h1 id="后端跨域" tabindex="-1"><a class="header-anchor" href="#后端跨域" aria-hidden="true">#</a> 后端跨域</h1><p>前后端分离开发时，经常会遇到一个问题，那就是<code>跨域问题</code>,因为这时候前端和后端的代码是在不同机器上运行的，两个地址不在一个域名下，这个时候前端脚本在进行ajax访问的时候浏览器就会报跨域相关的错误。</p><p>原因：浏览器的同源策略不允许跨域访问，所谓同源策略是指协议、域名、端口相同。</p><p>为了解决这个问题，在前端和后台配置均可，此时，以后台django配置为例</p><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> django-cors-headers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="注册应用" tabindex="-1"><a class="header-anchor" href="#注册应用" aria-hidden="true">#</a> 注册应用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token string">&#39;corsheaders&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中间件设置" tabindex="-1"><a class="header-anchor" href="#中间件设置" aria-hidden="true">#</a> 中间件设置</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MIDDLEWARE <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token string">&#39;django.contrib.sessions.middleware.SessionMiddleware&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;corsheaders.middleware.CorsMiddleware&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># 注意，位置有限制</span>
    <span class="token string">&#39;django.middleware.common.CommonMiddleware&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置跨域参数" tabindex="-1"><a class="header-anchor" href="#配置跨域参数" aria-hidden="true">#</a> 配置跨域参数</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>CORS_ORIGIN_ALLOW_ALL <span class="token operator">=</span> <span class="token boolean">True</span>  <span class="token comment"># 允许所有host访问</span>
<span class="token comment"># 添加白名单</span>
CORS_ORIGIN_WHITELIST <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;127.0.0.1:8080&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;localhost:8080&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token comment"># 以上配置二选一即可</span>

CORS_ALLOW_CREDENTIALS <span class="token operator">=</span> <span class="token boolean">True</span>  <span class="token comment"># 允许携带cookie,不需要可以不设置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[t];function o(p,l){return s(),a("div",null,c)}const u=n(i,[["render",o],["__file","后端跨域.html.vue"]]);export{u as default};
