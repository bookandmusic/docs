---
title: map
date: 2023-06-17T19:52:09Z
lastmod: 2023-08-16T09:44:54Z
article: false
order: 8
category: [Go]
tag: []
---

# map

map是一种无序的基于key-value的数据结构，Go语言中的map是引用类型，必须初始化才能使用。

## map的定义

Go语言中map的定义语法如下：

```go
map[KeyType]ValueType
```

其中：

* KeyType：表示键的类型
* ValueType：表示键对应的值的类型

可以使用`make()`​函数来初始化一个字典，或者使用字面量初始化一个字典。

以下是定义、初始化和使用字典的示例：

```go
// 使用 make 函数创建一个空的 Map，键的类型为 string，值的类型为 int
var scoreMap map[string]int
scoreMap = make(map[string]int)

// 创建一个同时包含多个键值对的 Map
userInfo := map[string]string{
    "name": "John",
    "age": "20",
    "gender": "male",
}
```

## 字典操作

```go
// 获取 Map 中某个键的值
age := userInfo["age"]

// 向 Map 中添加键值对
userInfo["email"] = "john@example.com"

// 修改 Map 中某个键的值
userInfo["age"] = "21"

// 判断 Map 中是否包含某个键
if _, ok := userInfo["email"]; ok {
    fmt.Println("存在键 email，值为", userInfo["email"])
} else {
    fmt.Println("不存在键 email")
}

// 遍历 Map 中所有的键值对
for k, v := range userInfo {
    fmt.Println(k, v)
}

// 遍历 Map 中所有的键
for k := range userInfo {
    fmt.Println(k)
}

// 遍历 Map 中所有的值
for _, v := range userInfo {
    fmt.Println(v)
}
```

## 内置函数

* ​`len(map)`​ 函数返回字典中键值对的数量
* ​`delete(key)`​ 函数用于从字典中删除一个键值对

以下是一些使用字典函数的示例：

```go
ages := map[string]int{
    "Alice": 25,
    "Bob": 30,
    "Charlie": 35,
}
fmt.Println(len(ages))    // 输出：3


delete(ages, "Bob")    // 删除键为 "Bob" 的键值对
fmt.Println(ages)    // 输出：map[Alice:25 Charlie:35]

```

> [!TIP|style:flat]
>
> * 在使用 Map 时，需要注意遍历的顺序是无序的，因为 Map 中的键是无序的。
> * 在访问 Map 中不存在的键时，会返回该键对应值类型的零值，不会报错。

## 切片相关

### 元素为map类型的切片

我们想要在切片里面存放一系列用户的信息，这时候我们就可以定义一个元素为map类型的切片

```go
// 切片在中存放map
var userInfoList = make([]map[string]string, 3, 3)
var user = map[string]string{
    "userName": "张安",
    "age": "15",
}
var user2 = map[string]string{
    "userName": "张2",
    "age": "15",
}
var user3 = map[string]string{
    "userName": "张3",
    "age": "15",
}
userInfoList[0] = user
userInfoList[1] = user2
userInfoList[2] = user3
fmt.Println(userInfoList)

for _, item := range userInfoList {
    fmt.Println(item)
}
```

### 值为切片类型的map

我们可以在map中存储切片

```go
// 将map类型的值
var userinfo = make(map[string][]string)
userinfo["hobby"] = []string {"吃饭", "睡觉", "敲代码"}
fmt.Println(userinfo)
```

## 示例

统计字符串中单词出现的次数

```go
// 写一个程序，统计一个字符串中每个单词出现的次数。比如 "how do you do"
var str = "how do you do"
array := strings.Split(str, " ")
fmt.Println(array)
countMap := make(map[string]int)
for _, item := range array {
    countMap[item]++
}
fmt.Println(countMap)
```
