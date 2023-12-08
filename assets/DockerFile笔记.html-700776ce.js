import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as t,a as n,b as s,e as c,d as e}from"./app-21664fcf.js";const r="/assets/24-20230617203318-sx7n658-74a7a783.png",d="/assets/25-20230617203318-kck08g8-de4c177e.png",p="/assets/26-20230617203318-609hkzg-a4f28acc.png",u={},v=e('<h1 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> DockerFile</h1><h2 id="dockerfile是什么" tabindex="-1"><a class="header-anchor" href="#dockerfile是什么" aria-hidden="true">#</a> DockerFile是什么</h2><p>DockerFile是用来构建Docker镜像的文本文件，是有一条条构建镜像所需的指令和参数构成的脚本。</p><p>​<img src="'+r+'" alt="24" loading="lazy">​</p>',4),k={href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"},m=e('<p>构建三步骤</p><ol><li>编写DockerFile文件</li><li>docker build命令构建镜像</li><li>docker run 依镜像运行容器实例</li></ol><h2 id="dockerfile构建过程解析" tabindex="-1"><a class="header-anchor" href="#dockerfile构建过程解析" aria-hidden="true">#</a> DockerFile构建过程解析</h2><p><strong>DockerFile内容基础知识</strong></p><ol><li>每条保留字指令都必须为大写字母且后面跟随至少一个参数</li><li>指令按照从上到下，顺序执行</li><li>​<code>#</code>​表示注释</li><li>每条指令都会创建一个新的镜像层并对镜像进行提交。</li></ol><p><strong>Docker执行DockerFile的大致流程</strong></p><ol><li>docker从技术镜像运行一个容器</li><li>执行一条指令比鞥对容器做出修改</li><li>执行类似docker commit 的操作提交一个新的镜像层</li><li>docker 在基于刚提交的镜像运行一个新容器</li><li>执行dockerfile中的下一条指令直到所有执行执行完成。</li></ol><blockquote><p>总结</p></blockquote><p>从应用软件的角度来看，Dockerfile、Docker镜像与Docker容器分别代表软件的三个不同阶段，</p><ul><li><p>Dockerfile是软件的原材料</p></li><li><p>Docker镜像是软件的交付品</p></li><li><p>Docker容器则可以认为是软件镜像的运行态，也即依照镜像运行的容器实例</p></li></ul><p>Dockerfile面向开发，Docker镜像成为交付标准，Docker容器则涉及部署与运维，三者缺一不可，合力充当Docker体系的基石。</p><p>​<img src="'+d+`" alt="25" loading="lazy">​</p><ol><li>Dockerfile，需要定义一个Dockerfile，Dockerfile定义了进程需要的一切东西。Dockerfile涉及的内容包括执行代码或者是文件、环境变量、依赖包、运行时环境、动态链接库、操作系统的发行版、服务进程和内核进程(当应用进程需要和系统服务和内核进程打交道，这时需要考虑如何设计namespace的权限控制)等等;</li><li>Docker镜像，在用Dockerfile定义一个文件之后，docker build时会产生一个Docker镜像，当运行 Docker镜像时会真正开始提供服务;</li><li>Docker容器，容器是直接提供服务的。</li></ol><h2 id="常用保留字指令" tabindex="-1"><a class="header-anchor" href="#常用保留字指令" aria-hidden="true">#</a> 常用保留字指令</h2><blockquote><p>From</p></blockquote><p>基础镜像，当前新镜像是基于哪个镜像的，指定一个已经存在的镜像作为模板，第一条必须是from</p><blockquote><p>MANINTAINER</p></blockquote><p>镜像维护者的姓名和邮箱地址</p><blockquote><p>Run</p></blockquote><p>容器构建时需要运行的命令</p><p>两种格式：</p><p>shell格式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>命令行命令<span class="token operator">&gt;</span>等同于，在终端操作的shell命令

RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>exec格式</p><p>​<img src="`+p+`" alt="26" loading="lazy">​</p><p><strong><mark>RUN是在docker build时运行</mark></strong></p><blockquote><p>EXPOSE</p></blockquote><p>当前容器对外暴露出的端口</p><blockquote><p>WORKDIR</p></blockquote><p>指定在创建容器后。终端默认登录的进来工作目录，一个落脚点。</p><blockquote><p>USER</p></blockquote><p>指定该镜像以什么样的用户去执行，如果都不指定，默认是root</p><blockquote><p>ENV</p></blockquote><p>用来在构建镜像过程中设置环境变量</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">ENV</span> <span class="token value attr-value">MY_PATH /usr/mytest </span>
<span class="token key attr-name">这个环境变量可以在后续的任何RUN指令中使用，这就如同在命令前面指定了环境变量前缀一样；</span> 
<span class="token key attr-name">也可以在其它指令中直接使用这些环境变量，</span> 
  
<span class="token key attr-name">比如：WORKDIR</span> <span class="token value attr-value">$MY_PATH </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ADD</p></blockquote><p>将宿主机目录下的文件拷贝进镜像且会自动处理URL和解压tar压缩包</p><blockquote><p>COPY</p></blockquote><p>类似ADD，拷贝文件和目录到镜像中。将从构建上下文目录中&lt;源路径&gt;的文件/目录复制到新的一层镜像内的&lt;目标路径&gt;位置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>COPY src dest

COPY<span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span>,<span class="token string">&quot;dest&quot;</span><span class="token punctuation">]</span>

