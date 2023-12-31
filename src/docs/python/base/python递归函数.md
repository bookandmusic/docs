---

title: 递归函数
category: [Python]
tag: []
date: 2020-06-06 11:13:12
article: false
---

　　函数调用函数自身，这种方式称为递归，这种函数称为递归函数

　　递归函数使用过程中，需要找到`不变的规律`和停止递归的`边界条件`，因为函数自身调用自身，函数本身的结构不变，只是`每次传的参数改变`啦

> 递归实现过程(**扩展**)：利用栈的思想，先找边界条件，同时将后面的任务存起来，一直到最前面的边界条件，然后回去，每次从栈中取任务，进行计算，一直到最后一个任务取完，结果也计算完毕

## 递归过程:

- 递归前进段
- 递归边界条件
- 递归返回段

## 案例讲解

### 整数转换为字符串

　　将一个整数转换为字符串，如 345转换为"345"

```python
def trans(num):
    if num // 10 == 0:
        return '%s'%num
    else:
        return trans(num//10)+'%s'%(num%10)
```

### 树的高度

　　递归求二叉树深度

```python
def getHeight(self,root):
    if root is None:
        return 0
    else:
        return max(self.getHeight(root.left), self.getHeight(root.right)) + 1
```

### 递归实现吸烟问题

　　吸烟有危害，不仅仅危害人体健康，还会对社会产生不良的影响。吸烟还很容易引起喉头炎、气管炎，肺气肿等问题； 那么现在假设人一生抽烟10000根达到极限峰值，再抽一根烟就像压倒骆驼的最后一根稻草，会使人体爆发疾病问题； 每天一个人抽烟的个数都比前天多一根（第一天抽一根），且一周只有工作日（周一~周五）会吸烟； 请使用递归的方式求出一个人按照以上方式抽烟达到10000根，爆发疾病需要历经多少天

```python
def smoker(day, count, amount):
    """
    递归解决吸烟问题
    :param day: 当前的天数
    :param count: 当天的吸烟数量
    :param amount: 总计的吸烟数量
    :return: 吸到10000根烟的天数
    """
    if amount >= 10000:
        # 如果吸烟总数大于10000， 返回天数
        return day

    else:
        day += 1 # 每吸一次烟，天数加1
        if day % 7 != 6 and day % 7 != 0:
            # 只有周六，周日不吸烟，判断不是周六，也不是周日
            count += 1 # 当天吸烟的数量
            amount += count # 目前为止，吸烟的总数量

        return smoker(day, count, amount)


print(smoker(1, 1, 1)) # 第1天，吸了1根烟，总共吸了1根烟
```

### 青蛙跳台阶问题

　　一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 `n` 级的台阶总共有多少种跳法。

　　答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

```python
# 这个问题，本质是一个斐波那契数列数列求第n项值的问题，如果用递归求，将会超出时间限制
# 因此，直接用循环求即可
class Solution:
    def numWays(self, n: int) -> int:
        a = 1
        b = 1
        for i in range(n):
            a, b = b, a+b
        return a % 1000000007
```

### 汉诺塔问题

　　在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:
(1) 每次只能移动一个盘子;
(2) 盘子只能从柱子顶端滑出移到下一根柱子;
(3) 盘子只能叠在比它大的盘子上。

　　请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。

```python
class Solution:
    def hanota(self, A: List[int], B: List[int], C: List[int]) -> None:
        n = len(A)
        self.move(n, A, B, C)
    # 定义move 函数移动汉诺塔
    def move(self,n, A, B, C):
        if n == 1:
            C.append(A[-1])
            A.pop()
            return 
        else:
            self.move(n-1, A, C, B)  # 将A上面n-1个通过C移到B
            C.append(A[-1])          # 将A最后一个移到C
            A.pop()                  # 这时，A空了
            self.move(n-1,B, A, C)   # 将B上面n-1个通过空的A移到C
```
