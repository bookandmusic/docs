import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,a as s,b as n,e as c,d as a}from"./app-3c21af73.js";const l={},r=a('<h1 id="docker-compose容器编排" tabindex="-1"><a class="header-anchor" href="#docker-compose容器编排" aria-hidden="true">#</a> Docker-compose容器编排</h1><p>Docker-Compose是Docker官方的开源项目，负责实现对Docker容器集群的快速编排。</p><p>docker建议我们每一个容器中只运行一个服务,因为docker容器本身占用资源极少,所以最好是将每个服务单独的分割开来。但是这样我们又面临了一个问题？</p><p>如果需要同时部署多个服务,难道要每个服务单独写Dockerfile然后在构建镜像,构建容器,这样累都累死了,所以docker官方给我们提供了docker-compose多服务部署的工具</p><p>例如要实现一个Web微服务项目，除了Web服务容器本身，往往还需要再加上后端的数据库mysql服务容器，redis服务器，注册中心eureka，甚至还包括负载均衡容器等等。。。。。。</p><p>Compose允许用户通过一个单独的 docker-compose.yml模板文件 （YAML 格式）来定义 一组相关联的应用容器为一个项目（project）。</p><p>可以很容易地用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的所有依赖，完成构建。Docker-Compose 解决了容器与容器之间如何管理编排的问题。</p><h4 id="安装流程" tabindex="-1"><a class="header-anchor" href="#安装流程" aria-hidden="true">#</a> 安装流程</h4>',8),u={href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>运行以下命令以下载 Docker Compose 的当前稳定版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要安装其他版本的 Compose，请替换 版本号即可。</p><p>将可执行权限应用于二进制文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo chmod +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建软链：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试是否安装成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker-compose version
cker-compose version 1.29.2, build 4667896b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h4><h5 id="一文件" tabindex="-1"><a class="header-anchor" href="#一文件" aria-hidden="true">#</a> 一文件</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="两要素" tabindex="-1"><a class="header-anchor" href="#两要素" aria-hidden="true">#</a> 两要素</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>服务<span class="token punctuation">(</span>service<span class="token punctuation">)</span>:
一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器。

工程<span class="token punctuation">(</span>project<span class="token punctuation">)</span>:
由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="三个步骤" tabindex="-1"><a class="header-anchor" href="#三个步骤" aria-hidden="true">#</a> 三个步骤</h5><ol><li>编写Dockerfile定义各个微服务应用并构建出对应的镜像文件</li><li>使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。</li><li>最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线</li></ol><h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-h</span>                           <span class="token comment">#  查看帮助 </span>
<span class="token function">docker-compose</span> build                     <span class="token comment"># 打包镜像</span>
<span class="token function">docker-compose</span> up                           <span class="token comment">#  启动所有 docker-compose服务 </span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>                        <span class="token comment">#  启动所有 docker-compose服务 并后台运行 </span>
<span class="token function">docker-compose</span> down                         <span class="token comment">#  停止并删除容器、网络、卷、镜像。 </span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span>  yml里面的服务id                 <span class="token comment"># 进入容器实例内部  docker-compose exec  docker-compose.yml文件中写的服务id  /bin/bash </span>
<span class="token function">docker-compose</span> <span class="token function">ps</span>                      <span class="token comment"># 展示当前docker-compose编排过的运行的所有容器 </span>
<span class="token function">docker-compose</span> <span class="token function">top</span>                     <span class="token comment"># 展示当前docker-compose编排过的容器进程 </span>
 
<span class="token function">docker-compose</span> logs  yml里面的服务id     <span class="token comment">#  查看容器输出日志 </span>
<span class="token function">docker-compose</span> config     <span class="token comment">#  检查配置 </span>
<span class="token function">docker-compose</span> config <span class="token parameter variable">-q</span>  <span class="token comment">#  检查配置，有问题才有输出 </span>
<span class="token function">docker-compose</span> restart   <span class="token comment">#  重启服务 </span>
<span class="token function">docker-compose</span> start     <span class="token comment">#  启动服务 </span>
<span class="token function">docker-compose</span> stop      <span class="token comment">#  停止服务 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="componse-编排微服务" tabindex="-1"><a class="header-anchor" href="#componse-编排微服务" aria-hidden="true">#</a> Componse 编排微服务</h2><h3 id="web服务" tabindex="-1"><a class="header-anchor" href="#web服务" aria-hidden="true">#</a> web服务</h3><h4 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ tree <span class="token builtin class-name">.</span>  
<span class="token builtin class-name">.</span>
├── app
│   ├── Dockerfile
│   ├── app.py
│   └── requirements.txt
├── docker-compose.yml
├── mysql
│   ├── conf
│   │   └── mysql.conf
│   └── data
└── redis
    ├── conf
    │   └── redis.conf
    └── data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="​app-py​​" tabindex="-1"><a class="header-anchor" href="#​app-py​​" aria-hidden="true">#</a> ​<code>app.py</code>​​</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> HTTPException
<span class="token keyword">import</span> aioredis
<span class="token keyword">import</span> aiomysql
<span class="token keyword">import</span> logging

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Redis configuration</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_redis_client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    redis <span class="token operator">=</span> aioredis<span class="token punctuation">.</span>from_url<span class="token punctuation">(</span>
        <span class="token string">&quot;redis://redis&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span> decode_responses<span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> redis


<span class="token comment"># MySQL configuration</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_mysql_pool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> aiomysql<span class="token punctuation">.</span>create_pool<span class="token punctuation">(</span>
        host<span class="token operator">=</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
        user<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
        password<span class="token operator">=</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
        db<span class="token operator">=</span><span class="token string">&quot;mydb&quot;</span><span class="token punctuation">,</span>
        autocommit<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

<span class="token comment"># Initialize database on service startup</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">initialize_database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        mysql_pool <span class="token operator">=</span> <span class="token keyword">await</span> get_mysql_pool<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">async</span> <span class="token keyword">with</span> mysql_pool<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> connection<span class="token punctuation">:</span>
            <span class="token keyword">async</span> <span class="token keyword">with</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
                <span class="token keyword">await</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
                    CREATE TABLE IF NOT EXISTS user_visits (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        visit_count INT DEFAULT 0
                    )
                &quot;&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> aiomysql<span class="token punctuation">.</span>Error <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        logging<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Failed to initialize database: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>on_event</span><span class="token punctuation">(</span><span class="token string">&quot;startup&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">startup_event</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> initialize_database<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_user_visits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        redis_client <span class="token operator">=</span> <span class="token keyword">await</span> get_redis_client<span class="token punctuation">(</span><span class="token punctuation">)</span>
        user_visits <span class="token operator">=</span> <span class="token keyword">await</span> redis_client<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;user_visits&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> user_visits <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>user_visits<span class="token punctuation">)</span>

        mysql_pool <span class="token operator">=</span> <span class="token keyword">await</span> get_mysql_pool<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">async</span> <span class="token keyword">with</span> mysql_pool<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> connection<span class="token punctuation">:</span>
            <span class="token keyword">async</span> <span class="token keyword">with</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
                <span class="token keyword">await</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT visit_count FROM user_visits&quot;</span><span class="token punctuation">)</span>
                result <span class="token operator">=</span> <span class="token keyword">await</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> result<span class="token punctuation">:</span>
                    user_visits <span class="token operator">=</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    user_visits <span class="token operator">=</span> <span class="token number">0</span>

        <span class="token keyword">await</span> redis_client<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&quot;user_visits&quot;</span><span class="token punctuation">,</span> user_visits<span class="token punctuation">)</span>
        <span class="token keyword">return</span> user_visits

    <span class="token keyword">except</span> <span class="token punctuation">(</span>aioredis<span class="token punctuation">.</span>RedisError<span class="token punctuation">,</span> aiomysql<span class="token punctuation">.</span>Error<span class="token punctuation">)</span> <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        logging<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Failed to get user visits: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">raise</span> HTTPException<span class="token punctuation">(</span>status_code<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">,</span> detail<span class="token operator">=</span><span class="token string">&quot;Internal Server Error&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">homepage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        user_visits <span class="token operator">=</span> <span class="token keyword">await</span> get_user_visits<span class="token punctuation">(</span><span class="token punctuation">)</span>
        user_visits <span class="token operator">+=</span> <span class="token number">1</span>

        redis_client <span class="token operator">=</span> <span class="token keyword">await</span> get_redis_client<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> redis_client<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&quot;user_visits&quot;</span><span class="token punctuation">,</span> user_visits<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Welcome to the homepage!&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user_visits&quot;</span><span class="token punctuation">:</span> user_visits<span class="token punctuation">}</span>
    <span class="token keyword">except</span> HTTPException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> e


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/user_visits/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_user_visits_endpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        user_visits <span class="token operator">=</span> <span class="token keyword">await</span> get_user_visits<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;user_visits&quot;</span><span class="token punctuation">:</span> user_visits<span class="token punctuation">}</span>
    <span class="token keyword">except</span> HTTPException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="​requirements-txt​​" tabindex="-1"><a class="header-anchor" href="#​requirements-txt​​" aria-hidden="true">#</a> ​<code>requirements.txt</code>​​</h4><div class="language-plaintext line-numbers-mode" data-ext="plaintext"><pre class="language-plaintext"><code>fastapi
