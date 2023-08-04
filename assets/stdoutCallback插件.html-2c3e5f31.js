import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-46c33a7a.js";const p={},e=t(`<h1 id="stdoutcallback插件" tabindex="-1"><a class="header-anchor" href="#stdoutcallback插件" aria-hidden="true">#</a> stdoutCallback插件</h1><p><code>stdout_callback</code>是Ansible Playbook中的一个回调插件，用于在执行Playbook期间向标准输出流打印信息。该插件提供了一种方式来自定义打印输出格式，并允许用户在执行期间观察Ansible任务的进度。</p><h2 id="自定义stdout-callback插件" tabindex="-1"><a class="header-anchor" href="#自定义stdout-callback插件" aria-hidden="true">#</a> 自定义stdout_callback插件</h2><p>以下是一个示例，自定义<code>stdout_callback</code>插件,隐藏日志中的sql命令：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> re

<span class="token keyword">from</span> ansible<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>loader <span class="token keyword">import</span> callback_loader

DOCUMENTATION <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
    callback: hidden_password
    short_description: Playbook hidden password for ansible
    version_added: &quot;0.1&quot;
    description:
        - Replace and hide the password information in the log through regularization
    type: stdout
    extends_documentation_fragment:
      - default_callback
    requirements:
      - Set as stdout in config
&quot;&quot;&quot;</span>

IS_ADHOC <span class="token operator">=</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&quot;AD_HOC_COMMAND_ID&quot;</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token comment"># Dynamically construct base classes for our callback module, to support custom stdout callbacks.</span>
<span class="token keyword">if</span> IS_ADHOC<span class="token punctuation">:</span>
    default_stdout_callback <span class="token operator">=</span> <span class="token string">&quot;minimal&quot;</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    default_stdout_callback <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>

DefaultCallbackModule <span class="token operator">=</span> callback_loader<span class="token punctuation">.</span>get<span class="token punctuation">(</span>default_stdout_callback<span class="token punctuation">)</span><span class="token punctuation">.</span>__class__


