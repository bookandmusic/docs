import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-b3edeb65.js";const t={},p=e(`<h1 id="playbook-详解" tabindex="-1"><a class="header-anchor" href="#playbook-详解" aria-hidden="true">#</a> Playbook 详解</h1><h3 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句" aria-hidden="true">#</a> 流程控制语句</h3><p>条件判断在ansible任务中的使用频率非常高。我们可以根据一些条件的不一样执行不同的task。</p><h4 id="when条件判断" tabindex="-1"><a class="header-anchor" href="#when条件判断" aria-hidden="true">#</a> when条件判断</h4><p>很多任务只有在特定条件下才能执行，这就是when语句发挥作用的地方。</p><p>一个简单的实例，关闭掉ip地址为10.0.102.162服务器上的mysql服务，如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
 <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
   <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
   <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> shut down the db server
       <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mysqld state=stopped
       <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_eth0.ipv4.address  == &quot;10.0.102.162&quot;  <span class="token comment"># 这里使用了when条件语句</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ansible-playbook test.yml
 
PLAY <span class="token punctuation">[</span>all<span class="token punctuation">]</span> ********************************************************************
 
GATHERING FACTS ***************************************************************
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.212<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
 
TASK: <span class="token punctuation">[</span>shut down the db server<span class="token punctuation">]</span> ***********************************************
skipping: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>
skipping: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.212<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>       <span class="token comment"># 162的服务状态已经改变</span>
 
PLAY RECAP ********************************************************************
<span class="token number">10.0</span>.102.162               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">2</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">10.0</span>.102.200               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">10.0</span>.102.212               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个就是when条件语句的用法很简单。需要注意when语句的作用于paly的作用时间，当when的条件满足时，然后才会执行play中的任务。ansible还提供了另外两个与when相关的语句<code>changed_when</code>和<code>failed_when</code>条件判断。</p><h3 id="任务间的流程控制" tabindex="-1"><a class="header-anchor" href="#任务间的流程控制" aria-hidden="true">#</a> 任务间的流程控制</h3><h4 id="任务委托" tabindex="-1"><a class="header-anchor" href="#任务委托" aria-hidden="true">#</a> 任务委托</h4><p>默认情况下，ansible所有任务都是在我们指定的机器上面运行的，当在一个独立的集群环境配置时，这并没有什么问题。而在有些情况下，比如给某台服务器发送通知或者向监控服务器中添加被监控的主机，这个时候任务就需要在特定的主机上运行，而非一开始指定的所有主机，此时就需要ansible的委托任务。</p><p>使用<code>delegate_to</code>关键字可以配置任务在指定的服务器上执行，而其他任务还是在hosts关键字配置的所有机器上执行，当到了这个关键字所在的任务时，就使用委托的机器运行。</p><p>查看MySQL是否在运行状态，因此在检查之前首先关掉162上的mysql服务。（为了方便查看状态）</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
 <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
   <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
   <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> stop the db server
       <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mysqld state=stopped
       <span class="token key atrule">delegate_to</span><span class="token punctuation">:</span> 10.0.102.162       <span class="token comment"># 这里使用了委托，仅关闭162这台服务器上，这个play仅在162这台服务器上执行。</span>
 
     <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check mysql status
       <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mysqld state=running
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里委托是在指定的机器上执行，若是想在本地服务器上执行，可以把ip地址换为127.0.0.1即可。也可以使用<code>local_action</code>方法。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
 <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
   <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
   <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create the test file
       <span class="token key atrule">local_action</span><span class="token punctuation">:</span> shell touch test1111 <span class="token comment"># 在本地创建一个测试文件</span>
 
 
     <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check mysql status
       <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mysqld state=running
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ansible-playbook test.yml
 
PLAY <span class="token punctuation">[</span>all<span class="token punctuation">]</span> ********************************************************************
 
GATHERING FACTS ***************************************************************
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.212<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
 
TASK: <span class="token punctuation">[</span>create the <span class="token builtin class-name">test</span> file<span class="token punctuation">]</span> **************************************************
changed: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.212 -<span class="token operator">&gt;</span> <span class="token number">127.0</span>.0.1<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200 -<span class="token operator">&gt;</span> <span class="token number">127.0</span>.0.1<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162 -<span class="token operator">&gt;</span> <span class="token number">127.0</span>.0.1<span class="token punctuation">]</span>
 
TASK: <span class="token punctuation">[</span>check mysql status<span class="token punctuation">]</span> ****************************************************
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.212<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
 