uvicorn
aioredis
aiomysql
cryptography
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="​dockerfile​" tabindex="-1"><a class="header-anchor" href="#​dockerfile​" aria-hidden="true">#</a> ​<code>Dockerfile</code>​</h4><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># Use the official Python image</span>
<span class="token instruction"><span class="token keyword">FROM</span> python:3.9-slim</span>

<span class="token comment"># Set the working directory inside the container</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># Copy the requirements file and install dependencies</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./requirements.txt requirements.txt</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/ &amp;&amp; pip install -r requirements.txt</span>

<span class="token comment"># Copy the source code into the container</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token comment"># Expose the port the FastAPI service will listen on</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8000</span>

<span class="token comment"># Command to run the FastAPI service</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;uvicorn&quot;</span>, <span class="token string">&quot;app:app&quot;</span>, <span class="token string">&quot;--host&quot;</span>, <span class="token string">&quot;0.0.0.0&quot;</span>, <span class="token string">&quot;--port&quot;</span>, <span class="token string">&quot;8000&quot;</span>]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用compose" tabindex="-1"><a class="header-anchor" href="#使用compose" aria-hidden="true">#</a> 使用Compose</h3><p>服务编排，一套带走，安排</p><h4 id="​docker-componse-yml​​" tabindex="-1"><a class="header-anchor" href="#​docker-componse-yml​​" aria-hidden="true">#</a> ​<code>docker-componse.yml</code>​​</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">fastapi</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./app
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./app<span class="token punctuation">:</span>/app  <span class="token comment"># Mount the web service code directory</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis
      <span class="token punctuation">-</span> mysql

  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;redis:latest&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./redis/conf<span class="token punctuation">:</span>/usr/local/etc/redis/  <span class="token comment"># Mount the Redis configuration file</span>
      <span class="token punctuation">-</span> ./redis/data<span class="token punctuation">:</span>/data  <span class="token comment"># Mount the Redis data directory</span>

  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql:latest&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> <span class="token string">&quot;mydb&quot;</span>
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> <span class="token string">&#39;liusf&#39;</span> 
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;liusf123&#39;</span> 
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span> 
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./mysql/conf<span class="token punctuation">:</span>/etc/mysql/conf.d/  <span class="token comment"># Mount the MySQL configuration file</span>
      <span class="token punctuation">-</span> ./mysql/data<span class="token punctuation">:</span>/var/lib/mysql  <span class="token comment"># Mount the MySQL data directory</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password <span class="token comment">#解决外部无法访问 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="管理服务" tabindex="-1"><a class="header-anchor" href="#管理服务" aria-hidden="true">#</a> 管理服务</h4><p>打包镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span>  <span class="token parameter variable">-f</span> docker-compose.yml build                              
