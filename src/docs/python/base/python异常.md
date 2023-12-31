---
title: python异常
category: [Python]
tag: []
abbrlink: 82cab4cd
date: 2019-03-22 22:38:25
article: false
---



## 什么是异常？

异常即是一个事件，该事件会在程序执行过程中发生，影响了程序的正常执行。

一般情况下，在Python无法正常处理程序时就会发生一个异常。

异常是Python对象，表示一个错误。

当Python脚本发生异常时我们需要捕获处理它，否则程序会终止执行。

## python标准异常

| 异常名称                  | 描述                                               |
| :------------------------ | :------------------------------------------------- |
| BaseException             | 所有异常的基类                                     |
| SystemExit                | 解释器请求退出                                     |
| KeyboardInterrupt         | 用户中断执行(通常是输入^C)                         |
| Exception                 | 常规错误的基类                                     |
| StopIteration             | 迭代器没有更多的值                                 |
| GeneratorExit             | 生成器(generator)发生异常来通知退出                |
| StandardError             | 所有的内建标准异常的基类                           |
| ArithmeticError           | 所有数值计算错误的基类                             |
| FloatingPointError        | 浮点计算错误                                       |
| OverflowError             | 数值运算超出最大限制                               |
| ZeroDivisionError         | 除(或取模)零 (所有数据类型)                        |
| AssertionError            | 断言语句失败                                       |
| AttributeError            | 对象没有这个属性                                   |
| EOFError                  | 没有内建输入,到达EOF 标记                          |
| EnvironmentError          | 操作系统错误的基类                                 |
| IOError                   | 输入/输出操作失败                                  |
| OSError                   | 操作系统错误                                       |
| WindowsError              | 系统调用失败                                       |
| ImportError               | 导入模块/对象失败                                  |
| LookupError               | 无效数据查询的基类                                 |
| IndexError                | 序列中没有此索引(index)                            |
| KeyError                  | 映射中没有这个键                                   |
| MemoryError               | 内存溢出错误(对于Python 解释器不是致命的)          |
| NameError                 | 未声明/初始化对象 (没有属性)                       |
| UnboundLocalError         | 访问未初始化的本地变量                             |
| ReferenceError            | 弱引用(Weak reference)试图访问已经垃圾回收了的对象 |
| RuntimeError              | 一般的运行时错误                                   |
| NotImplementedError       | 尚未实现的方法                                     |
| SyntaxError               | Python 语法错误                                    |
| IndentationError          | 缩进错误                                           |
| TabError                  | Tab 和空格混用                                     |
| SystemError               | 一般的解释器系统错误                               |
| TypeError                 | 对类型无效的操作                                   |
| ValueError                | 传入无效的参数                                     |
| UnicodeError              | Unicode 相关的错误                                 |
| UnicodeDecodeError        | Unicode 解码时的错误                               |
| UnicodeEncodeError        | Unicode 编码时错误                                 |
| UnicodeTranslateError     | Unicode 转换时错误                                 |
| Warning                   | 警告的基类                                         |
| DeprecationWarning        | 关于被弃用的特征的警告                             |
| FutureWarning             | 关于构造将来语义会有改变的警告                     |
| OverflowWarning           | 旧的关于自动提升为长整型(long)的警告               |
| PendingDeprecationWarning | 关于特性将会被废弃的警告                           |
| RuntimeWarning            | 可疑的运行时行为(runtime behavior)的警告           |
| SyntaxWarning             | 可疑的语法的警告                                   |
| UserWarning               | 用户代码生成的警告                                 |

## 异常处理

### try/except语句

try/except语句用来检测try语句块中的错误，从而让except语句捕获异常信息并处理。

如果你不想在异常发生时结束你的程序，只需在try里捕获它。

语法：

以下为简单的*`try....except...else`*的语法：

```python
try:
	<语句>        #运行别的代码
except <异常类型>：
	<语句>        #如果在try部份引发了异常
else:
	<语句>        #如果没有异常发生
```

try的工作原理是，当开始一个try语句后，python就在当前程序的上下文中作标记，这样当异常出现时就可以回到这里，try子句先执行，接下来会发生什么依赖于执行时是否出现异常。

-   如果当try后的语句执行时发生异常，python就跳回到try并执行第一个匹配该异常的except子句，异常处理完毕，控制流就通过整个try语句（除非在处理异常时又引发新的异常）。
-   如果在try后的语句里发生了异常，却没有匹配的except子句，异常将被递交到上层的try，或者到程序的最上层（这样将结束程序，并打印默认的出错信息）。
-   如果在try子句执行时没有发生异常，python将执行else语句后的语句（如果有else的话），然后控制流通过整个try语句。

#### 使用except而不带任何异常类型

你可以不带任何异常类型使用except，如下实例：

```python
try:
    a = int('a.0') / 1
except:
    print("error")
else:
    print(a)
```

以上方式try-except语句捕获所有发生的异常。但这不是一个很好的方式，我们不能通过该程序识别出具体的异常信息。因为它捕获所有的异常。

#### 使用except而带多种异常类型

你也可以使用相同的except语句来处理多个异常信息，如下所示：

```python
try:
    int('a.0') / 1
except (SyntaxError, ValueError) as e:
    print(e)
```

当然，也可以分开捕获多种异常：

```python
try:
    int('a.0') / 1
except SyntaxError as e:
    print(f'1: {e}')
except ValueError as e:
    print(f'2: {e}')
```

#### 异常的参数

一个异常可以带上参数，可作为输出的异常信息参数。

你可以通过except语句来捕获异常的参数，如下所示：

```python
try:
    a = int('a.0') / 1
except ValueError as val: # 参数val中存储具体的异常信息
    print(val)  
else:
    print(a)
```

变量接收的异常值通常包含在异常的语句中。在元组的表单中变量可以接收一个或者多个值。

元组通常包含错误字符串，错误数字，错误位置。

### try-finally 语句

try-finally 语句无论是否发生异常都将执行最后的代码。

```python
try:
	<语句>
except <异常类型>：
	<语句>        # 发生异常时执行的代码
else:
	<语句>        # 没有发生异常时执行的代码
finally:
	<语句>    # 不管有没有异常都会执行的代码
```

## 抛出异常

Python 使用 raise 语句抛出一个指定的异常。

raise语法格式如下：

```python
raise [Exception [, args [, traceback]]]
```
以下实例如果 x 大于 5 就触发异常:

```python
x = 10
if x > 5:
    raise Exception('x 不能大于 5。x 的值为: {}'.format(x))
```

## 用户自定义异常

你可以通过创建一个新的异常类来拥有自己的异常。异常类继承自 Exception 类，可以直接继承，或者间接继承，例如:

```python
# 自定义错误类型
class ArgsError(Exception):
    def __init__(self, num, num_type):
        self.num = num  # 用来描述参数个数
        self.num_type = num_type  # 用户描述参数类型


num1 = input("输入数字:")
num2 = input("输入数字:")

try:
    if num1.isdigit() is False or num2.isdigit() is False:
             # 错误类型的实例对象
        raise ArgsError(2, "int")  # raise 异常类型  -> 主动抛出异常
except ArgsError as ret:
    print("需要%d个%s参数" % (ret.num, ret.num_type))

```

大多数的异常的名字都以"Error"结尾，就跟标准的异常命名一样。