<span class="token operator">&lt;</span>src源路径<span class="token operator">&gt;</span>：源文件或源目录

<span class="token operator">&lt;</span>dest目标路径<span class="token operator">&gt;</span>: 容器内的指定路径，该路径不用事先建好，路径不存在的话，会自动创建。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>VOLUME</p></blockquote><p>容器数据卷，用于数据保存和持久化的工作</p><blockquote><p>CMD</p></blockquote><p>​​为启动的容器指定默认要运行的程序，程序运行结束，容器也就结束；​</p><p><strong><mark>Dockerfile 中可以由多个CMD指令，但是只有最后一个生效，CMD会被docker run 之后的参数替换。</mark></strong></p><p>他和前面RUN命令的区别：</p><ul><li><p><strong><mark>CMD 是在 docker run 时运行。</mark></strong></p></li><li><p><strong><mark>RUN 是在docker build 时运行</mark></strong></p></li></ul><blockquote><p>ENTRYPOINT</p></blockquote><p>也是用来指定一个容器启动时要运行的命令</p><p>类似于CMD指令，但是ENTRYPOINT不会被<code>docker run ​</code>​后面的命令覆盖，而且这些命令行参数会被当作参数送给ENTRYPOINT指令指定的程序。</p><p>命令格式：<code>ENTRYPOINT[&quot;&lt;executeable&gt;&quot;,&quot;&lt;param1&gt;&quot;,&quot;&lt;param2&gt;&quot;,...]</code>​</p><p>ENTRYPOINT 可以和CMD一起用，一般是 变参 才会使用 CMD ，这里的CMD等于是在给 ENTRYPOINT 传参。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx</span>

<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-c&quot;</span>]  #定参</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;/etc/nginx/nginx.conf&quot;</span>] # 变参</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>是否传参</th><th>按照dockerfile编写执行</th><th>传参运行</th></tr></thead><tbody><tr><td>Docker命令</td><td>​<code>docker run nginx:test</code>​</td><td>​<code>docker run nginx:test -c /etc/nginx/new.conf</code>​</td></tr><tr><td>衍生出的实际命令</td><td>​<code>nginx -c /etc/nginx/nginx.conf</code>​</td><td>​<code>nginx -c /etc/nginx/new.conf</code>​</td></tr></tbody></table><p>优点：<strong><mark>在执行docker run 的时候可以指定 ENTRYPOINT 运行所需的参数。</mark></strong></p><p>注意：<strong><mark>如果Dockerfile 中如果存在多个 ENTRYPOINT 指令，仅最后一个生效。</mark></strong></p><blockquote><p>小总结</p></blockquote><pre><code> ​![28](assets/28-20230617203318-5yyl471.png)​
</code></pre><blockquote><p>自定义myubuntu</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编写</span>
准备编写DockerFile文件
<span class="token function">vim</span> Dockerfile
----------------------
FROM ubuntu
MAINTAINER liusf<span class="token operator">&lt;</span>lsf_2012@163.com<span class="token operator">&gt;</span> 
  
ENV MYPATH /usr/local 
WORKDIR <span class="token variable">$MYPATH</span> 
  
RUN <span class="token function">apt-get</span> update 
RUN <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools <span class="token function">vim</span>
  
EXPOSE <span class="token number">80</span> 
  
CMD <span class="token builtin class-name">echo</span> <span class="token variable">$MYPATH</span> 
CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;install inconfig cmd into ubuntu success--------------ok&quot;</span> 
CMD /bin/bash 
------------------------
<span class="token comment"># 构建</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> 新镜像名字:TAG

