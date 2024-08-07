---
order: 4
article: false
title: Docker-context
category: 容器
tags:
  - Docker
  - Container
date: 2024-07-03T16:05:39.000Z
updated: 2024-07-21T11:21:36.000Z
---
在 Docker v19.03 版本之前，我们可以使用`DOCKER_HOST`​环境变量来配置和连接远程 Docker 主机，自从 Docker v19.03 版本开始，Docker 的命令行接口（CLI）增加了一个子命令 - `context`​，用于管理 docker 客户端连接多个上下文环境。  
通过 context 命令，可通过配置 SSH 协议的上下文连接并管理远程多个 Docker 主机，同时从一台安装了 Docker CLI 的机器导出上下文环境，并在另一台安装了 Docker CLI 的机器导入。

首先可以通过 `--help`​ 选项查看命令支持的子命令：

```
 docker context --help
Usage:  docker context COMMAND

Manage contexts

Commands:
  create      Create a context
  export      Export a context to a tar or kubeconfig file
  import      Import a context from a tar or zip file
  inspect     Display detailed information on one or more contexts
  ls          List contexts
  rm          Remove one or more contexts
  update      Update a context
  use         Set the current docker context

Run 'docker context COMMAND --help' for more information on a command.
```

这里将演示如何使用使用`DOCKER_HOST`​环境变量的方式，以及`context`​命令的方式来连接远程 Docker 主机。

## 提前准备

首先我们需要准备两台 Docker 主机，并安装 Docker v19.03+ 版本，例如这里

* 192.168.0.110(linux-dev) - 我的本地工作主机，Docker version 20.10.12-ce
* 192.168.0.200(home-boxsrv) - 远程 Docker 主机，Docker version 20.10.7

为避免输入 SSH 密码，请提前配置从 Docker 客户端主机免密访问远程 Docker 主机。

## DOCKER_HOST 环境方式

首先我们在远程 Docker 主机（home-boxsrv）上运行一个容器，例如名为 `dns_masq`​ 的容器

```
ubuntu@linux-boxsrv:~$ docker container ls
CONTAINER ID   IMAGE                  COMMAND                  CREATED        STATUS        PORTS                                                                                                                                                                                             NAMES
0597a189d488   jpillora/dnsmasq:1.1   "webproc --config /e…"   2 months ago   Up 31 hours   127.0.0.1:53->53/tcp, 127.0.0.1:53->53/udp, 192.168.0.200:53->53/tcp, 192.168.0.200:53->53/udp, 192.168.31.200:53->53/tcp, 192.168.31.200:53->53/udp, 0.0.0.0:8053->8080/tcp, :::8053->8080/tcp   dns_masq
```

在本地主机上（linux-dev）配置环境变量

```
mengz@linux-dev💻~
❯ export DOCKER_HOST=ssh://ubuntu@192.168.0.200
```

然后查看容器

```
mengz@linux-dev💻☸~
❯ docker container ls
CONTAINER ID   NAMES      IMAGE                  CREATED ago        STATUS        PORTS                                                                                                                                                                                             COMMAND
0597a189d488   dns_masq   jpillora/dnsmasq:1.1   2 months ago ago   Up 31 hours   127.0.0.1:53->53/tcp, 127.0.0.1:53->53/udp, 192.168.0.200:53->53/tcp, 192.168.0.200:53->53/udp, 192.168.31.200:53->53/tcp, 192.168.31.200:53->53/udp, 0.0.0.0:8053->8080/tcp, :::8053->8080/tcp   "webproc --config /e…"
```

我们可以看到，列出的是运行在远程主机上的容器。

## 使用 context 命令

首先我们在本地主机（linux-dev）上清除上面配置的环境变量

```
mengz@linux-dev💻~
❯ unset DOCKER_HOST
```

使用`context ls`​命令列出当前客户端配置的上下文环境

```
mengz@linux-dev💻~
❯ docker context ls
NAME           DESCRIPTION                               DOCKER ENDPOINT               KUBERNETES ENDPOINT                     ORCHESTRATOR
default *      Current DOCKER_HOST based configuration   unix:///var/run/docker.sock   https://k8s1.mengz.lan:6443 (default)   swarm
```

可以看到，当前有一个名为 `default`​ 的环境，连接的是本机上 Docker 引擎。
现在，我们通过 `context create`​ 命令来添加连接（home-boxsrv）的上下文环境

```
mengz@linux-dev💻~
❯ docker context create home-boxsrv --description "Docker Engine on home-boxsrv" --docker "host=ssh://ubuntu@192.168.0.200"
home-boxsrv
Successfully created context "home-boxsrv"

❯ docker context ls
NAME           DESCRIPTION                               DOCKER ENDPOINT               KUBERNETES ENDPOINT                     ORCHESTRATOR
default *      Current DOCKER_HOST based configuration   unix:///var/run/docker.sock   https://k8s1.mengz.lan:6443 (default)   swarm
home-boxsrv    Docker Engine on home-boxsrv              ssh://ubuntu@192.168.0.200
```

以成功添加了名为 `home-boxsrv`​ 的环境，但是当前激活的还是 `default`​ 环境，我们需要通过 `context use`​ 命令来设置当前环境

```
mengz@linux-dev💻~
❯ docker context use home-boxsrv
home-boxsrv
Current context is now "home-boxsrv"
```

现在我们使用 `container ls`​ 看一下

```
mengz@linux-dev💻☸~
❯ docker container ls
CONTAINER ID   NAMES      IMAGE                  CREATED ago        STATUS        PORTS                                                                                                                                                                                             COMMAND
0597a189d488   dns_masq   jpillora/dnsmasq:1.1   2 months ago ago   Up 31 hours   127.0.0.1:53->53/tcp, 127.0.0.1:53->53/udp, 192.168.0.200:53->53/tcp, 192.168.0.200:53->53/udp, 192.168.31.200:53->53/tcp, 192.168.31.200:53->53/udp, 0.0.0.0:8053->8080/tcp, :::8053->8080/tcp   "webproc --config /e…"
```

列出的是远程主机（home-boxsrv）上的容器，如果使用 `docker info`​ 命令查看，server 将是远程主机的信息。

除了 SSH 协议的端点方式，如果远程主机通过 tcp 暴露的 docker 端点，那我们也可以使用 tcp 的端点方式，例如下面的名为 `home-cappsrv`​ 的环境

```
❯ docker context ls
NAME            DESCRIPTION                               DOCKER ENDPOINT               KUBERNETES ENDPOINT                     ORCHESTRATOR
default         Current DOCKER_HOST based configuration   unix:///var/run/docker.sock   https://k8s1.mengz.lan:6443 (default)   swarm
home-boxsrv *   Docker Engine on home-boxsrv              ssh://ubuntu@192.168.0.200 
home-cappsrv    The docker engine on home-cappsrv         tcp://192.168.0.123:2375
```

## 总结

通过 `context`​ 命令，我们可以方便在一台 Docker 客户端主机上连接并切换管理多台 Docker 主机环境，大大提高了运维多主机环境的效率，同时可以方便将管理的 Docker 上下文环境导出并导入到其他 Docker 客户端使用，跟多的命令使用方法可参考 [官方文档](https://link.segmentfault.com/?enc=cWk4KYLWpfTtw8BVW8%2BwKQ%3D%3D.CAAwgg%2BFfP8ElEuHpVVtT4OXihncBhKvdIG6PmSef0gP82dSSx%2B%2FLH50jDb7CQyaRL4hKWT2S9PtxWFJqVSZpA%3D%3D)。
