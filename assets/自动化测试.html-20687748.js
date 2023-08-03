import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as n,b as s,d as i,e as c}from"./app-76561525.js";const l={},u=n("blockquote",null,[n("p",null,[s("写好了一个项目之后，要确定各个模块是不是稳定运行，有没有bug，比如一个项目有100个路由，可以手动一个一个URL的输入，查看响应有没有毛病，但这样不符合程序员的逼格。"),n("br"),s(" 由此，诞生了单元测试与集成测试。")])],-1),d=n("h2",{id:"python-unittest",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-unittest","aria-hidden":"true"},"#"),s(" python unittest")],-1),r={href:"https://docs.python.org/3.7/library/unittest.html",target:"_blank",rel:"noopener noreferrer"},k=c(`<h3 id="unittest-简介" tabindex="-1"><a class="header-anchor" href="#unittest-简介" aria-hidden="true">#</a> unittest 简介</h3><blockquote><p><code>unittest</code>中最核心的部分是：<code>TestFixture</code>、<code>TestCase</code>、<code>TestSuite</code>、<code>TestRunner</code></p></blockquote><p><code>unittest case</code>的运行流程：</p><ul><li>写好一个完整的<code>TestCase</code></li><li>多个<code>TestCase</code> 由<code>TestLoder</code>被加载到<code>TestSuite</code>里面, <code>TestSuite</code>也可以嵌套<code>TestSuite</code></li><li>由<code>TextTestRunner</code>来执行<code>TestSuite</code>，测试的结果保存在<code>TextTestResult</code>中</li><li><code>TestFixture</code>指的是环境准备和恢复</li></ul><h4 id="test-fixture" tabindex="-1"><a class="header-anchor" href="#test-fixture" aria-hidden="true">#</a> Test Fixture</h4><p>用于测试环境的准备和恢复还原, 一般用到下面几个函数。</p><ul><li><code>setUp()</code>：准备环境，执行每个测试用例的前置条件</li><li><code>tearDown()</code>：环境还原，执行每个测试用例的后置条件</li><li><code>setUpClass()</code>：必须使用<code>@classmethod</code>装饰器，所有<code>case</code>执行的前置条件，只运行一次</li><li><code>tearDownClass()</code>：必须使用<code>@classmethod</code>装饰器，所有<code>case</code>运行完后只运行一次</li></ul><hr><h4 id="test-case" tabindex="-1"><a class="header-anchor" href="#test-case" aria-hidden="true">#</a> Test Case</h4><ul><li>参数<code>verbosity</code>可以控制错误报告的详细程度：<code>默认为1</code>。 <ul><li><code>Verbosity=0</code>，表示不输出每一个用例的执行结果；</li><li><code>Verbosity=1</code>情况下<code>成功是 .</code>，失败是 F，出错是 E，跳过是 S；</li><li><code>Verbosity=2</code>情况下会打印测试的注释,显示详细的执行报告结；</li></ul></li><li>测试的执行跟方法的顺序没有关系, <strong>默认按字母顺序</strong></li><li>每个测试方法均以 <code>test_</code> 开头</li></ul><hr><h4 id="test-suite" tabindex="-1"><a class="header-anchor" href="#test-suite" aria-hidden="true">#</a> Test Suite</h4><ul><li>一般通过<code>addTest()</code>或者<code>addTests()</code>向<code>suite</code>中添加</li><li><code>case</code>的执行顺序与添加到Suite中的顺序是一致的</li><li>使用<strong>装饰器</strong>的方式来实现跳过测试与预计的失败，常用的主要有3种: <ul><li><code>@unittest.skip()</code>：直接跳过测试用例；</li><li><code>@unittest.skipIf(condition,reason)</code>：当满足条件时跳过测试用例；</li><li><code>@unittest.skipUnless(condition,reason)</code>：只有满足某一条件时不跳过，其他的都跳过；</li></ul></li></ul><hr><h4 id="test-loder" tabindex="-1"><a class="header-anchor" href="#test-loder" aria-hidden="true">#</a> Test Loder</h4><ul><li><p><code>TestLoadder</code>用来加载<code>TestCase</code>到<code>TestSuite</code>中</p></li><li><p><code>loadTestsFrom*()</code>方法从各个地方寻找<code>testcase</code>，创建实例，然后<code>addTestSuite</code>，再返回一个<code>TestSuite</code>实例</p></li><li><p><code>defaultTestLoader()</code> 与 <code>TestLoader()</code>功能差不多，复用原有实例</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>unittest<span class="token punctuation">.</span>TestLoader<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>loadTestsFromTestCase<span class="token punctuation">(</span>testCaseClass<span class="token punctuation">)</span>
unittest<span class="token punctuation">.</span>TestLoader<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>loadTestsFromModule<span class="token punctuation">(</span>module<span class="token punctuation">)</span>
unittest<span class="token punctuation">.</span>TestLoader<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>loadTestsFromName<span class="token punctuation">(</span>name<span class="token punctuation">,</span> module<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
unittest<span class="token punctuation">.</span>TestLoader<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>loadTestsFromNames<span class="token punctuation">(</span>names<span class="token punctuation">,</span> module<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
unittest<span class="token punctuation">.</span>TestLoader<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>discover<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="测试用例" tabindex="-1"><a class="header-anchor" href="#测试用例" aria-hidden="true">#</a> 测试用例</h3><blockquote><p>定义实现<strong>测试用例</strong>，然后调用即可</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> unittest
<span class="token keyword">import</span> requests


<span class="token keyword">class</span> <span class="token class-name">TestCaseDemo</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">setUpClass</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;this setupclass() method only called once.\\n&quot;</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">tearDownClass</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;this tear_down_class() method only called once too.\\n&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;do something before test : prepare environment.\\n&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">tearDown</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;do something after test : clean up.\\n&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_goods_list</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;http://127.0.0.1:8000/goods/&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># 断言</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>status_code<span class="token punctuation">,</span> <span class="token string">&#39;查询商品失败&#39;</span><span class="token punctuation">)</span>

        result <span class="token operator">=</span> r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;查询商品，结果不对&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_goods_create</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">&#39;http://127.0.0.1:8000/goods/&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># 断言</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">405</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>status_code<span class="token punctuation">,</span> <span class="token string">&#39;不应该允许添加商品&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span>verbosity<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试套件" tabindex="-1"><a class="header-anchor" href="#测试套件" aria-hidden="true">#</a> 测试套件</h3><p>上述演示了一种比较基础、简单的测试用例的使用方法，但是这样比较固化，只能自动的去查找以<em>test</em>开头的测试方法，然后顺序的去执行测试方法，这样显然是有点僵化的，不能按照重要程度或者我们的意愿去执行测试方法，而且遇到多个测试用例是会比较混乱。<br> 这里要讲的测试套件能够归档测试用例，能够让我们按照指定的顺序去执行测试方法。</p><ul><li>创建测试实例</li><li>创建测试套件</li><li>加载测试实例</li><li>添加测试实例到测试套件</li><li>创建测试运行组件，加载测试套件</li><li>运行测试套件</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">.</span>
└── testcase
    ├── __init__<span class="token punctuation">.</span>py
    ├── test<span class="token punctuation">.</span>py  <span class="token comment"># 测试套件</span>
    └── test_demo_class<span class="token punctuation">.</span>py  <span class="token comment"># 测试实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> HTMLReport
<span class="token keyword">from</span> unittest <span class="token keyword">import</span> TestLoader<span class="token punctuation">,</span> TestSuite<span class="token punctuation">,</span> TextTestRunner

<span class="token keyword">import</span> test_demo_class  <span class="token comment"># 导入测试模块</span>
<span class="token keyword">from</span> test_demo_class <span class="token keyword">import</span> TestCaseDemo

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 2. 创建测试套件</span>
    suite <span class="token operator">=</span> TestSuite<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 3.加载测试实例</span>
    <span class="token comment"># test1 = TestCaseDemo(&quot;test_goods_list&quot;)</span>
    <span class="token comment"># test2 = TestCaseDemo(&#39;test_goods_create&#39;)</span>
    tests <span class="token operator">=</span> <span class="token punctuation">[</span>
        TestCaseDemo<span class="token punctuation">(</span><span class="token string">&quot;test_goods_list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
        TestCaseDemo<span class="token punctuation">(</span><span class="token string">&quot;test_goods_create&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
    <span class="token comment"># tests = TestLoader().loadTestsFromModule(test_demo_class)</span>
    <span class="token comment"># tests = TestLoader().loadTestsFromTestCase(TestCaseDemo)</span>
    <span class="token comment"># tests = TestLoader().loadTestsFromName(&#39;test_demo_class.TestCaseDemo.test_goods_list&#39;)</span>
    <span class="token comment"># tests = TestLoader().loadTestsFromNames([</span>
    <span class="token comment">#     &#39;test_demo_class.TestCaseDemo.test_goods_list&#39;,</span>
    <span class="token comment">#     &#39;test_demo_class.TestCaseDemo.test_goods_create&#39;</span>
    <span class="token comment"># ])</span>
    <span class="token comment"># tests = TestLoader().discover(&#39;.&#39;, &#39;test_*.py&#39;, top_level_dir=None)</span>

    <span class="token comment"># 4. 添加测试实例到测试套件</span>
    <span class="token comment"># suite.addTest(test1)</span>
    <span class="token comment"># suite.addTest(test2)</span>
    suite<span class="token punctuation">.</span>addTests<span class="token punctuation">(</span>tests<span class="token punctuation">)</span>

    <span class="token comment"># 5. 创建运行套件，并运行</span>
    runner <span class="token operator">=</span> TextTestRunner<span class="token punctuation">(</span>verbosity<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 输出到终端</span>

    <span class="token comment"># runner = HTMLReport.TestRunner(report_file_name=&#39;test&#39;,</span>
    <span class="token comment">#                                 output_path=&#39;report&#39;,</span>
    <span class="token comment">#                                 title=&#39;测试报告&#39;,</span>
    <span class="token comment">#                                 description=&#39;测试描述&#39;,</span>
    <span class="token comment">#                                 sequential_execution=True</span>
    <span class="token comment">#                                 )  # 输出到HTML网页</span>
    <span class="token comment">#</span>
    runner<span class="token punctuation">.</span>run<span class="token punctuation">(</span>suite<span class="token punctuation">)</span>

    <span class="token comment"># with open(&#39;ut_log.txt&#39;, &#39;a&#39;) as fp:  # 输出到txt文件</span>
    <span class="token comment">#     runner = TextTestRunner(stream=fp, verbosity=2)</span>
    <span class="token comment">#     runner.run(suite)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="django-test" tabindex="-1"><a class="header-anchor" href="#django-test" aria-hidden="true">#</a> django test</h2><h3 id="数据库配置" tabindex="-1"><a class="header-anchor" href="#数据库配置" aria-hidden="true">#</a> 数据库配置</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;django.db.backends.mysql&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;HOST&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PORT&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django_db1&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 真实的数据库</span>
        <span class="token string">&#39;USER&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PASSWORD&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;TEST&#39;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
            <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;django_db_test&#39;</span> <span class="token comment"># 用于单元测试的数据库</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元测试文件" tabindex="-1"><a class="header-anchor" href="#单元测试文件" aria-hidden="true">#</a> 单元测试文件</h3><blockquote><p>在每个APP里面，都有一个<code>test.py</code>文件，可以在里面去定义测试类，并可以直接运行</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>test <span class="token keyword">import</span> TestCase<span class="token punctuation">,</span> Client
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Goods


<span class="token comment"># Create your tests here.</span>
<span class="token keyword">class</span> <span class="token class-name">GoodsTestCase</span><span class="token punctuation">(</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_goods_list</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 创建一个客户端</span>
        client <span class="token operator">=</span> Client<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 模拟客户端访问首页</span>
        response <span class="token operator">=</span> client<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;/goods/&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># 测试，self.assertEqual接收3个参数(被测试对象，正确的测试结果，如果不正确输出什么）</span>
        <span class="token comment"># 如果第一个参数的返回值不等于第二个参数，输出第三个参数</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>
            response<span class="token punctuation">.</span>status_code<span class="token punctuation">,</span>
            <span class="token number">200</span><span class="token punctuation">,</span>
            <span class="token string">&#39;商品查询失败&#39;</span>
        <span class="token punctuation">)</span>

        result <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>
            <span class="token builtin">type</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token builtin">list</span><span class="token punctuation">,</span>
            <span class="token string">&#39;商品查询结果不对&#39;</span>
        <span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    userTestCase <span class="token operator">=</span> GoodsTestCase<span class="token punctuation">(</span><span class="token punctuation">)</span>
    userTestCase<span class="token punctuation">.</span>test_goods_list<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> mock</h2><p>在单元测试进行的同时，就离不开<code>mock</code>模块的存在，初次接触这个概念的时候会有这样的疑问：把要测的东西都模拟掉了还测试什么呢？<br> 但在，实际生产中的项目是非常复杂的，对其进行单元测试的时候，会遇到以下问题：</p><ul><li>接口的依赖</li><li>外部接口调用</li><li>测试环境非常复杂</li></ul><p>单元测试应该只针对当前单元进行测试, 所有的内部或外部的依赖应该是稳定的, 已经在别处进行测试过的。使用<code>mock</code> 就可以对外部依赖组件实现进行模拟并且替换掉, 从而使得单元测试将焦点只放在当前的单元功能。</p><p>因为在为代码进行单元测试的同时，会发现该模块依赖于其他的模块，例如数据库，网络，或者第三方模块的存在，而我们对一个模块进行单元测试的目的，是测试当前模块正常工作，这样就要避开对其他模块的依赖，而mock主要作用便在于，专注于待测试的代码。而在但与测试中，如何灵活的使用mock模块是核心所在。下面便以mock为核心，结合最近所写的代码，阐述mock模块的使用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> unittest <span class="token keyword">import</span> mock

<span class="token keyword">def</span> <span class="token function">request_lemonfix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;

    :return:
    &quot;&quot;&quot;</span>
    res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;http://www.lemonfix.com&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>status_code<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    request_lemonfix <span class="token operator">=</span> mock<span class="token punctuation">.</span>Mock<span class="token punctuation">(</span>return_value<span class="token operator">=</span><span class="token string">&quot;这里会显示论坛主页&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>request_lemonfix<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function m(v,b){const a=t("ExternalLinkIcon");return o(),p("div",null,[u,d,n("p",null,[n("a",r,[s("unittest"),i(a)]),s("是python内置的用于测试代码的模块，无需安装， 使用简单方便。")]),k])}const g=e(l,[["render",m],["__file","自动化测试.html.vue"]]);export{g as default};
