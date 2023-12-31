---

title: 装饰器
category: [Python]
tag: []
date: 2020-06-06 11:14:42
article: false
---

## 函数

### 返回函数

> `python`的常识，函数和其他任何东西一样，都是对象。这意味着可以将`函数`当做`实参`传递给函数，或者在函数中将`函数`作为`返回值`返回。

```python
def lazy_sum(*args):
    def sum():
        ax = 0
        for n in args:
            ax = ax + n
        return ax
    return sum
f = lazy_sum(1, 3, 5, 7, 9)
f()
```

### 闭包

　　闭包是“返回函数”的一个典型应用

　　闭包的定义：

> - 在一个外函数(`outer`)中定义了一个内函数(`inner`)
> - 内函数里运用了外函数的临时变量
> - 并且外函数的返回值是内函数的引用

　　闭包的使用，可以隐藏内部函数的工作细节，只给外部使用者提供一个可以执行的内部函数的引用。

```python
#闭包函数的实例
  # outer是外部函数 a和b都是外函数的临时变量
  def outer( a ):
    b = 10
    def inner():  # inner是内函数
        print(a+b)  #在内函数中 用到了外函数的临时变量
    return inner  # 外函数的返回值是内函数的引用

  # 在这里我们调用外函数传入参数5
  #此时外函数两个临时变量 a是5 b是10 ，并创建了内函数，然后把内函数的引用返回存给了demo
  # 外函数结束的时候发现内部函数将会用到自己的临时变量，这两个临时变量就不会释放，会绑定给这个内部函数
  demo = outer(5)

  # 我们调用内部函数，看一看内部函数是不是能使用外部函数的临时变量
  # demo存了外函数的返回值，也就是inner函数的引用，这里相当于执行inner函数
  demo() # 15
```

> `inner`函数修改`outer`函数变量

```python
def createCounter():
  i = 0
  def counter():
     nonlocal i # 指定外部函数的局部变量
     i = i + 1
     return i
  return counter

counterA = createCounter()
print(counterA(), counterA(), counterA(), counterA(), counterA()) # 1 2 3 4 5
counterB = createCounter()
if [counterB(), counterB(), counterB(), counterB()] == [1, 2, 3, 4]:
   print('测试通过!')
else:
   print('测试失败!')
```

## 装饰器介绍

　　要了解python中`@`装饰器的作用，首先要记住这么几点：

> 装饰器符号`@`属于语法糖

　　什么意思呢？

- 就是说，我不按照`@`装饰器的语法要求来写，而是按照一般`python`的语法要求来写完全可以。
- 那么用`@`装饰器的格式来写的目的就是为了书写简单方便

　　**注意：装饰器是用于拓展已有函数功能的一种函数，这个函数的特殊之处在于它的返回值也是一个函数，实际上就是利用闭包语法实现的。**

## 装饰器语法

　　装饰器的作用是什么呢？ 简单的理解就是：装饰原有的函数。什么意思呢？

　　比如有一个函数`func(a, b)`，它的功能是求`a`,`b`的差值

　　现在有一个新需求，就是想对函数功能再装饰下，求完差值后再取绝对值，但是不能能修改原有函数，这时候就需要装饰器装饰函数

```python
"""
函数闭包实现求差值之后，再求绝对值
"""
def func(a, b):
    return a- b

def abs_num(func):
    def inner(a, b):
        ret = func(a, b)
        return abs(ret)
    return inner

@abs_num
func(2, 3)
```

- 当`abs_num`装饰函数`func`时，类似于将函数`func`作为参数传给`abs_num`,并将返回值即内层函数(`inner`)名重新赋值给变量`func`
- 当调用函数`func`时，实质是调用内层函数`inner`，在内层函数中执行`func`函数，即最原始的函数`func`

## 装饰器分类

### 被装饰函数有参数

```python
def outer(func):
    def inner(x, y):
        func(x, y)  # 新版的 func  才是 原来的 add

    return inner


@outer
def add(x, y):
    print(x + y)


add(1, 2)  # 新版的 add  是 内层 inner

# add(1, 2)   ====>  inner(1, 2)  ====>  func(1, 2)  ===> 3
```

> 被装饰函数 有参数，`inner`和 `func ​`需要同样的参数

### 被装饰的函数有不定长参数

