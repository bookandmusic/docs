import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c,a as n,b as s,e,d as i}from"./app-b2b64365.js";const d={},p=n("h1",{id:"idoc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#idoc","aria-hidden":"true"},"#"),s(" idoc")],-1),r={href:"https://github.com/jaywcjlove/idoc",target:"_blank",rel:"noopener noreferrer"},u=i(`<blockquote><p>依赖 node.js 环境。</p></blockquote><p>特点：<br> 1、简单小巧，支持自动生成目录。有几个主题可以选择。<br> 2、不支持插件。<br> 3、原理是将 Markdown 文件编译生成 html 文件。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>全局安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> idoc <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3><p>创建并初始化项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> test-idoc
$ <span class="token builtin class-name">cd</span> test-idoc

<span class="token comment"># 初始化</span>
$ idoc init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>填入必要的项目信息，初始化完成。会在项目目录下生成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>md/
 <span class="token operator">|</span>-- index.md
package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),v=n("code",null,"idoc server",-1),m={href:"http://localhost:1987/",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>预览的时候改动md文件，浏览器刷新可以看到改动后的内容。</p><p>其中 <code>初始化</code>​ 步骤也可以手动执行，把目录和配置文件建好就行了。</p><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><p>idoc对目录结构没有要求，只要你把md文件放在<code>md/</code>​目录下面，idoc会自动识别。支持子目录。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>md/
 |-- 首页.md
 |-- 关于.md
 |-- 使用方法/
    |-- 命令文档.md
    |-- 命令文档2.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有子目录，生成的文档导航栏也会有子菜单。效果： <img src="http://img2018.cnblogs.com/blog/663847/201904/663847-20190421140250559-2049292225.png" alt="" loading="lazy">​</p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p>​<code>package.json</code>​文件。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;idoc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://JSLite.io&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jaywcjlove &lt;wowohoo@qq.com&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/jaywcjlove/idoc&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;licenses&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;idoc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;theme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;logo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;idoc-logo.svg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;md&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;首页.md&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;使用方法&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;主题文件.md&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;初始化.md&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;配置说明.md&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&quot;关于.md&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>idoc.md</code>​块无需手动配置，<code>idoc build</code>​ 自动生成。其它配置无需多说明，也能看的懂。</p><h3 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h3><p>支持：</p><ul><li>handbook</li><li>default</li><li>resume</li></ul><p>​<img src="http://img2018.cnblogs.com/blog/663847/201904/663847-20190421140816532-2133474905.png" alt="" loading="lazy">​</p>`,14),h={href:"https://wangchujiang.com/idoc/html/%E4%B8%BB%E9%A2%98.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><ul><li>build</li></ul><p>生成静态 HTML 页面到指定目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ idoc build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>watch</li></ul><p>监控 <code>md</code>​ 文件发生变化自动 build。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ idoc <span class="token function">watch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>server</li></ul><p>打开本地静态 <code>html</code>​ 服务器，预览你生成的页面。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ idoc server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>clean</li></ul><p>清除生成的静态文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ idoc clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>theme</li></ul><p>​<code>$ idoc theme</code>​ 与 <code>$ idoc -t</code>​ 相同<br> 选择默认主题或者第三方主题，默认两个主题 handbook 或者 default。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 选择主题</span>
<span class="token comment"># 第三方主题，克隆到当前跟目录就可以使用命令选择了</span>
$ idoc theme
<span class="token comment"># theme 简写 －t</span>
$ idoc <span class="token parameter variable">-t</span>

<span class="token comment"># 制作主题 需要指定制作的主题目录</span>
$ idoc <span class="token parameter variable">-t</span> ~/git/idoc-theme-slate/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>deploy</li></ul><p>将文档部署到 <code>git</code>​ 仓库的 <code>gh-pages</code>​ 分支中。<br> 目前需要手动添加分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ idoc deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function g(q,_){const a=t("ExternalLinkIcon");return l(),c("div",null,[p,n("p",null,[s("官网： "),n("a",r,[s("https://github.com/jaywcjlove/idoc"),e(a)])]),u,n("p",null,[s("运行 "),v,s("​ 预览生成的静态页面。默认预览地址为 "),n("a",m,[s("http://localhost:1987/"),e(a)])]),b,n("p",null,[s("参考："),n("a",h,[s("https://wangchujiang.com/idoc/html/%E4%B8%BB%E9%A2%98.html"),e(a)])]),k])}const y=o(d,[["render",g],["__file","idoc.html.vue"]]);export{y as default};
