import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as a}from"./app-4580d5fc.js";const l="/assets/net-img-20220326170700-20230730163013-v1lq6y7-7ac1aa6a.jpg",i={},t=a('<h1 id="主从同步" tabindex="-1"><a class="header-anchor" href="#主从同步" aria-hidden="true">#</a> 主从同步</h1><h2 id="起因" tabindex="-1"><a class="header-anchor" href="#起因" aria-hidden="true">#</a> 起因</h2><p>1、在业务复杂的系统中，有这么一个情景，有一句sql语句需要锁表，导致暂时不能使用读的服务，那么就很影响运行中的业务，使用主从复制，让主库负责写，从库负责读，这样，即使主库出现了锁表的情景，通过读从库也可以保证业务的正常运作。</p><p>2、做数据的热备</p><p>3、架构的扩展。业务量越来越大，I/O访问频率过高，单机无法满足，此时做多库的存储，降低磁盘I/O访问的频率，提高单个机器的I/O性能。</p><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>MySQL 主从复制是指数据可以从一个MySQL数据库服务器主节点复制到一个或多个从节点。MySQL 默认采用异步复制方式，这样从节点不用一直访问主服务器来更新自己的数据，数据的更新可以在远程连接上进行，从节点可以复制主数据库中的所有数据库或者特定的数据库，或者特定的表。</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><ol><li>master服务器将数据的改变记录到二进制日志(binlog)，当master上的数据发生改变时，则将其改变写入二进制日志中；这些记录过程叫做二进制日志事件，binary log events;</li><li>slave服务器会在一定时间间隔内对master二进制日志进行探测其是否发生改变，如果发生改变，则开始一个I/O Thread请求master二进制事件，同时主节点为每个I/O线程启动一个dump线程，用于向其发送二进制事件，并保存至slave服务器本地的中继日志(relay log)中;</li><li>slave服务器将启动SQL线程从中继日志中读取二进制日志，将改变应用到自己的数据库中，使得其数据和主节点的保持一致，最后I/O Thread和SQL Thread将进入睡眠状态，等待下一次被唤醒。MySQL复制是异步的且串行化的</li></ol><figure><img src="'+l+`" alt="20220326170700" tabindex="0" loading="lazy"><figcaption>20220326170700</figcaption></figure><p><strong>也就是说：</strong></p><ul><li>从库会生成两个线程,一个I/O线程,一个SQL线程;</li><li>I/O线程会去请求主库的binlog,并将得到的binlog写到本地的relay-log(中继日志)文件中;</li><li>主库会生成一个log dump线程,用来给从库I/O线程传binlog;</li><li>SQL线程,会读取relay log文件中的日志,并解析成sql语句逐一执行;</li></ul><p><strong>注意：</strong></p><ol><li>master将操作语句记录到binlog日志中，然后授予slave远程连接的权限（master一定要开启binlog二进制日志功能；通常为了数据安全考虑，slave也开启binlog功能）。</li><li>slave开启两个线程：IO线程和SQL线程。其中：IO线程负责读取master的binlog内容到中继日志relay log里；SQL线程负责从relay log日志里读出binlog内容，并更新到slave的数据库里，这样就能保证slave数据和master数据保持一致了。</li><li>Mysql复制至少需要两个Mysql的服务，当然Mysql服务可以分布在不同的服务器上，也可以在一台服务器上启动多个服务。</li><li>Mysql复制最好确保master和slave服务器上的Mysql版本相同（如果不能满足版本一致，那么要保证master主节点的版本低于slave从节点的版本）</li><li>master和slave两节点间时间需同步</li><li>每个slave只有一个master；</li><li>每个master可以有多个salve</li><li>每个slave只能有一个唯一的服务器ID</li><li>复制的最大问题:延时</li><li>在配置同步之前，首先保证<strong>主机</strong>和<strong>从机</strong>数据一致，不一致，先手动操作，保证一致。</li></ol><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><ol><li><p>mysql版本一致且后台以服务运行</p><ul><li>slave_ip: 192.168.1.47</li><li>master_ip: 192.168.1.49</li></ul></li><li><p>主从都配置在[mysqld]结点下，都是小写</p></li><li><p>主机(windows)修改<code>my.ini</code>配置文件</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment"># [必须]启动主服务器唯一ID</span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token comment"># [必须]启用二进制日志 </span>
<span class="token comment"># log-bin=自己本地的路径/mysqlbin</span>
<span class="token key attr-name">log-bin</span><span class="token punctuation">=</span><span class="token value attr-value">D:/software/mysql/8.0.28/data/binlog</span>
<span class="token comment"># [可选]根目录</span>
<span class="token comment"># basedir=&quot;自己本地路径&quot;</span>
<span class="token key attr-name">basedir</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">D:/software/mysql/8.0.28</span>&quot;</span>
<span class="token comment"># [可选]临时目录</span>
<span class="token comment"># tmpdir=&quot;自己本地路径&quot;</span>
<span class="token key attr-name">tmpdir</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">D:/software/mysql/8.0.28</span>&quot;</span>
<span class="token comment"># [可选]数据目录</span>
<span class="token comment"># datadir=&quot;自己本地路径/Data/&quot;</span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">D:/software/mysql/8.0.28/data/</span>
<span class="token comment"># 主机，读写都可以</span>
<span class="token key attr-name">read-only</span><span class="token punctuation">=</span><span class="token value attr-value">0</span> 
<span class="token comment"># [可选]设置不要复制的数据库</span>
<span class="token key attr-name">binlog-ignore-db</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token comment"># [可选]设置需要复制的数据库</span>
<span class="token comment"># binlog-do-db=需要复制的主数据库名字</span>
<span class="token comment"># binlog-do-db=test01</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>从机(linux)修改<code>/etc/my.cnf</code>配置文件</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment"># [必须]从服务器唯一ID</span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
<span class="token comment"># [可选]启用二进制日志</span>
<span class="token key attr-name">log-bin</span><span class="token punctuation">=</span><span class="token value attr-value">binlog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>因修改过配置文件，请主机+从机都重启后台mysql服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> mysql stop
<span class="token function">service</span> mysql start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>主机、从机都需要关闭防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># windows 手动关闭</span>
<span class="token comment"># Linux命令关闭</span>
<span class="token function">service</span> iptables stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在master上建立帐户并授权slave</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 先创建一个用户，用来让从机访问主机的
create user &#39;liusf&#39;@&#39;%&#39; identified with mysql_native_password BY &#39;123456&#39;;
# 授权 从机 同步主机的权限
GRANT REPLICATION SLAVE ON *.* TO &#39;liusf&#39;@&#39;%&#39;;
# % 代表任意ip的主机都可以访问主机，如果考虑安全，可以指明特定从机的ip
# 刷新权限
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show master status;
+---------------+----------+--------------+------------------+-------------------+
| File          | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+---------------+----------+--------------+------------------+-------------------+
| binlog.000014 |     4381 |              |                  |
    |
+---------------+----------+--------------+------------------+-------------------+
1 row in set (0.03 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记录下File和Position的值</p></li><li><p>在Linux从机上配置需要复制的主机</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 指定从机复制主机所需的参数，这一步就是上一步的参数， 
CHANGE MASTER TO MASTER_HOST=&#39;192.168.1.47&#39;, MASTER_USER=&#39;liusf&#39;, MASTER_PASSWORD=&#39; 123456&#39;, MASTER_LOG_FILE=&#39;binlog.000003&#39;, MASTER_LOG_POS=2720;
# 启动从服务器复制功能
start slave;
# 查看从机配置状态
show slave status;
# 下面两个参数都是Yes，则说明主从配置成功！
# Slave_IO_Running: Yes
# Slave_SQL_Running: Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果参数<code>Slave_IO_Running</code>和<code>Slave_SQL_Running</code>不是都为Yes</p></blockquote><p>需要在从机上运行<code>stop slave;</code>命令停止同步;</p><p>再在主机上使用命令<code>show master status;</code>重新查询master status，用新的参数在从机上重新配置</p><blockquote><p>如果参数<code>Slave_IO_Running</code>和<code>Slave_SQL_Running</code>全是Yes,但是从机并没有同步主机数据</p></blockquote><p>需要在从机上运行<code>stop slave;</code>命令停止同步;</p><p>将主机上的数据导出为SQL脚本，在从机上执行，保证在同步之前，从机和主机数据一致;</p><p>最后，重新配置同步即可;</p></li></ol>`,16),d=[t];function c(o,r){return n(),e("div",null,d)}const u=s(i,[["render",c],["__file","主从同步.html.vue"]]);export{u as default};
