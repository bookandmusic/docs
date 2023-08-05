import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,e,d as t}from"./app-3c21af73.js";const i={},u=t(`<p>在使用Celery至异步任务处理时，如果存在多种类型的任务，并且我们希望用不同的Worker来处理不同类型的任务时，应该如何处理呢？<br> 本文将会讲解如何利用Celery将任务分配至不同队列，并使用不同的Worker来处理指定类型的任务。</p><h2 id="celery-app创建" tabindex="-1"><a class="header-anchor" href="#celery-app创建" aria-hidden="true">#</a> celery app创建</h2><blockquote><p>celery版本是3.x</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> __future__ <span class="token keyword">import</span> absolute_import

<span class="token keyword">import</span> os

<span class="token keyword">from</span> celery <span class="token keyword">import</span> Celery

<span class="token keyword">from</span> django<span class="token punctuation">.</span>conf <span class="token keyword">import</span> settings

<span class="token comment"># set the default Django settings module for the &#39;celery&#39; program.</span>
os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token string">&#39;DJANGO_SETTINGS_MODULE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;proj.settings&#39;</span><span class="token punctuation">)</span>

app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;proj&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Using a string here means the worker will not have to</span>
<span class="token comment"># pickle the object when using Windows.</span>
app<span class="token punctuation">.</span>config_from_object<span class="token punctuation">(</span><span class="token string">&#39;django.conf:settings&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># celery会自动查找每个app的 tasks文件中的任务</span>
app<span class="token punctuation">.</span>autodiscover_tasks<span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> settings<span class="token punctuation">.</span>INSTALLED_APPS<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>task</span><span class="token punctuation">(</span>bind<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">debug_task</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Request: {0!r}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r={href:"https://docs.celeryproject.org/en/v5.1.2/django/first-steps-with-django.html#using-celery-with-django",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">from</span> celery <span class="token keyword">import</span> Celery

<span class="token comment"># Set the default Django settings module for the &#39;celery&#39; program.</span>
os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token string">&#39;DJANGO_SETTINGS_MODULE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;django01.settings&#39;</span><span class="token punctuation">)</span>

app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;proj&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Using a string here means the worker doesn&#39;t have to serialize</span>
<span class="token comment"># the configuration object to child processes.</span>
<span class="token comment"># - namespace=&#39;CELERY&#39; means all celery-related configuration keys</span>
<span class="token comment">#   should have a \`CELERY_\` prefix.</span>
app<span class="token punctuation">.</span>config_from_object<span class="token punctuation">(</span><span class="token string">&#39;django.conf:settings&#39;</span><span class="token punctuation">,</span> namespace<span class="token operator">=</span><span class="token string">&#39;CELERY&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Load task modules from all registered Django apps.</span>
app<span class="token punctuation">.</span>autodiscover_tasks<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>task</span><span class="token punctuation">(</span>bind<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">debug_task</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Request: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>request<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><blockquote><p>celery版本是3.x</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>IS_USE_CELERY <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token keyword">if</span> IS_USE_CELERY<span class="token punctuation">:</span>
    CELERY_TIMEZONE <span class="token operator">=</span> <span class="token string">&quot;Asia/Shanghai&quot;</span>  <span class="token comment"># 设置时区</span>
    CELERY_ENABLE_UTC <span class="token operator">=</span> <span class="token boolean">False</span>  <span class="token comment"># 是否启动时区设置，默认值是True</span>

    CELERYD_CONCURRENCY <span class="token operator">=</span> <span class="token number">5</span>  <span class="token comment"># 并发的worker数量</span>
    CELERYD_PREFETCH_MULTIPLIER <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># 每次去消息队列读取任务的数量，默认值是4</span>
    CELERYD_MAX_TASKS_PER_CHILD <span class="token operator">=</span> <span class="token number">120</span>  <span class="token comment"># 每个worker执行多少次任务后会死掉</span>

    <span class="token comment"># BROKER_URL = &quot;amqp://guest:guest@localhost:15672/&quot;  # 使用RabbitMQ 作为任务队列</span>
    BROKER_URL <span class="token operator">=</span> <span class="token string">&quot;redis://127.0.0.1:6379/9&quot;</span>  <span class="token comment"># 使用RabbitMQ 作为任务队列</span>

    CELERY_RESULT_EXPIRES <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3</span>  <span class="token comment"># 任务执行结果的超时时间</span>
    <span class="token comment"># CELERYD_TIME_LIMIT = 60 * 60  # 单个任务运行的时间限制，超时会被杀死，不建议使用该参数，而用CELERYD_SOFT_TIME_LIMIT</span>
    CELERYD_SOFT_TIME_LIMIT <span class="token operator">=</span> <span class="token number">300</span>
    CELERY_RESULT_BACKEND <span class="token operator">=</span> <span class="token string">&quot;redis://127.0.0.1:6379/11&quot;</span>  <span class="token comment"># 使用redis存储执行结果</span>

    CELERY_ACCEPT_CONTENT <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;pickle&#39;</span><span class="token punctuation">]</span>
    CELERY_SERIALIZER <span class="token operator">=</span> <span class="token string">&quot;pickle&quot;</span>  <span class="token comment"># 任务序列化方式</span>
    CELERY_RESULT_SERIALIZER <span class="token operator">=</span> <span class="token string">&quot;pickle&quot;</span>  <span class="token comment"># 结果的序列化方式</span>
    CELERY_DISABLE_RATE_LIMITS <span class="token operator">=</span> <span class="token boolean">False</span>  <span class="token comment"># 关闭执行限速</span>

    CELERY_IMPORTS <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;app01.task_celery&quot;</span>
    <span class="token punctuation">]</span>  <span class="token comment"># 配置导入各个任务的任务模块，尤其是当任务模块名字不是 tasks时，可以手动导入</span>

    CELERYBEAT_SCHEDULER <span class="token operator">=</span> <span class="token string">&#39;djcelery.schedulers:DatabaseScheduler&#39;</span>  <span class="token comment"># 指明定时模块的加载位置</span>

    CELERYBEAT_SCHEDULE <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment"># 定时任务，每隔1分钟，记录一次时间</span>
        <span class="token string">&#39;record_datetime&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;task&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;app01.task_celery.record_time&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;schedule&#39;</span><span class="token punctuation">:</span> crontab<span class="token punctuation">(</span>minute<span class="token operator">=</span><span class="token string">&#39;*/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&#39;args&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  <span class="token comment"># 配置定时任务</span>

    CELERY_QUEUES <span class="token operator">=</span> <span class="token punctuation">(</span>
        Queue<span class="token punctuation">(</span><span class="token string">&#39;Default&#39;</span><span class="token punctuation">,</span> exchange<span class="token operator">=</span>Exchange<span class="token punctuation">(</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> routing_key<span class="token operator">=</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Queue<span class="token punctuation">(</span><span class="token string">&#39;queue1&#39;</span><span class="token punctuation">,</span> exchange<span class="token operator">=</span>Exchange<span class="token punctuation">(</span><span class="token string">&#39;queue1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> routing_key<span class="token operator">=</span><span class="token string">&#39;queue1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Queue<span class="token punctuation">(</span><span class="token string">&#39;queue2&#39;</span><span class="token punctuation">,</span> exchange<span class="token operator">=</span>Exchange<span class="token punctuation">(</span><span class="token string">&#39;queue2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> routing_key<span class="token operator">=</span><span class="token string">&#39;queue2&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>  <span class="token comment"># 定义任务执行的各个任务队列，默认有一个队列，暂称为一般任务队列。</span>

    <span class="token comment"># 如果不指定QUEUE 那么就用Default</span>
    CELERY_DEFAULT_QUEUE <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span>
    CELERY_DEFAULT_EXCHANGE <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span>
    CELERY_DEFAULT_ROUTING_KEY <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span>

    <span class="token comment"># CELERY_ROUTES = {</span>
    <span class="token comment">#     &quot;app01.tasks.add_two_num&quot;: {</span>
    <span class="token comment">#         &#39;queue&#39;: &#39;queue1&#39;,</span>
    <span class="token comment">#         &#39;exchange&#39;: &#39;queue1&#39;,</span>
    <span class="token comment">#         &#39;routing_key&#39;: &#39;queue1&#39;</span>
    <span class="token comment">#     }</span>
    <span class="token comment"># }  # Celery 路由设置，配置各个任务分配到不同的任务队列</span>

    INSTALLED_APPS <span class="token operator">=</span> <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;INSTALLED_APPS&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    INSTALLED_APPS <span class="token operator">+=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;djcelery&#39;</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">import</span> djcelery

    djcelery<span class="token punctuation">.</span>setup_loader<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={href:"https://docs.celeryproject.org/en/v5.1.2/userguide/configuration.html#new-lowercase-settings",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>IS_USE_CELERY <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token keyword">if</span> IS_USE_CELERY<span class="token punctuation">:</span>
    CELERY_TIMEZONE <span class="token operator">=</span> <span class="token string">&quot;Asia/Shanghai&quot;</span>  <span class="token comment"># 设置时区</span>
    CELERY_ENABLE_UTC <span class="token operator">=</span> <span class="token boolean">False</span>  <span class="token comment"># 是否启动时区设置，默认值是True</span>

    CELERY_WORKER_CONCURRENCY <span class="token operator">=</span> <span class="token number">5</span>  <span class="token comment"># 并发的worker数量</span>
    CELERY_WORKER_PREFETCH_MULTIPLIER <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># 每次去消息队列读取任务的数量，默认值是4</span>
    CELERY_WORKER_MAX_TASKS_PER_CHILD <span class="token operator">=</span> <span class="token number">120</span>  <span class="token comment"># 每个worker执行多少次任务后会死掉</span>

    <span class="token comment"># BROKER_URL = &quot;redis://127.0.0.1:6379/9&quot;  # 使用RabbitMQ 作为任务队列</span>
    CELERY_BROKER_URL <span class="token operator">=</span> <span class="token string">&quot;amqp://guest:guest@localhost:5672//&quot;</span>  <span class="token comment"># 使用RabbitMQ 作为任务队列</span>

    CELERY_RESULT_EXPIRES <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3</span>  <span class="token comment"># 任务执行结果的超时时间</span>
    CELERY_TASK_TIME_LIMIT <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span>  <span class="token comment"># 单个任务运行的时间限制，超时会被杀死，不建议使用该参数，而用CELERYD_SOFT_TIME_LIMIT</span>
    CELERY_TASK_SOFT_TIME_LIMIT <span class="token operator">=</span> <span class="token number">300</span>
    <span class="token comment"># CELERY_RESULT_BACKEND = &quot;redis://127.0.0.1:6379/11&quot;  # 使用redis存储执行结果</span>
    CELERY_RESULT_BACKEND <span class="token operator">=</span> <span class="token string">&quot;django-db&quot;</span>  <span class="token comment"># 使用ORM对应的数据库存储执行结果</span>

    CELERY_ACCEPT_CONTENT <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;pickle&#39;</span><span class="token punctuation">]</span>
    CELERY_TASK_SERIALIZER <span class="token operator">=</span> <span class="token string">&quot;pickle&quot;</span>  <span class="token comment"># 任务序列化方式</span>
    CELERY_RESULT_SERIALIZER <span class="token operator">=</span> <span class="token string">&quot;pickle&quot;</span>  <span class="token comment"># 结果的序列化方式</span>
    CELERY_WORKER_DISABLE_RATE_LIMITS <span class="token operator">=</span> <span class="token boolean">False</span>  <span class="token comment"># 关闭执行限速</span>

    CELERY_IMPORTS <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;app01.task_celery&quot;</span>
    <span class="token punctuation">]</span>  <span class="token comment"># 配置导入各个任务的代码模块</span>

    CELERY_BEAT_SCHEDULER <span class="token operator">=</span> <span class="token string">&#39;django_celery_beat.schedulers:DatabaseScheduler&#39;</span>  <span class="token comment"># 指明定时模块的加载位置</span>

    CELERY_BEAT_SCHEDULE <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;record_datetime&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;task&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;app01.task_celery.record_time&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;schedule&#39;</span><span class="token punctuation">:</span> crontab<span class="token punctuation">(</span>minute<span class="token operator">=</span><span class="token string">&#39;*/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&#39;args&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  <span class="token comment"># 配置定时任务</span>

    CELERY_TASK_QUEUES <span class="token operator">=</span> <span class="token punctuation">(</span>
        Queue<span class="token punctuation">(</span><span class="token string">&#39;Default&#39;</span><span class="token punctuation">,</span> exchange<span class="token operator">=</span>Exchange<span class="token punctuation">(</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> routing_key<span class="token operator">=</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Queue<span class="token punctuation">(</span><span class="token string">&#39;queue1&#39;</span><span class="token punctuation">,</span> exchange<span class="token operator">=</span>Exchange<span class="token punctuation">(</span><span class="token string">&#39;queue1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> routing_key<span class="token operator">=</span><span class="token string">&#39;queue1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Queue<span class="token punctuation">(</span><span class="token string">&#39;queue2&#39;</span><span class="token punctuation">,</span> exchange<span class="token operator">=</span>Exchange<span class="token punctuation">(</span><span class="token string">&#39;queue2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> routing_key<span class="token operator">=</span><span class="token string">&#39;queue2&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>  <span class="token comment"># 定义任务执行的各个任务队列，默认有一个队列，暂称为一般任务队列。</span>

    <span class="token comment"># 如果不指定QUEUE 那么就用Default</span>
    CELERY_TASK_DEFAULT_QUEUE <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span>
    CELERY_TASK_DEFAULT_EXCHANGE <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span>
    CELERY_TASK_DEFAULT_ROUTING_KEY <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span>

    <span class="token comment"># CELERY_TASK_ROUTES = {</span>
    <span class="token comment">#     &quot;app01.tasks.add_two_num&quot;: {</span>
    <span class="token comment">#         &#39;queue&#39;: &#39;queue1&#39;,</span>
    <span class="token comment">#         &#39;exchange&#39;: &#39;queue1&#39;,</span>
    <span class="token comment">#         &#39;routing_key&#39;: &#39;queue1&#39;</span>
    <span class="token comment">#     }</span>
    <span class="token comment"># }  # Celery 路由设置，配置各个任务分配到不同的任务队列</span>

    <span class="token comment"># INSTALLED_APPS = locals().get(&#39;INSTALLED_APPS&#39;, [])</span>
    INSTALLED_APPS <span class="token operator">+=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;django_celery_beat&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;django_celery_results&#39;</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="task任务" tabindex="-1"><a class="header-anchor" href="#task任务" aria-hidden="true">#</a> task任务</h2><blockquote><p><code>app01/tasks.py</code></p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> celery <span class="token keyword">import</span> shared_task
<span class="token keyword">import</span> time


<span class="token decorator annotation punctuation">@shared_task</span>
<span class="token keyword">def</span> <span class="token function">add_two_num</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>app01/task_celery.py</code></p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> datetime

<span class="token keyword">from</span> django<span class="token punctuation">.</span>conf <span class="token keyword">import</span> settings

<span class="token keyword">from</span> celery <span class="token keyword">import</span> shared_task


<span class="token decorator annotation punctuation">@shared_task</span>
<span class="token keyword">def</span> <span class="token function">record_time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>settings<span class="token punctuation">.</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;time.txt&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">\\n&#39;</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任务异步调用" tabindex="-1"><a class="header-anchor" href="#任务异步调用" aria-hidden="true">#</a> 任务异步调用</h2><blockquote><p>如果任务直接在配置中指明任务队列，就不能再动态指明队列</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> app01<span class="token punctuation">.</span>tasks <span class="token keyword">import</span> add_two_num


<span class="token keyword">class</span> <span class="token class-name">IndexView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        通过i值不同，模拟不同情况下，需要将任务放到不同的任务队列中执行，
        如果 celery版本是3.x，不能在配置中写死
        &quot;&quot;&quot;</span>
        i <span class="token operator">=</span> request<span class="token punctuation">.</span>GET<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
        i <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                add_two_num<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>args<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queue<span class="token operator">=</span><span class="token string">&#39;queue1&#39;</span><span class="token punctuation">,</span> routing_key<span class="token operator">=</span><span class="token string">&#39;queue1&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                add_two_num<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>args<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queue<span class="token operator">=</span><span class="token string">&#39;queue2&#39;</span><span class="token punctuation">,</span> routing_key<span class="token operator">=</span><span class="token string">&#39;queue2&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token string">&quot;任务正在执行&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态创建定时任务" tabindex="-1"><a class="header-anchor" href="#动态创建定时任务" aria-hidden="true">#</a> 动态创建定时任务</h2>`,10),v=n("code",null,"djcelery",-1),b={href:"https://docs.celeryproject.org/en/v5.1.2/userguide/periodic-tasks.html#using-custom-scheduler-classes",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"django-celery-beat",-1),_={href:"https://docs.celeryproject.org/en/v5.1.2/django/first-steps-with-django.html#django-celery-results-using-the-django-orm-cache-as-a-result-backend",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"django-celery-results",-1),y=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> djcelery<span class="token punctuation">.</span>models <span class="token keyword">import</span> CrontabSchedule<span class="token punctuation">,</span> PeriodicTask
