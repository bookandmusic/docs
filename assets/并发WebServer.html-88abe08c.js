import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-21664fcf.js";const t="/assets/P4p4aJ-c6bb6ffe.png",p="/assets/VCbTGL-8dec8f21.png",o={},c=e(`<p>下面我们使用 <code>Python</code> 来实现并发的 <code>Web Server</code>，其中采用了多进程、多线程、协程、单进程单线程非阻塞、<code>select</code>、<code>epoll</code>的方式。</p><h2 id="多进程" tabindex="-1"><a class="header-anchor" href="#多进程" aria-hidden="true">#</a> 多进程</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re
<span class="token keyword">import</span> multiprocessing

<span class="token comment">#  注意： 不同的实现方式，但是对请求的处理方式相同，只是主函数中对客户端请求的接收方式不同 </span>
<span class="token keyword">def</span> <span class="token function">handle_request</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 接收请求</span>
        recv_msg <span class="token operator">=</span> new_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> recv_msg <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;recv null&quot;</span><span class="token punctuation">)</span>
            new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>

        <span class="token comment"># 从请求中解析出URI</span>
        recv_lines <span class="token operator">=</span> recv_msg<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>recv_lines<span class="token punctuation">)</span>
        <span class="token comment"># 使用正则表达式提取出URI</span>
        ret <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&quot;[^/]+(/[^ ]*)&quot;</span><span class="token punctuation">,</span> recv_lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
            <span class="token comment"># 获取URI字符串</span>
            file_name <span class="token operator">=</span> ret<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token comment"># 如果URI是/，则默认返回index.html的内容</span>
            <span class="token keyword">if</span> file_name <span class="token operator">==</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">:</span>
                file_name <span class="token operator">=</span> <span class="token string">&quot;/index.html&quot;</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token comment"># 根据请求的URI，读取相应的文件</span>
            fp <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token comment"># 找不到文件，响应404</span>
            response_msg <span class="token operator">=</span> <span class="token string">&quot;HTTP/1.1 404 NOT FOUND\\r\\n&quot;</span>
            response_msg <span class="token operator">+=</span> <span class="token string">&quot;\\r\\n&quot;</span>
            response_msg <span class="token operator">+=</span> <span class="token string">&quot;&lt;h1&gt;----file not found----&lt;/h1&gt;&quot;</span>
            new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response_msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            html_content <span class="token operator">=</span> fp<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
            fp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
            response_body <span class="token operator">=</span> html_content

            <span class="token comment"># 响应正确 200 OK</span>
            response_header <span class="token operator">=</span> <span class="token string">&quot;HTTP/1.1 200 OK\\r\\n&quot;</span>
            response_header <span class="token operator">+=</span> <span class="token string">&quot;Content-Length:%d\\r\\n&quot;</span> <span class="token operator">%</span> <span class="token builtin">len</span><span class="token punctuation">(</span>response_body<span class="token punctuation">)</span>
            response_header <span class="token operator">+=</span> <span class="token string">&quot;\\r\\n&quot;</span>

            response <span class="token operator">=</span> response_header<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> response_body

            <span class="token comment"># 返回响应数据</span>
            new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建TCP SOCKET实例</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># # 设置重用地址</span>
    <span class="token comment"># tcp_server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span>
    <span class="token comment"># 绑定地址（默认本机IP）和端口</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 监听</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment"># 循环接收客户端连接</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 启动一个子进程来处理客户端的请求</span>
        sub_p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>handle_request<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        sub_p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 这里要关闭父进程中的new_socket，因为创建子进程会复制一份new_socket给子进程</span>
        new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 关闭整个SOCKET</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用进程来实现并发的 Web Server，也就是将 <code>accept</code> 到 <code>new_socket</code> 传递给子进程去处理，处理函数还是 <code>handle_request</code>。</p><p>但是这里注意，子进程会从父进程中将所有的变量<strong>进行拷贝</strong>，也就是说父进程和子进程中<strong>各有一份 new_socket</strong>，而在 <code>Linux</code> 下，<code>socket</code> 对应的也是一个文件描述符，而这两个 <code>new_socket</code> 实际上是指向同一个 <code>fd</code> 的。所以我们将 <code>new_socket</code> 交给子进程后，父进程就可以马上关闭自己的 <code>new_socket</code> 了，当子进程服务完毕后，关闭子进程中的 <code>new_socket</code>，这样<strong>对应的 <code>FD</code> 才会正真关闭，此时才会触发四次挥手。所以父进程代码中的 <code>new_socket.close()</code> 非常重要。</strong></p><h2 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h2><p>在第一节中，我们使用进程来实现并发，但是进程对资源消耗很大，一般不推荐使用。所以这里我们使用线程来实现并发，很简单，我们将 <code>multiprocessing.Process</code> 替换为 <code>threaing.Thread</code> 就可以了：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re
