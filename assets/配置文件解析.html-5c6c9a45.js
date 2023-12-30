import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e as a}from"./app-58480cea.js";const i={},l=a(`<h2 id="unit" tabindex="-1"><a class="header-anchor" href="#unit" aria-hidden="true">#</a> Unit</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Note on units: when memory size is needed, it is possible to specify</span>
<span class="token comment"># it in the usual form of 1k 5GB 4M and so forth:</span>
<span class="token comment">#</span>
<span class="token comment"># 1k =&gt; 1000 bytes</span>
<span class="token comment"># 1kb =&gt; 1024 bytes</span>
<span class="token comment"># 1m =&gt; 1000000 bytes</span>
<span class="token comment"># 1mb =&gt; 1024*1024 bytes</span>
<span class="token comment"># 1g =&gt; 1000000000 bytes</span>
<span class="token comment"># 1gb =&gt; 1024*1024*1024 bytes</span>
<span class="token comment">#</span>
<span class="token comment"># units are case insensitive so 1GB 1Gb 1gB are all the same.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置大小单位，开头定义了一些基本的度量单位，只支持bytes，不支持bit</li><li>对大小写不敏感</li></ul><h2 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> INCLUDE</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Include one or more other config files here.  This is useful if you</span>
<span class="token comment"># have a standard template that goes to all Redis servers but also need</span>
<span class="token comment"># to customize a few per-server settings.  Include files can include</span>
<span class="token comment"># other files, so use this wisely.</span>
<span class="token comment">#</span>
<span class="token comment"># Notice option &quot;include&quot; won&#39;t be rewritten by command &quot;CONFIG REWRITE&quot;</span>
<span class="token comment"># from admin or Redis Sentinel. Since Redis always uses the last processed</span>
<span class="token comment"># line as value of a configuration directive, you&#39;d better put includes</span>
<span class="token comment"># at the beginning of this file to avoid overwriting config change at runtime.</span>
<span class="token comment">#</span>
<span class="token comment"># If instead you are interested in using includes to override configuration</span>
<span class="token comment"># options, it is better to use include as the last line.</span>
<span class="token comment">#</span>
<span class="token comment"># include /path/to/local.conf</span>
<span class="token comment"># include /path/to/other.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以通过includes包含，redis.conf可以作为总闸，包含其他配置文件</li></ul><h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> GENERAL</h2><h3 id="daemonize" tabindex="-1"><a class="header-anchor" href="#daemonize" aria-hidden="true">#</a> daemonize</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># By default Redis does not run as a daemon. Use &#39;yes&#39; if you need it.</span>
<span class="token comment"># Note that Redis will write a pid file in /var/run/redis.pid when daemonized.</span>
daemonize <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pidfile" tabindex="-1"><a class="header-anchor" href="#pidfile" aria-hidden="true">#</a> pidfile</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># If a pid file is specified, Redis writes it where specified at startup</span>
<span class="token comment"># and removes it at exit.</span>
<span class="token comment">#</span>
<span class="token comment"># When the server runs non daemonized, no pid file is created if none is</span>
<span class="token comment"># specified in the configuration. When the server is daemonized, the pid file</span>
<span class="token comment"># is used even if not specified, defaulting to &quot;/var/run/redis.pid&quot;.</span>
<span class="token comment">#</span>
<span class="token comment"># Creating a pid file is best effort: if Redis is not able to create it</span>
<span class="token comment"># nothing bad happens, the server will start and run normally.</span>
pidfile /var/run/redis/redis-server.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> port</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Accept connections on the specified port, default is 6379 (IANA #815344).</span>
<span class="token comment"># If port 0 is specified Redis will not listen on a TCP socket.</span>
port <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tcp-backlog" tabindex="-1"><a class="header-anchor" href="#tcp-backlog" aria-hidden="true">#</a> tcp-backlog</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># TCP listen() backlog.</span>
<span class="token comment">#</span>
<span class="token comment"># In high requests-per-second environments you need an high backlog in order</span>
<span class="token comment"># to avoid slow clients connections issues. Note that the Linux kernel</span>
<span class="token comment"># will silently truncate it to the value of /proc/sys/net/core/somaxconn so</span>
<span class="token comment"># make sure to raise both the value of somaxconn and tcp_max_syn_backlog</span>
<span class="token comment"># in order to get the desired effect.</span>
tcp-backlog <span class="token number">511</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tcp-backlog</p></blockquote><p>设置tcp的backlog,backlog其实是一个连接队列，backlog队列总和=未完成三次握手队列+已经完成三次握手队列。<br> 在高并发环境下你需要一个高backlog值来避免慢客户端连接问题。注意:Linux内核会将这个值减小到<code>/proc/sys/net/core/somaxconn</code>的值，所以需要确认增大<code>somaxconn</code>和<code>tcp_max_syn_backlog</code>两个值，来达到想要的效果。</p><h3 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> timeout</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Unix socket.</span>
<span class="token comment">#</span>
<span class="token comment"># Specify the path for the Unix socket that will be used to listen for</span>
<span class="token comment"># incoming connections. There is no default, so Redis will not listen</span>
<span class="token comment"># on a unix socket when not specified.</span>
<span class="token comment">#</span>
<span class="token comment"># unixsocket /var/run/redis/redis-server.sock</span>
<span class="token comment"># unixsocketperm 700</span>

<span class="token comment"># Close the connection after a client is idle for N seconds (0 to disable)</span>
<span class="token function">timeout</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># By default, if no &quot;bind&quot; configuration directive is specified, Redis listens</span>
<span class="token comment"># for connections from all the network interfaces available on the server.</span>
<span class="token comment"># It is possible to listen to just one or multiple selected interfaces using</span>
<span class="token comment"># the &quot;bind&quot; configuration directive, followed by one or more IP addresses.</span>
<span class="token comment">#</span>
<span class="token comment"># Examples:</span>
<span class="token comment">#</span>
<span class="token comment"># bind 192.168.1.100 10.0.0.1</span>
<span class="token comment"># bind 127.0.0.1 ::1</span>
<span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1 ::1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tcp-keepalive" tabindex="-1"><a class="header-anchor" href="#tcp-keepalive" aria-hidden="true">#</a> tcp-keepalive</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># TCP keepalive.</span>
<span class="token comment">#</span>
<span class="token comment"># If non-zero, use SO_KEEPALIVE to send TCP ACKs to clients in absence</span>
<span class="token comment"># of communication. This is useful for two reasons:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) Detect dead peers.</span>
<span class="token comment"># 2) Take the connection alive from the point of view of network</span>
<span class="token comment">#    equipment in the middle.</span>
<span class="token comment">#</span>
<span class="token comment"># On Linux, the specified value (in seconds) is the period used to send ACKs.</span>
<span class="token comment"># Note that to close the connection the double of the time is needed.</span>
<span class="token comment"># On other kernels the period depends on the kernel configuration.</span>
<span class="token comment">#</span>
<span class="token comment"># A reasonable value for this option is 300 seconds, which is the new</span>
<span class="token comment"># Redis default starting with Redis 3.2.1.</span>
tcp-keepalive <span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tcp-keepalive</p></blockquote><p>单位为秒，如果设置为0，则不会进行Keepalive检测，建议设置成60</p><h3 id="loglevel" tabindex="-1"><a class="header-anchor" href="#loglevel" aria-hidden="true">#</a> loglevel</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Specify the server verbosity level.</span>
<span class="token comment"># This can be one of:</span>
<span class="token comment"># debug (a lot of information, useful for development/testing)</span>
<span class="token comment"># verbose (many rarely useful info, but not a mess like the debug level)</span>
<span class="token comment"># notice (moderately verbose, what you want in production probably)</span>
<span class="token comment"># warning (only very important / critical messages are logged)</span>
loglevel notice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logfile" tabindex="-1"><a class="header-anchor" href="#logfile" aria-hidden="true">#</a> logfile</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Specify the log file name. Also the empty string can be used to force</span>
<span class="token comment"># Redis to log on the standard output. Note that if you use standard</span>
<span class="token comment"># output for logging but daemonize, logs will be sent to /dev/null</span>
logfile /var/log/redis/redis-server.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="syslog-enabled" tabindex="-1"><a class="header-anchor" href="#syslog-enabled" aria-hidden="true">#</a> syslog-enabled</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># To enable logging to the system logger, just set &#39;syslog-enabled&#39; to yes,</span>
<span class="token comment"># and optionally update the other syslog parameters to suit your needs.</span>
<span class="token comment"># syslog-enabled no</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="syslog-ident" tabindex="-1"><a class="header-anchor" href="#syslog-ident" aria-hidden="true">#</a> syslog-ident</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Specify the syslog identity.</span>
<span class="token comment"># syslog-ident redis</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="syslog-facility" tabindex="-1"><a class="header-anchor" href="#syslog-facility" aria-hidden="true">#</a> syslog-facility</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Specify the syslog facility. Must be USER or between LOCAL0-LOCAL7.</span>
<span class="token comment"># syslog-facility local0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="databases" tabindex="-1"><a class="header-anchor" href="#databases" aria-hidden="true">#</a> databases</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Set the number of databases. The default database is DB 0, you can select</span>
<span class="token comment"># a different one on a per-connection basis using SELECT &lt;dbid&gt; where</span>
<span class="token comment"># dbid is a number between 0 and &#39;databases&#39;-1</span>
databases <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="snapshotting快照" tabindex="-1"><a class="header-anchor" href="#snapshotting快照" aria-hidden="true">#</a> SNAPSHOTTING快照</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">################################ SNAPSHOTTING  ################################</span>
<span class="token comment">#</span>
<span class="token comment"># Save the DB on disk:</span>
<span class="token comment">#</span>
<span class="token comment">#   save &lt;seconds&gt; &lt;changes&gt;</span>
<span class="token comment">#</span>
<span class="token comment">#   Will save the DB if both the given number of seconds and the given</span>
<span class="token comment">#   number of write operations against the DB occurred.</span>
<span class="token comment">#</span>
<span class="token comment">#   In the example below the behaviour will be to save:</span>
<span class="token comment">#   after 900 sec (15 min) if at least 1 key changed</span>
<span class="token comment">#   after 300 sec (5 min) if at least 10 keys changed</span>
<span class="token comment">#   after 60 sec if at least 10000 keys changed</span>
<span class="token comment">#</span>
<span class="token comment">#   Note: you can disable saving completely by commenting out all &quot;save&quot; lines.</span>
<span class="token comment">#</span>
<span class="token comment">#   It is also possible to remove all the previously configured save</span>
<span class="token comment">#   points by adding a save directive with a single empty string argument</span>
<span class="token comment">#   like in the following example:</span>
<span class="token comment">#</span>
<span class="token comment">#   save &quot;&quot;</span>

save <span class="token number">900</span> <span class="token number">1</span>
save <span class="token number">300</span> <span class="token number">10</span>
save <span class="token number">60</span> <span class="token number">10000</span>

<span class="token comment"># The filename where to dump the DB</span>
dbfilename dump.rdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RDB是整个内存的压缩过的Snapshot， RDB的数据结构，可以配置复合的快照触发条件，默认:</p><p>是1分钟内改了1万次，</p><p>或5分钟内改了10次，</p><p>或15分钟内改了1次。</p><p>如果想禁用RDB持久化的策略，只要不设置任何save指令(<strong>可以在redis中调用</strong>​**<code>save</code><strong>​</strong>命令主动备份**)，或者给save传入一个空字符串参数也可以。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># By default Redis will stop accepting writes if RDB snapshots are enabled</span>
<span class="token comment"># (at least one save point) and the latest background save failed.</span>
<span class="token comment"># This will make the user aware (in a hard way) that data is not persisting</span>
<span class="token comment"># on disk properly, otherwise chances are that no one will notice and some</span>
<span class="token comment"># disaster will happen.</span>
<span class="token comment">#</span>
<span class="token comment"># If the background saving process will start working again Redis will</span>
<span class="token comment"># automatically allow writes again.</span>
<span class="token comment">#</span>
<span class="token comment"># However if you have setup your proper monitoring of the Redis server</span>
<span class="token comment"># and persistence, you may want to disable this feature so that Redis will</span>
<span class="token comment"># continue to work as usual even if there are problems with disk,</span>
<span class="token comment"># permissions, and so forth.</span>
stop-writes-on-bgsave-error <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果配置成no，表示你不在乎数据不一致或者有其他的手段发现和控制</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Compress string objects using LZF when dump .rdb databases?</span>
<span class="token comment"># For default that&#39;s set to &#39;yes&#39; as it&#39;s almost always a win.</span>
<span class="token comment"># If you want to save some CPU in the saving child set it to &#39;no&#39; but</span>
<span class="token comment"># the dataset will likely be bigger if you have compressible values or keys.</span>
rdbcompression <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>rdbcompression</code>：对于存储到磁盘中的快照，可以设置是否进行压缩存储。如果是的话，redis会采用LZF算法进行压缩。如果你不想消耗CPU来进行压缩的话，可以设置为关闭此功能。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Since version 5 of RDB a CRC64 checksum is placed at the end of the file.</span>
<span class="token comment"># This makes the format more resistant to corruption but there is a performance</span>
<span class="token comment"># hit to pay (around 10%) when saving and loading RDB files, so you can disable it</span>
<span class="token comment"># for maximum performances.</span>
<span class="token comment">#</span>
<span class="token comment"># RDB files created with checksum disabled have a checksum of zero that will</span>
<span class="token comment"># tell the loading code to skip the check.</span>
rdbchecksum <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rdbchecksum：在存储快照后，还可以让redis使用CRC64算法来进行数据校验，但是这样做会增加大约10%的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># The filename where to dump the DB</span>
dbfilename dump.rdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>RDB持久化文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># The working directory.</span>
<span class="token comment">#</span>
<span class="token comment"># The DB will be written inside this directory, with the filename specified</span>
<span class="token comment"># above using the &#39;dbfilename&#39; configuration directive.</span>
<span class="token comment">#</span>
<span class="token comment"># The Append Only File will also be created inside this directory.</span>
<span class="token comment">#</span>
<span class="token comment"># Note that you must specify a directory here, not a file name.</span>
<span class="token function">dir</span> /var/lib/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis服务的工作路径，也是备份文件的存储路径。</p><blockquote><p>如果不确定redis服务运行路径，可以使用如下操作，确定redis运行路径</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@XTZJ-20220305QE:/var/lib/redis<span class="token comment"># which redis-server</span>
/usr/bin/redis-server

root@XTZJ-20220305QE:/var/lib/redis<span class="token comment"># whereis redis-server</span>
redis-server: /usr/bin/redis-server /usr/share/man/man1/redis-server.1.gz

<span class="token comment"># 如果命令 which 和 whereis 都找不到安装目录，可使用以下办法</span>
root@XTZJ-20220305QE:/var/lib/redis<span class="token comment"># ps -ef|grep redis  # 得到了进程号 xxxx</span>
root       <span class="token number">307</span>    <span class="token number">11</span>  <span class="token number">0</span> <span class="token number">22</span>:46 pts/0    00:00:00 <span class="token function">sudo</span> <span class="token function">vi</span> /etc/redis/redis.conf
root       <span class="token number">308</span>   <span class="token number">307</span>  <span class="token number">0</span> <span class="token number">22</span>:46 pts/0    00:00:00 <span class="token function">vi</span> /etc/redis/redis.conf
root      <span class="token number">1359</span>   <span class="token number">601</span>  <span class="token number">0</span> <span class="token number">23</span>:10 ?        00:00:00 redis-server <span class="token number">127.0</span>.0.1:6379
lsf       <span class="token number">1363</span>  <span class="token number">1040</span>  <span class="token number">0</span> <span class="token number">23</span>:10 pts/2    00:00:00 redis-cli
root      <span class="token number">1367</span>  <span class="token number">1028</span>  <span class="token number">0</span> <span class="token number">23</span>:14 pts/1    00:00:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto redis

root@XTZJ-20220305QE:/var/lib/redis<span class="token comment"># ls -l /proc/1359/cwd # 然后 ls -l /proc/xxxx/cwd</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">0</span> Apr  <span class="token number">4</span> <span class="token number">23</span>:15 /proc/1359/cwd -<span class="token operator">&gt;</span> /var/lib/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="append-only-mode追加" tabindex="-1"><a class="header-anchor" href="#append-only-mode追加" aria-hidden="true">#</a> APPEND ONLY MODE追加</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># By default Redis asynchronously dumps the dataset on disk. This mode is</span>
<span class="token comment"># good enough in many applications, but an issue with the Redis process or</span>
<span class="token comment"># a power outage may result into a few minutes of writes lost (depending on</span>
<span class="token comment"># the configured save points).</span>
<span class="token comment">#</span>
<span class="token comment"># The Append Only File is an alternative persistence mode that provides</span>
<span class="token comment"># much better durability. For instance using the default data fsync policy</span>
<span class="token comment"># (see later in the config file) Redis can lose just one second of writes in a</span>
<span class="token comment"># dramatic event like a server power outage, or a single write if something</span>
<span class="token comment"># wrong with the Redis process itself happens, but the operating system is</span>
<span class="token comment"># still running correctly.</span>
<span class="token comment">#</span>
<span class="token comment"># AOF and RDB persistence can be enabled at the same time without problems.</span>
<span class="token comment"># If the AOF is enabled on startup Redis will load the AOF, that is the file</span>
<span class="token comment"># with the better durability guarantees.</span>
<span class="token comment">#</span>
<span class="token comment"># Please check http://redis.io/topics/persistence for more information.</span>

appendonly <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认是no，yes就打开持久化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># The name of the append only file (default: &quot;appendonly.aof&quot;)</span>

appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AOF持久化文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># The fsync() call tells the Operating System to actually write data on disk</span>
<span class="token comment"># instead of waiting for more data in the output buffer. Some OS will really flush</span>
<span class="token comment"># data on disk, some other OS will just try to do it ASAP.</span>
<span class="token comment">#</span>
<span class="token comment"># Redis supports three different modes:</span>
<span class="token comment">#</span>
<span class="token comment"># no: don&#39;t fsync, just let the OS flush the data when it wants. Faster.</span>
<span class="token comment"># always: fsync after every write to the append only log. Slow, Safest.</span>
<span class="token comment"># everysec: fsync only one time every second. Compromise.</span>
<span class="token comment">#</span>
<span class="token comment"># The default is &quot;everysec&quot;, as that&#39;s usually the right compromise between</span>
<span class="token comment"># speed and data safety. It&#39;s up to you to understand if you can relax this to</span>
<span class="token comment"># &quot;no&quot; that will let the operating system flush the output buffer when</span>
<span class="token comment"># it wants, for better performances (but if you can live with the idea of</span>
<span class="token comment"># some data loss consider the default persistence mode that&#39;s snapshotting),</span>
<span class="token comment"># or on the contrary, use &quot;always&quot; that&#39;s very slow but a bit safer than</span>
<span class="token comment"># everysec.</span>
<span class="token comment">#</span>
<span class="token comment"># More details please check the following article:</span>
<span class="token comment"># http://antirez.com/post/redis-persistence-demystified.html</span>
<span class="token comment">#</span>
<span class="token comment"># If unsure, use &quot;everysec&quot;.</span>

<span class="token comment"># appendfsync always</span>
appendfsync everysec
<span class="token comment"># appendfsync no</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Always: 同步持久化每次发生数据变更会被立即记录到磁盘性能较差但数据完整性比较好</li><li>Everysec: 出厂默认推荐，异步操作，每秒记录 如果一秒内宕机，有数据丢失，</li><li>No</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># When the AOF fsync policy is set to always or everysec, and a background</span>
<span class="token comment"># saving process (a background save or AOF log background rewriting) is</span>
<span class="token comment"># performing a lot of I/O against the disk, in some Linux configurations</span>
<span class="token comment"># Redis may block too long on the fsync() call. Note that there is no fix for</span>
<span class="token comment"># this currently, as even performing fsync in a different thread will block</span>
<span class="token comment"># our synchronous write(2) call.</span>
<span class="token comment">#</span>
<span class="token comment"># In order to mitigate this problem it&#39;s possible to use the following option</span>
<span class="token comment"># that will prevent fsync() from being called in the main process while a</span>
<span class="token comment"># BGSAVE or BGREWRITEAOF is in progress.</span>
<span class="token comment">#</span>
<span class="token comment"># This means that while another child is saving, the durability of Redis is</span>
<span class="token comment"># the same as &quot;appendfsync none&quot;. In practical terms, this means that it is</span>
<span class="token comment"># possible to lose up to 30 seconds of log in the worst scenario (with the</span>
<span class="token comment"># default Linux settings).</span>
<span class="token comment">#</span>
<span class="token comment"># If you have latency problems turn this to &quot;yes&quot;. Otherwise leave it as</span>
<span class="token comment"># &quot;no&quot; that is the safest pick from the point of view of durability.</span>

no-appendfsync-on-rewrite no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>No-appendfsync-on-rewrite：重写时是否可以运用Appendfsync，用默认no即可，保证数据安全性。</p><p>bgrewriteaof机制，在一个子进程中进行aof的重写，从而不阻塞主进程对其余命令的处理，同时解决了aof文件过大问题。</p><p>现在问题出现了，同时在执行bgrewriteaof操作和主进程写aof文件的操作，两者都会操作磁盘，而bgrewriteaof往往会涉及大量磁盘操作，这样就会造成主进程在写aof文件的时候出现阻塞的情形，现在no-appendfsync-on-rewrite参数出场了。如果该参数设置为no，是最安全的方式，不会丢失数据，但是要忍受阻塞的问题。如果设置为yes呢？这就相当于将appendfsync设置为no，这说明并没有执行磁盘操作，只是写入了缓冲区，因此这样并不会造成阻塞（因为没有竞争磁盘），但是如果这个时候redis挂掉，就会丢失数据。丢失多少数据呢？在linux的操作系统的默认设置下，最多会丢失30s的数据。</p><p>因此，如果应用系统无法忍受延迟，而可以容忍少量的数据丢失，则设置为yes。如果应用系统无法忍受数据丢失，则设置为no。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Automatic rewrite of the append only file.</span>
<span class="token comment"># Redis is able to automatically rewrite the log file implicitly calling</span>
<span class="token comment"># BGREWRITEAOF when the AOF log size grows by the specified percentage.</span>
<span class="token comment">#</span>
<span class="token comment"># This is how it works: Redis remembers the size of the AOF file after the</span>
<span class="token comment"># latest rewrite (if no rewrite has happened since the restart, the size of</span>
<span class="token comment"># the AOF at startup is used).</span>
<span class="token comment">#</span>
<span class="token comment"># This base size is compared to the current size. If the current size is</span>
<span class="token comment"># bigger than the specified percentage, the rewrite is triggered. Also</span>
<span class="token comment"># you need to specify a minimal size for the AOF file to be rewritten, this</span>
<span class="token comment"># is useful to avoid rewriting the AOF file even if the percentage increase</span>
<span class="token comment"># is reached but it is still pretty small.</span>
<span class="token comment">#</span>
<span class="token comment"># Specify a percentage of zero in order to disable the automatic AOF</span>
<span class="token comment"># rewrite feature.</span>

auto-aof-rewrite-percentage <span class="token number">100</span>
auto-aof-rewrite-min-size 64mb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Auto-aof-rewrite-min-size：设置重写的基准值</p><p>Auto-aof-rewrite-percentage：设置重写的基准值</p><h2 id="security安全" tabindex="-1"><a class="header-anchor" href="#security安全" aria-hidden="true">#</a> SECURITY安全</h2><blockquote><p>redis默认是用来做缓存的，部署在已经经过安全验证的Linux服务器上，一般不考虑安全问题。因此，redis中有关安全的配置全部注释掉。当然，非要在Redis中使用安全也可以。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>  <span class="token comment"># 本身执行命令是没有问题的</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config <span class="token builtin class-name">set</span> requirepass <span class="token string">&quot;123456&quot;</span>  <span class="token comment"># 设置访问密码为123456</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>  <span class="token comment"># 执行命令，就提示验证失败</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth <span class="token number">123456</span>  <span class="token comment"># 设置密码后，需要在每次执行命令前，先验证密码，才能成功执行命令</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config <span class="token builtin class-name">set</span> requirepass <span class="token string">&quot;&quot;</span>  <span class="token comment"># 设置密码为空，执行命令不需要验证密码</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get requirepass  <span class="token comment"># 获取当前密码为空</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;requirepass&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get <span class="token function">dir</span>  <span class="token comment"># 获取当前redis服务的执行路径</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;dir&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;D:<span class="token entity" title="\\\\">\\\\</span>software<span class="token entity" title="\\\\">\\\\</span>Redis<span class="token entity" title="\\\\">\\\\</span>5.0.10&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="limits限制" tabindex="-1"><a class="header-anchor" href="#limits限制" aria-hidden="true">#</a> LIMITS限制</h2><h3 id="maxclients" tabindex="-1"><a class="header-anchor" href="#maxclients" aria-hidden="true">#</a> Maxclients</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">################################### CLIENTS ####################################</span>

<span class="token comment"># Set the max number of connected clients at the same time. By default</span>
<span class="token comment"># this limit is set to 10000 clients, however if the Redis server is not</span>
<span class="token comment"># able to configure the process file limit to allow for the specified limit</span>
<span class="token comment"># the max number of allowed clients is set to the current file limit</span>
<span class="token comment"># minus 32 (as Redis reserves a few file descriptors for internal uses).</span>
<span class="token comment">#</span>
<span class="token comment"># Once the limit is reached Redis will close all the new connections sending</span>
<span class="token comment"># an error &#39;max number of clients reached&#39;.</span>
<span class="token comment">#</span>
<span class="token comment"># maxclients 10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maxmemory" tabindex="-1"><a class="header-anchor" href="#maxmemory" aria-hidden="true">#</a> Maxmemory</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># limit for maxmemory so that there is some free RAM on the system for slave</span>
<span class="token comment"># output buffers (but this is not needed if the policy is &#39;noeviction&#39;).</span>
<span class="token comment">#</span>
<span class="token comment"># maxmemory &lt;bytes&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maxmemory-policy" tabindex="-1"><a class="header-anchor" href="#maxmemory-policy" aria-hidden="true">#</a> Maxmemory-policy</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># MAXMEMORY POLICY: how Redis will select what to remove when maxmemory</span>
<span class="token comment"># is reached. You can select among five behaviors:</span>
<span class="token comment">#</span>
<span class="token comment"># volatile-lru -&gt; Evict using approximated LRU among the keys with an expire set.</span>
<span class="token comment"># allkeys-lru -&gt; Evict any key using approximated LRU.</span>
<span class="token comment"># volatile-lfu -&gt; Evict using approximated LFU among the keys with an expire set.</span>
<span class="token comment"># allkeys-lfu -&gt; Evict any key using approximated LFU.</span>
<span class="token comment"># volatile-random -&gt; Remove a random key among the ones with an expire set.</span>
<span class="token comment"># allkeys-random -&gt; Remove a random key, any key.</span>
<span class="token comment"># volatile-ttl -&gt; Remove the key with the nearest expire time (minor TTL)</span>
<span class="token comment"># noeviction -&gt; Don&#39;t evict anything, just return an error on write operations.</span>
<span class="token comment">#</span>
<span class="token comment"># LRU means Least Recently Used</span>
<span class="token comment"># LFU means Least Frequently Used</span>
<span class="token comment">#</span>
<span class="token comment"># Both LRU, LFU and volatile-ttl are implemented using approximated</span>
<span class="token comment"># randomized algorithms.</span>
<span class="token comment">#</span>
<span class="token comment"># Note: with any of the above policies, Redis will return an error on write</span>
<span class="token comment">#       operations, when there are no suitable keys for eviction.</span>
<span class="token comment">#</span>
<span class="token comment">#       At the date of writing these commands are: set setnx setex append</span>
<span class="token comment">#       incr decr rpush lpush rpushx lpushx linsert lset rpoplpush sadd</span>
<span class="token comment">#       sinter sinterstore sunion sunionstore sdiff sdiffstore zadd zincrby</span>
<span class="token comment">#       zunionstore zinterstore hset hsetnx hmset hincrby incrby decrby</span>
<span class="token comment">#       getset mset msetnx exec sort</span>
<span class="token comment">#</span>
<span class="token comment"># The default is:</span>
<span class="token comment">#</span>
<span class="token comment"># maxmemory-policy noeviction</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>volatile-lru:使用LRU算法移除key，只对设置了过期时间的键</li><li>allkeys-lru:使用LRU算法移除key</li><li>volatile-lfu:使用LFU算法移除key，只对设置了过期时间的键</li><li>allkeys-lfu:使用LFU算法移除key</li><li>volatile-random:在过期集合中移除随机的key，只对设置了过期时间的键</li><li>allkeys-random:移除随机的key</li><li>volatile-ttl:移除那些TTL值最小的key，即那些最近要过期的key</li><li>noeviction:不进行移除。针对写操作，只是写满返回错误信息</li></ul><blockquote><p>常见的缓存算法</p></blockquote><ul><li>LRU (Least recently used) 最近最少使用，如果数据最近被访问过，那么将来被访问的几率也更高。</li><li>LFU (Least frequently used) 最不经常使用，如果一个数据在最近一段时间内使用次数很少，那么在将来一段时间内被使用的可能性也很小。</li><li>FIFO (Fist in first out) 先进先出， 如果一个数据最先进入缓存中，则应该最早淘汰掉。</li></ul><h3 id="maxmemory-samples" tabindex="-1"><a class="header-anchor" href="#maxmemory-samples" aria-hidden="true">#</a> Maxmemory-samples</h3><p>设置样本数量，LRU算法和最小TTL算法都并非是精确的算法，而是估算值，所以你可以设置样本的大小，redis默认会检查这么多个key并选择其中LRU的那个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># The default of 5 produces good enough results. 10 Approximates very closely</span>
<span class="token comment"># true LRU but costs more CPU. 3 is faster but not very accurate.</span>
<span class="token comment">#</span>
<span class="token comment"># maxmemory-samples 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="replication复制" tabindex="-1"><a class="header-anchor" href="#replication复制" aria-hidden="true">#</a> REPLICATION复制</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment">################################# REPLICATION #################################</span>

 <span class="token comment"># Master-Replica replication. Use replicaof to make a Redis instance a copy of</span>
 <span class="token comment"># another Redis server. A few things to understand ASAP about Redis replication.</span>
 <span class="token comment">#</span>
 <span class="token comment">#   +------------------+      +---------------+</span>
 <span class="token comment">#   |      Master      | ---&gt; |    Replica    |</span>
 <span class="token comment">#   | (receive writes) |      |  (exact copy) |</span>
 <span class="token comment">#   +------------------+      +---------------+</span>
 <span class="token comment">#</span>
 <span class="token comment"># 1) Redis replication is asynchronous, but you can configure a master to</span>
 <span class="token comment">#    stop accepting writes if it appears to be not connected with at least</span>
 <span class="token comment">#    a given number of replicas.</span>
 <span class="token comment"># 2) Redis replicas are able to perform a partial resynchronization with the</span>
 <span class="token comment">#    master if the replication link is lost for a relatively small amount of</span>
 <span class="token comment">#    time. You may want to configure the replication backlog size (see the next</span>
 <span class="token comment">#    sections of this file) with a sensible value depending on your needs.</span>
 <span class="token comment"># 3) Replication is automatic and does not need user intervention. After a</span>
 <span class="token comment">#    network partition replicas automatically try to reconnect to masters</span>
 <span class="token comment">#    and resynchronize with them.</span>
 <span class="token comment">#</span>
 <span class="token comment"># replicaof &lt;masterip&gt; &lt;masterport&gt;</span>
 
 <span class="token comment"># 旧版 slaveof &lt;masterip&gt; &lt;masterport&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见配置redis-conf介绍" tabindex="-1"><a class="header-anchor" href="#常见配置redis-conf介绍" aria-hidden="true">#</a> 常见配置redis.conf介绍</h2><ol><li><p>Redis默认不是以守护进程的方式运行，可以通过该配置项修改，使用yes启用守护进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>daemonize no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>当Redis以守护进程方式运行时， Redis默认会把pid写入<code>/var/run/redis.pid</code>文件，可以通过<code>pidfile</code>指定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pidfile /var/run/redis.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定Redis监听端口，默认端口为6379，作者在自己的一篇博文中解释了为什么选用6379作为默认端口，因为6379在手机按键上MERZ对应的号码，而MERZ取自意大利歌女Alessia Merz的名字</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>port <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>绑定的主机地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>当客户端闲置多长时间后关闭连接，如果指定为0.表示关闭该功能</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">timeout</span> <span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定日志记录级别，Redis总共支持四个级别： <code>debug</code>， <code>verbose</code>， <code>notice</code>， <code>warning</code>，默认为<code>verbose</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>loglevel verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>日志记录方式，默认为标准输出，如果配置Redis为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给<code>/dev/null</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>logfile stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置数据库的数量，默认数据库为0，可以使用<code>SELECT &lt;dbid&gt;</code>命令在连接上指定数据库id</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>databases <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合<code>save &lt;seconds&gt; &lt;changes&gt;</code>。Redis默认配置文件中提供了三个条件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>save <span class="token number">900</span> <span class="token number">1</span>
save <span class="token number">300</span> <span class="token number">10</span>
save <span class="token number">60</span> <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分别表示900秒（15分钟）内有1个更改，300秒（5分钟）内有10个更改以及60秒内有10000个更改。</p></li><li><p>指定存储至本地数据库时是否压缩数据，默认为yes。Redis采用LZF压缩，如果为了节省CPU时间，可以关闭该选项，但会导致数据库文件变的巨大</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rdbcompression <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定本地数据库文件名，默认值为dump.rdb</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dbfilename dump.rdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定本地数据库存政目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dir</span> ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置当本机为Slav服务时，设置master服务的IP地址及端口，在Redis启动时，它会自动从master进行数据同步</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 旧版命令：slaveof &lt;masterip&gt; &lt;masterport&gt;</span>
replicaof <span class="token operator">&lt;</span>masterip<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>masterport<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>当master服务设置了密码保护时，slav服务连接master的密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>masterauth <span class="token operator">&lt;</span>master-password<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置Redis连接密码，如果配置了连接密码，客户端在连接Redis时需要通过AUTH <code>&lt;password&gt;</code>命令提供密码，默认关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>requirepass foobared
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置同一时间最大客户端连接数，默认无限制，Redis可以同时打开的客户端连接数为Redis进程可以打开的最大文件描述符数，如果设置<code>maxclients 0</code>，表示不作限制。当客户端连接数到达限制时，Redis会关闭新的连接并向客户端返回<code>max number of clients reached</code>错误信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>maxclients <span class="token number">128</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定Redis最大内存限制，Redis在启动时会把数据加载到内存中，达到最大内存后，Redis会先尝试清除已到期或即将到期的Key，当此方法处理后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis新的vm机制，会把Key存放内存，Value会存放在swap区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>maxmemory <span class="token operator">&lt;</span>bytes<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定是否在每次更新操作后进行日志记录，Redis在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为redis本身同步数据文件是按上面save条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为no</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>appendonly no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定更新日志文件名，默认为<code>appendonly.aof ​</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>appendfilename appendonly.aof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定更新日志条件，共有3个可选值：</p><p>no：表示等操作系统进行数据缓存同步到磁盘（快）</p><p>always：表示每次更新操作后手动调用fsync（）将数据写到磁盘（慢，安全）</p><p>everysec：表示每秒同步一次（折衷，默认值）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>appendfsync everysec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定是否启用虚拟内存机制，默认值为no.简单的介绍一下，VM机制将数据分页存放，由Redis将访问量较少的页即冷数据swap到磁盘上，访问多的页面由磁盘自动换出到内存中（在后面的文章我会仔细分析Redis的VM机制）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vm-enabled no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>虚拟内存文件路径，默认值为/tmp/redis.swap，不可多个Redis实例共享</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vm-swap-file/tmp/redis.swap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将所有大于vm-max-memory的数据存入虚拟内存，无论vm-max-memory设置多小，所有索引数据都是内存存储的（Redis的索引数据 就是keys），也就是说，当vm-max-memory设置为0的时候，其实是所有value都存在于磁盘。默认值为0</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vm-max-memory <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Redis swap文件分成了很多的page，一个对象可以保存在多个page上面，但一个page上不能被多个对象共享，vm-page-size是要根据存储的数据大小来设定的，作者建议如果存储很多小对象，page大小最好设置为32或者64bytes：如果存储很大大对象，则可以使用更大的page，如果不确定，就使用默认值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vm-page-size <span class="token number">32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置swap文件中的page数量y由于页表（一种表示页面空闲或使用的bitmap）是在放在内存中的，，在磁盘上每8个pages将消耗1byte的内存。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vm-pages <span class="token number">134217728</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置访间swap文件的线程数，最好不要超过机器的核数，如果设置为0，那么所有对swap文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为4</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vm-max-threads <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置在向客户端应管时，是否把较小的包合并为一个包发送，默认为开启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>glueoutputbuf <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hash-max-zipmap-entries <span class="token number">64</span>
hash-max-zipmap-value <span class="token number">512</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>指定是否激活重置哈希，默认为开启（后面在介绍Redis的哈希算法时具体介绍）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>activerehashing <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指定包含其它的配置文件，可以在同一主机上多个Redis实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>include /path/to/local.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,91),t=[l];function d(o,c){return s(),n("div",null,t)}const p=e(i,[["render",d],["__file","配置文件解析.html.vue"]]);export{p as default};