<span class="token comment"># from django_celery_beat.models import CrontabSchedule, PeriodicTask</span>


<span class="token keyword">class</span> <span class="token class-name">TwoView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a <span class="token operator">=</span> request<span class="token punctuation">.</span>data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
        b <span class="token operator">=</span> request<span class="token punctuation">.</span>data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        crontab<span class="token punctuation">,</span> flag <span class="token operator">=</span> CrontabSchedule<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get_or_create<span class="token punctuation">(</span>minute<span class="token operator">=</span><span class="token number">28</span><span class="token punctuation">,</span> hour<span class="token operator">=</span><span class="token number">23</span><span class="token punctuation">,</span> day_of_month<span class="token operator">=</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
        task <span class="token operator">=</span> PeriodicTask<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;app01.tasks.add_two_num&#39;</span><span class="token punctuation">,</span> task<span class="token operator">=</span><span class="token string">&#39;app01.tasks.add_two_num&#39;</span><span class="token punctuation">,</span> crontab<span class="token operator">=</span>crontab<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token string">&quot;定时任务创建成功&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="celery服务启动" tabindex="-1"><a class="header-anchor" href="#celery服务启动" aria-hidden="true">#</a> celery服务启动</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># celery3.x</span>
python manage<span class="token punctuation">.</span>py celery worker <span class="token operator">-</span>Q queue1 <span class="token operator">-</span>l info <span class="token operator">-</span>n queue1@<span class="token operator">%</span>d  <span class="token comment"># 启动beat服务</span>
    
python manage<span class="token punctuation">.</span>py celery worker <span class="token operator">-</span>Q default <span class="token operator">-</span>l info  <span class="token comment"># 针对默认队列启动worker服务</span>

python manage<span class="token punctuation">.</span>py celery worker <span class="token operator">-</span>Q queue1 <span class="token operator">-</span>l info <span class="token operator">-</span>n queue1@<span class="token operator">%</span>d  <span class="token comment"># 针对队列1启动worer服务</span>

python manage<span class="token punctuation">.</span>py celery worker <span class="token operator">-</span>Q queue2 <span class="token operator">-</span>l info <span class="token operator">-</span>n queue2@<span class="token operator">%</span>d  <span class="token comment"># 针对队列1启动worer服务</span>

<span class="token comment"># celery3.x 和celery4.x</span>
celery <span class="token operator">-</span>A celery路径 beat <span class="token operator">-</span>l info <span class="token operator">-</span>Q 队列
celery <span class="token operator">-</span>A celery路径 worker <span class="token operator">-</span>l info <span class="token operator">-</span>Q 队列 <span class="token operator">-</span>c worker数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function h(R,L){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("blockquote",null,[n("p",null,[s("如果是 4.x以上，需要参考"),n("a",r,[s("官方文档"),e(a)]),s("，有不同的写法。")])]),d,n("blockquote",null,[n("p",null,[s("如果是 4.x以上，需要参考"),n("a",k,[s("官方文档"),e(a)]),s("，修改配置参数键名")])]),m,n("blockquote",null,[n("p",null,[s("celery3.x 使用 djcelery模块和django集成，celery4.x之后，不需要使用"),v,s("，但是如果想要动态创建定时任务及存储结果到SQL数据库中，可以使用 "),n("a",b,[g,e(a)]),s("和 "),n("a",_,[E,e(a)])])]),y])}const C=p(i,[["render",h],["__file","Celery任务队列-7c4e981a.html.vue"]]);export{C as default};
