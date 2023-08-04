import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,a as n,b as s,d as t,e}from"./app-20457886.js";const l={},u=n("h1",{id:"elasticsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch","aria-hidden":"true"},"#"),s(" ElasticSearch")],-1),r={href:"https://elasticsearch-py.readthedocs.io/en/master/",target:"_blank",rel:"noopener noreferrer"},d=e(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> elasticsearch <span class="token keyword">import</span> Elasticsearch


es <span class="token operator">=</span> Elasticsearch<span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">&#39;localhost:9200&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment"># 启动前嗅探es集群服务器</span>
    <span class="token comment"># sniff_on_start=True,</span>
    <span class="token comment"># es集群服务器结点连接异常时是否刷新es节点信息</span>
    <span class="token comment"># sniff_on_connection_fail=True,</span>
    <span class="token comment"># 每60秒刷新节点信息</span>
    <span class="token comment"># sniffer_timeout=60</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 在创建索引时忽略由 IndexAlreadyExistsException 引起的 400 已经存在</span>
rs <span class="token operator">=</span> es<span class="token punctuation">.</span>indices<span class="token punctuation">.</span>create<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;employee&#39;</span><span class="token punctuation">,</span> ignore<span class="token operator">=</span><span class="token number">400</span><span class="token punctuation">)</span>
 
<span class="token comment"># 没有这样的索引 404  400 已删除</span>
<span class="token comment"># rs = es.indices.delete(index=&#39;employee&#39;, ignore=[400, 404])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h2><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h3><p>在插入数据时，既可以指定id，也可以不指定，默认生成。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&#39;&#39;&#39;
PUT /user/_doc/1/
{
    &quot;firstName&quot;: &quot;John&quot;,
    &quot;lastName&quot;: &quot;Smith&quot;,
    &quot;age&quot;: 25,
    &quot;about&quot;: &quot;I love Python&quot;,
    &quot;interests&quot;: [
        &quot;sports&quot;,
        &quot;music&quot;
    ]
}
&#39;&#39;&#39;</span>
body <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;firstName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lastName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Smith&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token string">&quot;about&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;I love Python&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;interests&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;sports&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;music&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 索引: 文档存在，按照新的数据重新赋值; 文档不存在, 添加文档</span>
rs <span class="token operator">=</span> es<span class="token punctuation">.</span>index<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> body<span class="token operator">=</span>body<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
POST /user/_doc/2/?op_type=create
{
  &quot;firstName&quot;: &quot;Mily&quot;,
  &quot;lastName&quot;: &quot;Lucy&quot;,
  &quot;age&quot;: 27,
  &quot;about&quot;: &quot;I love Js&quot;,
  &quot;interests&quot;: [
    &quot;sports&quot;
  ]
}
&quot;&quot;&quot;</span>
<span class="token comment"># 插入单条</span>
body <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;firstName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mily&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lastName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Lucy&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
    <span class="token string">&quot;about&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;I love Js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;interests&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;sports&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment"># 创建：文档不存在创建; 文档存在，抛出异常</span>
rs <span class="token operator">=</span> es<span class="token punctuation">.</span>create<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> body<span class="token operator">=</span>body<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
GET /user/_doc/1/
&quot;&quot;&quot;</span>
<span class="token comment"># 查询: id为1, 全部字段</span>
doc <span class="token operator">=</span> es<span class="token punctuation">.</span>get<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>  
<span class="token keyword">print</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
GET /user/_doc/1/_source/?_source=firstName,lastName,age
&quot;&quot;&quot;</span>
<span class="token comment"># 查询: id为1, 特定路径，特定字段, 多个条件用逗号隔开, 官方不建议通过路径去除其他数据</span>
doc <span class="token operator">=</span> es<span class="token punctuation">.</span>get<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> filter_path<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;_source&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> _source<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;firstName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lastName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
<span class="token keyword">print</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span>


<span class="token triple-quoted-string string">&quot;&quot;&quot;
POST /user/_search
{

}
&quot;&quot;&quot;</span>
<span class="token comment"># 搜索： 索引user, 全部字段</span>
all_doc <span class="token operator">=</span> es<span class="token punctuation">.</span>search<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
POST /user/_search
{
	&quot;_source&quot;:{
		&quot;includes&quot;: [&quot;firstName&quot;,&quot;lastName&quot;,&quot;age&quot;]
	}
}
&quot;&quot;&quot;</span>
<span class="token comment"># 搜索: 索引user, 特定字段</span>
all_doc <span class="token operator">=</span> es<span class="token punctuation">.</span>search<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> _source<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;firstName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lastName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
POST /user/_search
{
	&quot;query&quot;:{
		&quot;range&quot;: {
			&quot;age&quot;: {
				&quot;gt&quot;: 25
			}
		}
	}
}
&quot;&quot;&quot;</span>
<span class="token comment"># 搜索: 索引user, 年龄大于25</span>
query <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;query&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;range&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;gt&#39;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
all_doc <span class="token operator">=</span> es<span class="token punctuation">.</span>search<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> body<span class="token operator">=</span>query<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
PUT /user/_doc/2/
{
    &quot;firstName&quot;: &quot;Mily&quot;,
    &quot;lastName&quot;: &quot;Lucy&quot;,
    &quot;age&quot;: 27,
    &quot;about&quot;: &quot;I love Js&quot;,
    &quot;interests&quot;: [
        &quot;sports&quot;
    ],
    &quot;gender&quot;: &quot;woman&quot;
}
&quot;&quot;&quot;</span>
<span class="token comment"># 索引: 文档存在，按照新的数据重新赋值; 文档不存在, 添加文档</span>
data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;firstName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mily&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lastName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Lucy&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
    <span class="token string">&quot;about&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;I love Js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;interests&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;sports&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;gender&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;woman&quot;</span>
<span class="token punctuation">}</span>
res <span class="token operator">=</span> es<span class="token punctuation">.</span>index<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> body<span class="token operator">=</span>data<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>


