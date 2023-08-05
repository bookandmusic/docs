import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,d as e}from"./app-505788a4.js";const t={},i=e(`<h1 id="ansible入门" tabindex="-1"><a class="header-anchor" href="#ansible入门" aria-hidden="true">#</a> Ansible入门</h1><h2 id="ansible概念" tabindex="-1"><a class="header-anchor" href="#ansible概念" aria-hidden="true">#</a> Ansible概念</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>Ansible是一款为类Unix系统开发的自由开源的配置和自动化工具。</p><p>它用Python写成，类似于<code>saltstack</code>和<code>Puppet</code>，但是有一个不同和优点是我们不需要在节点中安装任何客户端。</p><p>它使用<code>SSH</code>来和节点进行通信。Ansible基于 <code>Python paramiko</code> 开发，分布式，无需客户端，轻量级，配置语法使用 <code>YMAL</code> 及 <code>Jinja2</code>模板语言，更强的远程命令执行操作。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li>部署简单，没有客户端，只需在主控端部署Ansible环境，被控端无需做任何操作；</li><li>模块化：调用特定的模块，完成特定任务</li><li>默认使用SSH协议对设备进行管理；</li><li>主从集中化管理；</li><li>配置简单、功能强大、扩展性强；</li><li>支持API及自定义模块，可通过Python轻松扩展；</li><li>通过<code>Playbooks</code>来定制强大的配置、状态管理</li><li>对云计算平台、大数据都有很好的支持；</li><li>具有幂等性：一个操作在一个主机上执行一遍和执行N遍的结果是一样的</li></ul><blockquote><p>ansible是基于模块工作的，本身没有批量部署的能力。真正具有批量部署的是ansible所运行的模块，ansible只是提供一种框架。</p></blockquote><p><strong>主要包括</strong></p><ul><li><code>Ansible</code>： ansible的核心模块</li><li><code>Host Inventory</code>：主机清单，也就是被管理的主机列表</li><li><code>Playbooks</code>：ansible的剧本，可想象为将多个任务放置在一起，一块执行</li><li><code>Core Modules</code>：ansible的核心模块</li><li><code>Custom Modules</code>：自定义模块</li><li><code>Connection Plugins</code>：连接插件，用于与被管控主机之间基于SSH建立连接关系</li><li><code>Plugins</code>：其他插件，包括记录日志等</li></ul><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>直接使用python的包管理工具<code>pip</code>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果系统中没有pip，则可以使用系统自带的包管理工具安装，不同系统需要具体区分。</p><h2 id="ad-hoc" tabindex="-1"><a class="header-anchor" href="#ad-hoc" aria-hidden="true">#</a> Ad-Hoc</h2><p>利用ansible命令直接完成管理,主要用于临时命令使用场景</p><h3 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> help</h3><p><code>ansible-doc</code>：显示模块帮助的指令</p><p><strong>格式</strong></p><p><code>ansible-doc [参数] [模块...]</code></p><p><strong>常用参数</strong><br><code>ansible-doc 模块名称</code> ： 列出模块帮助<br><code>ansible-doc -l</code> ： 列出可用模块<br><code>ansible-doc -s</code> ： 显示指定模块的playbook片段</p><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h3><p><strong>格式</strong></p><p><code>ansible 清单 -m 模块 -a 模块参数</code></p><p><strong>常用参数</strong></p><table><thead><tr><th>常用参数</th><th>含义</th></tr></thead><tbody><tr><td>–version</td><td>显示版本</td></tr><tr><td>-m module</td><td>指定模块, 默认为 command 模块</td></tr><tr><td>-v</td><td>详细过程 -vv -vvv 更详细过程</td></tr><tr><td>–list</td><td>显示主机列表, 也可以用–list-hosts</td></tr><tr><td>-k</td><td>提示输入 ssh 连接密码, 默认 key 认证</td></tr><tr><td>-C</td><td>预执行检测</td></tr><tr><td>-T</td><td>执行命令的超时时间, 默认 10s</td></tr><tr><td>-u</td><td>指定远程执行的用户</td></tr><tr><td>-b</td><td>执行 sudo 切换身份操作</td></tr><tr><td>-become-user=USERNAME</td><td>指定 sudo 的用户</td></tr><tr><td>-K</td><td>提示输入 sudo 密码</td></tr></tbody></table><p><strong>颜色含义</strong></p><table><thead><tr><th>颜色</th><th>含义</th></tr></thead><tbody><tr><td>绿色</td><td>执行成功但为对远程主机做任何改变</td></tr><tr><td>黄色</td><td>执行成功并对远程主机做改变</td></tr><tr><td>红色</td><td>执行失败</td></tr></tbody></table><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>help命令示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">22</span>:10:45 <span class="token punctuation">]</span> ➜  ansible-doc <span class="token parameter variable">-s</span> <span class="token function">ping</span>
- name: Try to connect to host, verify a usable python and <span class="token builtin class-name">return</span> <span class="token variable"><span class="token variable">\`</span>pong&#39; on success
  ping:
      data:                  <span class="token comment"># Data to return for the </span><span class="token variable">\`</span></span><span class="token function">ping</span><span class="token string">&#39; return value. If this parameter is set to \`crash&#39;</span>, the module will cause an
                             <span class="token comment"># exception.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">21</span>:00:09 <span class="token punctuation">]</span> ➜  ansible <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-m</span> <span class="token function">ping</span>
<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: No inventory was parsed, only implicit localhost is available
<span class="token number">127.0</span>.0.1 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;changed&quot;</span><span class="token builtin class-name">:</span> false,
    <span class="token string">&quot;ping&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pong&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inventory" tabindex="-1"><a class="header-anchor" href="#inventory" aria-hidden="true">#</a> Inventory</h2><p>Ansible 设计之初，就是用来批量管理主机的，而Ansible 是通过读取 <code>Inventory</code> 中的配置知道我们要对哪些机器变更。 虽然你可以在命令行使用 ad-hoc 临时命令时指定 IP 地址的方式来控制要操作的对象，但如果想充分使用 Ansible 的灵活性和或扩展性，你必须掌握 <code>Inventory</code> 的配置。</p><p>默认的文件路径为：<code>/etc/ansible/hosts</code></p><p><code>Inventory</code> 文件可以有多种格式，取决于你使用什么插件，最常用的格式是 <code>YAML</code> 和 <code>INI</code></p><h3 id="inventory-分组" tabindex="-1"><a class="header-anchor" href="#inventory-分组" aria-hidden="true">#</a> Inventory 分组</h3><p>如下为 <code>INI</code> 格式的示例:</p><blockquote><p>括号中的标题是组名，用于对主机进行分类，用于确定什么时间、什么目的、相对哪些主机做什么事情</p></blockquote><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">sqlnodes</span><span class="token punctuation">]</span></span>
192.168.0.101
192.168.0.102
192.168.0.103

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">datanodes</span><span class="token punctuation">]</span></span>
192.168.0.201
192.168.0.202
192.168.0.203
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下为 <code>YAML</code> 格式的示例:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">all</span><span class="token punctuation">:</span>
  <span class="token key atrule">databases</span><span class="token punctuation">:</span>
    <span class="token key atrule">masters</span><span class="token punctuation">:</span>
      <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> 192.168.0.101
    <span class="token key atrule">slaves</span><span class="token punctuation">:</span>
      <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 192.168.0.102
        <span class="token punctuation">-</span> 192.168.0.103
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认有两个分组： <code>all</code> and <code>ungrouped</code> 。 <code>all</code> 组顾名思义包括所有主机。 <code>ungrouped</code> 则是 <code>all</code> 组之外所有主机。所有的主机要不属于 <code>all</code> 组，要不就属于 <code>ungrouped</code> 组。</p><p>尽管 <code>all</code> 和 <code>ungrouped</code> 始终存在，但它们以隐式的方式出现，而不出现在诸如 <code>group_names</code> 的组列表中。</p><blockquote><p>如果有许多具有相似模式的主机，则可以将它们添加为一个范围，而不必分别列出每个主机名：</p></blockquote><p>In INI:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">databases</span><span class="token punctuation">]</span></span>
192.168.0.10[0-9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>In YAML:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">...</span>
  <span class="token key atrule">databases</span><span class="token punctuation">:</span>
    <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
      192.168.0.10<span class="token punctuation">[</span>0<span class="token punctuation">-</span><span class="token number">9</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于数字匹配 [0-9], 也支持字母正则 [a-z]：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">databases</span><span class="token punctuation">]</span></span>
db-[a:f].example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inventory-变量" tabindex="-1"><a class="header-anchor" href="#inventory-变量" aria-hidden="true">#</a> Inventory 变量</h3><blockquote><p>主机清单常用变量</p></blockquote><table><thead><tr><th>参数</th><th>用途</th><th>例子</th></tr></thead><tbody><tr><td><code>ansible_ssh_host</code></td><td>定义 hosts ssh 地址</td><td><code>ansible_ssh_host=192.168.81.220</code></td></tr><tr><td><code>ansible_ssh_port</code></td><td>定义 hosts 端口号也可以在 ip 后面加: 定义</td><td><code>ansible_ssh_prrot=666</code></td></tr><tr><td><code>ansibe_ssh_user</code></td><td>定义 hosts ssh 认证用户</td><td><code>ansible_ssh_user=user</code></td></tr><tr><td><code>ansible_ssh_pass</code></td><td>定义 hosts ssh 认证密码</td><td><code>ansible_ssh_pass=redhat</code></td></tr><tr><td><code>ansibe_sudo</code></td><td>定义 hosts sudo 用户</td><td><code>ansible_sudo=root</code></td></tr><tr><td><code>ansibe_sudo_pass</code></td><td>定义 hosts sudo 用户的认证密码</td><td><code>ansible_sudo_pass=aaaaaa</code></td></tr><tr><td><code>ansibe_sudo_exe</code></td><td>定义 sudo 命令的路径</td><td><code>ansible_sudo_exe=/usr/bin/sudo</code></td></tr><tr><td><code>ansible_coneection</code></td><td>定义 hosts 连接方式</td><td><code>ansible_connection=ssh</code></td></tr><tr><td><code>ansible_ssh_private_key_file</code></td><td>定义 hosts 私钥</td><td><code>ansible_ssh_private_key_file=/root/key</code></td></tr><tr><td><code>ansible_ssh_shell_tyep</code></td><td>定义 hosts shell 类型</td><td><code>ansible_ssh_shell_type=bash</code></td></tr><tr><td><code>ansible_python_interpreter</code></td><td>定义 hosts 任务执行 python 路径</td><td><code>ansible_python_interpreter=/usr/bin/python2.6</code></td></tr><tr><td><code>ansbile_*_interpreter</code></td><td>定义 hosts 解析其他语言路径</td><td><code>ansible_*_interpreter=/usr/bin/ruby</code></td></tr></tbody></table><blockquote><p>给单台主机设置变量 : <code>host variables</code></p></blockquote><div class="language-INI line-numbers-mode" data-ext="INI"><pre class="language-INI"><code>[targets]

localhost                          ansible_connection=local
192.168.0.101  ansible_port=5555   ansible_connection=ssh        ansible_user=root
192.168.0.102:5555  ansible_connection=ssh        ansible_user=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给 <code>host</code> 添加非标准 SSH 端口，把端口直接添加到主机名后，冒号分隔即可； 当然也可以使用变量主动指定</p><blockquote><p>给多台主机设置变量 : <code>group variables</code></p></blockquote><p>如果组中的所有主机共享一个变量值，则可以一次将该变量应用于整个组</p><div class="language-INI line-numbers-mode" data-ext="INI"><pre class="language-INI"><code>[targets]
192.168.0.10[1-3]

[targets:vars]
ansible_port=5555   
ansible_connection=ssh        
ansible_user=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组变量是一次将变量同时应用于多个主机的便捷方法。 但是，在执行之前，Ansible始终将变量（包括 Inventory 清单变量）展平到主机级别。 如果该主机是多个组的成员，则 Ansible 将从所有这些组中读取变量值。 如果同一主机在不同的组中被赋予不同的变量值，则 Ansible 会根据内部规则来选择要使用的值。</p><p>优先顺序是（从最低到最高）：</p><ul><li>all group (because it is the ‘parent’ of all other groups)</li><li>parent group</li><li>child group</li><li>host</li></ul><blockquote><p>嵌套组的组变量设置</p></blockquote><div class="language-INI line-numbers-mode" data-ext="INI"><pre class="language-INI"><code>[sqlnodes]
192.168.0.101
192.168.0.102
192.168.0.103

[datanodes]
192.168.0.201
192.168.0.202
192.168.0.203

[database:children]
sqlnodes
datanodes

[database:vars]
ansible_port=19999   
ansible_connection=ssh        
ansible_user=admin
manage_user=admin

[sqlnodes:vars]
port=3306

[datanodes:vars]
port=3316
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>子组成员默认属于父组成员</li><li>子组的变量比父组的变量优先级高，即值会覆盖父组的变量。</li><li>组可以有多个父组或孩子，但不能循环关系。</li><li>主机也可以隶属于多个组中，但是只有 <strong>一个</strong> 主机实例，可以合并多个组中的数据。</li></ul></blockquote><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><blockquote><p>指定inventory配置文件中的主机组执行命令</p></blockquote><p><code>inventory.ini</code>配置</p><div class="language-INI line-numbers-mode" data-ext="INI"><pre class="language-INI"><code>[test1]
host1 ansible_ssh_host=172.17.140.101 ansible_ssh_user=&quot;root&quot; ansible_ssh_pass=&quot;QWer12#$&quot; ansible_ssh_port=22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对主机组中的所有主机执行<code>ping</code>命令</p><div class="language-INI line-numbers-mode" data-ext="INI"><pre class="language-INI"><code>🔋97% 🕙[ 22:12:51 ] ➜  ansible test1  -i inventory.ini -m ping
host1 | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
        &quot;discovered_interpreter_python&quot;: &quot;/usr/bin/python&quot;
    },
    &quot;changed&quot;: false,
    &quot;ping&quot;: &quot;pong&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对主机组中的所有主机执行<code>lsblk</code>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">22</span>:17:18 <span class="token punctuation">]</span> ➜  ansible test1 <span class="token parameter variable">-i</span> inventory.ini <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;lsblk&quot;</span>
host1 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
vda    <span class="token number">254</span>:0    <span class="token number">0</span> <span class="token number">59</span>.6G  <span class="token number">0</span> disk
└─vda1 <span class="token number">254</span>:1    <span class="token number">0</span> <span class="token number">59</span>.6G  <span class="token number">0</span> part /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>对子主机组中的主机执行命令</p></blockquote><p><code>inventory.ini</code>配置</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">; hosts 组应包含所有安装MySQL数据库的主机 IP</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">hosts</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">host1 ansible_ssh_host</span><span class="token punctuation">=</span><span class="token value attr-value">172.16.70.104 ansible_ssh_user=&quot;root&quot; ansible_ssh_pass=&quot;aaaaaa&quot; ansible_ssh_port=22</span>

<span class="token comment">; define databases</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">databases</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">database_1 ansible_host</span><span class="token punctuation">=</span><span class="token value attr-value">172.16.70.104 port=3306 manage_user=&quot;root&quot; mysql_password=&quot;!QAZ2wsx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对数据库实例<code>database_1</code>执行SQL语句时，会连接<code>hosts</code> 分组中的<code>172.17.140.101:19999</code> 主机，并且我们在命令中可以通过 <code>Jinja2</code>语法使用变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">22</span>:36:20 <span class="token punctuation">]</span> ➜  ansible database_1 <span class="token parameter variable">-i</span> inventory.ini <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;/usr/local/bin/mysql -u&#39;{{manage_user}}&#39; -p&#39;{{mysql_password}}&#39; -e &#39;show databases&#39;&quot;</span>
<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: Platform darwin on <span class="token function">host</span> database_1 is using the discovered Python interpreter at /usr/bin/python3, but future installation of
another Python interpreter could change the meaning of that path. See https://docs.ansible.com/ansible-
core/2.14/reference_appendices/interpreter_discovery.html <span class="token keyword">for</span> <span class="token function">more</span> information.
database_1 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
Database
information_schema
mysql
performance_schema
sysmysql: <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Using a password on the <span class="token builtin class-name">command</span> line interface can be insecure.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="playbook" tabindex="-1"><a class="header-anchor" href="#playbook" aria-hidden="true">#</a> playbook</h2><p>以下内容摘自ansible官网：</p><blockquote><p>Ansible Playbook 是什么？</p></blockquote><p>Ansible® Playbook 是设定自动化任务的一种蓝图，可在无需人工干预或有限干预的前提下执行复杂的 IT 操作。Ansible Playbook 对一组或一类共同构成 Ansible 清单的主机执行。</p><blockquote><p>Ansible Playbook 的工作原理是什么？</p></blockquote><p>Ansible 模块执行任务。一个或多个 Ansible 任务可以合并为一个 play。两个或更多 play 可以合并为一个 Ansible Playbook。Ansible Playbook 是一个对主机自动执行的任务列表。主机的群组可以构成 Ansible 库存清单。</p><p>Ansible Playbook 内的每个模块都执行一项具体的任务。每个模块内的元数据将决定执行任务的时间和地点，以及执行的用户。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show mysql version
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> databases
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> execute cmd to mysql version
      <span class="token key atrule">shell</span><span class="token punctuation">:</span>
        <span class="token key atrule">cmd</span><span class="token punctuation">:</span> <span class="token string">&quot;/usr/local/bin/mysql --version&quot;</span>
      <span class="token key atrule">register</span><span class="token punctuation">:</span> version
    
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show version
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{version.stdout}}&quot;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show mysql databases
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> databases
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> execute sql to databases
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> 
        <span class="token key atrule">cmd</span><span class="token punctuation">:</span> <span class="token string">&quot;/usr/local/bin/mysql -u&#39;{{manage_user}}&#39; -p&#39;{{mysql_password}}&#39; -e &#39;show databases&#39;&quot;</span>
      <span class="token key atrule">register</span><span class="token punctuation">:</span> databases
    
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show databases
      <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{databases.stdout_lines}}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该playbook中包含两个play：</p><ul><li>第一个play检查mysql版本，并输出信息</li><li>第二个play执行SQL语句，并输出当前MySQL实例的所有数据库</li></ul><p>该每个play中有一些变量：</p><ul><li><code>name</code>：当前任务的名字</li><li><code>hosts</code>：该play任务执行的主机组，当然 此时的databases主机组即前面的inventory文件中配置的主机组</li><li><code>tasks</code>：该play中需要执行的具体任务</li></ul><p><code>shell</code>、<code>debug</code>模块都是ansible内置的模块，后面会对一些常用的模块简单说明</p><h3 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> roles</h3><p>从上面的例子中，可以看出<code>tasks</code>是一个任务列表。由此，引出两个问题：</p><ul><li>当<code>tasks</code>列表中的任务过多时，则会导致整个playbook过于复杂，庞大，不好维护</li><li>当<code>tasks</code>列表中的某些任务需要在多个playbook中使用时，需要在多个<code>playbook</code>中重复编写，则会导致多个<code>playbook</code>间代码的冗余</li></ul><p>为了解决这些问题，ansible提供了一种更好的组织 <code>playbook</code> 的方式： <code>roles</code></p><p>现在可以将上面的<code>playbook</code>借助<code>roles</code>重新组织：</p><blockquote><p>项目结构</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">19</span>:10:35 <span class="token punctuation">]</span> ➜  tree <span class="token builtin class-name">.</span>
<span class="token builtin class-name">.</span>
├── inventory.ini
├── main.yaml
└── roles
    ├── check_version
    │   └── tasks
    │       └── main.yaml
    └── show_databases
        └── tasks
            └── main.yaml

<span class="token number">6</span> directories, <span class="token number">5</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>roles/show_databases/tasks/main.yaml</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---

- name: execute cmd to mysql version
  shell:
    cmd: <span class="token string">&quot;/usr/local/bin/mysql --version&quot;</span>
  register: version

- name: show version
  debug:
    msg: <span class="token string">&quot;{{version.stdout}}&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>roles/check_version/tasks/main.yaml</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---

- name: execute sql to databases
  shell: 
    cmd: <span class="token string">&quot;/usr/local/bin/mysql -u&#39;{{manage_user}}&#39; -p&#39;{{mysql_password}}&#39; -e &#39;show databases&#39;&quot;</span>
  register: databases

- name: show databases
  debug:
    msg: <span class="token string">&quot;{{databases.stdout_lines}}&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>main.yaml</code></p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show mysql version
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> databases
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span>
      <span class="token key atrule">role</span><span class="token punctuation">:</span> check_version<span class="token punctuation">,</span>
      <span class="token key atrule">tag</span><span class="token punctuation">:</span> check_version<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show mysql databases
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> databases
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span>
      <span class="token key atrule">role</span><span class="token punctuation">:</span> show_databases<span class="token punctuation">,</span>
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> show_databases<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><h4 id="查看脚本影响到的-hosts" tabindex="-1"><a class="header-anchor" href="#查看脚本影响到的-hosts" aria-hidden="true">#</a> 查看脚本影响到的 hosts</h4><p>下面这条命令，指定 inventory 文件，列出 hosts 列表，并不会去执行定义的 tasks，观察 host 是否配置正确很有用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">19</span>:20:30 <span class="token punctuation">]</span> ➜  ansible-playbook <span class="token parameter variable">-i</span> inventory.ini main.yaml --list-hosts

playbook: main.yaml

  play <span class="token comment">#1 (databases): show mysql version       TAGS: []</span>
    pattern: <span class="token punctuation">[</span><span class="token string">&#39;databases&#39;</span><span class="token punctuation">]</span>
    hosts <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
      database_1

  play <span class="token comment">#2 (databases): show mysql databases     TAGS: []</span>
    pattern: <span class="token punctuation">[</span><span class="token string">&#39;databases&#39;</span><span class="token punctuation">]</span>
    hosts <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
      database_1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试语法是否正确" tabindex="-1"><a class="header-anchor" href="#测试语法是否正确" aria-hidden="true">#</a> 测试语法是否正确</h4><p>如果检查没问题，那么就会输出被检查的文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">19</span>:32:40 <span class="token punctuation">]</span> ➜  ansible-playbook <span class="token parameter variable">-i</span> inventory.ini --syntax-check  main.yaml 

playbook: main.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果存在语法错误，则会输出错误信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">19</span>:41:10 <span class="token punctuation">]</span> ➜  ansible-playbook <span class="token parameter variable">-i</span> inventory.ini --syntax-check main.yaml 
ERROR<span class="token operator">!</span> <span class="token string">&#39;role&#39;</span> is not a valid attribute <span class="token keyword">for</span> a Play

The error appears to be <span class="token keyword">in</span> <span class="token string">&#39;~/ansible/main.yaml&#39;</span><span class="token builtin class-name">:</span> line <span class="token number">3</span>, <span class="token function">column</span> <span class="token number">3</span>, but may
be elsewhere <span class="token keyword">in</span> the <span class="token function">file</span> depending on the exact syntax problem.

The offending line appears to be:


- name: show mysql version
  ^ here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试执行" tabindex="-1"><a class="header-anchor" href="#测试执行" aria-hidden="true">#</a> 测试执行</h4><p>模拟执行，主要用于排错,不会产生实际影响</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">19</span>:45:21 <span class="token punctuation">]</span> ➜  ansible-playbook <span class="token parameter variable">-i</span> inventory.ini <span class="token parameter variable">-C</span> main.yaml

PLAY <span class="token punctuation">[</span>show mysql version<span class="token punctuation">]</span> ***********************************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> **************************************************************************************************************************
<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: Platform darwin on <span class="token function">host</span> database_1 is using the discovered Python interpreter at /usr/bin/python3, but future installation of another
Python interpreter could change the meaning of that path. See https://docs.ansible.com/ansible-
core/2.14/reference_appendices/interpreter_discovery.html <span class="token keyword">for</span> <span class="token function">more</span> information.
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>check_version <span class="token builtin class-name">:</span> execute cmd to mysql version<span class="token punctuation">]</span> *********************************************************************************************
skipping: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>check_version <span class="token builtin class-name">:</span> show version<span class="token punctuation">]</span> *************************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>

PLAY <span class="token punctuation">[</span>show mysql databases<span class="token punctuation">]</span> *********************************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> **************************************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>show_databases <span class="token builtin class-name">:</span> execute sql to databases<span class="token punctuation">]</span> ************************************************************************************************
skipping: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>show_databases <span class="token builtin class-name">:</span> show databases<span class="token punctuation">]</span> **********************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

PLAY RECAP **************************************************************************************************************************************
database_1                 <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">4</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">2</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果cun&#39;zai</p><h4 id="查看输出的细节" tabindex="-1"><a class="header-anchor" href="#查看输出的细节" aria-hidden="true">#</a> 查看输出的细节</h4><blockquote><p><code>--verbose</code>参数也可以简化为 <code>-v</code>，如果想要输出更详细的信息，则可以使用多个 <code>-v</code>参数，最多支持 <code>-vvv</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">19</span>:22:10 <span class="token punctuation">]</span> ➜  ansible-playbook <span class="token parameter variable">-i</span> inventory.ini main.yaml <span class="token parameter variable">--verbose</span>                 
No config <span class="token function">file</span> found<span class="token punctuation">;</span> using defaults

PLAY <span class="token punctuation">[</span>show mysql version<span class="token punctuation">]</span> ***********************************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> **************************************************************************************************************************
<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: Platform darwin on <span class="token function">host</span> database_1 is using the discovered Python interpreter at /usr/bin/python3, but future installation of another
Python interpreter could change the meaning of that path. See https://docs.ansible.com/ansible-
core/2.14/reference_appendices/interpreter_discovery.html <span class="token keyword">for</span> <span class="token function">more</span> information.
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>check_version <span class="token builtin class-name">:</span> execute cmd to mysql version<span class="token punctuation">]</span> *********************************************************************************************
changed: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&quot;changed&quot;</span><span class="token builtin class-name">:</span> true, <span class="token string">&quot;cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/local/bin/mysql --version&quot;</span>, <span class="token string">&quot;delta&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0:00:00.023217&quot;</span>, <span class="token string">&quot;end&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-03-19 19:22:18.191201&quot;</span>, <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>, <span class="token string">&quot;rc&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>, <span class="token string">&quot;start&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-03-19 19:22:18.167984&quot;</span>, <span class="token string">&quot;stderr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>, <span class="token string">&quot;stderr_lines&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>, <span class="token string">&quot;stdout&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/local/bin/mysql  Ver 8.0.32 for macos11.7 on x86_64 (Homebrew)&quot;</span>, <span class="token string">&quot;stdout_lines&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/usr/local/bin/mysql  Ver 8.0.32 for macos11.7 on x86_64 (Homebrew)&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>

TASK <span class="token punctuation">[</span>check_version <span class="token builtin class-name">:</span> show version<span class="token punctuation">]</span> *************************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/local/bin/mysql  Ver 8.0.32 for macos11.7 on x86_64 (Homebrew)&quot;</span>
<span class="token punctuation">}</span>

PLAY <span class="token punctuation">[</span>show mysql databases<span class="token punctuation">]</span> *********************************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> **************************************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>show_databases <span class="token builtin class-name">:</span> execute sql to databases<span class="token punctuation">]</span> ************************************************************************************************
changed: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&quot;changed&quot;</span><span class="token builtin class-name">:</span> true, <span class="token string">&quot;cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/local/bin/mysql -u&#39;root&#39; -p&#39;!QAZ2wsx&#39; -e &#39;show databases&#39;&quot;</span>, <span class="token string">&quot;delta&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0:00:00.024684&quot;</span>, <span class="token string">&quot;end&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-03-19 19:22:19.412119&quot;</span>, <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>, <span class="token string">&quot;rc&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>, <span class="token string">&quot;start&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-03-19 19:22:19.387435&quot;</span>, <span class="token string">&quot;stderr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mysql: [Warning] Using a password on the command line interface can be insecure.&quot;</span>, <span class="token string">&quot;stderr_lines&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;mysql: [Warning] Using a password on the command line interface can be insecure.&quot;</span><span class="token punctuation">]</span>, <span class="token string">&quot;stdout&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Database<span class="token entity" title="\\n">\\n</span>information_schema<span class="token entity" title="\\n">\\n</span>mysql<span class="token entity" title="\\n">\\n</span>performance_schema<span class="token entity" title="\\n">\\n</span>sys&quot;</span>, <span class="token string">&quot;stdout_lines&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Database&quot;</span>, <span class="token string">&quot;information_schema&quot;</span>, <span class="token string">&quot;mysql&quot;</span>, <span class="token string">&quot;performance_schema&quot;</span>, <span class="token string">&quot;sys&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>

TASK <span class="token punctuation">[</span>show_databases <span class="token builtin class-name">:</span> show databases<span class="token punctuation">]</span> **********************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Database&quot;</span>,
        <span class="token string">&quot;information_schema&quot;</span>,
        <span class="token string">&quot;mysql&quot;</span>,
        <span class="token string">&quot;performance_schema&quot;</span>,
        <span class="token string">&quot;sys&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

PLAY RECAP **************************************************************************************************************************************
database_1                 <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">6</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">2</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="并行执行脚本" tabindex="-1"><a class="header-anchor" href="#并行执行脚本" aria-hidden="true">#</a> 并行执行脚本</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>🔋97% 🕙<span class="token punctuation">[</span> <span class="token number">19</span>:24:47 <span class="token punctuation">]</span> ➜  ansible-playbook <span class="token parameter variable">-i</span> inventory.ini main.yaml <span class="token parameter variable">-f</span> <span class="token number">10</span>

PLAY <span class="token punctuation">[</span>show mysql version<span class="token punctuation">]</span> ***********************************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> **************************************************************************************************************************
<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: Platform darwin on <span class="token function">host</span> database_1 is using the discovered Python interpreter at /usr/bin/python3, but future installation of another
Python interpreter could change the meaning of that path. See https://docs.ansible.com/ansible-
core/2.14/reference_appendices/interpreter_discovery.html <span class="token keyword">for</span> <span class="token function">more</span> information.
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>check_version <span class="token builtin class-name">:</span> execute cmd to mysql version<span class="token punctuation">]</span> *********************************************************************************************
changed: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>check_version <span class="token builtin class-name">:</span> show version<span class="token punctuation">]</span> *************************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/local/bin/mysql  Ver 8.0.32 for macos11.7 on x86_64 (Homebrew)&quot;</span>
<span class="token punctuation">}</span>

PLAY <span class="token punctuation">[</span>show mysql databases<span class="token punctuation">]</span> *********************************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> **************************************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>show_databases <span class="token builtin class-name">:</span> execute sql to databases<span class="token punctuation">]</span> ************************************************************************************************
changed: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>show_databases <span class="token builtin class-name">:</span> show databases<span class="token punctuation">]</span> **********************************************************************************************************
ok: <span class="token punctuation">[</span>database_1<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Database&quot;</span>,
        <span class="token string">&quot;information_schema&quot;</span>,
        <span class="token string">&quot;mysql&quot;</span>,
        <span class="token string">&quot;performance_schema&quot;</span>,
        <span class="token string">&quot;sys&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

PLAY RECAP **************************************************************************************************************************************
database_1                 <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">6</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">2</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,126),l=[i];function o(c,p){return n(),a("div",null,l)}const r=s(t,[["render",o],["__file","Ansible入门.html.vue"]]);export{r as default};
