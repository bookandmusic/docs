import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-5539acff.js";const t={},p=e(`<h1 id="ansible模块" tabindex="-1"><a class="header-anchor" href="#ansible模块" aria-hidden="true">#</a> Ansible模块</h1><h2 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断" aria-hidden="true">#</a> 条件判断</h2><h3 id="assert" tabindex="-1"><a class="header-anchor" href="#assert" aria-hidden="true">#</a> assert</h3><p><code>that</code>：指定需要判断的条件，可以指定多个条件，条件之间关系是与</p><p><code>fail_msg</code>：当条件为 <code>false</code>，输出错误信息</p><p><code>success_msg</code>：当条件为 <code>true</code>时，输出成功信息</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> circle array
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> hosts
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> execute cmd to mysql version
      <span class="token key atrule">shell</span><span class="token punctuation">:</span>
        <span class="token key atrule">cmd</span><span class="token punctuation">:</span> <span class="token string">&quot;/usr/local/bin/mysql --version | awk &#39;{ print $3}&#39;&quot;</span>
      <span class="token key atrule">register</span><span class="token punctuation">:</span> version

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> assert mysql version <span class="token punctuation">&gt;</span>= 8.x
      <span class="token key atrule">vars</span><span class="token punctuation">:</span>
        <span class="token key atrule">mysql_ver</span><span class="token punctuation">:</span> <span class="token string">&quot;{{version.stdout}}&quot;</span>
      <span class="token key atrule">assert</span><span class="token punctuation">:</span>
        <span class="token key atrule">that</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;version.stdout is version(8.0, &#39;&gt;=&#39;)&quot;</span>
        <span class="token key atrule">fail_msg</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql version is {{mysql_ver}}, the version must be gather than 8.x&quot;</span>
        <span class="token key atrule">success_msg</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql version is {{mysql_ver}}&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>使用各种版本控制方案比较版本字符串</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> version test examples
  <span class="token key atrule">assert</span><span class="token punctuation">:</span>
    <span class="token key atrule">that</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;&#39;1.0&#39; is version(&#39;1.0&#39;, &#39;==&#39;)&quot;</span>  <span class="token comment"># 支持所有的比较运算符：==、!=、&gt;、&gt;=、&lt;=、&lt;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;&#39;1.0rc1&#39; is version(&#39;1.0&#39;, &#39;!=&#39;, strict=true)&quot;</span>  <span class="token comment"># 严格匹配模式</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;&#39;1.0&#39; is version(&#39;1.0&#39;, &#39;==&#39;, strict=true)&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;&#39;1.0&#39; is version(&#39;2.0&#39;, &#39;lt&#39;)&quot;</span>  <span class="token comment"># 支持比较运算符: lt、lte、gt、gte、eq</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;&#39;1.2.3&#39; is version(&#39;2.0.0&#39;, &#39;lt&#39;, version_type=&#39;semver&#39;)&quot;</span>  <span class="token comment"># 指定版本类型</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;&#39;2.14.0rc1&#39; is version(&#39;2.14.0&#39;, &#39;lt&#39;, version_type=&#39;pep440&#39;)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件状态" tabindex="-1"><a class="header-anchor" href="#文件状态" aria-hidden="true">#</a> 文件状态</h3><p><code>is exists</code>：判断文件路径存在</p><p><code>stat.exists</code>：判断文件存在</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check exists
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> test1

  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">tmp_path</span><span class="token punctuation">:</span> <span class="token string">&quot;/tmp/&quot;</span>
    <span class="token key atrule">tmp_file</span><span class="token punctuation">:</span> <span class="token string">&quot;/tmp/qa.txt&quot;</span>
  
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check path exists
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{tmp_path}}&quot;</span>
      <span class="token key atrule">when</span><span class="token punctuation">:</span> tmp_path is exists

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check file stat
      <span class="token key atrule">stat</span><span class="token punctuation">:</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;{{tmp_file}}&quot;</span>
      <span class="token key atrule">register</span><span class="token punctuation">:</span> file_data
    
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check file exists
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{tmp_file}}&quot;</span>
      <span class="token key atrule">when</span><span class="token punctuation">:</span> file_data.stat.exists
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环数据" tabindex="-1"><a class="header-anchor" href="#循环数据" aria-hidden="true">#</a> 循环数据</h2><h3 id="循环数组" tabindex="-1"><a class="header-anchor" href="#循环数组" aria-hidden="true">#</a> 循环数组</h3><blockquote><p>循环数组： <code>loop</code>、<code>with_list</code>、<code>with_items</code></p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> circle array
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> hosts
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">nums</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> loop
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{item}}&quot;</span>
      <span class="token key atrule">loop</span><span class="token punctuation">:</span> <span class="token string">&quot;{{nums}}&quot;</span>
      <span class="token key atrule">when</span><span class="token punctuation">:</span> item <span class="token punctuation">&gt;</span> 2

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with_list
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{item}}&quot;</span>
      <span class="token key atrule">with_list</span><span class="token punctuation">:</span> <span class="token string">&quot;{{nums}}&quot;</span>
      <span class="token key atrule">when</span><span class="token punctuation">:</span> item <span class="token punctuation">&gt;</span> 2

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with_items
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{item}}&quot;</span>
      <span class="token key atrule">with_items</span><span class="token punctuation">:</span> <span class="token string">&quot;{{nums}}&quot;</span>
      <span class="token key atrule">when</span><span class="token punctuation">:</span> item <span class="token punctuation">&gt;</span> 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环字典" tabindex="-1"><a class="header-anchor" href="#循环字典" aria-hidden="true">#</a> 循环字典</h3><blockquote><p>循环字典：<code>with_dict</code>、<code>with_items</code></p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> circle dict
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> hosts
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">person</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>&quot;name&quot;<span class="token punctuation">:</span><span class="token string">&quot;a1&quot;</span><span class="token punctuation">,</span> &quot;gender&quot;<span class="token punctuation">:</span><span class="token string">&quot;man&quot;</span><span class="token punctuation">}</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with_dict
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{item.key}}==={{item.value}}&quot;</span>
      <span class="token key atrule">with_dict</span><span class="token punctuation">:</span> <span class="token string">&quot;{{person}}&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with_items
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{item}}==={{person[item]}}&quot;</span>
      <span class="token key atrule">with_items</span><span class="token punctuation">:</span> <span class="token string">&quot;{{person}}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环组合" tabindex="-1"><a class="header-anchor" href="#循环组合" aria-hidden="true">#</a> 循环组合</h3><blockquote><p>循环组合：<code>with_subelements</code></p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> circle object
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> hosts
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">books</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 书1
        <span class="token key atrule">author</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> a1
          <span class="token punctuation">-</span> a2
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 书2
        <span class="token key atrule">author</span><span class="token punctuation">:</span> 
          <span class="token punctuation">-</span> a1 
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with_subelements
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{item}}&quot;</span>
      <span class="token key atrule">with_subelements</span><span class="token punctuation">:</span> 
        <span class="token punctuation">-</span> <span class="token string">&quot;{{books}}&quot;</span>
        <span class="token punctuation">-</span> author
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照指定的键，将该键对应的值(<strong>类型必须是列表</strong>)和对象其余元素组合为一个新对象，然后遍历循环得到所有组合。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">20</span>:39:59 <span class="token punctuation">]</span> ✗  ansible-playbook <span class="token parameter variable">-i</span> inventory.ini test.yaml

PLAY <span class="token punctuation">[</span>circle object<span class="token punctuation">]</span> ****************************************************************************************************************************

TASK <span class="token punctuation">[</span>with_subelements<span class="token punctuation">]</span> *************************************************************************************************************************
ok: <span class="token punctuation">[</span>host1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>item<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;书1&#39;</span><span class="token punctuation">}</span>, <span class="token string">&#39;a1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;书1&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;a1&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
ok: <span class="token punctuation">[</span>host1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>item<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;书1&#39;</span><span class="token punctuation">}</span>, <span class="token string">&#39;a2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;书1&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;a2&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
ok: <span class="token punctuation">[</span>host1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>item<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;书2&#39;</span><span class="token punctuation">}</span>, <span class="token string">&#39;a1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;书2&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;a1&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

PLAY RECAP **************************************************************************************************************************************
host1                      <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),l=[p];function i(c,o){return s(),a("div",null,l)}const k=n(t,[["render",i],["__file","Ansible模块.html.vue"]]);export{k as default};