```python
def set_func(func):
    def call_func(*args, **kwargs):
        
        # func(args, kwargs),此时得到的是元组和字典
        # func(*args, **kwargs),此时则是把元素拆包为单个数值和键值对
        return func(*args, **kwargs)

    return call_func

@set_func
def s(a, b, *args, **kwargs):

    print(a, b, args, kwargs)


s(12, 50, 34, c=20, d=56)
```

- 形参
  - `*args`：接收多余的参数，得到元组(args)
  - `**kwargs`:接收多余的关键字参数，得到字典(kwargs)
- 实参
  - `*args`：对元组(args)进行拆包，得到单个数值
  - `**kwargs`：对字典(kwargs)拆包，得到单个的键值对

### 被装饰函数有返回值

```python
def outer(func):
    def inner(x, y):

        r = func(x, y)  # 装饰器装饰之后， func才是真正的add求和函数
        
        r += 10  # 将两数之和再加 10
        
        return r

    return inner


@outer
def add(x, y):
    return x + y


# 在装饰器中 对函数的执行结果 加10 处理
r = add(10, 200)  # add实际是inner
print(r)
```

> 被装饰函数有返回值， `inner`需要将 `func` 的结果 返回

### 多个装饰器装饰函数

- 多个装饰器装饰同一个函数，装饰顺序和执行顺序正好相反
- 装饰器函数的执行顺序和装饰器的顺序有关

```python
def set_func1(func):
    print("这是测试1...")

    def call_func1():
        print("这是装饰器1...")
        return func()

    return call_func1


def set_func2(func):
    print("这是测试2...")

    def call_func2():
        print("这是装饰器2...")
        return func()

    return call_func2


@set_func1
@set_func2
def s():
    print("hello...")


s()

```

- 代码从上到下，依次执行，同时装饰器是用来装饰函数的

  - 执行到装饰器set_func1时，无法装饰，先跳过
  - 执行装饰器set_func2时，装饰原始函数s，

    - 先执行set_func2,输出"这是测试2..."，
    - 然后得到s = call_func2(s)，此时的s是原始函数s
  - 然后装饰器set_func1装饰新得到的函数s = call_func2(s)

    - 先执行set_func1,输出"这是测试1..."
    - 然后得到s = call_func1(s)，此时的s是新得到的函数s = call_func2(s)
  - 最后得到函数s = call_func1(call_func(s))
  - 最后执行函数s

    - 先执行call_func1,输出"这是装饰器1..."
    - 再执行call_func2,输出"这是装饰器2..."
    - 最后执行原始函数s，输出"hello..."

### 装饰器带参

```python
def set_pars(pars):
    def set_func(func):
        def call_func():
            print("這是測試級別%d" % pars)
            return func()
        return call_func
    return set_func

@set_pars(10) # 装饰分两步
def s():
    print("hello...")

s()

```

- 装饰器带参时，装饰函数过程分两步：
  - 将参数传给函数set_pars，进行执行
  - 将函数返回结果作为函数s的装饰器进行装饰

### 类作为装饰器

```python
class Test(object):

    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):  
        '''
        魔法方法__call__可以将对象设置为可调用对象（callable）,允许一个类的实例像函数一样被调用 
        '''
        print("这是类装饰器...")
        return self.func(*args, **kwargs)

@Test  # s = Test(s)
def s(*args, **kwargs):
    print("hello python...")

s()

```

- 自定义的函数、内置函数和类都属于可调用对象，但凡是可以把一对括号()应用到某个对象身上都可称之为可调用对象
- 判断对象是否为可调用对象可以用函数 callable
- 如果在类中实现了 `__call__` 方法，那么实例对象也将成为一个可调用对象

### 装饰类的装饰器

#### 装饰类方法

```python
def godme(fun):
    def __godme(self,message):
        print('before')
        fun(self,message)
        print('after')
    return __godme
 
class Person:
    def show(self,message):
        print(message)
    @godme
    def say(self,message):
        print(message)
 
person = Person()
person.say('happy')
```

　　此时装饰器和一般的函数装饰器类似，只是多了一个参数：`self`， 并且`self`可以调用实例对象的属性和方法

#### 装饰类

```python
def singleton(cls, *args, **kwargs):
    def get_instance(*args, **kwargs):
        if not hasattr(cls, '__instance'):
            setattr(cls, '__instance', cls(*args, **kwargs))
        return getattr(cls, '__instance')

    return get_instance


@singleton
class A(object):
    def __init__(self, a):
        self.a = a
```

　　其实此时和普通的装饰函数的用法类似，就是将cls作为参数，传递给装饰器即可。