<span class="token triple-quoted-string string">&#39;&#39;&#39;
POST /employee/_update/1/
{
  &quot;doc&quot;: {
    &quot;gender&quot;: &quot;man&quot;
  }
}
&#39;&#39;&#39;</span>
<span class="token comment"># 更新：文档不存在,抛出异常; 文档存在:存在字段更新, 不存在字段添加，表现为更新单个字段，实际却是：取值、更新、赋值</span>
data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;doc&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;gender&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;man&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
res <span class="token operator">=</span> es<span class="token punctuation">.</span>update<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> body<span class="token operator">=</span>data<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
DELETE /user/_doc/2/
&quot;&quot;&quot;</span>

<span class="token comment"># 删除: 文档不存在,抛出异常; 文档存在，删除</span>
res <span class="token operator">=</span> es<span class="token punctuation">.</span>delete<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="elasticsearch-dsl" tabindex="-1"><a class="header-anchor" href="#elasticsearch-dsl" aria-hidden="true">#</a> ElasticSearch DSL</h1>`,17),v={href:"https://elasticsearch-dsl.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"elasticsearch.py",-1),m=n("code",null,"ORM",-1),b=e(`<h2 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> elasticsearch-dsl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="链接-1" tabindex="-1"><a class="header-anchor" href="#链接-1" aria-hidden="true">#</a> 链接</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> elasticsearch_dsl<span class="token punctuation">.</span>connections <span class="token keyword">import</span> connections


connections<span class="token punctuation">.</span>create_connection<span class="token punctuation">(</span>hosts<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引-1" tabindex="-1"><a class="header-anchor" href="#索引-1" aria-hidden="true">#</a> 索引</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">from</span> elasticsearch_dsl <span class="token keyword">import</span> Document<span class="token punctuation">,</span> Date<span class="token punctuation">,</span> Integer<span class="token punctuation">,</span> Keyword<span class="token punctuation">,</span> Text


<span class="token keyword">class</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>Document<span class="token punctuation">)</span><span class="token punctuation">:</span>
    title <span class="token operator">=</span> Text<span class="token punctuation">(</span>analyzer<span class="token operator">=</span><span class="token string">&#39;ik_max_word&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定文本分词器</span>
    body <span class="token operator">=</span> Text<span class="token punctuation">(</span>analyzer<span class="token operator">=</span><span class="token string">&#39;ik_max_word&#39;</span><span class="token punctuation">)</span>
    tags <span class="token operator">=</span> Keyword<span class="token punctuation">(</span><span class="token punctuation">)</span>
    lines <span class="token operator">=</span> Integer<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">class</span> <span class="token class-name">Index</span><span class="token punctuation">:</span>
        name <span class="token operator">=</span> <span class="token string">&#39;blog&#39;</span>
        settings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;number_of_shards&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">save</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>lines <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>body<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>Article<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>


<span class="token comment"># create the mappings in elasticsearch</span>
Article<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据-1" tabindex="-1"><a class="header-anchor" href="#数据-1" aria-hidden="true">#</a> 数据</h2><h3 id="插入-1" tabindex="-1"><a class="header-anchor" href="#插入-1" aria-hidden="true">#</a> 插入</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>article <span class="token operator">=</span> Article<span class="token punctuation">(</span>meta<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&#39;Elasticsearch基础教程(二)查询&#39;</span><span class="token punctuation">,</span> tags<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;ES&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
article<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;请求地址参数查询
接下来我们将使用最简单的形式来演示search API。
索引、类型查询
首先，我们先通过查询公司的所有员工来演示查询API的应用。&#39;&#39;&#39;</span>
article<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询-1" tabindex="-1"><a class="header-anchor" href="#查询-1" aria-hidden="true">#</a> 查询</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># instantiating the Search object</span>
s <span class="token operator">=</span> Article<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token punctuation">)</span>

query <span class="token operator">=</span> Q<span class="token punctuation">(</span><span class="token string">&#39;bool&#39;</span><span class="token punctuation">,</span> should<span class="token operator">=</span><span class="token punctuation">[</span>Q<span class="token punctuation">(</span><span class="token string">&#39;terms&#39;</span><span class="token punctuation">,</span> tags<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;查询&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Q<span class="token punctuation">(</span><span class="token string">&quot;multi_match&quot;</span><span class="token punctuation">,</span> query<span class="token operator">=</span><span class="token string">&#39;查询&#39;</span><span class="token punctuation">,</span> fields<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;body&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># query = Q(&#39;terms&#39;, tags=[&#39;查询&#39;]) | Q(&quot;multi_match&quot;, query=&#39;查询&#39;, fields=[&#39;title&#39;, &#39;body&#39;])</span>
results <span class="token operator">=</span> s<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_dict<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function q(h,g){const a=o("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",r,[s("elaticsearch"),t(a)]),s(":Elasticsearch 的官方低级客户端。它的目标是为 Python 中所有与 Elasticsearch 相关的代码提供基础操作，类似于pymysql。")]),d,n("p",null,[n("a",v,[s("elasticsearch dsl"),t(a)]),s(":Elasticsearch DSL 是一个高级库，其目的是帮助编写和运行针对 Elasticsearch 的查询。它建立在官方客户端("),k,s(")之上，类似于"),m,s("。")]),b])}const f=i(l,[["render",q],["__file","ES客户端.html.vue"]]);export{f as default};
