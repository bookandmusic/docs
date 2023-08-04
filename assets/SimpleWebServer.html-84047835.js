import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-20457886.js";const t="/assets/HyBse5-54e8a4c4.png",p="/assets/mZOgbk-00f4b7cd.png",o={},c=e(`<p>本篇文章介绍如何实现一个简单 的Web Server 以及对应的问题解决方案。</p><h2 id="实现固定页面的web-server" tabindex="-1"><a class="header-anchor" href="#实现固定页面的web-server" aria-hidden="true">#</a> 实现固定页面的Web Server</h2><ol><li><p>使用socket创建一个TCP Server</p></li><li><p>接受来自浏览器的TCP链接，并接收HTTP请求</p></li><li><p>返回固定响应数据给浏览器</p></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket<span class="token punctuation">,</span> time


<span class="token keyword">def</span> <span class="token function">handle_request</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 接收请求</span>
    recv_msg <span class="token operator">=</span> new_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>recv_msg<span class="token punctuation">)</span>
    <span class="token comment"># 响应数据</span>
    response_msg <span class="token operator">=</span> <span class="token string">&quot;HTTP/1.1 200 OK\\r\\n&quot;</span>
    response_msg <span class="token operator">+=</span> <span class="token string">&quot;\\r\\n&quot;</span>
    response_msg <span class="token operator">+=</span> <span class="token string">&quot;&lt;h1&gt;Hello&lt;/h1&gt;&quot;</span>
    <span class="token comment"># 返回响应数据（二进制数据）</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response_msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 关闭该次socket连接</span>
    new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建TCP SOCKET实例</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># 绑定地址（默认本机IP）和端口</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">8890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 监听</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment"># 循环接收客户端连接</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 处理每个客户端的请求</span>
        handle_request<span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span>

    <span class="token comment"># 关闭整个SOCKET</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><mark>缺陷</mark></p></blockquote><p>这种简单的web server是阻塞的，同时只能处理一个请求。</p><h2 id="解决服务器端口占用问题" tabindex="-1"><a class="header-anchor" href="#解决服务器端口占用问题" aria-hidden="true">#</a> 解决服务器端口占用问题</h2><p>问题描述：当浏览器访问服务器时，服务器收到请求，马上返回响应数据，并且调用了<code>new_socket.close()</code>。此时，马上重启服务器的话，可能会提示端口被占用。</p><p>这是因为TCP的四次挥手过程中，谁先发送<code>FIN</code>包，则谁会在发送最后一个<code>ACK</code>包后进入<code>TIME_WAIT</code>状态，此状态会等待<code>2MSL</code>的时间（大概2-4分钟）。在这个阶段，服务器绑定的端口资源是被占用的。等这个阶段过了，端口会进入<code>CLOSED</code>状态，则可以被再次利用。</p><p>如何解决服务器重启端口被占用的问题：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
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
        <span class="token comment"># 处理每个客户端的请求</span>
        handle_request<span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span>

    <span class="token comment"># 关闭整个SOCKET</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在创建<code>socket</code>实例之后，设置可以重用地址，就可以解决报错问题。</p></blockquote><h2 id="tcp协议3次握手、4次挥手" tabindex="-1"><a class="header-anchor" href="#tcp协议3次握手、4次挥手" aria-hidden="true">#</a> TCP协议3次握手、4次挥手</h2><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3><figure><img src="`+t+'" alt="HyBse5" tabindex="0" loading="lazy"><figcaption>HyBse5</figcaption></figure><p><strong>三次握手流程和目的都相对简单：</strong></p><ol><li><p>客户端向服务器发送<code>SYN flag</code>的包，并携带<code>seq</code>为<code>x</code>。</p></li><li><p>服务器收到<code>SYN</code>包后，开始准备对应的资源，准备好后，发送<code>SYN+ACK</code>包，这实际上是服务器回应客户端的<code>ACK</code>包，合并了服务器让客户端准备资源的<code>SYN</code>包。所以携带了对应<code>SYN</code>的<code>seq y</code>，以及<code>ACK=x+1</code>。</p></li><li><p>客户端收到服务器发来的<code>SYN</code>包，则回复<code>ACK</code>包，<code>ack=y+1</code>。</p></li></ol><p>这样3次握手就建立好了，客户端和服务器都进入<code>ESTABLISHED</code>状态，表示资源都准备完毕。所以TCP的三次握手实际上是客户端与服务器之间互相要求准备资源以及回复资源已准备好的过程。</p><p>理论上应该是4次握手，但为了增加性能减小时间开销，中间的两次数据传输（服务器发送的<code>SYN</code>和<code>ACK</code>）合并在一起了。所以变成了3次握手。</p><h3 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h3><figure><img src="'+p+`" alt="mZOgbk" tabindex="0" loading="lazy"><figcaption>mZOgbk</figcaption></figure><p><strong>四次挥手相对比较复杂：</strong></p><ol><li><p>假设客户端在完成数据传输后，首先开始发送<code>FIN</code>包（也就是我们的客户端程序调用<code>socket.close()</code>的时候，系统底层会自动发送<code>FIN</code>包），则表示客户端已经没有需要发送给服务器的数据。由于<code>SOCKET</code>是全双工的，所以客户端发送<code>FIN</code>只是表示客户端以后都不在发送数据，但此时还可以接收数据。</p></li><li><p>客户端发送出<code>FIN</code>包后，就会进入<code>FIN WAIT-1</code>状态，该状态一般很难观测到，因为该状态只维持到服务器响应<code>ACK</code>包，一般情况下都是瞬间就返回了（注意这里和3次握手不同，这里的<code>ACK</code>包不能与服务器发送的FIN包合并，因为服务器可能还有数据要继续发送给客户端，所以服务器可能要等到数据传输完毕才会向客户端发送<code>FIN</code>包，这就是为什么是四次挥手）</p></li><li><p>服务器收到客户端发来的<code>FIN</code>包，则马上发送回应的ACK包，此包没有意外的话，会瞬间到达客户端。</p></li><li><p>客户端收到<code>ACK</code>包后，结束<code>FIN WAIT-1</code>状态，进入<code>FIN WAIT-2</code>状态，该状态的目的是等待服务器发送<code>FIN</code>包。</p></li><li><p>服务器完成了最后的数据发送，则向客户端发送<code>FIN</code>包（也就是服务器程序调用<code>socket.close()</code>的时候，系统底层会自动发送<code>FIN</code>包），表示服务器以后也没有数据要发送了，开始断开服务器的发送通道。</p></li><li><p>服务器在发送出<code>FIN</code>后，会进入<code>LAST-ACK</code>状态（例如等待4s）。这个状态是为了等待客户端恢复确认的<code>ACK</code>包，因为服务器发送出去的<code>FIN</code>包，他无法确认客户端是否收到，如果超出<code>waittime</code>还未收到<code>ACK</code>包，则重新发送FIN包。</p></li><li><p>客户端如果正确收到了服务器发送的<code>FIN</code>包，理论上应该释放资源，并发送<code>ACK</code>包。但是如果客户端发出的<code>ACK</code>包由于某些原因，服务器并未收到，那么服务器在几秒后会重新发送<code>FIN</code>包，但客户端已经把资源释放掉了，则就会出现问题。怎么解决这个问题呢？解决方案是，客户端收到服务器发送的<code>FIN</code>包，并不马上释放资源（例如绑定的端口等），而是先回复<code>ACK</code>包，并进入<code>TIME-WAIT</code>状态，这个状态要持续<code>2MSL</code>（2-3分钟）。如果在<code>2MSL</code>时间段中，服务器都没有重新发送FIN包，则表示服务器已经收到了自己发出的<code>ACK</code>包，这是客户端才放心的释放资源。</p></li><li><p>最终客户端在等待<code>2MSL</code>后，进入<code>CLOSED</code>状态。服务器在确认收到最后一个<code>ACK</code>包后直接进入<code>CLOSED</code>状态。</p></li></ol><p><strong>资源占用的解释：</strong></p><p>我们知道，客户端是使用随机端口来发起<code>TCP</code>连接的，所以客户端首先发送<code>FIN</code>包的话，最后的<code>2MSL</code>是由客户端来等待，即使2-3分钟资源未被释放，也不会影响客户端另外发起新的请求（因为可用的随机端口很多，不会出现冲突）。</p><p>但是如果由服务器来首先发起<code>FIN</code>，则最后的<code>2MSL</code>要由服务器来等待，则在2-3分钟内，服务器绑定的端口并未被释放，所以如果此时重启服务器，则会出现资源未释放、端口被占用的情况。</p><p><strong>结论：尽量让客户端来发起断开连接的请求。如果要使服务器断开请求还不会出现占用端口的情况，则可以参考前面第二节的方法，为服务器SOCKET设置资源重用的属性。</strong></p><h2 id="改善web-server" tabindex="-1"><a class="header-anchor" href="#改善web-server" aria-hidden="true">#</a> 改善Web Server</h2><p>前面我们实现的简单Web Server不管客户端请求的<code>URI</code>是什么，我们都只能返回固定的<code>&quot;Hello</code>&quot;字符串。我们对其进行改善，让其根据接收到的请求，来返回不同的页面数据。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket
<span class="token keyword">import</span> re


<span class="token keyword">def</span> <span class="token function">handle_request</span><span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 接收请求</span>
    recv_msg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
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
        <span class="token comment"># 响应正确 200 OK</span>
        response_msg <span class="token operator">=</span> <span class="token string">&quot;HTTP/1.1 200 OK\\r\\n&quot;</span>
        response_msg <span class="token operator">+=</span> <span class="token string">&quot;\\r\\n&quot;</span>

        <span class="token comment"># 返回响应头</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>response_msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># 返回响应体</span>
        new_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>

    <span class="token comment"># 关闭该次socket连接</span>
    new_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建TCP SOCKET实例</span>
    tcp_server_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># # 设置重用地址</span>
    tcp_server_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment"># 绑定地址（默认本机IP）和端口</span>
    tcp_server_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">7890</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 监听</span>
    tcp_server_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment"># 循环接收客户端连接</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        new_socket<span class="token punctuation">,</span> client_addr <span class="token operator">=</span> tcp_server_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 处理每个客户端的请求</span>
        handle_request<span class="token punctuation">(</span>new_socket<span class="token punctuation">)</span>

    <span class="token comment"># 关闭整个SOCKET</span>
    tcp_server_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码重点在于解析出<code>GET /index.html HTTP/1.1</code>中的<code>/index.html</code>部分，知道服务器要请求什么内容，然后按需找到对应的文件，已二进制方式读取文件内容并返回给客户端即可。</p><p>如果客户端没有指定访问的内容，则默认返回<code>index.html</code>页面。</p><p>注意异常的处理。</p>`,33),i=[c];function l(u,d){return s(),a("div",null,i)}const v=n(o,[["render",l],["__file","SimpleWebServer.html.vue"]]);export{v as default};