PLAY RECAP ********************************************************************
<span class="token number">10.0</span>.102.162               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">10.0</span>.102.200               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">10.0</span>.102.212               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>

$ <span class="token function">ls</span>                     <span class="token comment"># 默认会在当前目录创建对应的文件</span>
test1111  test.yml  vars.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="任务暂停" tabindex="-1"><a class="header-anchor" href="#任务暂停" aria-hidden="true">#</a> 任务暂停</h4><p>有些情况下，一些任务的运行需要等待一些状态的恢复，比如某一台主机或者应用刚刚重启，我们需要等待它上面的某个端口开启，此时我们就不得不将正在运行的任务暂停，直到其状态满足我们的需求。</p><p>下一个实例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> wait for webserver to start
   <span class="token key atrule">local_action</span><span class="token punctuation">:</span>
        <span class="token key atrule">module</span><span class="token punctuation">:</span> wait_for
        <span class="token key atrule">host</span><span class="token punctuation">:</span> webserver1
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
        <span class="token key atrule">delay</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">300</span>
        <span class="token key atrule">state</span><span class="token punctuation">:</span> startted
<span class="token comment"># 这个实例中，这个任务将会每10s检查一次主机webserver1上面的80端口是否开启，如果超过了300s则失败</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="交互式提示" tabindex="-1"><a class="header-anchor" href="#交互式提示" aria-hidden="true">#</a> 交互式提示</h4><p>在少数情况下，ansible任务运行的过程中需要用户输入一些数据，这些数据要么比较秘密不方便，或者数据是动态的，不同的用户有不同的需求，比如输入用户自己的账户和密码或者输入不同的版本号会触发不同的后续操作等。ansible的<code>vars_prompt</code>关键字就是用来处理上述这种与用户交互的情况的。下面是一个简单的实例。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
 <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
   <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
   <span class="token key atrule">vars_prompt</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> share_user
        <span class="token key atrule">prompt</span><span class="token punctuation">:</span> <span class="token string">&quot;what is your network username?&quot;</span>
        <span class="token key atrule">private</span><span class="token punctuation">:</span> no
 
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> share_pass
        <span class="token key atrule">prompt</span><span class="token punctuation">:</span> <span class="token string">&quot;what is your network password&quot;</span>
        <span class="token key atrule">private</span><span class="token punctuation">:</span> no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行上面的playbook，因为我们只是测试，只需要在一台机器上执行，因此加入了<code>--limit</code>参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ansible-playbook test.yml <span class="token parameter variable">--limit</span> <span class="token number">10.0</span>.102.162
what is your network username?: <span class="token builtin class-name">test</span>        <span class="token comment"># 需要手动交互输入</span>
what is your network password: <span class="token number">123456</span>       <span class="token comment"># 手动输入</span>
 
PLAY <span class="token punctuation">[</span>all<span class="token punctuation">]</span> ********************************************************************
 
GATHERING FACTS ***************************************************************
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
 
PLAY RECAP ********************************************************************
<span class="token number">10.0</span>.102.162               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手动输入的变量值，在后面的play中仍然可以用<code>{{ var_name }}</code>的形式调用。</p><p>关键字<code>vars_prompt</code>几个常用的选项总结如下：</p><ul><li><code>private</code>：默认值为yes，表示用户输入的值在命令行不可见；将值设为no时，用户输入可见。</li><li><code>default</code>：为变量设置默认值，以节省用户输入时间。</li><li><code>confirm</code>：特别适合输入密码的情况，如果将其设置为yes，则会要求用户输入两次，以增加输入的安全性。</li></ul><h3 id="tags标签" tabindex="-1"><a class="header-anchor" href="#tags标签" aria-hidden="true">#</a> tags标签</h3><p>默认情况下，ansible在执行一个playbook时，会执行playbook中定义的所有任务。ansible的标签功能可以给角色，文件，单独的任务甚至整个playbook打上标签，然后利用这些标签来指定要运行playbook中的个别任务，或不执行指定的任务，并且它的语法非常简单。</p><p>通过一段代码来说明tags的用法：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code> 
<span class="token punctuation">---</span>
<span class="token comment"># 可以给整个playbook的所有任务打一个标签。</span>
  <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
    <span class="token key atrule">tags</span><span class="token punctuation">:</span> deploy
    <span class="token key atrule">roles</span><span class="token punctuation">:</span>
     <span class="token comment"># 给角色打的标签将会应用与角色下所有的任务。</span>
       <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">role</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">,</span> <span class="token key atrule">tags</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tomcat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>        <span class="token comment"># 一个对象添加多个tag的写法之一</span>
    <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Notify on completion
         <span class="token key atrule">local_action</span><span class="token punctuation">:</span>
            <span class="token key atrule">module</span><span class="token punctuation">:</span> osx_say
            <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{inventory_hostname}} is finished&quot;</span>
            <span class="token key atrule">voice</span><span class="token punctuation">:</span> Zarvox
         <span class="token key atrule">tags</span><span class="token punctuation">:</span>      <span class="token comment"># 一个对象添加多个tag写法之二</span>
            <span class="token punctuation">-</span> notifications
            <span class="token punctuation">-</span> say
       <span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> foo.yml
         <span class="token key atrule">tags</span><span class="token punctuation">:</span>　foo
 
