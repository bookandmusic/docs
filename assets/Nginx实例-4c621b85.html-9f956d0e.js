import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as d}from"./app-76561525.js";const s={},l=d(`<p>本文将以具体的实例演示使用Nginx搭建动态网站和静态网站的大体流程，注意：本文仅供参考。</p><h2 id="部署静态网站" tabindex="-1"><a class="header-anchor" href="#部署静态网站" aria-hidden="true">#</a> 部署静态网站</h2><blockquote><p>以下以<code>hexo</code>静态博客为例，演示部署流程</p></blockquote><ul><li><p>将生成的静态资源文件夹放到 <code>/var/www/</code>中，起名为<code>blog</code></p></li><li><p>打开 <code>nginx</code>配置文件，添加 <code>server</code> 模块</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>server {
    listen 80;
    server_name localhost:80;

    location / {
        alias /usr/local/var/www/blog/;
        index index.html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>listen</code>指的是 后期可以在哪个端口中，访问博客，<code>http</code>协议默认端口是 80，hexo博客部署的也是顶级路径，也就是 如果服务器域名是 <code>http://www.bookandmusic.cn/</code>, hexo服务的主页路径也是 <code>http://www.bookandmusic.cn/</code></p></li></ul><h2 id="部署动态网站" tabindex="-1"><a class="header-anchor" href="#部署动态网站" aria-hidden="true">#</a> 部署动态网站</h2><blockquote><p>以下以 <code>django</code>项目为例，演示 部署流程</p></blockquote><ul><li><p>确定 django项目中的静态资源路径以及 <code>supervisor</code> 启动的django服务的地址</p></li><li><p>打开 <code>nginx</code>配置文件，添加 <code>server</code> 模块</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>server {
    listen 443;
    server_name localhost:7003;
    <span class="token comment"># 静态文件配置</span>
    location /static/ {
        alias /Users/lsf/PycharmProjects/DjangoBlog/collectedstatic/;
        expires max;
        access_log        off;
        log_not_found    off;
    }
    location /media/ {
        <span class="token comment"># 静态文件配置</span>
        alias /Users/lsf/PycharmProjects/DjangoBlog/uploads/;
        expires max;
    }
    location ~ \\.py$ {
        return 403;
    }
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_redirect off;
        if (!-f $request_filename) {
            proxy_pass http://127.0.0.1:8000;
            break;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>https</code>协议默认的端口是443，此时默认部署的django项目的路径为 顶级路径，也就是 如果服务器域名是 <code>https://www.bookandmusic.cn/</code>, django服务的主页路径也是 <code>https://www.bookandmusic.cn/</code></p></li></ul><blockquote><p>部署 <code>https://</code>协议对应的网站，需要指明 <code>ssl</code>证书和解密私钥</p></blockquote><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><h3 id="静态网站" tabindex="-1"><a class="header-anchor" href="#静态网站" aria-hidden="true">#</a> 静态网站</h3><p>现在有三个不同的服务：</p><ul><li><p><code>http://127.0.0.1:7000/</code>: 博客服务</p></li><li><p><code>http://127.0.0.1:7001/</code>: django文档服务</p></li><li><p><code>http://127.0.0.1:7002/</code>: flask文档服务</p></li></ul><p>此时，想要在同样的域名 <code>http://www.bookandmusic.cn/</code>下，通过不同的子路径来体现不同的服务</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://127.0.0.1:7000/;
    }

    location /drf/ {
        proxy_pass http://127.0.0.1:7001/;
    }

    location /flask/ {
        proxy_pass http://127.0.0.1:7002/;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态网站" tabindex="-1"><a class="header-anchor" href="#动态网站" aria-hidden="true">#</a> 动态网站</h3><blockquote><p>如果想要将 django动态服务，部署到 子路径<code>/django/</code>下</p></blockquote><ul><li>首先需要修改<code>django</code>项目的 主路由，在 所有的 路由地址前面，添加 <code>/django/</code>路由前缀</li><li>其次，修改 静态资源的 <code>url</code>前缀，也就是 <code>MEDIA_URL</code> 和 <code>STATIC_URL</code>，添加 <code>/django/</code>前缀</li><li>最后，才是 修改 <code>nginx</code>配置，添加前缀</li></ul><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>server {
    listen 7003;
    server_name localhost:7003;
    location /django/static/ {
        alias /Users/lsf/PycharmProjects/DjangoBlog/collectedstatic/;
        expires max;
        access_log        off;
        log_not_found    off;
    }
    location /django/media/ {
        <span class="token comment"># 静态文件配置</span>
        alias /Users/lsf/PycharmProjects/DjangoBlog/uploads/;
        expires max;
    }
    location ~ \\.py$ {
        return 403;
    }
    location /django/ {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_redirect off;
        if (!-f $request_filename) {
            proxy_pass http://127.0.0.1:8000;
            break;
        }
    }
}


server {
    listen 80;
    server_name localhost;

   	
    location /django/ {
        proxy_pass http://127.0.0.1:7003/;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此时，就可以通过 <code>https://www.bookandmusic.cn/django/</code> 访问项目</li></ul><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>django项目，现在部署了多个服务</p><ul><li><p><code>http://127.0.0.1:7000/</code></p></li><li><p><code>http://127.0.0.1:7001/</code></p></li><li><p><code>http://127.0.0.1:7002/</code></p></li></ul><p>此时，为了分担压力，在访问 <code>https://www.bookandmusic.cn/</code>时，需要 分发到不同的服务中，也就是所谓的负载均衡</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>upstream django {
    <span class="token comment"># 此时配置服务时，不需要要 http或https</span>
    server 127.0.0.1:7000;
    server 127.0.0.1:7001;
    server 127.0.0.1:7002;
}

server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://django/;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),a=[l];function c(r,o){return i(),n("div",null,a)}const t=e(s,[["render",c],["__file","Nginx实例-4c621b85.html.vue"]]);export{t as default};
