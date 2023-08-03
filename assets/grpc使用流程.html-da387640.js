import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-8181ed57.js";const p={},e=t(`<h2 id="proto文件" tabindex="-1"><a class="header-anchor" href="#proto文件" aria-hidden="true">#</a> proto文件</h2><p>在项目根目录下，创建<code>pb_file/agent.proto</code>文件。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">&quot;.;pb_file&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//  agent/pb_file 两部分，第一部分生成的代码路径，第二部分是所属的包名</span>
<span class="token comment">//  格式也可以是 agent;pb_file</span>
<span class="token keyword">package</span> pb_file<span class="token punctuation">;</span>

<span class="token keyword">service</span> <span class="token class-name">AgentService</span> <span class="token punctuation">{</span>
   <span class="token keyword">rpc</span> <span class="token function">Ping</span> <span class="token punctuation">(</span><span class="token class-name">PingInfo</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">PingResponse</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">PingInfo</span> <span class="token punctuation">{</span>
   <span class="token builtin">string</span> User <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">PingResponse</span> <span class="token punctuation">{</span>
   <span class="token builtin">bool</span> Success <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//  在 gRPC 的 Protocol Buffers（protobuf）定义文件（.proto 文件）中，</span>
<span class="token comment">// 数字标识符（tag）用于标识字段的唯一标识符。它们是非负整数，可以在字段定义中指定。</span>
<span class="token comment">// 通常情况下，我们会从 1 开始为字段分配数字标识符，并按照定义顺序逐个递增。</span>
<span class="token comment">// 这样做的好处是，可以使消息的结构更加清晰，易于维护和扩展。</span>
<span class="token comment">// 在将来，如果需要向消息中添加新的字段，可以向现有定义的字段之间插入新的字段，而不必破坏现有的客户端和服务器代码。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译go代码" tabindex="-1"><a class="header-anchor" href="#编译go代码" aria-hidden="true">#</a> 编译go代码</h2><h3 id="安装工具" tabindex="-1"><a class="header-anchor" href="#安装工具" aria-hidden="true">#</a> 安装工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> google.golang.org/grpc
go get <span class="token parameter variable">-u</span> github.com/golang/protobuf/protoc-gen-go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目根目录下，执行命令，生成对应的go代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>protoc <span class="token parameter variable">--proto_path</span><span class="token operator">=</span>pb_file pb_file/agent.proto --go-grpc_out<span class="token operator">=</span>./pb_file <span class="token parameter variable">--go_out</span><span class="token operator">=</span>./pb_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时项目结构为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🕙<span class="token punctuation">[</span> 08:58:32 <span class="token punctuation">]</span> ➜  tree <span class="token builtin class-name">.</span>
<span class="token builtin class-name">.</span>
<span class="token operator">|</span>-- README.md
<span class="token operator">|</span>-- go.mod
<span class="token operator">|</span>-- go.sum
<span class="token operator">|</span>-- main.go
<span class="token variable"><span class="token variable">\`</span>-- pb_file
    <span class="token operator">|</span>-- agent.pb.go
    <span class="token operator">|</span>-- agent.proto
    <span class="token variable">\`</span></span>-- agent_grpc.pb.go

<span class="token number">1</span> directory, <span class="token number">7</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，就可以在main.go中编写grpc服务端和客户端代码。</p><blockquote><p>服务端和客户端是两个不同的项目，不能写在一起。</p></blockquote><h3 id="服务端代码" tabindex="-1"><a class="header-anchor" href="#服务端代码" aria-hidden="true">#</a> 服务端代码</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;net&quot;</span>
	<span class="token string">&quot;os/user&quot;</span>

	pb <span class="token string">&quot;github.com/bookandmusic/agent/pb_file&quot;</span>
	log <span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/peer&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> server <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	pb<span class="token punctuation">.</span>UnimplementedAgentServiceServer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">logPeer</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> funcName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	pr<span class="token punctuation">,</span> ok <span class="token operator">:=</span> peer<span class="token punctuation">.</span><span class="token function">FromContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Ping 获取连接信息失败&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>net<span class="token punctuation">.</span>AddrError<span class="token punctuation">{</span>Err<span class="token punctuation">:</span> <span class="token string">&quot;unknown peer&quot;</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span>funcName<span class="token punctuation">,</span> <span class="token string">&quot; 从:&quot;</span><span class="token punctuation">,</span> pr<span class="token punctuation">.</span>Addr<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">Ping</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> in <span class="token operator">*</span>pb<span class="token punctuation">.</span>PingInfo<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>PingResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">logPeer</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;Ping&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>PingResponse<span class="token punctuation">{</span>Success<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	u<span class="token punctuation">,</span> err <span class="token operator">:=</span> user<span class="token punctuation">.</span><span class="token function">Current</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;获取当前用户出错:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>PingResponse<span class="token punctuation">{</span>Success<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> u<span class="token punctuation">.</span>Username <span class="token operator">!=</span> in<span class="token punctuation">.</span>User <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;用户Ping出错:&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">.</span>User<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>PingResponse<span class="token punctuation">{</span>Success<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>PingResponse<span class="token punctuation">{</span>Success<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	lis<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:50051&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to listen: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	s <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	pb<span class="token punctuation">.</span><span class="token function">RegisterAgentServiceServer</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token operator">&amp;</span>server<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Server started at %v&quot;</span><span class="token punctuation">,</span> lis<span class="token punctuation">.</span><span class="token function">Addr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span>lis<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;failed to serve: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端代码" tabindex="-1"><a class="header-anchor" href="#客户端代码" aria-hidden="true">#</a> 客户端代码</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>

	pb <span class="token string">&quot;github.com/bookandmusic/agent/pb_file&quot;</span>
	log <span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	address <span class="token operator">:=</span> <span class="token string">&quot;localhost:50051&quot;</span>
	<span class="token comment">// 连接gRPC服务端</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithInsecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;not connect: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 创建AgentService客户端</span>
	c <span class="token operator">:=</span> pb<span class="token punctuation">.</span><span class="token function">NewAgentServiceClient</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>

	<span class="token comment">// 构建请求</span>
	req <span class="token operator">:=</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>PingInfo<span class="token punctuation">{</span>User<span class="token punctuation">:</span> <span class="token string">&quot;liusf&quot;</span><span class="token punctuation">}</span>

	<span class="token comment">// 发送请求并接收响应</span>
	resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> req<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;could not ping: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Ping status: %v&quot;</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>Success<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当服务端运行时，客户端就可以根据服务端地址，测试是否联通。</p><h2 id="编译python代码" tabindex="-1"><a class="header-anchor" href="#编译python代码" aria-hidden="true">#</a> 编译python代码</h2><h3 id="安装工具-1" tabindex="-1"><a class="header-anchor" href="#安装工具-1" aria-hidden="true">#</a> 安装工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> grpcio grpcio-tools protobuf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在项目根目录下，执行命令，生成对应的go代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># --python_out= 输出目录</span>
<span class="token comment"># --proto_path= 或 -I  proto文件路径</span>
python <span class="token parameter variable">-m</span> grpc_tools.protoc <span class="token parameter variable">-I</span><span class="token operator">=</span>pb_file <span class="token parameter variable">--python_out</span><span class="token operator">=</span>./pb_file <span class="token parameter variable">--pyi_out</span><span class="token operator">=</span>./pb_file <span class="token parameter variable">--grpc_python_out</span><span class="token operator">=</span>./pb_file pb_file/agent.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时项目结构为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🕙<span class="token punctuation">[</span> 09:18:50 <span class="token punctuation">]</span> ➜  tree <span class="token builtin class-name">.</span>      
<span class="token builtin class-name">.</span>
<span class="token operator">|</span>-- __init__.py
<span class="token operator">|</span>-- client.py
<span class="token operator">|</span>-- pb_file
<span class="token operator">|</span>   <span class="token operator">|</span>-- __init__.py
<span class="token operator">|</span>   <span class="token operator">|</span>-- agent.proto
<span class="token operator">|</span>   <span class="token operator">|</span>-- agent_pb2.py
<span class="token operator">|</span>   <span class="token operator">|</span>-- agent_pb2.pyi
<span class="token operator">|</span>   <span class="token variable"><span class="token variable">\`</span>-- agent_pb2_grpc.py
<span class="token variable">\`</span></span>-- server.py

<span class="token number">1</span> directory, <span class="token number">8</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong></p><ul><li>agent_pb2.py: 实际使用的模块文件，针对快速加载进行了优化，不可读</li><li>agent_pb2.pyi: 描述原型接口的存根文件，对于IDE 或想要读取输出文件的用户非常有用</li></ul><p>仅当将 <code>--pyi_out=</code> 选项传递给 <code>protoc</code> 时，才会生成 <code>pyi</code> 文件。</p></blockquote><p>此时，可以在<code>client.py</code>和 <code>server.py</code>中编写客户端和服务端代码。</p><h3 id="服务端代码-1" tabindex="-1"><a class="header-anchor" href="#服务端代码-1" aria-hidden="true">#</a> 服务端代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> getpass
<span class="token keyword">import</span> logging
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>parse <span class="token keyword">import</span> unquote

<span class="token keyword">import</span> grpc

<span class="token keyword">from</span> pb_file <span class="token keyword">import</span> agent_pb2<span class="token punctuation">,</span> agent_pb2_grpc


<span class="token keyword">class</span> <span class="token class-name">AgentServicer</span><span class="token punctuation">(</span>agent_pb2_grpc<span class="token punctuation">.</span>AgentServiceServicer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> logger<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logger <span class="token operator">=</span> logger

    <span class="token keyword">def</span> <span class="token function">logPeer</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> context<span class="token punctuation">:</span> grpc<span class="token punctuation">.</span>ServicerContext<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        address <span class="token operator">=</span> context<span class="token punctuation">.</span>peer<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">}</span></span><span class="token string"> 从:</span><span class="token interpolation"><span class="token punctuation">{</span>unquote<span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">Ping</span><span class="token punctuation">(</span>
        self<span class="token punctuation">,</span> request<span class="token punctuation">:</span> agent_pb2<span class="token punctuation">.</span>PingInfo<span class="token punctuation">,</span> context<span class="token punctuation">:</span> grpc<span class="token punctuation">.</span>ServicerContext
    <span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> agent_pb2<span class="token punctuation">.</span>PingResponse<span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logPeer<span class="token punctuation">(</span><span class="token string">&quot;Ping&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            current_user <span class="token operator">=</span> getpass<span class="token punctuation">.</span>getuser<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获取当前登录用户的用户名</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;获取当前用户出错: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> request<span class="token punctuation">.</span>User <span class="token operator">!=</span> current_user<span class="token punctuation">:</span>
            is_valid <span class="token operator">=</span> <span class="token boolean">False</span>
            self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;用户Ping出错:</span><span class="token interpolation"><span class="token punctuation">{</span>request<span class="token punctuation">.</span>User<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            is_valid <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token keyword">return</span> agent_pb2<span class="token punctuation">.</span>PingResponse<span class="token punctuation">(</span>Success<span class="token operator">=</span>is_valid<span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token comment"># 输出服务端启动信息</span>
    logger <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span><span class="token string">&quot;server&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 设置日志格式和级别</span>
    logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>
        <span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&quot;%(asctime)s - %(name)s - %(levelname)s - %(message)s&quot;</span><span class="token punctuation">,</span>
        level<span class="token operator">=</span>logging<span class="token punctuation">.</span>DEBUG<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token comment"># 创建 gRPC 服务器，并将 AgentServicer 注册到服务器中</span>
    server <span class="token operator">=</span> grpc<span class="token punctuation">.</span>aio<span class="token punctuation">.</span>server<span class="token punctuation">(</span><span class="token punctuation">)</span>
    agent_pb2_grpc<span class="token punctuation">.</span>add_AgentServiceServicer_to_server<span class="token punctuation">(</span>
        AgentServicer<span class="token punctuation">(</span>logger<span class="token operator">=</span>logger<span class="token punctuation">)</span><span class="token punctuation">,</span> server
    <span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>add_insecure_port<span class="token punctuation">(</span><span class="token string">&quot;0.0.0.0:50051&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 启动服务器</span>
    logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&quot;Server started at :50051&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">await</span> server<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> server<span class="token punctuation">.</span>wait_for_termination<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端代码-1" tabindex="-1"><a class="header-anchor" href="#客户端代码-1" aria-hidden="true">#</a> 客户端代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">import</span> grpc

<span class="token keyword">from</span> pb_file <span class="token keyword">import</span> agent_pb2<span class="token punctuation">,</span> agent_pb2_grpc


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">grpc_ping</span><span class="token punctuation">(</span>host<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> port<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> user<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> timeout<span class="token punctuation">:</span> <span class="token builtin">float</span> <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">async</span> <span class="token keyword">with</span> grpc<span class="token punctuation">.</span>aio<span class="token punctuation">.</span>insecure_channel<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>host<span class="token punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span> channel<span class="token punctuation">:</span>
            stub <span class="token operator">=</span> agent_pb2_grpc<span class="token punctuation">.</span>AgentServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>
            response <span class="token operator">=</span> <span class="token keyword">await</span> stub<span class="token punctuation">.</span>Ping<span class="token punctuation">(</span>agent_pb2<span class="token punctuation">.</span>PingInfo<span class="token punctuation">(</span>User<span class="token operator">=</span>user<span class="token punctuation">)</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span>timeout<span class="token punctuation">)</span>
            <span class="token keyword">return</span> response<span class="token punctuation">.</span>Success
    <span class="token keyword">except</span> grpc<span class="token punctuation">.</span>aio<span class="token punctuation">.</span>AioRpcError<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resp <span class="token operator">=</span> <span class="token keyword">await</span> grpc_ping<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">50051</span><span class="token punctuation">,</span> <span class="token string">&quot;liusf&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当然，<code>rpc</code>协议允许不同代码之间通信，也就是说，可以python服务端和go客户端，或go服务端和python客户端，进行通信。</p></blockquote>`,31),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","grpc使用流程.html.vue"]]);export{k as default};