<span class="token keyword">import</span> threading
<span class="token keyword">from</span> web_server <span class="token keyword">import</span> handle_request

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建TCP SOCKET实例</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># 设置重用地址</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment"># 绑定地址（默认本机IP）和端口</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 监听</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment"># 循环接收客户端连接</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 启动一个线程来处理客户端的请求</span>
        t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>handle_request<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 关闭整个SOCKET</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现，除了将子进程的创建过程替换成了线程的创建过程，后面的 <code>new_socket.close(</code>) 也被删除了，这是因为线程是公用进程资源的，<code>new_socket</code> 不会被复制，所以 <code>socket</code> 对应的 FD，只有一个 new_socket 指向他。</p><p>如果此时我们仍然在这里关闭 <code>new_socket</code>，那么在线程再使用 <code>new_socket</code> 就会报错。如下信息：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Exception <span class="token keyword">in</span> thread Thread<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/threading.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">926</span><span class="token punctuation">,</span> <span class="token keyword">in</span> _bootstrap_inner
    self<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
  File <span class="token string">&quot;/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/threading.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">870</span><span class="token punctuation">,</span> <span class="token keyword">in</span> run
    self<span class="token punctuation">.</span>_target<span class="token punctuation">(</span><span class="token operator">*</span>self<span class="token punctuation">.</span>_args<span class="token punctuation">,</span> <span class="token operator">**</span>self<span class="token punctuation">.</span>_kwargs<span class="token punctuation">)</span>
  File <span class="token string">&quot;/Users/mac/PycharmProjects/Month2/web_server.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">9</span><span class="token punctuation">,</span> <span class="token keyword">in</span> handle_request
    recv_msg <span class="token operator">=</span> new_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
OSError<span class="token punctuation">:</span> <span class="token punctuation">[</span>Errno <span class="token number">9</span><span class="token punctuation">]</span> Bad <span class="token builtin">file</span> descriptor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="协程并发" tabindex="-1"><a class="header-anchor" href="#协程并发" aria-hidden="true">#</a> 协程并发</h2><p>使用进程和线程来实现的并发 Web Server，当并发访问量很大时，资源消耗都很高。所以这里使用协程来实现并发服务器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re
<span class="token keyword">import</span> gevent
<span class="token keyword">from</span> gevent <span class="token keyword">import</span> monkey
monkey<span class="token punctuation">.</span>patch_all<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> web_server <span class="token keyword">import</span> handle_request


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建TCP SOCKET实例</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># # 设置重用地址</span>
    <span class="token comment"># tcp_server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span>
    <span class="token comment"># 绑定地址（默认本机IP）和端口</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 监听</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment"># 循环接收客户端连接</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 启动一个协程来处理客户端的请求</span>
        gevent<span class="token punctuation">.</span>spawn<span class="token punctuation">(</span>handle_request<span class="token punctuation">,</span> new_socket<span class="token punctuation">)</span>

    <span class="token comment"># 关闭整个SOCKET</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 gevent 来实现协程，并发处理请求。</p><h2 id="单线程非阻塞" tabindex="-1"><a class="header-anchor" href="#单线程非阻塞" aria-hidden="true">#</a> 单线程非阻塞</h2><p>前面我们使用的多进程和多线程来处理并发，是因为 <code>socket.recv()</code> 是阻塞的，每次 <code>accept</code> 一个连接，就需要交给一个新的进程或线程去处理，从而不影响下一个 <code>socket</code> 连接。</p><p>但是我们可以通过单进程单线程和非阻塞的方式来完成并发 <code>socket</code> 的处理：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> time