<span class="token comment"># 缩进可能不太对</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上述代码保存，可以通过以下命令来只执行<code>Notify on completion</code>任务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ansible-playbook test.yml <span class="token parameter variable">--tags</span> <span class="token string">&quot;say&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想忽略掉某个任务，可以使用<code>--skip-tags</code>关键字指定。</p><h3 id="block块" tabindex="-1"><a class="header-anchor" href="#block块" aria-hidden="true">#</a> Block块</h3><p>ansible从2.0.0版本开始引入了块功能。块功能可以将任务进行分组，并且可以在块级别上应用任务变量。同时，块功能还可以使用类似于其他编程语言处理异常那样的方法，来处理块内部的任务异常。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
 <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
   <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
 
   <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token key atrule">block</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=httpd state=present
          <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=started enabled=no
       <span class="token key atrule">when</span><span class="token punctuation">:</span>  ansible_eth0.ipv4.address  == &quot;10.0.102.162&quot;
 
     <span class="token punctuation">-</span> <span class="token key atrule">block</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=nginx state=present
          <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=started enabled=no
       <span class="token key atrule">when</span><span class="token punctuation">:</span>  ansible_eth0.ipv4.address  == &quot;10.0.102.200&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ansible-playbook <span class="token parameter variable">-i</span> hosts test.yml
 
PLAY <span class="token punctuation">[</span>all<span class="token punctuation">]</span> **************************************************************************************************************************************************************************************
 
TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> **************************************************************************************************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>
 
TASK <span class="token punctuation">[</span>yum<span class="token punctuation">]</span> **************************************************************************************************************************************************************************************
skipping: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>          <span class="token comment"># 因为在inventory文件中注释了这一台服务器，因此这里忽略了。</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
 
TASK <span class="token punctuation">[</span>service<span class="token punctuation">]</span> **********************************************************************************************************************************************************************************
skipping: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
 
TASK <span class="token punctuation">[</span>yum<span class="token punctuation">]</span> **************************************************************************************************************************************************************************************
skipping: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>
 
TASK <span class="token punctuation">[</span>service<span class="token punctuation">]</span> **********************************************************************************************************************************************************************************
skipping: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.162<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">10.0</span>.102.200<span class="token punctuation">]</span>
 
PLAY RECAP **************************************************************************************************************************************************************************************
<span class="token number">10.0</span>.102.162               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">10.0</span>.102.200               <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的playbook和之前的并没有什么不同，只是假如了block之后，代码更容易查看。</p><p>块功能可以用来处理任务的异常。比如一个ansible任务时监控一个并不太重要的应用，这个应用的正常运行与否对后续的任务并不产生影响，这时候我们就可以通过块功能来处理这个应用的报错。如下代码：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token key atrule">block</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> shell script to connect the app ti a mointoring service.
          <span class="token key atrule">script</span><span class="token punctuation">:</span> mointoring<span class="token punctuation">-</span>connect.sh
          <span class="token key atrule">rescue</span><span class="token punctuation">:</span>
             <span class="token punctuation">-</span> name<span class="token punctuation">:</span>只有脚本报错时才执行
　　　　　　　　 debug：msg=&quot;There was an error in the block&quot;
          <span class="token key atrule">always</span><span class="token punctuation">:</span>
             <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 无论结果如何都执行
               <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=&quot;This always executes&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当块中任意任务出错时，rescue关键字对应的代码块就会被执行，而always关键字对应的代码块无论如何都会被执行。</p>`,48),l=[p];function i(c,o){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","Playbook 详解.html.vue"]]);export{d as default};
