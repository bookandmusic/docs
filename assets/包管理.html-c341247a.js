import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e as a}from"./app-58480cea.js";const d="/assets/package-20230819214046-9fc01qy-3cc50c4c.png",p={},u=a(`<h1 id="包管理" tabindex="-1"><a class="header-anchor" href="#包管理" aria-hidden="true">#</a> 包管理</h1><h2 id="包的介绍" tabindex="-1"><a class="header-anchor" href="#包的介绍" aria-hidden="true">#</a> 包的介绍</h2><p>包（package）是多个Go源码的集合，是一种高级的代码复用方案，Go语言为我们提供了很多内置包，如fmt、strconv、strings、sort、errors、time、encoding/json、os、io等。</p><p>Golang中的包可以分为三种：1、系统内置包 2、自定义包 3、第三方包</p><ul><li><strong>系统内置包</strong>：Golang 语言给我们提供的内置包，引入后可以直接使用，如fmt、strconv、strings、sort、errors、time、encoding/json、os、io等。</li><li><strong>自定义包</strong>：开发者自己写的包</li><li><strong>第三方包</strong>：属于自定义包的一种，需要下载安装到本地后才可以使用。</li></ul><h2 id="包管理演变历史" tabindex="-1"><a class="header-anchor" href="#包管理演变历史" aria-hidden="true">#</a> 包管理演变历史</h2><p>Go语言的包管理演变历史涵盖了从初始的<code>GOPATH</code>​到更现代的<code>GoModule</code>​的过程。</p><h3 id="gopa​th" tabindex="-1"><a class="header-anchor" href="#gopa​th" aria-hidden="true">#</a> GOPA​TH</h3><p>在Go语言早期，使用者必须设置一个全局环境变量叫做<code>GOPATH</code>​。这个环境变量指定了一个工作空间，所有的Go代码和依赖都被存放在该目录结构下。</p><p>我们在项目中使用第三方类库的时候，使用go get命令去下载安装的第三方类库的包，而拉取下来的包就会直接下载到 <code>GOPATH</code>​目录下的 src 中。<code>GOPATH</code>​本身是不区分项目的，代码中任何<code>import</code>​的路径均从<code>GOPATH</code>​为根目录开始；</p><h4 id="不区分依赖项版本" tabindex="-1"><a class="header-anchor" href="#不区分依赖项版本" aria-hidden="true">#</a> 不区分依赖项版本</h4><p>当有多个项目时，不同项目对于依赖库的版本需求不一致时，无法在一个GOPATH下面放置不同版本的依赖项。</p><p>典型的例子：当有多项目时候，A项目依赖C 1.0.0，B项目依赖C 2.0.0，由于没有依赖项版本的概念，C 1.0.0和C 2.0.0无法同时在GOPATH下共存，解决办法是分别为A项目和B项目设置GOPATH，将不同版本的C源代码放在两个GOPATH中，彼此独立（编译时切换），或者C 1.0.0和C 2.0.0两个版本更改包名。无论哪种解决方法，都需要人工判断更正，不具备便利性。</p><p>并且不同的 <code>GOPATH</code>​ 都需要下载依赖，那么磁盘中重复的依赖就会非常多，会占用大量的磁盘空间。</p><h4 id="依赖项列表无法数据化" tabindex="-1"><a class="header-anchor" href="#依赖项列表无法数据化" aria-hidden="true">#</a> 依赖项列表无法数据化</h4><p>在项目中没有任何语义化的数据可以知道当前项目的所有依赖项，需要手动找出所有依赖。对项目而言，需要将所有的依赖项全部放入源代码控制中。如果剔除某个依赖，需要在源代码中手工确认某个依赖是否剔除。</p><h3 id="vendor目录" tabindex="-1"><a class="header-anchor" href="#vendor目录" aria-hidden="true">#</a> Vendor目录</h3><p>Go 语言在Go1.5引入了<code>vendor</code>​文件夹，用于解决依赖管理问题的一种方案。</p><p>它是一个存放项目依赖的目录，位于项目根目录下，用于存放项目所使用的外部依赖库的拷贝。</p><p>通过将依赖库拷贝到项目下的 <code>vendor</code>​ 目录中，项目可以在一定程度上实现依赖的隔离，避免不同项目之间的依赖冲突。然而，<code>vendor</code>​ 目录也存在一些局限性：重复依赖等。</p><p>综上所述，尽管<code>vendor</code>​ 目录在一定程度上解决了依赖隔离和版本控制的问题，但也存在一些局限性，这促使 Go 社区推出了更现代、更灵活的包管理解决方案：Go Modules。</p><h3 id="gomodule" tabindex="-1"><a class="header-anchor" href="#gomodule" aria-hidden="true">#</a> GoModule</h3><p>那么究竟什么是 GoModule？</p><ul><li>Go Modules是语义化版本管理的依赖项的包管理工具；它解决了GOPATH存在的缺陷，最重要的是，它是Go官方出品。</li><li>说得直白一下，GoModule 就是一个用来取代 GoPath 的 Golang 的工作空间。</li></ul><p>我们之前说过，所有的 Golang 的文件，都需要放在 GoPath 目录下才能进行正确的编译和运行，而有了 GoModule 之后，那么我们就可以把文件放在 GoModule 目录下，而放在 GoModule 目录下的 Golang 文件，也可以正确地编译运行。</p><p>那么我们有了 GoModule 之后，GoPath 是不是就可以被舍弃了？</p><p>不是的！</p><p>我们之前说过，GoPath 所引出的问题，就是因为第三方类库的包所导致的，所以我们在有了 GoModule 之后，GoPath 和 GoModule 就分别负责不同的职责，共同为我们的 Golang 项目服务。</p><p>GoPath 我们用来存放我们从网上拉取的第三方依赖包。<br>GoModule 我们用来存放我们自己的 Golang 项目文件，当我们自己的项目需要依赖第三方的包的时候，我们通过 GoModule 目录下的一个 go.mod 文件来引用 GoPath 目录 src 包下的第三方依赖即可。</p><p>这样依赖，既解决了原来只能局限在 GoPath 目录 src 包下进行编程的问题，也解决了第三方依赖包难以管理和重复依赖占用磁盘空间的问题。</p><p>总而言之，在引入 GoModule 之后，我们不会直接在 GoPath 目录进行编程，而是把 GoPath 作为一个第三方依赖包的仓库，我们真正的工作空间在 GoModule 目录下。</p><h2 id="gomodule-1" tabindex="-1"><a class="header-anchor" href="#gomodule-1" aria-hidden="true">#</a> GoModule</h2><p><code>go module</code>​是Go1.11版本之后官方推出的版本管理工具，并且从Go1.13版本开始，<code>go module</code>​将是Go语言默认的依赖管理工具。</p><h3 id="go111module" tabindex="-1"><a class="header-anchor" href="#go111module" aria-hidden="true">#</a> GO111MODULE</h3><p>要启用<code>go module</code>​支持首先要设置环境变量<code>GO111MODULE</code>​，通过它可以开启或关闭模块支持，它有三个可选值：<code>off</code>​、<code>on</code>​、<code>auto</code>​。</p><ol><li>​<code>GO111MODULE=off</code>​​禁用模块支持，编译时会从<code>GOPATH</code>​​和<code>vendor</code>​​文件夹中查找包。</li><li>​<code>GO111MODULE=on</code>​​启用模块支持，编译时会忽略<code>GOPATH</code>​​和<code>vendor</code>​​文件夹，只根据 <code>go.mod</code>​​下载依赖。</li><li>​<code>GO111MODULE=auto</code>​​​，当项目在<code>$GOPATH/src</code>​​​外且项目根目录有<code>go.mod</code>​​​文件时，开启模块支持。</li></ol><p>使用 go module 管理依赖后会在项目根目录下生成两个文件<code>go.mod</code>​和<code>go.sum</code>​。</p><p>当然，Go1.11 和 1.12 版本的<code>GO111MODULE</code>​默认是<code>off</code>​，需要手动设置。而在 Golang1.13 及以上的版本中，GoModule 的默认配置为 <code>auto</code>​。所以 Golang1.13 + 的版本中我们就不需要配置 <code>GO111MODULE</code>​ 属性了。</p><h3 id="goproxy" tabindex="-1"><a class="header-anchor" href="#goproxy" aria-hidden="true">#</a> GOPROXY</h3><p><code>GOPROXY</code>​ 是一个环境变量，用于设置 Go Modules 的代理服务器地址，用来加速依赖包的下载，并可以缓存已下载的依赖包，从而减少网络传输和提高构建效率。</p><p>可以在<code>~/.zshrc</code>​或<code>~/.bashrc ​</code>​设置环境变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://mirrors.aliyun.com/goproxy,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,42),r=n("li",null,[s("​"),n("code",null,"https://mirrors.aliyun.com/goproxy"),s("​​ 是阿里的 Go Modules 代理服务器，可以加速依赖包的下载。")],-1),v=n("code",null,"direct",-1),m={href:"https://proxy.golang.org",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>这样设置 <code>GOPROXY</code>​ 环境变量可以在 代理服务器 找不到依赖包时，直接从官方代理服务器下载，以确保获取所需的依赖包。</p><h3 id="go-mod命令" tabindex="-1"><a class="header-anchor" href="#go-mod命令" aria-hidden="true">#</a> go mod命令</h3><p>常用的<code>go mod</code>​命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化一个新的模块</span>
go mod init mymodule

<span class="token comment"># 添加一个新的依赖包</span>
go get github.com/example/some-package

<span class="token comment"># 更新依赖包到最新版本</span>
go get <span class="token parameter variable">-u</span> github.com/example/some-package

<span class="token comment"># 指定依赖包的版本</span>
go get github.com/example/some-package@v1.2.3

<span class="token comment"># 查看当前模块的所有依赖列表</span>
go list <span class="token parameter variable">-m</span> all

<span class="token comment"># 下载当前模块的所有依赖包</span>
go mod download

<span class="token comment"># 清除不再使用的依赖包</span>
go mod tidy

<span class="token comment"># 将模块的依赖复制到本地的 vendor 目录</span>
go mod vendor

<span class="token comment"># 查看特定依赖包的详细信息</span>
go list <span class="token parameter variable">-m</span> <span class="token parameter variable">-json</span> github.com/example/some-package

<span class="token comment"># 查看当前模块路径</span>
go list <span class="token parameter variable">-m</span>

<span class="token comment"># 生成并验证 go.sum 文件</span>
go mod verify

<span class="token comment"># 查看为何特定模块被引入到项目中</span>
go mod why github.com/example/some-package

<span class="token comment"># 编辑模块版本信息，例如固定依赖的版本</span>
go mod edit <span class="token parameter variable">-require</span><span class="token operator">=</span>github.com/example/another-package@v2.0.1

<span class="token comment"># 编辑模块的替代路径，用于测试或开发</span>
go mod edit <span class="token parameter variable">-replace</span><span class="token operator">=</span>github.com/example/some-package<span class="token operator">=</span>./local/some-package

<span class="token comment"># 移除某个替代路径</span>
go mod edit <span class="token parameter variable">-dropreplace</span><span class="token operator">=</span>github.com/example/some-package

<span class="token comment"># 添加新的替代路径</span>
go mod edit <span class="token parameter variable">-replace</span><span class="token operator">=</span>github.com/old-package<span class="token operator">=</span>github.com/new-package@v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义包" tabindex="-1"><a class="header-anchor" href="#自定义包" aria-hidden="true">#</a> 自定义包</h3><p>包（package）是多个Go源码的集合，一个包可以简单理解为一个存放多个.go文件的文件夹。</p><p>该文件夹下面的所有go文件都要在代码的第一行添加如下代码，声明该文件归属的包。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> package_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意事项</strong></p><ul><li>一个文件夹下面直接包含的文件只能归属一个package，同样一个package的文件不能在多个文件夹下。</li><li>包名可以不和文件夹的名字一样，包名不能包含<code>-</code>​符号，通常使用小写字母和<code>_</code>​。</li><li>包名为main的包为应用程序的入口包，这种包编译后会得到一个可执行文件，而编译不包含main包的源代码则不会得到可执行文件。</li></ul><p>当使用 Go Modules 进行开发时，可以创建自定义的包和嵌套包，以组织项目的代码结构。</p><p>假设我们有一个项目目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>myproject/
├── go.mod
├── main.go
└── utils/
    ├── helper.go
    └── subpackage/
        └── feature.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们有一个名为 <code>myproject</code>​ 的项目，其中包含一个自定义的包 <code>utils</code>​ 和一个嵌套包 <code>subpackage</code>​。</p><p>首先，我们需要初始化一个模块并设置其路径。在项目根目录下运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go mod init myproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，我们可以创建自定义的包 <code>utils</code>​ 和嵌套包 <code>subpackage</code>​ 的文件。</p><p>在 <code>helper.go</code>​ 中，我们可以定义一些辅助函数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// utils/helper.go

package utils

<span class="token function">import</span> <span class="token string">&quot;fmt&quot;</span>

func <span class="token function-name function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;Hello from utils!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>feature.go</code>​ 中，我们可以定义一些特性函数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// utils/subpackage/feature.go

package subpackage

<span class="token function">import</span> <span class="token string">&quot;fmt&quot;</span>

func <span class="token function-name function">ShowFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;This is a feature from subpackage!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，在 <code>main.go</code>​ 中，我们可以使用这些自定义包和嵌套包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// main.go

package main

<span class="token function">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;myproject/utils&quot;</span>
    <span class="token string">&quot;myproject/utils/subpackage&quot;</span>
<span class="token punctuation">)</span>

func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    utils.SayHello<span class="token punctuation">(</span><span class="token punctuation">)</span>
    subpackage.ShowFeature<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个简单的示例，我们展示了如何在 Go Modules 项目中创建自定义的包和嵌套包，然后在主程序中引入和使用它们。这种方式可以帮助你更好地组织代码，使项目结构更清晰和模块化。</p><h2 id="​init​初始化函数" tabindex="-1"><a class="header-anchor" href="#​init​初始化函数" aria-hidden="true">#</a> ​<code>init</code>​初始化函数</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>在 Go 中，<code>init</code>​ 函数是一种特殊的函数，用于初始化包或模块。每个包可以有一个或多个 <code>init</code>​ 函数，这些函数会在程序运行之前被自动调用。<code>init</code>​ 函数通常用于执行包级别的初始化操作，如设置全局变量、初始化数据库连接、注册服务等。</p><p>​<code>init</code>​ 函数的特点：</p><ul><li>无参数和返回值。</li><li>可以有多个 <code>init</code>​ 函数。</li><li>​<code>init</code>​ 函数没有显示的调用，而是在包被引用时自动执行。</li></ul><h3 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序" aria-hidden="true">#</a> 执行顺序</h3><p>Go语言包会从main包开始检查其导入的所有包，每个包中又可能导入了其他的包。Go编译器由此构建出一个树状的包引用关系，再根据引用顺序决定编译顺序，依次编译这些包的代码。</p><ul><li>导入不同的包时，这些包的 <code>init</code>​ 函数的执行顺序将按照导入顺序执行。</li><li>在同一个包中，不同文件的 <code>init</code>​ 函数的执行顺序是按照文件名字母顺序执行的。</li><li>导入一个嵌套的包时，即 <code>A-&gt;B-&gt;C</code>​，最后导入的包的<code>init</code>​ 函数会优先执行，即 <code>C.init-&gt;B.init-&gt;A.init</code>​</li></ul><h3 id="案例验证" tabindex="-1"><a class="header-anchor" href="#案例验证" aria-hidden="true">#</a> 案例验证</h3><p>当涉及到多个不同的包和多个文件时，它们之间 <code>init</code>​ 函数的执行顺序与导入顺序和文件名的字母顺序有关。</p><p>假设有以下的目录结构和代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>project/
├── db
│   └── db.go
├── go.mod
├── main.go
├── services
│   └── service.go
└── utils
    ├── anthor.go
    └── util.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>util.go</code>​ 文件中的代码如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// utils/util.go

package utils

<span class="token function">import</span> <span class="token string">&quot;fmt&quot;</span>

func <span class="token function-name function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;utils_package: util init&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

func <span class="token function-name function">UtilFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;UtilFunction called&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>another.go</code>​ 文件中的代码如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// utils/another.go</span>

<span class="token keyword">package</span> utils

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;utils_package: another init&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">AnotherFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;AnotherFunction called&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>db.go</code>​ 文件中的代码如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// db/db.go</span>

<span class="token keyword">package</span> db

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;db_package: db init&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">DBFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;DBFunction called&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>service.go</code>​ 文件中的代码如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// services/service.go</span>

<span class="token keyword">package</span> services

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;project/db&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;services_package: service init&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ServiceFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    db<span class="token punctuation">.</span><span class="token function">DBFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ServiceFunction called&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main.go</code>​ 文件中的代码如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// main.go</span>

<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;project/services&quot;</span>
    <span class="token string">&quot;project/utils&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main package init&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Main started&quot;</span><span class="token punctuation">)</span>
    utils<span class="token punctuation">.</span><span class="token function">UtilFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    utils<span class="token punctuation">.</span><span class="token function">AnotherFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    services<span class="token punctuation">.</span><span class="token function">ServiceFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Main ended&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>main.go</code>​ 时，以下是输出的顺序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db_package: db init
services_package: <span class="token function">service</span> init
utils_package: another init
utils_package: util init
main package init
Main started
UtilFunction called
AnotherFunction called
DBFunction called
ServiceFunction called
Main ended
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示意图如下：</p><p>​<img src="`+d+'" alt="package" loading="lazy">​</p>',50);function k(g,h){const e=o("ExternalLinkIcon");return c(),l("div",null,[u,n("ul",null,[r,n("li",null,[s("​"),v,s("​​ 参数表示，如果在指定的代理服务器上找不到所需的依赖包，会直接从原始源（比如官方的 Go 代理服务器） "),n("a",m,[s("https://proxy.golang.org"),t(e)])])]),b])}const x=i(p,[["render",k],["__file","包管理.html.vue"]]);export{x as default};
