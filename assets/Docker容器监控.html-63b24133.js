import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-b2b64365.js";const i="/assets/71-20230617203318-2afozto-20813a34.png",t="/assets/72-20230617203318-18j74x9-7b667669.png",l="/assets/73-20230617203318-622qe6u-16a1e1ee.png",p={},c=e('<h1 id="docker容器监控之cadvisor-influxdb-granfana" tabindex="-1"><a class="header-anchor" href="#docker容器监控之cadvisor-influxdb-granfana" aria-hidden="true">#</a> Docker容器监控之CAdvisor+InfluxDB+Granfana</h1><h4 id="原生命令" tabindex="-1"><a class="header-anchor" href="#原生命令" aria-hidden="true">#</a> 原生命令</h4><p>通过<code>docker stats</code>​命令可以很方便的看到当前宿主机上所有容器的CPU,内存以及网络流量等数据， 一般小公司够用了。。。。。</p><p>但是，<code>docker stats</code>​统计结果只能是当前宿主机的全部容器，数据资料是实时的，没有地方存储、没有健康指标过线预警等功能</p><h4 id="容器监控3剑客" tabindex="-1"><a class="header-anchor" href="#容器监控3剑客" aria-hidden="true">#</a> 容器监控3剑客</h4><p>CAdvisor监控收集+InfluxDB存储数据+Granfana展示图表</p><p><strong>CAdvisor</strong></p><p>​<img src="'+i+'" alt="71" loading="lazy">​</p><p><strong>InfluxDB</strong></p><p>​<img src="'+t+'" alt="72" loading="lazy">​</p><p>Granfana</p><p>​<img src="'+l+`" alt="73" loading="lazy">​</p><h4 id="compose容器编排" tabindex="-1"><a class="header-anchor" href="#compose容器编排" aria-hidden="true">#</a> compose容器编排</h4><p>新建docker-compose.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span> 
  
<span class="token key atrule">volumes</span><span class="token punctuation">:</span> 
  grafana_data<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
  
<span class="token key atrule">services</span><span class="token punctuation">:</span> 
 influxdb<span class="token punctuation">:</span> 
  image<span class="token punctuation">:</span> tutum/influxdb<span class="token punctuation">:</span><span class="token number">0.9</span> 
  restart<span class="token punctuation">:</span> always 
  environment<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> PRE_CREATE_DB=cadvisor 
  ports<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;8083:8083&quot;</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;8086:8086&quot;</span> 
  volumes<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> ./data/influxdb<span class="token punctuation">:</span>/data 
  
 cadvisor<span class="token punctuation">:</span> 
  image<span class="token punctuation">:</span> google/cadvisor 
  links<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> influxdb<span class="token punctuation">:</span>influxsrv 
  command<span class="token punctuation">:</span> <span class="token punctuation">-</span>storage_driver=influxdb <span class="token punctuation">-</span>storage_driver_db=cadvisor <span class="token punctuation">-</span>storage_driver_host=influxsrv<span class="token punctuation">:</span><span class="token number">8086</span> 
  restart<span class="token punctuation">:</span> always 
  ports<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span> 
  volumes<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> /<span class="token punctuation">:</span>/rootfs<span class="token punctuation">:</span>ro 
    <span class="token punctuation">-</span> /var/run<span class="token punctuation">:</span>/var/run<span class="token punctuation">:</span>rw 
    <span class="token punctuation">-</span> /sys<span class="token punctuation">:</span>/sys<span class="token punctuation">:</span>ro 
    <span class="token punctuation">-</span> /var/lib/docker/<span class="token punctuation">:</span>/var/lib/docker<span class="token punctuation">:</span>ro 
  
 grafana<span class="token punctuation">:</span> 
  user<span class="token punctuation">:</span> <span class="token string">&quot;104&quot;</span> 
  image<span class="token punctuation">:</span> grafana/grafana 
  user<span class="token punctuation">:</span> <span class="token string">&quot;104&quot;</span> 
  restart<span class="token punctuation">:</span> always 
  links<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> influxdb<span class="token punctuation">:</span>influxsrv 
  ports<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span> 
  volumes<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> grafana_data<span class="token punctuation">:</span>/var/lib/grafana 
  environment<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> HTTP_USER=admin 
    <span class="token punctuation">-</span> HTTP_PASS=admin 
    <span class="token punctuation">-</span> INFLUXDB_HOST=influxsrv 
    <span class="token punctuation">-</span> INFLUXDB_PORT=8086 
    <span class="token punctuation">-</span> INFLUXDB_NAME=cadvisor 
    <span class="token punctuation">-</span> INFLUXDB_USER=root 
    <span class="token punctuation">-</span> INFLUXDB_PASS=root 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动docker-compose文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看三个服务容器是否启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">1.</span> <span class="token value attr-value">浏览cAdvisor收集服务，http://ip:8080/</span>

第一次访问慢，请稍等

cadvisor也有基础的图形展现功能，这里主要用它来作数据采集
<span class="token key attr-name">2.</span> <span class="token value attr-value">浏览influxdb存储服务，http://ip:8083/</span>

<span class="token key attr-name">3.</span> <span class="token value attr-value">浏览grafana展现服务，http://ip:3000</span>
  ip+3000端口的方式访问,默认帐户密码（admin/admin）
<span class="token key attr-name">  https</span><span class="token punctuation">:</span><span class="token value attr-value">//gitee.com/yooome/golang/tree/main/Docker详细教程</span>
  配置步骤
<span class="token key attr-name">  [1]</span> <span class="token value attr-value">配置数据源</span>
<span class="token key attr-name">  [2]</span> <span class="token value attr-value">选择influxdb数据源</span>
<span class="token key attr-name">  [3]</span> <span class="token value attr-value">配置细节</span>
<span class="token key attr-name">  [4]</span> <span class="token value attr-value">配置面板panel</span>
<span class="token key attr-name">  [5]</span> <span class="token value attr-value">到这里cAdvisor+InfluxDB+Grafana容器监控系统就部署完成了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[c];function u(d,r){return s(),a("div",null,o)}const k=n(p,[["render",u],["__file","Docker容器监控.html.vue"]]);export{k as default};
