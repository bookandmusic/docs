---
title: FlaskRestful
date: 2023-08-03T21:10:10Z
lastmod: 2023-08-03T21:10:10Z
article: false
order: 2
---

# FlaskRestful

> `Flask-RESTful`是flask的扩展，为快速构建 REST API 增加了支持。

## 环境配置

```bash
pip install flask-restful
```

## 使用流程

### 主`APP`

1. 导入`Api`与`Resource`, `api`用于创建`api`对象, `Resource`用于类视图的形式实现
2. 创建`api`对象
3. 自定义视图类, 必须继承`Resource`
4. 视图类中定义请求方法
5. 使用`api`对象添加路由

```python
from flask import Flask
# 1.导入Api, Resource
from flask_restful import Api, Resource

app = Flask(__name__)
# 2.创建api对象
api = Api(app)


# 3.自定义类视图, 必须继承于Resource
class BookResource(Resource):
    # 4.在视图类中定义请求方法
    def get(self):
        # 返回响应
        return ['图书1', '图书2']


# 5.使用api对象的add_resource()添加路由
# IndexResource是视图
# '/'是路由
# endpoint是路由别名
api.add_resource(BookResource, '/', endpoint='book_list')

# 程序入口
if __name__ == '__main__':
    app.run(debug=True)
```

### 蓝图

> **`Flask-RESTful`**配合蓝图:

- 创建蓝图文件, 编写蓝图代码:
  - 创建蓝图对象
  - 创建蓝图api接口对象
  - 编写蓝图的视图类
  - 给蓝图视图添加路由
- 创建主程序, 编写主程序代码:
  - 导入蓝图对象, 用于后续的注册
  - 创建Flask实例对象
  - 注册蓝图
  - 程序入口

> **注:** 简单实用, 将蓝图集中化与apps目录下统一管理

```python
.
├── app.py
└── book
    ├── __init__.py
    └── views.py
```

#### 视图类

　　`book/views.py`

```python
from flask import jsonify
from flask_restful import Resource


# 3. 编写蓝图的视图类
class BookResource(Resource):
    def get(self):
        return jsonify(['图书1', '图书2'])
```

#### 蓝图对象

　　`book/__init__.py`

```python
from flask import blueprints
from flask_restful import Api
from .views import *

# 1. 创建蓝图对象
book = blueprints.Blueprint('book', __name__, url_prefix='')
# 2. 创建蓝图api接口对象
api = Api(book)

# 4. 给蓝图视图添加路由
api.add_resource(BookResource, '/')
```

#### 主APP

```python
from flask import Flask

from book import book

app = Flask(__name__)
app.config['DEBUG'] = True
app.register_blueprint(book)

# 程序入口
if __name__ == '__main__':
    app.run(debug=True)
```