redis uses an image, skipping
mysql uses an image, skipping
Building fastapi
<span class="token punctuation">[</span>+<span class="token punctuation">]</span> Building <span class="token number">15</span>.6s <span class="token punctuation">(</span><span class="token number">10</span>/10<span class="token punctuation">)</span> FINISHED                                                                                                          
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load build definition from Dockerfile                                                                                      <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring dockerfile: 37B                                                                                                       <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load .dockerignore                                                                                                         <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring context: 2B                                                                                                           <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load metadata <span class="token keyword">for</span> docker.io/library/python:3.9-slim                                                                       <span class="token number">15</span>.4s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>/5<span class="token punctuation">]</span> FROM docker.io/library/python:3.9-slim@sha256:f4efbe5d1eb52c221fded79ddf18e4baa0606e7766afe2f07b0b330a9e79564a                  <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load build context                                                                                                         <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring context: 174B                                                                                                         <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> CACHED <span class="token punctuation">[</span><span class="token number">2</span>/5<span class="token punctuation">]</span> WORKDIR /app                                                                                                             <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> CACHED <span class="token punctuation">[</span><span class="token number">3</span>/5<span class="token punctuation">]</span> COPY ./requirements.txt requirements.txt                                                                                 <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> CACHED <span class="token punctuation">[</span><span class="token number">4</span>/5<span class="token punctuation">]</span> RUN pip config <span class="token builtin class-name">set</span> global.index-url https://mirrors.aliyun.com/pypi/simple/ <span class="token operator">&amp;&amp;</span> pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt           <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> CACHED <span class="token punctuation">[</span><span class="token number">5</span>/5<span class="token punctuation">]</span> COPY <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span>                                                                                                                 <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> exporting to image                                                                                                                    <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> exporting layers                                                                                                                   <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> writing image sha256:735268fa6c6c874af02e0be37b098c5f3032215d5787d0bbec78032c95b87582                                              <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> naming to docker.io/library/docker-compose_fastapi 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后台启动所有服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose.yml up <span class="token parameter variable">-d</span>
Creating network <span class="token string">&quot;docker-compose_default&quot;</span> with the default driver
Creating docker-compose_redis_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating docker-compose_mysql_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating docker-compose_fastapi_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-v</span> localhost:8000/          
*   Trying ::1<span class="token punctuation">..</span>.
* TCP_NODELAY <span class="token builtin class-name">set</span>
* Connected to localhost <span class="token punctuation">(</span>::1<span class="token punctuation">)</span> port <span class="token number">8000</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
<span class="token operator">&gt;</span> GET / HTTP/1.1
<span class="token operator">&gt;</span> Host: localhost:8000
<span class="token operator">&gt;</span> User-Agent: curl/7.64.1
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span> 
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">200</span> OK
<span class="token operator">&lt;</span> date: Sun, <span class="token number">30</span> Jul <span class="token number">2023</span> 02:37:11 GMT
<span class="token operator">&lt;</span> server: uvicorn
<span class="token operator">&lt;</span> content-length: <span class="token number">55</span>
<span class="token operator">&lt;</span> content-type: application/json
<span class="token operator">&lt;</span> 
* Connection <span class="token comment">#0 to host localhost left intact</span>
<span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Welcome to the homepage!&quot;</span>,<span class="token string">&quot;user_visits&quot;</span>:42<span class="token punctuation">}</span>* Closing connection <span class="token number">0</span>

