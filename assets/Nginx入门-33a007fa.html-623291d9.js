import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as a}from"./app-8181ed57.js";const i={},l=a(`<p>Nginx——Ngine X，是一款高性能的反向代理服务器；也是一个IMAP、POP3、SMTP代理服务器；也是一个Http服务器。</p><p>Nginx 是一款轻量级的 Web 服务器 / 反向代理服务器以及电子邮件代理服务器。其特点是占有内存少，并发能力强，事实上 nginx 的并发能力确实在同类型的网页服务器中表现较好。</p><p>Nginx 相较于 Apache\\lighttpd 具有占有内存少，稳定性高等优势，并且依靠并发能力强，丰富的模块库以及友好灵活的配置而闻名。在 Linux 操作系统下，nginx 使用 epoll 事件模型, 得益于此，nginx 在 Linux 操作系统下效率相当高。</p><h2 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h2><h3 id="代理服务器" tabindex="-1"><a class="header-anchor" href="#代理服务器" aria-hidden="true">#</a> 代理服务器</h3><p>代理服务器（Proxy Server）一般是指局域网内部的机器通过代理服务器发送请求到互联网上的服务器，代理服务器一般作用在客户端。</p><p>举个通俗的例子，比如本地网络无法直接访问一些网站或者服务器，必须通过一个代理点服务器，那个服务器和你的本地网络是可以直接 ping 通的，然后你就必须设置这个代理服务器的一些参数，比如 ip，端口，然后通过这个平台连接到其他网络区域。</p><p>一个完整的代理请求过程为：客户端首先与代理服务器创建连接，接着根据代理服务器所使用的代理协议，请求对目标服务器创建连接、或者获得目标服务器的指定资源。 Web 代理（proxy）服务器是网络的中间实体。代理位于 Web 客户端和 Web 服务器之间，扮演 “中间人” 的角色。代理服务器是介于客户端和 Web 服务器之间的另一台服务器，有了它之后，浏览器不是直接到 Web 服务器去取回网页而是向代理服务器发出请求，信号会先送到代理服务器，由代理服务器来取回浏览器所需要的信息并传送给你的浏览器。</p><p>代理服务器是一种重要的服务器安全功能，它的工作主要在开放系统互联 (OSI) 模型的会话层，起到防火墙的作用，保证其安全性。</p><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><p>是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。如</p><p>客户端（用户 A）向反向代理服务器 z 发送请求，接着反向代理服务器 Z 将判断将向何处（原始服务器 B）转交请求，获得原始服务器 B 返回的内容后，将获得的内容返回给客户端用户 A。而客户端始终认为它访问的是原始服务器 B 而不是服务器 Z。由于防火墙作用，只允许服务器 Z 进出，防火墙和反向代理共同作用保护了原始服务器 B。</p><img src="https://img.bookandmusic.cn/blog/2022/01/LTEdVn.png" alt="LTEdVn" style="zoom:33%;"><h3 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h3><p>正向代理是一个位于客户端和原始服务器 (origin server) 之间的服务器，为了从原始服务器获取内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。客户端才能使用正向代理。</p><p>如客户端 A（用户 A,B）和原始服务器（服务器 B）之间的服务器（代理服务器 Z），为了从原始服务器获取内容，用户 A 向代理服务器 Z 发送一个请求并指定目标（服务器 B），然后代理服务器 Z 向服务器 B 转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。</p><img src="https://img.bookandmusic.cn/blog/2022/01/ZfBjmT.png" alt="ZfBjmT" style="zoom:33%;"><p>正向代理为防火墙内的局域网客户端提供了访问 Internet 的途径。还可以使用缓冲特性减少网络使用率。</p><h3 id="反向代理vs正向代理" tabindex="-1"><a class="header-anchor" href="#反向代理vs正向代理" aria-hidden="true">#</a> 反向代理VS正向代理</h3><h4 id="用途差异" tabindex="-1"><a class="header-anchor" href="#用途差异" aria-hidden="true">#</a> 用途差异</h4><ul><li><p>正向代理的典型用途是为在防火墙内的局域网客户端提供访问 Internet 的途径。正向代理还可以使用缓冲特性减少网络使用率；</p></li><li><p>反向代理的典型用途是将防火墙后面的服务器提供给 Internet 用户访问。反向代理还可以为后端的多台服务器提供负载平衡，或为后端较慢的服务器提供缓冲服务。</p></li><li><p>另外，反向代理还可以启用高级 URL 策略和管理技术，从而使处于不同 web 服务器系统的 web 页面同时存在于同一个 URL 空间下。</p></li></ul><h4 id="安全差异" tabindex="-1"><a class="header-anchor" href="#安全差异" aria-hidden="true">#</a> 安全差异</h4><ul><li><p>正向代理允许客户端通过它访问任意网站并且隐藏客户端自身，因此必须采取安全措施以确保仅为经过授权的客户端提供服务；</p></li><li><p>反向代理对外都是透明的，访问者并不知道自己访问的是一个代理。</p></li></ul><h3 id="nginx-优势" tabindex="-1"><a class="header-anchor" href="#nginx-优势" aria-hidden="true">#</a> Nginx 优势</h3><ol><li>作为 Web 服务器，Nginx 处理静态文件、索引文件，自动索引的效率非常高</li><li>作为代理服务器，Nginx 可以实现无缓存的反向代理加速，提高网站运行速度</li><li>作为负载均衡服务器，Nginx 既可以在内部直接支持 Rails 和 PHP，也可以支持 HTTP 代理服务器对外进行服务，同时还支持简单的容错和利用算法进行负载均衡</li><li>在性能方面，Nginx 是专门为性能优化而开发的，实现上非常注重效率。它采用内核 Poll 模型，可以支持更多的并发连接，最大可以支持对 5 万个并发连接数的响应，而且只占用很低的内存资源</li><li>在稳定性方面，Nginx 采取了分阶段资源分配技术，使得 CPU 与内存的占用率非常低。Nginx 官方表示，Nginx 保持 1 万个没有活动的连接，而这些连接只占用 2.5MB 内存，因此，类似 DOS 这样的攻击对 Nginx 来说基本上是没有任何作用的</li><li>在高可用性方面，Nginx 支持热部署，启动速度特别迅速，因此可以在不间断服务的情况下，对软件版本或者配置进行升级，即使运行数月也无需重新启动，几乎可以做到 7x24 小时不间断地运行</li><li>总的来说 Nginx 具有很高的稳定性；支持热部署；代码质量非常高，代码很规范，手法成熟，模块扩展也很容易。</li></ol><h2 id="nginx安装" tabindex="-1"><a class="header-anchor" href="#nginx安装" aria-hidden="true">#</a> Nginx安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx

<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx配置文件" tabindex="-1"><a class="header-anchor" href="#nginx配置文件" aria-hidden="true">#</a> Nginx配置文件</h2><blockquote><p>nginx配置文件主要分为四块：</p></blockquote><ul><li><p><code>main</code>（全局设置）：main部分设置的指令将影响到其它所有部分设置；</p></li><li><p><code>server</code>（主机设置）：server部分的指令主要用于指定虚拟主机域名、IP和端口；</p></li><li><p><code>upstream</code>（上游服务器设置，主要为反向代理、负载均衡相关配置）：upstream的指令用于设置一系列的后端服务器，设置反向代理及后端服务器的负载均衡；</p></li><li><p><code>location</code>（URL匹配特定位置后的设置）：location部分用于匹配网页位置（比如，根目录“/”，“/images”，等等）；</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用的用户和组</span>
user nginx<span class="token punctuation">;</span>
<span class="token comment"># 指定工作衍生进程数（一般等于CPU总核数或总核数的两倍）</span>
worker_processes auto<span class="token punctuation">;</span>
<span class="token comment"># 日志位置和日志级别</span>
error_log /var/log/nginx/error.log<span class="token punctuation">;</span> 
<span class="token comment"># 指定PID存放的路径</span>
pid /run/nginx.pid<span class="token punctuation">;</span>
<span class="token comment"># Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.</span>
include /usr/share/nginx/modules/*.conf<span class="token punctuation">;</span>


<span class="token comment"># 事件区块</span>
events <span class="token punctuation">{</span>
    <span class="token comment"># 使用的网络I/O模型，linux平台推荐采用epoll模型，freebsd系统采用kqueue模型</span>
    use epoll<span class="token punctuation">;</span>
    <span class="token comment"># 允许最大连接数</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># http区块</span>
http <span class="token punctuation">{</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

	<span class="token comment"># 开启高效传输模式</span>
    sendfile            on<span class="token punctuation">;</span>
    tcp_nopush          on<span class="token punctuation">;</span>
    tcp_nodelay         on<span class="token punctuation">;</span>
    <span class="token comment"># 链接超时</span>
    keepalive_timeout   <span class="token number">65</span><span class="token punctuation">;</span>
    types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>

	<span class="token comment"># nginx支持的媒体类型库文件</span>
    include             /etc/nginx/mime.types<span class="token punctuation">;</span>
    <span class="token comment"># 默认的媒体类型</span>
    default_type        application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment"># Load modular configuration files from the /etc/nginx/conf.d directory.</span>
    <span class="token comment"># See http://nginx.org/en/docs/ngx_core_module.html#include</span>
    <span class="token comment"># for more information.</span>
    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
    
	<span class="token comment"># 下面是server虚拟主机的配置</span>
    server <span class="token punctuation">{</span>
    	<span class="token comment"># 提供服务的端口</span>
        listen       <span class="token number">80</span> default_server<span class="token punctuation">;</span>
        listen       <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80 default_server<span class="token punctuation">;</span>
        <span class="token comment"># 提供服务的主机的域名</span>
        server_name  _<span class="token punctuation">;</span>
        <span class="token comment"># 站点的根目录</span>
        root         /usr/share/nginx/html<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span> <span class="token comment"># location区块</span>
        	<span class="token comment"># 根路径</span>
        	root html<span class="token punctuation">;</span>
        	<span class="token comment"># 默认的首页文件，多个用空格隔开</span>
        	index index.htm index.html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		<span class="token comment"># 出现对应的 http状态码时，返回对应的错误页面</span>
        error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
            location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
            location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token comment"># Settings for a TLS enabled server.</span>
<span class="token comment"># 开启ssl加密传输,其余配置和上面类似</span>
<span class="token comment">#    server {</span>
<span class="token comment">#        listen       443 ssl http2 default_server;</span>
<span class="token comment">#        listen       [::]:443 ssl http2 default_server;</span>
<span class="token comment">#        server_name  _;</span>
<span class="token comment">#        root         /usr/share/nginx/html;</span>
<span class="token comment">#</span>
<span class="token comment">#        ssl_certificate &quot;/etc/pki/nginx/server.crt&quot;;  # ssl加密证书, 证书其实是个公钥，它会被发送到连接服务器的每个客户端</span>
<span class="token comment">#        ssl_certificate_key &quot;/etc/pki/nginx/private/server.key&quot;;  # ssl加密的私钥，私钥是用来解密的</span>
<span class="token comment">#        ssl_session_cache shared:SSL:1m; # 设置ssl/tls会话缓存的类型和大小</span>
<span class="token comment">#        ssl_session_timeout  10m; # 客户端可以重用会话缓存中ssl参数的过期时间</span>
<span class="token comment">#        ssl_ciphers PROFILE=SYSTEM; # 选择加密套件，不同的浏览器所支持的套件（和顺序）可能会不同</span>
<span class="token comment">#        ssl_prefer_server_ciphers on;</span>
<span class="token comment">#</span>
<span class="token comment">#        # Load configuration files for the default server block.</span>
<span class="token comment">#        include /etc/nginx/default.d/*.conf;</span>
<span class="token comment">#</span>
<span class="token comment">#        location / {</span>
<span class="token comment">#        }</span>
<span class="token comment">#</span>
<span class="token comment">#        error_page 404 /404.html;</span>
<span class="token comment">#            location = /40x.html {</span>
<span class="token comment">#        }</span>
<span class="token comment">#</span>
<span class="token comment">#        error_page 500 502 503 504 /50x.html;</span>
<span class="token comment">#            location = /50x.html {</span>
<span class="token comment">#        }</span>
<span class="token comment">#    }</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx文件结构" tabindex="-1"><a class="header-anchor" href="#nginx文件结构" aria-hidden="true">#</a> Nginx文件结构</h3><p>1、全局块：配置影响nginx全局的指令。一般有运行<code>nginx</code>服务器的用户组，<code>nginx</code>进程<code>pid</code>存放路径，日志存放路径，配置文件引入，允许生成<code>worker process</code>数等。</p><p>2、<code>events</code>块：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。</p><p>3、<code>http</code>块：可以嵌套多个<code>server</code>，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，<code>mime-type</code>定义，日志自定义，是否使用<code>sendfile</code>传输文件，连接超时时间，单连接请求数等。</p><p>4、<code>server</code>块：配置虚拟主机的相关参数，一个<code>http</code>中可以有多个<code>server</code>。</p><p>5、<code>location</code>块：配置请求的路由，以及各种页面的处理情况。</p><h3 id="nginx常见的配置项" tabindex="-1"><a class="header-anchor" href="#nginx常见的配置项" aria-hidden="true">#</a> Nginx常见的配置项</h3><ol><li><p><code>$remote_addr</code> 与 <code>$http_x_forwarded_for</code> 用以记录客户端的ip地址；</p></li><li><p><code>$remote_user</code> ：用来记录客户端用户名称；</p></li><li><p><code>$time_local</code> ： 用来记录访问时间与时区；</p></li><li><p><code>$request</code> ： 用来记录请求的url与http协议；</p></li><li><p><code>$status</code> ： 用来记录请求状态；成功是200；</p></li><li><p><code>$body_bytes_sent</code> ：记录发送给客户端文件主体内容大小；</p></li><li><p><code>$http_referer</code> ：用来记录从那个页面链接访问过来的；</p></li><li><p><code>$http_user_agent</code> ：记录客户端浏览器的相关信息；</p></li></ol><p>每个指令必须有分号结束。</p><h2 id="nginx命令" tabindex="-1"><a class="header-anchor" href="#nginx命令" aria-hidden="true">#</a> Nginx命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token comment"># 启动服务</span>

nginx <span class="token parameter variable">-s</span> stop <span class="token comment"># 停止服务</span>

nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># 重新加载服务，一般是修改完配置文件，执行该命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),c=[l];function t(o,d){return s(),e("div",null,c)}const m=n(i,[["render",t],["__file","Nginx入门-33a007fa.html.vue"]]);export{m as default};
