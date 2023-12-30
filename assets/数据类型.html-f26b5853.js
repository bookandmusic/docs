import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,d as l,e as i}from"./app-58480cea.js";const c="/assets/net-img-ev4LxQ-20230730162750-oef5cg2-05f21555.png",r="/assets/net-img-0PdsOw-20230730162751-4g9993x-215d20b2.png",u="/assets/net-img-pGGTAT-20230730162751-zy67unu-fd704f05.png",k="/assets/net-img-joccTd-20230730162751-3b9p6jn-8e175636.png",m="/assets/net-img-QMGkn2-20230730162751-fhbat49-f15f36e7.png",d="/assets/net-img-DfvMkD-20230730162751-hsxtsb8-3bcf7b50.jpg",b={},v=i('<h2 id="全局命令" tabindex="-1"><a class="header-anchor" href="#全局命令" aria-hidden="true">#</a> 全局命令</h2><p>​<img src="'+c+`" alt="ev4LxQ" loading="lazy">​</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>  <span class="token comment"># 测试是否连接某个redis服务</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHDB  <span class="token comment"># 清空当前库</span>
OK

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHALL  <span class="token comment"># 清空所有库</span>
OK

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token keyword">select</span> <span class="token number">1</span>  <span class="token comment"># 切换库，库索引0-15，共16个库</span>
OK

<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> dbsize  <span class="token comment"># 查看当前键的数量</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *  <span class="token comment"># 查看所有的键</span>
<span class="token punctuation">(</span>empty list or <span class="token builtin class-name">set</span><span class="token punctuation">)</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">1</span>  <span class="token comment"># 插入字符串类型的键值对</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 <span class="token number">2</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k3 <span class="token number">3</span>
OK

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> exists k1  <span class="token comment"># 判断键是否存在，键存在，返回1，否则，返回0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXISTS k3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> move k2 <span class="token number">2</span>  <span class="token comment"># 将键移到另外的库</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> expire k1 <span class="token number">200</span>  <span class="token comment"># 给键设置过期时间，键存在设置成功，返回1；否则，返回0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> expire k2 <span class="token number">200</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl k1  <span class="token comment"># 返回键的过期时间，键不存在，返回-2，键没有设置过期时间，返回-1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">194</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl k2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl k3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-1</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">type</span> k1  <span class="token comment"># 查看键的数据类型，键不存在，返回none</span>
string
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">type</span> k2
none

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del k3  <span class="token comment"># 删除键。存在键删除成功，返回1,；否则，返回0；</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del k2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del k1 k4 k5  <span class="token comment"># 同样，后面可以跟多个键，同时删除，返回删除成功的个数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><blockquote><p>String（字符串）</p></blockquote><p>string是redis最基本的类型，你可以理解成与Memcached一模一样的类型，一个key对应一个value。</p><p>string类型是二进制安全的。意思是redis的string可以包含任何数据。比如jpg图片或者序列化的对象。</p><p>string类型是Redis最基本的数据类型，一个redis中字符串value最多可以是512M。</p><p>​<img src="`+r+`" alt="0PdsOw" loading="lazy">​</p><p><strong>单值单value</strong></p><blockquote><p>设置、获取字符串类型的值</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">1</span>  <span class="token comment"># 给键设置值，无论键是否存在，都可以成功</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1  <span class="token comment"># 获取键对应的值，键不存在，返回none</span>
<span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> append k1 <span class="token number">234</span>  <span class="token comment"># 在键对应的值后面追加值，无论建是否存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;1234&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> strlen k1  <span class="token comment"># 得到字符串的长度，键不存在，返回none</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> getrange k1 <span class="token number">1</span> <span class="token number">3</span>  <span class="token comment"># 根据指定的范围获取对应得值</span>
<span class="token string">&quot;234&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setrange k1 <span class="token number">0</span> xxx  <span class="token comment"># 从指定的下标开始设置值</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;xxx4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当键对应得值是数字时，可以对键进行自增、自减操作</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> flushdb
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k3 <span class="token number">3</span>
OK

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incr k3  <span class="token comment"># 对键的值自增1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incr k3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decr k3  <span class="token comment"># 对键的值自减1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decr k3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incrby k3 <span class="token number">3</span>  <span class="token comment"># 按照指定的值对键对应得值进行自增</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decrby k3 <span class="token number">2</span>  <span class="token comment"># 按照指定的值对键对应得值进行自减</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k3
<span class="token string">&quot;4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>set命令有几个选项：</p></blockquote><ul><li>ex seconds：为键设置秒级过期时间。</li><li>px milliseconds：为键设置毫秒级过期时间。</li><li>nx：键必须不存在，才可以设置成功，用于添加。</li><li>xx：与nx相反，键必须存在，才可以设置成功，用于更新。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> flushdb
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">1</span> ex <span class="token number">100</span> nx  <span class="token comment"># 设置键对应得值，同时设置过期时间为100s，且键存在，不能设置</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">1</span> ex <span class="token number">100</span> nx
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl k1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">92</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;1&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token number">11</span> px <span class="token number">100000</span> xx  <span class="token comment"># 设置键对应的值，同时设置过期时间为100000毫秒，即100秒，且键不存在，不能设置</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k11 <span class="token number">11</span> px <span class="token number">100000</span> xx
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;11&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl k1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">91</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>除了<code>set</code>选项，Redis还提供了<code>setex</code>和<code>setnx</code>两个命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> flushdb
OK

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setex k1 <span class="token number">10</span> <span class="token number">1</span>  <span class="token comment"># 设置键的值得同时，还设置过期时间10s</span>
OK

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx k1 <span class="token number">1</span>  <span class="token comment"># 设置键对应的值，但是只有键不存在，才能设置成功</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx k1 <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> mset k1 <span class="token number">1</span> k2 <span class="token number">2</span> k3 <span class="token number">3</span>  <span class="token comment">#同时设置多个键值对</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;k1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;k2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;k3&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> msetnx k3 <span class="token number">3</span> k4 <span class="token number">4</span>  <span class="token comment"># 只有键都不存在，才可以设置成功，任务一个键存在，都设置失败</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> msetnx k4 <span class="token number">4</span> k5 <span class="token number">5</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><blockquote><p><strong>List（列表）</strong></p></blockquote><p>Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素导列表的头部（左边）或者尾部（右边）。<br> 它的底层实际是个链表。</p><p>​<img src="`+u+`" alt="pGGTAT" loading="lazy">​</p><p><strong>单值多value</strong></p><blockquote><p>设置、获取列表类型的值</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> flushdb
OK

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lpush list01 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token comment"># 在列表的头部插入数据</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list01 <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 根据指定的下标返回区间内的数据</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush list02 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>  <span class="token comment"># 在列表的尾部追加数据</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list02 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> llen list01 <span class="token comment"># 获取列表的长度</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lindex list01 <span class="token number">0</span>  <span class="token comment"># 获取列表指定下标的值，不存在，则为none</span>
<span class="token string">&quot;5&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lindex list01 <span class="token number">1</span>
<span class="token string">&quot;4&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lindex list01 <span class="token number">11</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>删除列表的数据</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lpop list02  <span class="token comment"># 从队头删除数据</span>
<span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpop list02 <span class="token comment"># 从队尾删除数据</span>
<span class="token string">&quot;5&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list02 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>移除n个指定值的元素</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHDB
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush list01 <span class="token number">3</span> <span class="token number">4</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">5</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list01 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrem list01 <span class="token number">2</span> <span class="token number">3</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list01 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>只保留指定区间内的元素，其余元素舍弃</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHDB
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush list01 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list01 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;6&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ltrim list01 <span class="token number">2</span> <span class="token number">5</span>  <span class="token comment"># 保留下标2-5区间内的元素，即保留3 4 5 6 </span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list01 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;6&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>从源列表的尾部弹出元素，插入到目的列表的头部</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHDB
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush l1 <span class="token number">1</span> <span class="token number">2</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush l2 a1 a2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l1 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l2 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;a1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;a2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpoplpush l1 l2
<span class="token string">&quot;2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l1 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l2 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;a1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;a2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修改列表中指定下标的值</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l2 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;a1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;a2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lset l2 <span class="token number">0</span> <span class="token number">22</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l2 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;22&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;a1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;a2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在指定元素后面插入新的值</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l2 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;22&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;a1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;a2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> linsert l2 before <span class="token number">22</span> python
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l2 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;python&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;22&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;a1&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;a2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> linsert l2 after <span class="token number">22</span> vue
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange l2 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;python&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;22&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;vue&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;a1&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;a2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>小结</p></blockquote><p>列表是一个字符串链表，left、right都可以添加；</p><p>如果键不存在，创建新的链表；</p><p>如果键已存在，新增内容；</p><p>如果值全移除，则键也消失；</p><p>链表的操作无论是头和尾哪一端效率都极高，但假如是对中间元素操作，效率就极低。</p><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h2><blockquote><p>Set（集合）</p></blockquote><p>Redis的Set是string类型的无序集合。它是通过HashTable实现实现的</p><p>​<img src="`+k+`" alt="joccTd" loading="lazy">​</p><p><strong>单值多value</strong></p><blockquote><p>设置、获取集合类型的值</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHDB
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd set01 <span class="token number">1</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span>  <span class="token comment"># 向集合中添加多个值，集合会自动去重</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> smembers set01  <span class="token comment"># 获取集合中所有的元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sismember set01 <span class="token number">3</span>  <span class="token comment"># 判断元素是否为集合中的成员，是返回1，否则返回0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sismember set01 <span class="token number">4</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> scard set01  <span class="token comment"># 返回集合中的元素个数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> srandmember set01 <span class="token number">1</span> <span class="token comment"># 随机返回结集合中1个整数</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>删除集合的元素</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> srem set01 <span class="token number">3</span>  <span class="token comment"># 删除集合中指定的元素，成功，返回1，否则，返回0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> spop set01 <span class="token number">1</span> <span class="token comment"># 随机从集合中删除n个元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> spop set01 <span class="token number">1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将源集合的一个元素移到目的集合</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHDB
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd set01 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd set02 <span class="token number">11</span> <span class="token number">22</span> <span class="token number">33</span> <span class="token number">44</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> smove set01 set02 <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> smembers set02
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;11&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;22&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;33&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;44&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>数学运算</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHDB
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd set01 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd set02 <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">sdiff</span> set01 set02  <span class="token comment"># 求差集，即只在第一个元素，不在其余任何一个集合的元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sinter set01 set02  <span class="token comment"># 求交集，即所有集合中都有的元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sunion set01 set02  <span class="token comment"># 求并集，即包含所有集合元素的大集合</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;6&quot;</span>
<span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;7&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="哈希" tabindex="-1"><a class="header-anchor" href="#哈希" aria-hidden="true">#</a> 哈希</h2><blockquote><p>Hash（哈希）</p></blockquote><p>Redis hash是一个键值对集合。</p><p>Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。</p><p><strong>KV模式不变，但V是一个键值对</strong></p><p>​<img src="`+m+`" alt="QMGkn2" loading="lazy">​</p><blockquote><p>设置、获取哈希类型的值</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> FLUSHDB
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset user <span class="token function">id</span> <span class="token number">1</span>  <span class="token comment"># 在user对应的值中存入一个键值对</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hget user <span class="token function">id</span>  <span class="token comment"># 从user中存储的键值对中获取固定字段的值</span>
<span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset user name z3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hget user name
<span class="token string">&quot;z3&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hmset user02 <span class="token function">id</span> <span class="token number">2</span> name l4  <span class="token comment"># 在user对应的值中存入多个键值对</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hmget user02 <span class="token function">id</span> name  <span class="token comment"># 从user中存储的键值对中获取多个字段的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;l4&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall user02  <span class="token comment">#  # 从user中存储的键值对中获取全部字段的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;id&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;l4&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hkeys user02  <span class="token comment"># 获取所有字段</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;id&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hvals user02  <span class="token comment"># 获取所有字段对应的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;l4&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>从存储的键值对中删除特定的字段</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall user02
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;id&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;l4&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hdel user02 <span class="token function">id</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall user02
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;l4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>判断某个字段是否存在</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hlen user02  <span class="token comment"># 获取存储的键值对个数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hexists user02 age  <span class="token comment"># 判断某个字段是否存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hexists user02 name
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>对某个字段的值进行增加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hmset user02 age <span class="token number">20</span> score <span class="token number">99.5</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hincrby user02 age <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">21</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hincrbyfloat user02 score <span class="token number">0.5</span>
<span class="token string">&quot;100&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在哈希对象中判断是否添加某个字段</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hsetnx user02 age <span class="token number">30</span>  <span class="token comment"># 添加字段时，如果存在，不能重复添加，不存在，则添加成功</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hsetnx user02 email lisi@163.com
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="有序集合" tabindex="-1"><a class="header-anchor" href="#有序集合" aria-hidden="true">#</a> 有序集合</h2><blockquote><p>zset（sorted set：有序集合）</p></blockquote><p>Redis zset和set一样也是string类型元素的集合，且不允许重复的成员。</p><p>不同的是每个元素都会关联一个double类型的分数。</p><p>redis正是通过分数来为集合中的成员进行从小到大的排序。zset的成员是唯一的，但分数（score）却可以重复。</p><p>​<img src="`+d+`" alt="DfvMkD" loading="lazy">​</p><blockquote><p>在set基础上，加一个score值之前set是k1 v1 v2 v3，现在zset是k1 score1 v1 score2 v2</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd zset01 <span class="token number">60</span> v1 <span class="token number">70</span> v2 <span class="token number">80</span> v3 <span class="token number">90</span> v4 <span class="token number">100</span> v5
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrange zset01 <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 按照指定的下标范围展示元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;v5&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrange zset01 <span class="token number">0</span> <span class="token parameter variable">-1</span> withscores  <span class="token comment"># 按照指定的下标范围展示元素和对应的分数</span>
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;60&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;70&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;80&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;90&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;v5&quot;</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token string">&quot;100&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrangebyscore zset01 <span class="token number">60</span> <span class="token number">90</span>  <span class="token comment"># 按照指定的分数范围展示元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrangebyscore zset01 <span class="token number">60</span> <span class="token number">90</span> withscores  <span class="token comment"># 按照指定的分数范围展示元素和对应的分数</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;60&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;70&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;80&quot;</span>
<span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
<span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;90&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>分页</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 每次两条数据，偏移0条，即第一页</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrangebyscore zset01 <span class="token number">60</span> <span class="token number">90</span> withscores limit <span class="token number">0</span> <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;60&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;70&quot;</span>
<span class="token comment"># 每次两条数据，偏移2条，即第二页</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrangebyscore zset01 <span class="token number">60</span> <span class="token number">90</span> withscores limit <span class="token number">2</span> <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;80&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;90&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>删除元素</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrem zset01 v5  <span class="token comment"># 删除有序集合中的特定元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrange zset01 <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>集合元素统计</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zcard zset01  <span class="token comment"># 统计有序集合中元素的个数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zcount zset01 <span class="token number">60</span> <span class="token number">80</span> <span class="token comment"># 统计指定分数范围内的元素个数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrank zset01 v4  <span class="token comment"># 获取指定元素的下标</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zscore zset01 v4  <span class="token comment"># 获取指定元素的分数</span>
<span class="token string">&quot;90&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>倒序处理</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrange zset01 <span class="token number">0</span> <span class="token parameter variable">-1</span> withscores
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;60&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;70&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;80&quot;</span>
<span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
<span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;90&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrevrank zset01 v4  <span class="token comment"># 获得元素的倒序下标</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrevrange zset01 <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 获取指定下标区间内，元素的倒序输出</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrevrangebyscore zset01 <span class="token number">90</span> <span class="token number">60</span>  <span class="token comment"># 获取指定分数区间内，按照降序分数的元素展示</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v4&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,89),g={href:"https://cloud.tencent.com/developer/doc/1203",target:"_blank",rel:"noopener noreferrer"};function q(h,f){const a=t("ExternalLinkIcon");return p(),o("div",null,[v,n("p",null,[s("更多命令参考"),n("a",g,[s("Redis教程"),l(a)])])])}const _=e(b,[["render",q],["__file","数据类型.html.vue"]]);export{_ as default};