<span class="token comment">#运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> 新镜像名字:TAG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>‍</p><h2 id="最小镜像" tabindex="-1"><a class="header-anchor" href="#最小镜像" aria-hidden="true">#</a> 最小镜像</h2><p>​<code>scratch</code>​</p><p>官方说明：该镜像是一个空的镜像，可以用于构建基础镜像（例如 Debian、Busybox）或超小镜像，可以说是真正的从零开始构建属于自己的镜像。</p><p>从 Docker 1.5.0 开始，<code>FROM scratch</code>​在DockerFile中是一个无操作，并且不会在镜像中创建额外的层（因此以前的 2 层镜像将改为 1 层镜像）。</p><blockquote><p>解决了先有鸡还是先有蛋的问题，即第一个镜像是怎么来的</p></blockquote><p>实际上，我们可以创建自己的 scratch 镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">tar</span> cv --files-from /dev/null <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - scratch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是一个简单的 Go 语言开发的 web 程序代码：</p><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>package main

import (
	&quot;fmt&quot;
	&quot;net/http&quot;
)

func main() {
	http.HandleFunc(&quot;/&quot;, func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, &quot;Hello, you&#39;ve requested: %s\\n&quot;, r.URL.Path)
	})

	http.ListenAndServe(&quot;:80&quot;, nil)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用 <code>go build</code>​构建 helloworld 可执行文件的时候指定静态链接标志 <code>-static</code>​ 和其他参数，使生成的 helloowrld 二进制文件静态链接所有的库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux go build <span class="token parameter variable">-a</span> <span class="token parameter variable">-ldflags</span> <span class="token string">&#39;-extldflags &quot;-static&quot;&#39;</span> <span class="token parameter variable">-o</span> helloworld <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以 scratch 为基础制作 docker 镜像，dockerfile 如下：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> scratch</span>
<span class="token instruction"><span class="token keyword">ADD</span> helloworld /</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;/helloworld&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来开始编译并构建 docker 镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> helloworld <span class="token builtin class-name">.</span>
Sending build context to Docker daemon  <span class="token number">7</span>.376MB
Step <span class="token number">1</span>/3 <span class="token builtin class-name">:</span> FROM scratch
 ---<span class="token operator">&gt;</span>
Step <span class="token number">2</span>/3 <span class="token builtin class-name">:</span> ADD helloworld /
 ---<span class="token operator">&gt;</span> 000f150706c7
Step <span class="token number">3</span>/3 <span class="token builtin class-name">:</span> CMD <span class="token punctuation">[</span><span class="token string">&quot;/helloworld&quot;</span><span class="token punctuation">]</span>
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> f9c2c6932a34
Removing intermediate container f9c2c6932a34
 ---<span class="token operator">&gt;</span> 496f865c05e4
Successfully built 496f865c05e4
Successfully tagged helloworld:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样镜像就构建成功了，我们来看一下大小</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mc@mcmbp:~/gocode/src/hello<span class="token comment"># docker image ls</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
helloworld          latest              496f865c05e4        <span class="token number">8</span> seconds ago       <span class="token number">7</span>.37MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 docker 镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-ti</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 helloworld
3c77ae750352245369c4d142e4e57fd3c0f1e11d67ef857235417ec475ef6286
mc@mcmbp:~/gocode/src/hello<span class="token comment"># curl -v localhost</span>
* Rebuilt URL to: localhost/
*   Trying <span class="token number">127.0</span>.0.1<span class="token punctuation">..</span>.
* Connected to localhost <span class="token punctuation">(</span><span class="token number">127.0</span>.0.1<span class="token punctuation">)</span> port <span class="token number">80</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
<span class="token operator">&gt;</span> GET / HTTP/1.1
<span class="token operator">&gt;</span> Host: localhost
<span class="token operator">&gt;</span> User-Agent: curl/7.47.0
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">200</span> OK
<span class="token operator">&lt;</span> Date: Tue, <span class="token number">19</span> Mar <span class="token number">2019</span> <span class="token number">12</span>:54:28 GMT
<span class="token operator">&lt;</span> Content-Length: <span class="token number">27</span>
<span class="token operator">&lt;</span> Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token operator">&lt;</span>
Hello, you&#39;ve requested: /
* Connection <span class="token comment">#0 to host localhost left intact</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多阶段构建" tabindex="-1"><a class="header-anchor" href="#多阶段构建" aria-hidden="true">#</a> 多阶段构建</h2><p>对于上面的构建过程实在是过于麻烦，对于有些有强迫症的程序员来说，他们想更进一步，为什么不在容器里面编译可执行文件然后再构建镜像呢？这样的好处在于可以控制 Go 语言的编译环境，保证可重复编译，而且对于某些与持续集成工具集成的项目来说十分友好。</p><p>Docker-CE 17.5 引入了一个从 scratch 构建镜像的新特性，叫做“Multi-Stage Builds”。有了这个新特性之后，我们可以这样去写我们的 dockerfile:</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang <span class="token keyword">as</span> compiler</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /opt/helloworld/</span>
<span class="token instruction"><span class="token keyword">ADD</span> * .</span>
<span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 GOOS=linux go build -a -ldflags <span class="token string">&#39;-extldflags &quot;-static&quot;&#39;</span> -o helloworld .</span>

