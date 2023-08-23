import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-e6ea23bd.js";const t={},p=e(`<h1 id="序列化与反序列化" tabindex="-1"><a class="header-anchor" href="#序列化与反序列化" aria-hidden="true">#</a> 序列化与反序列化</h1><p>DRF内置的序列化类，可以对整个模型类进行序列化与反序列化，简化了繁杂的工作。</p><h2 id="内置字段序列化" tabindex="-1"><a class="header-anchor" href="#内置字段序列化" aria-hidden="true">#</a> 内置字段序列化</h2><h3 id="模型类" tabindex="-1"><a class="header-anchor" href="#模型类" aria-hidden="true">#</a> 模型类</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models


<span class="token comment"># Create your models here.</span>
<span class="token keyword">class</span> <span class="token class-name">Authors</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;姓名&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>name

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        db_table <span class="token operator">=</span> <span class="token string">&#39;db_authors&#39;</span>
        verbose_name <span class="token operator">=</span> <span class="token string">&#39;作者&#39;</span>
        verbose_name_plural <span class="token operator">=</span> <span class="token string">&#39;作者&#39;</span>


<span class="token keyword">class</span> <span class="token class-name">Books</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    title <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;标题&#39;</span><span class="token punctuation">)</span>
    price <span class="token operator">=</span> models<span class="token punctuation">.</span>DecimalField<span class="token punctuation">(</span>max_digits<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">,</span> decimal_places<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;单价&#39;</span><span class="token punctuation">)</span>
    publish <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;出版社&#39;</span><span class="token punctuation">)</span>
    author <span class="token operator">=</span> models<span class="token punctuation">.</span>ForeignKey<span class="token punctuation">(</span>Authors<span class="token punctuation">,</span> on_delete<span class="token operator">=</span>models<span class="token punctuation">.</span>CASCADE<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>title

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        db_table <span class="token operator">=</span> <span class="token string">&#39;db_books&#39;</span>
        verbose_name <span class="token operator">=</span> <span class="token string">&#39;图书&#39;</span>
        verbose_name_plural <span class="token operator">=</span> <span class="token string">&#39;图书&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="序列化类" tabindex="-1"><a class="header-anchor" href="#序列化类" aria-hidden="true">#</a> 序列化类</h3><h4 id="字段默认方式序列化" tabindex="-1"><a class="header-anchor" href="#字段默认方式序列化" aria-hidden="true">#</a> 字段默认方式序列化</h4><blockquote><p>全部字段都采用 <code>ModelSerializer</code>的默认方式实现<strong>序列化</strong>与<strong>反序列化</strong>，外键对应的序列化值是外键id</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> ModelSerializer
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Books<span class="token punctuation">,</span> Authors


<span class="token keyword">class</span> <span class="token class-name">AuthorsSerializer</span><span class="token punctuation">(</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Authors
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>

        
<span class="token keyword">class</span> <span class="token class-name">BooksSerializer</span><span class="token punctuation">(</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
   
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Books
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字段指定方式序列化" tabindex="-1"><a class="header-anchor" href="#字段指定方式序列化" aria-hidden="true">#</a> 字段指定方式序列化</h4><blockquote><p>对模型类的外键关联字段通过 其他方式，实现<strong>序列化</strong>，其他字段仍然使用 默认方式实现序列化</p></blockquote><h5 id="外键字段内置方式序列化" tabindex="-1"><a class="header-anchor" href="#外键字段内置方式序列化" aria-hidden="true">#</a> 外键字段内置方式序列化</h5><p><strong>图书类序列化</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> ModelSerializer
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Books<span class="token punctuation">,</span> Authors
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers


<span class="token keyword">class</span> <span class="token class-name">BooksSerializer</span><span class="token punctuation">(</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># author = serializers.PrimaryKeyRelatedField(read_only=True)  # 内置关联字段，默认序列化方式，关联对象的主键</span>
    
    <span class="token comment"># author = serializers.StringRelatedField(read_only=True)  # 内置关联字段，此字段将被序列化为关联对象的字符串表示方式（即__str__方法的返回值）</span>
    
    <span class="token comment"># author = serializers.HyperlinkedRelatedField(view_name=&#39;authors-detail&#39;, read_only=True)  # 内置关联字段，此字段被序列化为关联对象的路由地址</span>

    <span class="token comment"># author = serializers.SlugRelatedField(read_only=True, slug_field=&#39;id&#39;)  # 内置关联字段，指定关联对象的字段</span>
    
    <span class="token comment"># author = serializers.CharField(source=&#39;author.name&#39;, read_only=True)  # 指定关联对象的字段</span>
    
    author <span class="token operator">=</span> AuthorsSerializer<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 将关联对象所有字段全部序列化</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Books
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作者类序列化</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> ModelSerializer
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Books<span class="token punctuation">,</span> Authors
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers


<span class="token keyword">class</span> <span class="token class-name">AuthorsSerializer</span><span class="token punctuation">(</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># books_set = serializers.PrimaryKeyRelatedField(read_only=True, many=True)</span>
    <span class="token comment"># books_set = serializers.StringRelatedField(read_only=True, many=True)</span>
    <span class="token comment"># books_set = serializers.HyperlinkedRelatedField(view_name=&#39;books-detail&#39;, read_only=True, many=True)</span>
    <span class="token comment"># books_set = BookSerializer(read_only=True, many=True)</span>
    <span class="token comment"># books_set = BookRelateField(read_only=True, many=True)  # 自定义关联字段</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Authors
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="外键字段自定义方式序列化" tabindex="-1"><a class="header-anchor" href="#外键字段自定义方式序列化" aria-hidden="true">#</a> 外键字段自定义方式序列化</h5><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> ModelSerializer
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Books<span class="token punctuation">,</span> Authors
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers


<span class="token keyword">class</span> <span class="token class-name">BookRelateField</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>RelatedField<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">to_representation</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Author: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">AuthorsSerializer</span><span class="token punctuation">(</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    books_set <span class="token operator">=</span> BookRelateField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 自定义关联字段</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Authors
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">AuthorRelateField</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>RelatedField<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">to_representation</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Author: {} {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span> value<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">BooksSerializer</span><span class="token punctuation">(</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    author <span class="token operator">=</span> AuthorRelateField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># 自定义关联字段</span>
    
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Books
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>
       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上序列化方式，任选其一均可，但是注意，此时只能保证<strong>序列化成功</strong>，不能保证反序列化</p><h2 id="自定义字段序列化" tabindex="-1"><a class="header-anchor" href="#自定义字段序列化" aria-hidden="true">#</a> 自定义字段序列化</h2><blockquote><p>通过上面的例子可以看出：将外键字段通过其他方式序列化，可以得到不通类型的数据；但是大多数情况，不能实现反序列化。因此，可以在序列化时，不修改外键字段，而是自己构建新字段。最大好处, 在于将序列化字段与反序列化字段分离，互不影响。</p></blockquote><h3 id="修改模型类" tabindex="-1"><a class="header-anchor" href="#修改模型类" aria-hidden="true">#</a> 修改模型类</h3><p>需要在模型类中用<code>@property</code>来实现，可插拔</p><h4 id="模型类-1" tabindex="-1"><a class="header-anchor" href="#模型类-1" aria-hidden="true">#</a> 模型类</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Books</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    title <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;标题&#39;</span><span class="token punctuation">)</span>
    price <span class="token operator">=</span> models<span class="token punctuation">.</span>DecimalField<span class="token punctuation">(</span>max_digits<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">,</span> decimal_places<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;单价&#39;</span><span class="token punctuation">)</span>
    publish <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;出版社&#39;</span><span class="token punctuation">)</span>
    author <span class="token operator">=</span> models<span class="token punctuation">.</span>ForeignKey<span class="token punctuation">(</span>Authors<span class="token punctuation">,</span> on_delete<span class="token operator">=</span>models<span class="token punctuation">.</span>CASCADE<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@property</span>  <span class="token comment"># 插拔字段 - 默认为read_only(不需要考虑反序列化)，且不能修改</span>
    <span class="token keyword">def</span> <span class="token function">author_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>author<span class="token punctuation">.</span>name

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">author_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">from</span> <span class="token punctuation">.</span>serializers <span class="token keyword">import</span> AuthorsSerializer
        <span class="token keyword">return</span> AuthorsSerializer<span class="token punctuation">(</span>self<span class="token punctuation">.</span>author<span class="token punctuation">)</span><span class="token punctuation">.</span>data

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>title

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="序列化类-1" tabindex="-1"><a class="header-anchor" href="#序列化类-1" aria-hidden="true">#</a> 序列化类</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">BooksSerializer</span><span class="token punctuation">(</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Books
        fields <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author_info&#39;</span><span class="token punctuation">)</span>

        extra_kwargs <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&#39;write_only&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改序列化类" tabindex="-1"><a class="header-anchor" href="#修改序列化类" aria-hidden="true">#</a> 修改序列化类</h3><blockquote><p>模型类不变，只在序列化器中添加序列化字段</p></blockquote><h4 id="序列化类-2" tabindex="-1"><a class="header-anchor" href="#序列化类-2" aria-hidden="true">#</a> 序列化类</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">BooksSerializer</span><span class="token punctuation">(</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    author_url <span class="token operator">=</span> serializers<span class="token punctuation">.</span>HyperlinkedIdentityField<span class="token punctuation">(</span>view_name<span class="token operator">=</span><span class="token string">&#39;authors-detail&#39;</span><span class="token punctuation">,</span> read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 内置序列化方式，关联对象的路由地址</span>
    
    author_name <span class="token operator">=</span> serializers<span class="token punctuation">.</span>SerializerMethodField<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># author_name 字段在数据库中不能存在，下面写方法的时候前面加 get_  就可以，这样就得到我们需要的数据了。</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">get_author_name</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        固定写法,obj代表Books实例对象,模型类配置了反向引用author代表作者对象
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">.</span>author<span class="token punctuation">.</span><span class="token builtin">id</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Books
        fields <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author_url&#39;</span><span class="token punctuation">)</span>

        extra_kwargs <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&#39;write_only&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[p];function l(i,c){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","序列化与反序列化.html.vue"]]);export{d as default};