<span class="token keyword">import</span> re


<span class="token keyword">def</span> <span class="token function">handle_request</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">,</span> recv_msg<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 从请求中解析出URI</span>
    recv_lines <span class="token operator">=</span> recv_msg<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 使用正则表达式提取出URI</span>
    ret <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&quot;[^/]+(/[^ ]*)&quot;</span><span class="token punctuation">,</span> recv_lines<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> ret<span class="token punctuation">:</span>
        <span class="token comment"># 获取URI字符串</span>
        file_name <span class="token operator">=</span> ret<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment"># 如果URI是/，则默认返回index.html的内容</span>
        <span class="token keyword">if</span> file_name <span class="token operator">==</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">:</span>
            file_name <span class="token operator">=</span> <span class="token string">&quot;/index.html&quot;</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># 根据请求的URI，读取相应的文件</span>
        fp <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> file_name<span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        <span class="token comment"># 找不到文件，响应404</span>
        response_msg <span class="token operator">=</span> <span class="token string">&quot;HTTP/1.1 404 NOT FOUND\\r\\n&quot;</span>
        response_msg <span class="token operator">+=</span> <span class="token string">&quot;\\r\\n&quot;</span>
        response_msg <span class="token operator">+=</span> <span class="token string">&quot;&lt;h1&gt;----file not found----&lt;/h1&gt;&quot;</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response_msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        html_content <span class="token operator">=</span> fp<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        fp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        response_body <span class="token operator">=</span> html_content

        <span class="token comment"># 响应正确 200 OK</span>
        response_header <span class="token operator">=</span> <span class="token string">&quot;HTTP/1.1 200 OK\\r\\n&quot;</span>
        response_header <span class="token operator">+=</span> <span class="token string">&quot;Content-Length:%d\\r\\n&quot;</span> <span class="token operator">%</span> <span class="token builtin">len</span><span class="token punctuation">(</span>response_body<span class="token punctuation">)</span>
        response_header <span class="token operator">+=</span> <span class="token string">&quot;\\r\\n&quot;</span>

        response <span class="token operator">=</span> response_header<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> response_body

        <span class="token comment"># 返回响应数据</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建TCP SOCKET实例</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># 设置重用地址</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment"># 绑定地址（默认本机IP）和端口</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 监听</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>

    <span class="token comment"># 将accept设置为非阻塞,这里设置一次，后面不管调多少次accept都是非阻塞的</span>
    tcp_server_socket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    <span class="token comment"># 定义一个列表，将每次连接的socket加入该列表</span>
    client_socket_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fd_to_addr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment"># 循环接收客户端连接</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> ret<span class="token punctuation">:</span>
            <span class="token comment"># 当没有客户端链接的时候，抛出异常</span>
            <span class="token keyword">pass</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;客户端{} OnLine。。。。&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>client_addr<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment"># 当有客户端链接的时候</span>
            <span class="token comment"># 将new_socket.recv()设置为非阻塞的</span>
            new_socket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
            <span class="token comment"># 将new_socket加入列表</span>
            client_socket_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span>

            <span class="token comment"># 将 conn 和 addr 信息分别保存起来</span>
            fd_to_addr<span class="token punctuation">[</span>new_socket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> client_addr

        <span class="token comment"># 遍历socket列表，检查每一个socket是否有数据到达，或者客户端是否断开</span>
        <span class="token keyword">for</span> client_socket <span class="token keyword">in</span> client_socket_list<span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                recv_content <span class="token operator">=</span> client_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">except</span> Exception <span class="token keyword">as</span> ret<span class="token punctuation">:</span>
                <span class="token comment"># 异常，表示该客户端没有发数据过来</span>
                <span class="token keyword">pass</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token comment"># 正常，表示客户端发了数据，或者客户端断开连接（断开连接会导致recv正常返回）</span>
                <span class="token keyword">if</span> recv_content<span class="token punctuation">:</span>
                    <span class="token comment"># 有数据，调用请求处理代码</span>
                    handle_request<span class="token punctuation">(</span>client_socket<span class="token punctuation">,</span> recv_content<span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;客户端{}OffLine。。。。&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>fd_to_addr<span class="token punctuation">[</span>client_socket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token comment"># recv正常返回，且数据为空，表示客户端断开了链接</span>
                    <span class="token comment"># 将该socket踢出列表</span>
                    client_socket_list<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>client_socket<span class="token punctuation">)</span>
                    <span class="token comment"># 服务器也关闭连接</span>
                    client_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 关闭整个SOCKET</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码主要是说明在单进程单线程情况下，如何将 <code>accept</code> 和 <code>recv</code> 分开，并且都用非阻塞的方式来处理，这样每次查看是否有客户端链接进来的时候，都会去检查所有已链接的 <code>socket</code> 是否有数据发送过来。</p><p>在这种方式中，我们使用单进程单线程模拟了并发处理 <code>socket</code> 连接的功能，但这些 <code>socket</code> 连接的处理不是并行的。当一个 <code>socket</code> 处理数据时间比较长时，也会<strong>造成整个程序的等待。</strong></p><p>特别注意的是，在请求处理函数 <code>handle_request</code> 中，我们将请求内容作为参数一并传递进去。然后在返回 <code>200 OK</code> 的时候，在响应头中添加了 <code>Content-Length</code> 字段，这个字段用于告诉客户端，此次发送的响应体有多大。当客户端收完指定大小的数据，就认为这次服务器发送的数据已经发送完毕。他就可以继续发送下一个新的请求。</p><p>在 <code>handle_request</code> 中可以看到，<code>new_socket.close()</code> 已经被删除，也就是说服务器不会自动关闭连接，而直到客户端断开连接之前，服务器都保持<code>长连接</code>。断开连接由客户端来发起。</p><h2 id="select高并发" tabindex="-1"><a class="header-anchor" href="#select高并发" aria-hidden="true">#</a> select高并发</h2><p>在编写了单进程非阻塞式服务器之后，还有另外种写服务器的方法，便是利用<code>select</code>。<br><code>select</code>是对底层操作系统的一个访问操作，因而效率较高，比单进程非阻塞中的<code>for</code>循环遍历效率要高，可以利用<code>select</code>进行选择，选择出来可以读取信息的套接字、可以发送信息的套接字、以及产生的异常（分别是三个返回值）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>readable<span class="token punctuation">,</span> writable<span class="token punctuation">,</span> exceptionable <span class="token operator">=</span> select<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上即为<code>select</code>的使用方法，程序执行到该语句后进行阻塞等待，接收到新的套接字之后便解阻塞。<br> 程序思路便是利用<code>select</code>检测、选择出能读取的套接字（包括服务器套接字、客户端套接字），将接收到消息的客户端套接字存入列表（列表中本来只有服务器套接字），之后进行<code>for</code>循环遍历，读取套接字中的信息或者进行与客户端的连接。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> select <span class="token keyword">import</span> select
<span class="token keyword">from</span> web_server <span class="token keyword">import</span> handle_request


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建套接字</span>
    server_socket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span>

    <span class="token comment"># 设置可以重复使用绑定的信息</span>
    server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>SOL_SOCKET<span class="token punctuation">,</span> SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 绑定本机信息</span>
    server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 主动监听</span>
    server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 将accept设置为非阻塞</span>
    server_socket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>

    inputs <span class="token operator">=</span> <span class="token punctuation">[</span>server_socket<span class="token punctuation">]</span>
    fd_to_addr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        readable<span class="token punctuation">,</span> writable<span class="token punctuation">,</span> exceptionable <span class="token operator">=</span> select<span class="token punctuation">(</span>inputs<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> sock <span class="token keyword">in</span> readable<span class="token punctuation">:</span>

            <span class="token keyword">if</span> sock <span class="token operator">==</span> server_socket<span class="token punctuation">:</span>
                clientSocket<span class="token punctuation">,</span> clientAddr <span class="token operator">=</span> server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment"># 当有客户端链接的时候</span>
                <span class="token comment"># 将new_socket.recv()设置为非阻塞的</span>
                clientSocket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>

                inputs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>clientSocket<span class="token punctuation">)</span>
                <span class="token comment"># 将 addr 信息保存起来</span>
                fd_to_addr<span class="token punctuation">[</span>clientSocket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> clientAddr
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;客户端{} OnLine。。。。&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>clientAddr<span class="token punctuation">)</span><span class="token punctuation">)</span>

            <span class="token keyword">else</span><span class="token punctuation">:</span>
                message <span class="token operator">=</span> sock<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> message<span class="token punctuation">:</span>
                    <span class="token comment"># print(&#39;message from [%s] is %s&#39; % (str(sock), message.decode(&#39;utf-8&#39;)))</span>
                    handle_request<span class="token punctuation">(</span>sock<span class="token punctuation">,</span> message<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;[%s] OffLine。。。。&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>fd_to_addr<span class="token punctuation">[</span>sock<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    inputs<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>sock<span class="token punctuation">)</span>
                    sock<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>select</code>版服务器有一定的缺点，便是只能处理1024个并发客户端，因而其效率还是有一定的局限性。</p><h2 id="epoll高并发" tabindex="-1"><a class="header-anchor" href="#epoll高并发" aria-hidden="true">#</a> epoll高并发</h2><p>我们在最后使用单进程+单线程+非阻塞+长连接实现了一个可并发处理客户端连接的服务器。他的原理可以用以下的图来描述：</p><figure><img src="`+t+'" alt="P4p4aJ" tabindex="0" loading="lazy"><figcaption>P4p4aJ</figcaption></figure><p><strong>解释：</strong></p><ol><li><p>HTTP服务器是我们使用 单进程+单线程+非阻塞+长连接实现 的<code>web</code>服务器。</p></li><li><p>在实现的时候，我们创建了一个存放已接受<code>Socket</code>连接的列表，该列表是在应用程序的内存空间中的。如图中深蓝色部分</p></li><li><p>当有3个客户端接入的时候，列表中一共存在3个对应的<code>socket</code>句柄，分别对应三个小黄框。</p></li><li><p>灰色小框代表服务器接收请求的<code>socket</code>。</p></li><li><p>我们在进行无限循环的时候，首先是检查是否有新的客户端接入，相当于检查灰色小框是否有数据到达。然后轮询3个小黄框对应<code>socket</code>是否有数据到达。轮询的效率是很低的。</p></li><li><p>服务器在使用<code>accept</code>和<code>recv</code>时，实际上是委托操作系统帮他检查是否有数据到达，由于这个列表的<code>socket</code>都处于用户内存空间，所以需要将其复制到内核空间。操作系统检查完毕后，如果有数据就返回数据给应用程序，如果没有数据就以异常的方式通知应用程序。而且不光这样，操作系统可能还同时在运行其他的应用程序，这样效率会非常低。</p></li></ol><p><strong>我们再来看epoll的图</strong>:</p><figure><img src="'+p+`" alt="VCbTGL" tabindex="0" loading="lazy"><figcaption>VCbTGL</figcaption></figure><p><strong>解释</strong></p><p>1.我们可以看到，在结构上，最大的区别在于，存放<code>socket</code>的列表不处于应用程序内部。在<code>epoll</code>中，这个存放<code>socket</code>的列表处于一个<strong>特殊的内存空间，这个内存空间是应用程序与内核共享的空间</strong>。也就是说，当应用程序委托操作系统检查是否有数据到达时，无需将复制数据给内核空间，操作系统可以直接进行检查。</p><p>2.操作系统检查到某个<code>socket</code>有数据到达，使用<strong>事件通知</strong>的形式，直接告诉应用程序，而不是以轮询的方式。打个比方，一个厨师挨个问50个人饿了没，如果饿了就给他东西吃，这是轮询。而50个人中，谁饿了谁举手，厨师就给吃的，这叫事件通知。很明显，事件通知的效率会特别高。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">import</span> select
<span class="token keyword">from</span> web_server <span class="token keyword">import</span> handle_request


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建套接字</span>
    server_socket <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span>

    <span class="token comment"># 设置可以重复使用绑定的信息</span>
    server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>SOL_SOCKET<span class="token punctuation">,</span> SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment"># 绑定本机信息</span>
    server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 主动监听</span>
    server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment"># 将accept设置为非阻塞</span>
    server_socket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    <span class="token comment"># 创建epoll对象</span>
    epoll <span class="token operator">=</span> select<span class="token punctuation">.</span>epoll<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 注册事件到epoll中</span>
    <span class="token comment"># epoll.register(fd[, eventmask])</span>
    <span class="token comment"># 注意，如果fd已经注册过，则会发生异常</span>
    <span class="token comment"># 将创建的套接字添加到epoll的事件监听中</span>

    <span class="token comment"># 注册tcp套接字</span>
    epoll<span class="token punctuation">.</span>register<span class="token punctuation">(</span>server_socket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> select<span class="token punctuation">.</span>EPOLLIN<span class="token punctuation">)</span>

    <span class="token triple-quoted-string string">&#39;&#39;&#39;因为epoll返回的触发事件对应的是套接字文件描述符，所以需要在字典中加入对应关系&#39;&#39;&#39;</span>

    <span class="token comment"># 定义一个字典，用于存放fd和套接字的对应关系，因为操作系统在事件通知的时候，使用的是fd，而不是套接字，我们需要使用fd来找到对应</span>
    <span class="token comment"># 的套接字，从而可以调用accept和recv</span>
    fd_to_socket <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    fd_to_addr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment"># 循环接收客户端连接</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 使用一个列表来接受操作系统的事件通知，poll()是阻塞的，当有数据到达时，poll才会解开阻塞</span>
        epoll_list <span class="token operator">=</span> epoll<span class="token punctuation">.</span>poll<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> fd<span class="token punctuation">,</span> event <span class="token keyword">in</span> epoll_list<span class="token punctuation">:</span>
            <span class="token comment"># 首先判断事件通知中的fd是否对应监听套接字（监听套接字调用accept）</span>
            <span class="token keyword">if</span> fd <span class="token operator">==</span> server_socket<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

                conn<span class="token punctuation">,</span> addr <span class="token operator">=</span> server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment"># 监听到一个新的客户端连接，将conn也注册到epoll中</span>
                epoll<span class="token punctuation">.</span>register<span class="token punctuation">(</span>conn<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> select<span class="token punctuation">.</span>EPOLLIN<span class="token punctuation">)</span>

                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;有新的客户端到来%s&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span><span class="token punctuation">)</span>

                <span class="token comment"># 将 conn 和 addr 信息分别保存起来</span>
                fd_to_socket<span class="token punctuation">[</span>conn<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> conn
                fd_to_addr<span class="token punctuation">[</span>conn<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> addr

            <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 如果不是监听套接字，那么都是客户端对应的套接字</span>
                <span class="token comment"># 接收数据</span>
                recvData <span class="token operator">=</span> fd_to_socket<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>

                <span class="token keyword">if</span> recvData<span class="token punctuation">:</span>
                    handle_request<span class="token punctuation">(</span>fd_to_socket<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">,</span> recvData<span class="token punctuation">)</span>

                <span class="token comment"># 如果没有数据，则表示客户端断开连接</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token comment"># 从 epoll 中移除该 连接 fd</span>
                    epoll<span class="token punctuation">.</span>unregister<span class="token punctuation">(</span>fd<span class="token punctuation">)</span>

                    <span class="token comment">#  关闭fd对应的socket</span>
                    fd_to_socket<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s---offline---&quot;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>fd_to_addr<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),i=[c];function l(u,d){return s(),a("div",null,i)}const v=n(o,[["render",l],["__file","并发WebServer.html.vue"]]);export{v as default};
