import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-d4f00f12.js";const t={},p=e(`<h1 id="请求地址参数查询" tabindex="-1"><a class="header-anchor" href="#请求地址参数查询" aria-hidden="true">#</a> 请求地址参数查询</h1><p>接下来我们将使用最简单的形式来演示search API。</p><h2 id="索引、类型查询" tabindex="-1"><a class="header-anchor" href="#索引、类型查询" aria-hidden="true">#</a> 索引、类型查询</h2><p>首先，我们先通过搜索公司的所有员工来演示搜索API的应用。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以发现，在请求地址中使用了company索引，employee类型，但是并没有指定文档的ID，同时使用的是<code>_search</code>接口。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;rfZt238BJHOwMxbsnp3g&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;firstName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Mily&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;lastName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Smith&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
          <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;I love Python and Java&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;interests&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;music&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;firstName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Mily&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;lastName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Lucy&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
          <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;I love Js&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;interests&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;sports&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;firstName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;John2&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;lastName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Smith&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
          <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;I love Python&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;interests&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;sports&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;music&quot;</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;gender&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;man&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;firstName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Hilun&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;lastName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Lucy&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
          <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;I love Js and Java&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;interests&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;book&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;rvZ_238BJHOwMxbsJZ3F&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;firstName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Hilun&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;lastName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Lucy&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
          <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;I love Js and Java&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;interests&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;book&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>hits</code></p></blockquote><p>响应中最重要的部分是<code>hits</code>，它包含了<code>total</code>字段来表示匹配到的文档总数，<code>hits</code>数组还包含了匹配到的前10条数据。</p><p><code>hits</code>数组中的每个结果都包含<code>_index</code>、<code>_type</code>和文档的<code>_id</code>字段，被加入到<code>_source</code>字段中这意味着在搜索结果中我们将可以直接使用全部文档。这不像其他搜索引擎只返回文档ID，需要你单独去获取文档。</p><blockquote><p><code>_score</code></p></blockquote><p>每个节点都有一个<code>_score</code>字段，这是<strong>相关性得分(relevance score)</strong>，它衡量了文档与查询的匹配程度。默认的，返回的结果中关联性最大的文档排在首位；这意味着，它是按照<code>_score</code>降序排列的。这种情况下，我们没有指定任何查询，所以所有文档的相关性是一样的，因此所有结果的<code>_score</code>都是取得一个中间值<code>1</code></p><p><code>max_score</code>指的是所有文档匹配查询中<code>_score</code>的最大值。</p><blockquote><p><code>took</code></p></blockquote><p><code>took</code>告诉我们整个搜索请求花费的毫秒数。</p><blockquote><p><code>shards</code></p></blockquote><p><code>_shards</code>节点告诉我们参与查询的分片数（<code>total</code>字段），有多少是成功的（<code>successful</code>字段），有多少的是失败的（<code>failed</code>字段）。通常我们不希望分片失败，不过这个有可能发生。如果我们遭受一些重大的故障导致主分片和复制分片都故障，那这个分片的数据将无法响应给搜索请求。这种情况下，Elasticsearch将报告分片<code>failed</code>，但仍将继续返回剩余分片上的结果。</p><blockquote><p><code>timeout</code></p></blockquote><p><code>time_out</code>值告诉我们查询超时与否。一般的，搜索请求不会超时。如果响应速度比完整的结果更重要，你可以定义<code>timeout</code>参数为<code>10</code>或者<code>10ms</code>（10毫秒），或者<code>1s</code>（1秒）</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /_search?timeout=10ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Elasticsearch将返回在请求超时前收集到的结果。</p><p>超时不是一个断路器（circuit breaker）（译者注：关于断路器的理解请看警告）。</p><blockquote><p><strong>警告</strong></p><p>需要注意的是<code>timeout</code>不会停止执行查询，它仅仅告诉你<strong>目前</strong>顺利返回结果的节点然后关闭连接。在后台，其他分片可能依旧执行查询，尽管结果已经被发送。</p><p>使用超时是因为对于你的业务需求（Service-Level Agreement服务等级协议）来说非常重要，而不是因为你想中断执行长时间运行的查询。</p></blockquote><p>除了搜索特定的索引中特定类型的文档数据之外，我们还可以在请求地址中指定多个索引、多个文档，甚至不指定。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在所有的索引中搜索</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在索引employee中搜索</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee,department/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在索引baidu和sina的所有类型中搜索</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /e*,d*/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在以b开头或s开头的所有索引中搜索</p><h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2><p>在上面的搜索中，我们已经得知，每次搜索的文档默认最多只能10条。如果，想要每次的文档数量改变怎么办呢？</p><p>Elasticsearch中提供了分页机制，帮助我们实现这个功能。Elasticsearch的分页机制和SQL的LIMIT分页机制十分相似。</p><ul><li>size：结果数，默认10</li><li>from：跳过的结果数，默认0</li></ul><p>如果你每页显示2个结果，从第一页到第三页请求地址如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search?size=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search?size=2&amp;from=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search?size=2&amp;from=4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查询字符串" tabindex="-1"><a class="header-anchor" href="#查询字符串" aria-hidden="true">#</a> 查询字符串</h2><p>接下来我们要尝试搜索哪些员工的姓氏包含Smith。为了实现这个目的，我们需要使用 查询字符串（Query string）搜索，通过URL来传递查询的关键字：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search?q=lastName:Smith
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们依旧使用<code>_search</code>接口，然后将参数传入<code>q=</code>。这样我们就可以得到姓Smith的结果。</p><p>查询在lastName字段中包含Smith并且在about中包含Python的文档。实际的查询就是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+lastName:Smith +about:Java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是在发送请求时，需要对参数进行URL编码，得到一个字符串作为参数：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search?q=%2BlastName%3ASmith%20%2Babout%3AJava
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>+</code>前缀表示必须与查询条件匹配。类似地，<code>-</code>前缀表示一定不与查询条件匹配。没有<code>+</code>或<code>-</code>的其他条件都是可选的,即匹配的越多，文档就越相关。</p><h1 id="请求体参数查询" tabindex="-1"><a class="header-anchor" href="#请求体参数查询" aria-hidden="true">#</a> 请求体参数查询</h1><p>之前的查询语句，可以帮助我们可以实现一些简单的条件查询。但是如果想要实现复杂的查间，就不建议在请求地址中传参，而是应该使用请求体参数查询。</p><p>请求体查询，并不仅仅用来处理查询，而且还可以高亮返回结果中的片段，并且给出帮助你找寻最好结果的相关数据建议。</p><h2 id="简单查询" tabindex="-1"><a class="header-anchor" href="#简单查询" aria-hidden="true">#</a> 简单查询</h2><p>在请求体查询中，我们同样从最基础的<code>_search</code> API开始。</p><p>同之前的查询一样，我们可以在请求地址上体现索引和类型，现在只是多了一个请求体参数。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，我们也可以使用from和size进行分页查询。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>带请求体参数的GET请求？</p></blockquote><p>任何一种语言的HTTP库都不允许GET请求携带请求体参数。事实上，很多人都很诧异，GET请求中居然会允许携带参数。</p><p>实际情况是一份规定HTTP语义及内容的RFC文档-RFC7231，并未规定GET请求中允许携带请求体参数。所以，有些HTTP服务中允许这种行为，而另一些，则不允许这些行为。</p><p>Elasticsearch倾向于使用GET提交查询请求，因为在Elasticsearch官方看来，相对于POST，GET更能体现查询这种行为。</p><p>然而，因为携带交互数据的GET请求并没有广泛支持，所以search API同样支持POST请求：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况同样适用于其他携带交互数据的GET API请求。</p><h2 id="query-dsl查询" tabindex="-1"><a class="header-anchor" href="#query-dsl查询" aria-hidden="true">#</a> Query DSL查询</h2><p>查询字符串是通过命令语句完成点对点的搜索，但这有它的局限性。Elasticsearch提供了更加灵活的查询语言，它被称作Query DSL，通过它我们可以完成更加复杂、强大的搜索任务。</p><h3 id="查询与过滤" tabindex="-1"><a class="header-anchor" href="#查询与过滤" aria-hidden="true">#</a> 查询与过滤</h3><p>DSL有自己的一套查询组件，这些组件可以无限组合搭配。这套组件在以下两种情况使用：过滤情况和查询情况。</p><p>当使用于过滤情况时，查询被设置成一个不评分或者过滤查询。即这个查间只是简单的问一个问题：这个条件是否匹配？回答也是十分简洁，yes或者no，二者必居其一。</p><ul><li>created 时间是否在2013与2014这个区间？</li><li>status 字段是否包含 pulished 这个单词？</li></ul><p>当使用查询情况时，查询就变成了一个评分查询。和不评分的查询类似，也要去判断这个文档是否匹配，同时还要判断这个文档匹配的有多好（匹配度如何）。此查询的典型用法是用于查找以下文档：</p><ul><li><p>查找与ful1 text search这个词语最匹配的文档</p></li><li><p>包含run这个词，也能匹配runs，running</p></li><li><p>包含quick、brow、 fox这几个词，词之间的距离越近，文档相关性越高</p></li><li><p>标签 lucene， search、 java，标签越多，相关性越高</p></li></ul><p>一个评分查询计算每一个文档与此查询的相关度，同时将这个相关度分配给表示相关性的字段<code>_socre</code>，并且按照相关性对匹配到的文档进行排序。这种相关性的概念是非常适合全文搜索的情况，因为全文搜索几乎没有完全正确的答案。</p><blockquote><p>在Elasticsearch2.0之后，过滤（filter）已经从技术被排除了，但所有的查询（query）可以变成不评分查询。</p></blockquote><p>过滤查询只是简单的检查包含或者排除，这使得计算非常快。并且计算结果经常会被缓存到内存中。<br> 相反，评分查询不仅仅要找出匹配的文档，还要计算每个文档的匹配性。计算匹配性比不评分查询费力得多。并且，查询结果并不缓存。</p><p>通常的规则是，使用查询语句来进行全文搜索或其他影响相关性得分的搜索。其他情况都使用过滤。</p><h3 id="查询语句" tabindex="-1"><a class="header-anchor" href="#查询语句" aria-hidden="true">#</a> 查询语句</h3><p>DSL（Domain Specific Language 领域特定语言）需要使用json作为主体：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /_index/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;查询语句&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<strong>所有的查询语句都是json字符串</strong>。</p><p>一个查询语句一般使用这种结构：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;QUERY_NAME&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ARGUMENT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VALUE&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者指向一个指定的字段：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;QUERY_NAME&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;FIELD_NAME&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;ARGUMENT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VALUE&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>match_all</p></blockquote><p>match_all在功能等同于空查询，正如其名字一样，匹配所有的文档。在没有指定查询方式时，它是默认的查询：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>match</p></blockquote><p>无论在任何字段上进行的是全文搜索，还是精确查询，match查询都是可用的标准查询。<br> 如果在一个全文字段上使用match，在查询前，它将用正确的分析器去分析查询字符串：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;about&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Python&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在一个精确的字段（数字、日期、布尔或者一个not_analyzed字符申字段）上使用它，那么它将会精确地匹配给定的值。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2014-09-01&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于精确值的查词，建议便用filter语句来取代query，因为filter会被缓存。</p><blockquote><p>multi_match</p></blockquote><p>可以在多个字段上执行相同的match查询</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;about&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;interests&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>range</p></blockquote><p>查询找出那些落在指定区间内的数字或时间</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lt&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被允许的操作符：</p><p><code>gt</code>：大于</p><p><code>gte</code>：大于等于</p><p><code>lt</code>：小于</p><p><code>lte</code>：小于等于</p><blockquote><p>term</p></blockquote><p>被用于精确值匹配，这些值可以是数字、日期、布尔或者一个not_analyzed字符申字段</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2014-09-01&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;public&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;about&quot;</span><span class="token operator">:</span><span class="token string">&quot;python&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>terms</p></blockquote><p>terms查询和term查询一样，但它允许指定多个值进行匹配。如果这个字段包含了指定值的任何一个，那么这个文档满足条件：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;music&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;book&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>exists 和 missing</p></blockquote><p>exists 和 missing 被用来查询指定字段中有值（exists）和无值（missing）的文档。这类似SQL中的<code>IS NULL</code>(missing)和<code>IS NOT NULL</code> (exists)。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;exists&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;about&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些查询经常被用来判断某个字段是否有值。</p><blockquote><p>Filter Query Missing 已经从 ES 5 版本移除，针对 ES 5.2.2 以上版本，查询不包含某字段（无 about 字段）的数据，DSL 如下:</p></blockquote><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must_not&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;exists&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;about&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合查询语句" tabindex="-1"><a class="header-anchor" href="#组合查询语句" aria-hidden="true">#</a> 组合查询语句</h3><blockquote><p>bool</p></blockquote><p>现实的查询需求从来都没有那么简单：它们需要在多个字段上查间多种多样的文本，并且根据一系列的标准来过滤。</p><p>为了构建高级查询，可以使用bool查询将多查询语句组合在一起，成为用户自己想要的布尔查间它可以接受以下参数：</p><p><code>must</code>：必须匹配这些条件<br><code>must_not</code>：必须不匹配这些条件<br><code>should</code>：如果满足这些条件，将增加_score，否则，无任何影响。主要用于修正每个文档的相关性得分。<br><code>filter</code>：必须匹配，但它以不评分、过滤模式进行匹配。这些语句不影响评分，只是根据过滤标准来排除或包含文档。</p><p>下面的用于查找 lastName字段匹配Smith并且interests不为sports的员工。那些interests为music或者age大于等于22的员工，将比其他员工有更高的排名。如果两者都满足，那么排名更高：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Smith&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;must_not&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sports&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token string">&quot;music&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">22</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有must语句，那么至少需要能够匹配其中的一条should语句。但如果至少存在一条must语句，则should语句就无所谓。</p><p>如果前面的查询不想因为年龄而影响得分，可以用filter语句重写：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Smith&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;must_not&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sports&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token string">&quot;music&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">22</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过将range查询移到filter语句中，则该条件将不再影响文档的相关性排名。<br> 所有查询都可以借鉴这种方式，将查询移到bool查询的filter语句中，这样它就自动转成一个不评分的filter。<br> 如果需要通过多个不同的标准来过滤文档，bool查询本身也可以用作不评分的查询。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token string">&quot;music&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>const_score</p></blockquote><p>将一个不变的常量评分应用于匹配的文档。它被用于只需要执行一个filter而没有其他查询的情况。</p><p>可</p><p>以便用它来取代只有filter语句的bool查询。在性能上是完全相同的，但对于提高查间简洁性和清晰度有很多帮助。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;constant_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token string">&quot;music&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">1.5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证查询" tabindex="-1"><a class="header-anchor" href="#验证查询" aria-hidden="true">#</a> 验证查询</h3><p>查询有时候会非常复杂，不过可以通过validate-query API来验证查询是否合法。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_validate/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;constant_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token string">&quot;music&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上validate请求的响应可以告诉我们这个查询是否合法。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;valid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了找出查询不合法的原因，可以将explain参数添加到查询字符串中：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /employee/_validate/query?explain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;constant_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token string">&quot;music&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>explain参数可以通过更多关于查询不合法的信息。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;valid&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;error&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;org.elasticsearch.common.ParsingException: [constant_score] query does not support [must]&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,166),o=[p];function i(l,c){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","Elasticsearch基础教程(二)查询-5367c605.html.vue"]]);export{d as default};
