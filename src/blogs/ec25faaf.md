---
title: podman 配置国内镜像
category: 工具软件
tags:
  - Podman
  - 镜像
  - Container
date: 2024-07-03T08:06:10.000Z
updated: 2024-07-09T08:42:18.000Z
---
podman 全局配置文件：`/etc/containers/registries.conf`​

用户单独配置文件：`~/.config/containers/registries.conf`​

v2 配置格式如下

```ini
# 例：使用 podman pull registry.access.redhat.com/ubi8-minimal 时，
# 仅仅会从registry.access.redhat.com去获取镜像。
# 如果直接使用 podman pull ubuntu 时，没有明确指明仓库的时候，使用以下配置的仓库顺序去获取
unqualified-search-registries = ["docker.io", "registry.access.redhat.com"]
 
# 配置仓库的地址，可以直接在location里配置国内镜像例如：docker.mirrors.ustc.edu.cn
# 直接在location里配置的时候，可以不需要后面的 [[registry.mirror]] 内容，
# 但是这样只能配置一个镜像地址，这个镜像挂了就没法尝试其它镜像。
# prefix的值与unqualified-search-registries里配置的得一样，但是可以支持通配符。
# prefix不写的情况下，默认与location的指一样。
[[registry]]
prefix = "docker.io"
location = "docker.io"
 
# 在这里可以配置多个镜像地址，前提是至少有一个[[registry]]配置。
# 需要注意的是，无论 unqualified-search-registries 选择了哪个仓库，
# 都会先从这里的上下顺序开始去拉取镜像，最后才会去匹配上[[registry]]里prefix对应的location位置拉取镜像。
# 所以这里需要注意，上面配置的不同仓库类型，这里配置的镜像并不能是通用的，所以 unqualified-search-registries 配置了多个仓库的时候，就最好直接使用[[registry]] 的 location 指定镜像地址，不要配置 [[registry.mirror]] 了。
# redhat 的国内镜像暂未发现。
[[registry.mirror]]
location = "docker.nju.edu.cn"
[[registry.mirror]]
location = "docker.mirrors.sjtug.sjtu.edu.cn"
 
# 当使用 podman pod create 命令时候，因需要从k8s.gcr.io拉取 pause 镜像，但是该站点在国内被墙了。
# 所以给该站点搞个镜像。以下镜像是阿里云第三方用户，非官方。
# 或者 registry.aliyuncs.com/googlecontainersmirror ，也是第三方用户。
# 目前没找到国内官方的镜像。gcr.mirrors.ustc.edu.cn 返回403不能用了
[[registry]]
prefix = "k8s.gcr.io"
location = "registry.aliyuncs.com/google_containers"
```

‍
