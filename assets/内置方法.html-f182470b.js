import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-20457886.js";const p={},e=t(`<h1 id="内置方法" tabindex="-1"><a class="header-anchor" href="#内置方法" aria-hidden="true">#</a> 内置方法</h1><h2 id="数组方法" tabindex="-1"><a class="header-anchor" href="#数组方法" aria-hidden="true">#</a> 数组方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.数组的操作方法</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">/*在数组的开头添加一个或者多个元素，返回新长度；IE9+*/</span>

a<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">/*删除数组中的第一个元素，返回删除的元素*/</span>

a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">/*往数组的末尾添加一个或多个元素，返回新长度*/</span>

a<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">/*删除并返回数组的最后一个元素*/</span>


a<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span> <span class="token comment">/*不修改原数组，返回一个新数组*/</span>

a<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">/*不修改原数组，返回一个新数组。不传参数时，复制数组；传参数时连接数组，可以有多个数组参数；注意:数组+得到是字符串*/</span>

a<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">/*删除数组：两个参数，第一个是开始的位置，第二个是删除的长度

                插入元素：至少3个参数，第一个是开始的位置，第二个是0，后面是要插入的元素（可以有多个）

                替换元素：至少3个参数，第一个是开始的位置，第二个是替换的个数，后面是要替换的元素*/</span>

a<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">/*反转数组*/</span>

a<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">/*用特定的方法对数组进行排列，接收一个排序函数，该函数接收两个参数，

                如果第一个参数在前面，返回一个负数；如果第二个参数在前面，返回一个正数；如果两个参数相等，返回0*/</span>

a<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">/*在数组中查找元素，两个参数，第一个参数时要查找的元素；第二个参数是要开始查找的位置（该参数可以没有）*/</span>

a<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">/*从数组的后面开始查找元素，与indexOf相同，只是查找方向不同*/</span>

a<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">/*把数组格式化成字符串，接收一个参数，即：分隔符。如果不传参数或传入undefined，则以逗号分隔*/</span>

a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">/*返回以逗号为分隔符的数组中的元素组成的字符串*/</span>


a <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>  <span class="token comment">/*检测是否为数组，如果是，返回true*/</span>

Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>    <span class="token comment">/*检测是否为数组，如果是，返回true。IE9+*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串方法" tabindex="-1"><a class="header-anchor" href="#字符串方法" aria-hidden="true">#</a> 字符串方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串操作方法</span>

<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">&#39;54545&#39;</span><span class="token punctuation">;</span>


b<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>     <span class="token comment">/*返回一个新的字符串，不不包含end，不改变原字符串*/</span>

b<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span> <span class="token comment">/*与slice一样*/</span>

b<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;length&#39;</span><span class="token punctuation">)</span> <span class="token comment">/*返回一个新字符串，不改变原字符串*/</span>

b<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>                 <span class="token comment">/*按照特定符号切割字符串，得到数组*/</span>



b<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">/*在字符串中从前往后查找字符，没找到就返回-1。接收两个参数：第一个参数时要查找的字符；第二个参数是（可选的）开始查找的位置*/</span>

b<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">/*与indexOf用法相同，改方法是从后往前查找*/</span>

b<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment">/*在字符串中查找，并返回位置。接收一个参数（要查找的字符串），如果没找到，返回-1.从左向右查找*/</span>

b<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">/*查找并替换(不改变原字符串)，返回一个新字符串，接收两个参数。第一个参数：要替换（查找）的字符串；第二个：要替换成的字符串。*/</span>

b<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">/*创建一个字符串副本，删除前置及后缀的所有空格，返回结果。 IE9+*/</span>

b<span class="token punctuation">.</span><span class="token function">toLocaleLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment">/*字符串大写转为小写（针对地区特定的方法，推荐使用）*/</span>

b<span class="token punctuation">.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment">/*字符串小写转为大写（针对地区特定的方法，推荐使用）*/</span>



b<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">/*字符串大写转为小写*/</span>

b<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">/*字符串小写转为大写*/</span>

b<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">)</span>          <span class="token comment">/*比较字符串b与str，并返回0或一个正数或一个负数。如果在字母表中b在str的前面，就返回一个负数；在后面，返回一个正数；相等返回0*/</span>


b<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment">/*拼接字符串，返回新的字符串,不改变原字符串。实践中最常用的是+操作符*/</span>

b<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment">/*接收一个参数（字符串中的位置），返回字符串中某位置上的字符*/</span>

b<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment">/*与charAt用法相同，返回的是该字符的字符编码*/</span>

String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment">/*传入字符串的编码，把编码解析为字符串并返回该字符串。可接收多个编码参数*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间模块" tabindex="-1"><a class="header-anchor" href="#时间模块" aria-hidden="true">#</a> 时间模块</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

date<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前年份(2位)</span>

date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取完整的年份(4位)</span>

date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前月份(0-11,0代表1月)</span>

date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前日(1-31)</span>

date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前星期X(0-6,0代表星期天)</span>

date<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前时间(从1970.1.1开始的毫秒数)</span>

date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前小时数(0-23)</span>

date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前分钟数(0-59)</span>

date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前秒数(0-59)</span>

date<span class="token punctuation">.</span><span class="token function">getMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前毫秒数(0-999)</span>

date<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前日期</span>

date<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前时间</span>

date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取日期与时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*按照绝对值降序排序*/</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token operator">-</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
a<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[e];function i(o,l){return s(),a("div",null,c)}const k=n(p,[["render",i],["__file","内置方法.html.vue"]]);export{k as default};