<span class="token instruction"><span class="token keyword">FROM</span> scratch</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">compiler</span></span> /opt/helloworld/helloworld .</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./helloworld&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是的，你没有看错，确实是一个 dockerfile 里面包含两个 FROM 指令，需要说明的是：</p><ol><li>​<code>FROM golang as compiler</code>​ 是给第一阶段的构建起一个名字叫 <code>compiler</code>​</li><li>​<code>COPY --from=compiler /opt/helloworld/helloworld .</code>​ 是引用第一阶段的构建产出，以此构建第二阶段</li></ol><p>如果你没有给第一阶段起名，可以使用构建阶段的序号(以0开始)来指定，像这样：<code>--from=0</code>​，但是出于可读性的考虑，起名感觉更好一点儿。</p><p>构建镜像</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ docker build -f Dockerfile -t liusf/helloworld:v1 .
[+] Building 25.7s (11/11) FINISHED                                                                                                                         
 =&gt; [internal] load build definition from Dockerfile                                                                                                       0.0s
 =&gt; =&gt; transferring dockerfile: 298B                                                                                                                       0.0s
 =&gt; [internal] load .dockerignore                                                                                                                          0.0s
 =&gt; =&gt; transferring context: 2B                                                                                                                            0.0s
 =&gt; [internal] load metadata for docker.io/library/golang:latest                                                                                          15.4s
 =&gt; [compiler 1/4] FROM docker.io/library/golang@sha256:c72fa9afc50b3303e8044cf28fb358b48032a548e1825819420fd40155a131cb                                   0.0s
 =&gt; CACHED [stage-1 1/2] WORKDIR /app                                                                                                                      0.0s
 =&gt; [internal] load build context                                                                                                                          0.0s
 =&gt; =&gt; transferring context: 382B                                                                                                                          0.0s
 =&gt; CACHED [compiler 2/4] WORKDIR /opt/helloworld/                                                                                                         0.0s
 =&gt; [compiler 3/4] ADD * .                                                                                                                                 0.0s
 =&gt; [compiler 4/4] RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags &#39;-extldflags &quot;-static&quot;&#39; -o helloworld .                                              10.0s
 =&gt; [stage-1 2/2] COPY --from=compiler /opt/helloworld/helloworld .                                                                                        0.0s
 =&gt; exporting to image                                                                                                                                     0.1s
 =&gt; =&gt; exporting layers                                                                                                                                    0.1s
 =&gt; =&gt; writing image sha256:ac3add61f74c073f6b901d2a4ad82a312bc5f039f8a4fd7fed73d1132871e2e5                                                               0.0s
 =&gt; =&gt; naming to docker.io/liusf/helloworld:v1                                                                                                             0.0s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建完成后我们来看镜像的大小：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ docker images                                  
REPOSITORY                      TAG       IMAGE ID       CREATED          SIZE
liusf/helloworld                v1        ac3add61f74c   16 seconds ago   6.07MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 docker 镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-dit</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> hellworld liusf/helloworld:v1
3c77ae750352245369c4d142e4e57fd3c0f1e11d67ef857235417ec475ef6286

$ <span class="token function">curl</span> <span class="token parameter variable">-v</span> localhost
*   Trying ::1<span class="token punctuation">..</span>.
* TCP_NODELAY <span class="token builtin class-name">set</span>
* Connected to localhost <span class="token punctuation">(</span>::1<span class="token punctuation">)</span> port <span class="token number">80</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
<span class="token operator">&gt;</span> GET / HTTP/1.1
<span class="token operator">&gt;</span> Host: localhost
<span class="token operator">&gt;</span> User-Agent: curl/7.64.1
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span> 
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">200</span> OK
<span class="token operator">&lt;</span> Date: Sat, <span class="token number">29</span> Jul <span class="token number">2023</span> <span class="token number">23</span>:40:35 GMT
<span class="token operator">&lt;</span> Content-Length: <span class="token number">27</span>
<span class="token operator">&lt;</span> Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token operator">&lt;</span> 
Hello, you&#39;ve requested: /
* Connection <span class="token comment">#0 to host localhost left intact</span>
* Closing connection <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们就将编译并创建最终镜像集成到一个 dockerfile 里面了，而且构建出来的镜像体积也非常小。</p><p>‍</p>`,95);function b(g,h){const a=i("ExternalLinkIcon");return o(),t("div",null,[v,n("p",null,[s("官网："),n("a",k,[s("https://docs.docker.com/engine/reference/builder/"),c(a)])]),m])}const q=l(u,[["render",b],["__file","DockerFile笔记.html.vue"]]);export{q as default};