$ <span class="token function">curl</span> <span class="token parameter variable">-v</span> localhost:8000/user_visits/     
*   Trying ::1<span class="token punctuation">..</span>.
* TCP_NODELAY <span class="token builtin class-name">set</span>
* Connected to localhost <span class="token punctuation">(</span>::1<span class="token punctuation">)</span> port <span class="token number">8000</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
<span class="token operator">&gt;</span> GET /user_visits/ HTTP/1.1
<span class="token operator">&gt;</span> Host: localhost:8000
<span class="token operator">&gt;</span> User-Agent: curl/7.64.1
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span> 
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">200</span> OK
<span class="token operator">&lt;</span> date: Sun, <span class="token number">30</span> Jul <span class="token number">2023</span> 02:37:17 GMT
<span class="token operator">&lt;</span> server: uvicorn
<span class="token operator">&lt;</span> content-length: <span class="token number">18</span>
<span class="token operator">&lt;</span> content-type: application/json
<span class="token operator">&lt;</span> 
* Connection <span class="token comment">#0 to host localhost left intact</span>
<span class="token punctuation">{</span><span class="token string">&quot;user_visits&quot;</span>:42<span class="token punctuation">}</span>* Closing connection <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39);function k(v,m){const e=o("ExternalLinkIcon");return p(),i("div",null,[r,s("p",null,[n("Linux 上我们可以从 Github 上下载它的二进制包来使用，最新发行的版本地址："),s("a",u,[n("https://github.com/docker/compose/releases"),c(e)]),n("。")]),d])}const h=t(l,[["render",k],["__file","Docker-compose.html.vue"]]);export{h as default};
