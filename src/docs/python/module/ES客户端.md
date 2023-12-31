---
title: ES客户端
url: /archives/cb1c30cf
category: [Python]
tag: [es]
abbrlink: cb1c30cf
date: 2022-04-16 18:59:28
updated: 2023-03-02 14:44:36
order: 7
article: false
---



# ElasticSearch

[elaticsearch](https://elasticsearch-py.readthedocs.io/en/master/):Elasticsearch 的官方低级客户端。它的目标是为 Python 中所有与 Elasticsearch 相关的代码提供基础操作，类似于pymysql。

## 安装

```sh
pip install elasticsearch
```

## 链接

```python
from elasticsearch import Elasticsearch


es = Elasticsearch(
    ['localhost:9200'],
    # 启动前嗅探es集群服务器
    # sniff_on_start=True,
    # es集群服务器结点连接异常时是否刷新es节点信息
    # sniff_on_connection_fail=True,
    # 每60秒刷新节点信息
    # sniffer_timeout=60
)
```

## 索引

```python
# 在创建索引时忽略由 IndexAlreadyExistsException 引起的 400 已经存在
rs = es.indices.create(index='employee', ignore=400)
 
# 没有这样的索引 404  400 已删除
# rs = es.indices.delete(index='employee', ignore=[400, 404])
```

## 数据

### 插入

在插入数据时，既可以指定id，也可以不指定，默认生成。

```python
'''
PUT /user/_doc/1/
{
    "firstName": "John",
    "lastName": "Smith",
    "age": 25,
    "about": "I love Python",
    "interests": [
        "sports",
        "music"
    ]
}
'''
body = {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25,
    "about": "I love Python",
    "interests": [
        "sports",
        "music"
    ]
}

# 索引: 文档存在，按照新的数据重新赋值; 文档不存在, 添加文档
rs = es.index(index='user', id=1, body=body)
print(rs)

"""
POST /user/_doc/2/?op_type=create
{
  "firstName": "Mily",
  "lastName": "Lucy",
  "age": 27,
  "about": "I love Js",
  "interests": [
    "sports"
  ]
}
"""
# 插入单条
body = {
    "firstName": "Mily",
    "lastName": "Lucy",
    "age": 27,
    "about": "I love Js",
    "interests": [
        "sports"
    ]
}
# 创建：文档不存在创建; 文档存在，抛出异常
rs = es.create(index='user', id=2, body=body)
print(rs)
```

### 查询

```python
"""
GET /user/_doc/1/
"""
# 查询: id为1, 全部字段
doc = es.get(index='user', id=1)  
print(doc)

"""
GET /user/_doc/1/_source/?_source=firstName,lastName,age
"""
# 查询: id为1, 特定路径，特定字段, 多个条件用逗号隔开, 官方不建议通过路径去除其他数据
doc = es.get(index='user', id=1, filter_path=['_source'], _source=['firstName', 'lastName', 'age'])  
print(doc)


"""
POST /user/_search
{

}
"""
# 搜索： 索引user, 全部字段
all_doc = es.search(index="user")

"""
POST /user/_search
{
	"_source":{
		"includes": ["firstName","lastName","age"]
	}
}
"""
# 搜索: 索引user, 特定字段
all_doc = es.search(index='user', _source=['firstName', 'lastName', 'age'])

"""
POST /user/_search
{
	"query":{
		"range": {
			"age": {
				"gt": 25
			}
		}
	}
}
"""
# 搜索: 索引user, 年龄大于25
query = {'query': {'range': {'age': {'gt': 25}}}}
all_doc = es.search(index='user', body=query)
```

### 更新

```python
"""
PUT /user/_doc/2/
{
    "firstName": "Mily",
    "lastName": "Lucy",
    "age": 27,
    "about": "I love Js",
    "interests": [
        "sports"
    ],
    "gender": "woman"
}
"""
# 索引: 文档存在，按照新的数据重新赋值; 文档不存在, 添加文档
data = {
    "firstName": "Mily",
    "lastName": "Lucy",
    "age": 27,
    "about": "I love Js",
    "interests": [
        "sports"
    ],
    "gender": "woman"
}
res = es.index(index='user', body=data, id=2)


'''
POST /employee/_update/1/
{
  "doc": {
    "gender": "man"
  }
}
'''
# 更新：文档不存在,抛出异常; 文档存在:存在字段更新, 不存在字段添加，表现为更新单个字段，实际却是：取值、更新、赋值
data = {
    'doc': {
        "gender": "man"
    }
}
res = es.update(index='user', body=data, id=1)
```

### 删除

```python
"""
DELETE /user/_doc/2/
"""

# 删除: 文档不存在,抛出异常; 文档存在，删除
res = es.delete(index='user', id=2)
```

# ElasticSearch DSL

[elasticsearch dsl](https://elasticsearch-dsl.readthedocs.io/en/latest/):Elasticsearch DSL 是一个高级库，其目的是帮助编写和运行针对 Elasticsearch 的查询。它建立在官方客户端(`elasticsearch.py`)之上，类似于`ORM`。

## 安装

```sh
pip install elasticsearch-dsl
```

## 链接

```python
from elasticsearch_dsl.connections import connections


connections.create_connection(hosts=['localhost'])
```

## 索引

```python
from datetime import datetime
from elasticsearch_dsl import Document, Date, Integer, Keyword, Text


class Article(Document):
    title = Text(analyzer='ik_max_word')  # 指定文本分词器
    body = Text(analyzer='ik_max_word')
    tags = Keyword()
    lines = Integer()

    class Index:
        name = 'blog'
        settings = {
            "number_of_shards": 2,
        }

    def save(self, **kwargs):
        self.lines = len(self.body.split())
        return super(Article, self).save(**kwargs)


# create the mappings in elasticsearch
Article.init()
```

## 数据

### 插入

```python
article = Article(meta={'id': 1}, title='Elasticsearch基础教程(二)查询', tags=['ES'])
article.body = '''请求地址参数查询
接下来我们将使用最简单的形式来演示search API。
索引、类型查询
首先，我们先通过查询公司的所有员工来演示查询API的应用。'''
article.save()
```

### 查询

```python
# instantiating the Search object
s = Article.search()

query = Q('bool', should=[Q('terms', tags=['查询']), Q("multi_match", query='查询', fields=['title', 'body'])])
# query = Q('terms', tags=['查询']) | Q("multi_match", query='查询', fields=['title', 'body'])
results = s.execute().to_dict()
print(results)
```