<span class="token keyword">class</span> <span class="token class-name">CallbackModule</span><span class="token punctuation">(</span>DefaultCallbackModule<span class="token punctuation">)</span><span class="token punctuation">:</span>
    CALLBACK_NAME <span class="token operator">=</span> <span class="token string">&quot;hidden_password&quot;</span>
    CALLBACK_VERSION <span class="token operator">=</span> <span class="token number">2.0</span>
    CALLBACK_TYPE <span class="token operator">=</span> <span class="token string">&quot;stdout&quot;</span>

    <span class="token comment"># These events should never have an associated play.</span>
    EVENTS_WITHOUT_PLAY <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;playbook_on_start&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;playbook_on_stats&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

    <span class="token comment"># These events should never have an associated task.</span>
    EVENTS_WITHOUT_TASK <span class="token operator">=</span> EVENTS_WITHOUT_PLAY <span class="token operator">+</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;playbook_on_setup&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;playbook_on_notify&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;playbook_on_import_for_host&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;playbook_on_not_import_for_host&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;playbook_on_no_hosts_matched&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;playbook_on_no_hosts_remaining&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">hide_passwords</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> result<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                result<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>hide_passwords<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span>
                <span class="token string">r&quot; (-p|--password=)([\\&#39;\\&quot;]?)\\S+?(\\2) &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; -p&#39;******&#39; &quot;</span><span class="token punctuation">,</span> result
            <span class="token punctuation">)</span>
            result <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span>
                <span class="token string">r&quot;^(-p|--password=)([\\&#39;\\&quot;]?)\\S+?(\\2)$&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-p&#39;******&#39;&quot;</span><span class="token punctuation">,</span> result
            <span class="token punctuation">)</span>
        <span class="token keyword">elif</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> <span class="token punctuation">[</span>self<span class="token punctuation">.</span>hide_passwords<span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token keyword">for</span> item <span class="token keyword">in</span> result<span class="token punctuation">]</span>
        <span class="token keyword">return</span> result

    <span class="token keyword">def</span> <span class="token function">v2_runner_on_failed</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> result<span class="token punctuation">,</span> ignore_errors<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>_result <span class="token operator">=</span> self<span class="token punctuation">.</span>hide_passwords<span class="token punctuation">(</span>result<span class="token punctuation">.</span>_result<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>CallbackModule<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>v2_runner_on_failed<span class="token punctuation">(</span>result<span class="token punctuation">,</span> ignore_errors<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">v2_runner_on_ok</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>_result <span class="token operator">=</span> self<span class="token punctuation">.</span>hide_passwords<span class="token punctuation">(</span>result<span class="token punctuation">.</span>_result<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>CallbackModule<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>v2_runner_on_ok<span class="token punctuation">(</span>result<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">v2_runner_item_on_failed</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>_result <span class="token operator">=</span> self<span class="token punctuation">.</span>hide_passwords<span class="token punctuation">(</span>result<span class="token punctuation">.</span>_result<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>CallbackModule<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>v2_runner_item_on_failed<span class="token punctuation">(</span>result<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">v2_runner_item_on_ok</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>_result <span class="token operator">=</span> self<span class="token punctuation">.</span>hide_passwords<span class="token punctuation">(</span>result<span class="token punctuation">.</span>_result<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>CallbackModule<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>v2_runner_item_on_ok<span class="token punctuation">(</span>result<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">v2_runner_on_async_failed</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>_result <span class="token operator">=</span> self<span class="token punctuation">.</span>hide_passwords<span class="token punctuation">(</span>result<span class="token punctuation">.</span>_result<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>CallbackModule<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>v2_runner_on_async_failed<span class="token punctuation">(</span>result<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">v2_runner_on_async_ok</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>_result <span class="token operator">=</span> self<span class="token punctuation">.</span>hide_passwords<span class="token punctuation">(</span>result<span class="token punctuation">.</span>_result<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>CallbackModule<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>v2_runner_on_async_ok<span class="token punctuation">(</span>result<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ansible" tabindex="-1"><a class="header-anchor" href="#ansible" aria-hidden="true">#</a> ansible</h2><p>添加自定义插件到环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 自定义callback插件包路径</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ANSIBLE_CALLBACK_PLUGINS</span><span class="token operator">=</span><span class="token string">&quot;/project/plugins/callback&quot;</span>
<span class="token comment"># callback插件名称</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ANSIBLE_STDOUT_CALLBACK</span><span class="token operator">=</span><span class="token string">&quot;hidden_password&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行playbook</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook <span class="token parameter variable">-i</span> inventory/inventory.ini mysql.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出日志中，会自动隐藏密码。</p><h2 id="ansible-runner" tabindex="-1"><a class="header-anchor" href="#ansible-runner" aria-hidden="true">#</a> ansible_runner</h2><p>使用ansible_runner执行playbook</p><blockquote><p>使用最新的<code>ansible_runner</code>，因为旧版中，不允许修改<code>stdout_callback</code>插件，就必须在初始化<code>runner</code>对象后，手动修改<code>runner.config.env</code>中的环境变量<code>ANSIBLE_STDOUT_CALLBACK</code>。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">from</span> ansible_runner <span class="token keyword">import</span> interface

base_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
project_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>base_dir<span class="token punctuation">,</span> <span class="token string">&quot;project&quot;</span><span class="token punctuation">)</span>

ANSIBLE_PLUGINS_DIR <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>project_dir<span class="token punctuation">,</span> <span class="token string">&quot;plugins&quot;</span><span class="token punctuation">)</span>
ANSIBLE_PLUGINS_CALLBACK_DIR <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>ANSIBLE_PLUGINS_DIR<span class="token punctuation">,</span> <span class="token string">&quot;callback&quot;</span><span class="token punctuation">)</span>
ANSIBLE_CALLBACKS_ENABLED <span class="token operator">=</span> <span class="token string">&quot;profile_tasks&quot;</span>

playbook <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>project_dir<span class="token punctuation">,</span> <span class="token string">&quot;mysql.yml&quot;</span><span class="token punctuation">)</span>
inventory <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>project_dir<span class="token punctuation">,</span> <span class="token string">&quot;inventory&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;inventory.yaml&quot;</span><span class="token punctuation">)</span>
private_data_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>project_dir<span class="token punctuation">,</span> <span class="token string">&quot;tmp&quot;</span><span class="token punctuation">)</span>

env <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;ANSIBLE_ROLES_PATH&quot;</span><span class="token punctuation">:</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>project_dir<span class="token punctuation">,</span> <span class="token string">&quot;project/roles&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ANSIBLE_CALLBACKS_ENABLED&quot;</span><span class="token punctuation">:</span> ANSIBLE_CALLBACKS_ENABLED<span class="token punctuation">,</span>
    <span class="token string">&quot;ANSIBLE_NO_TARGET_SYSLOG&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ANSIBLE_REFRESH_INTERVAL&quot;</span><span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ANSIBLE_CALLBACK_PLUGINS&quot;</span><span class="token punctuation">:</span> ANSIBLE_PLUGINS_CALLBACK_DIR<span class="token punctuation">,</span>
    <span class="token string">&quot;ANSIBLE_STDOUT_CALLBACK&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hidden_password&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;private_data_dir&quot;</span><span class="token punctuation">:</span> private_data_dir<span class="token punctuation">,</span>
    <span class="token string">&quot;playbook&quot;</span><span class="token punctuation">:</span> playbook<span class="token punctuation">,</span>
    <span class="token string">&quot;inventory&quot;</span><span class="token punctuation">:</span> inventory<span class="token punctuation">,</span>
    <span class="token string">&quot;envvars&quot;</span><span class="token punctuation">:</span> env<span class="token punctuation">,</span>
    <span class="token comment"># &quot;verbosity&quot;: 2,</span>
<span class="token punctuation">}</span>

res <span class="token operator">=</span> interface<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    project_dir<span class="token operator">=</span>project_dir<span class="token punctuation">,</span>
    <span class="token operator">**</span>params<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function l(c,i){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","stdoutCallback插件.html.vue"]]);export{d as default};
