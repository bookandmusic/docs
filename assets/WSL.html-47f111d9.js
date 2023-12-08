import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as t,a as s,b as n,e,d as i}from"./app-b2b64365.js";const p={},o=i('<h1 id="wsl介绍及安装" tabindex="-1"><a class="header-anchor" href="#wsl介绍及安装" aria-hidden="true">#</a> WSL介绍及安装</h1><h2 id="wsl简介" tabindex="-1"><a class="header-anchor" href="#wsl简介" aria-hidden="true">#</a> WSL简介</h2><p><strong>WSL</strong>，全称<strong>Windows Subsystem for Linux</strong>，中文名为 <strong>适用于 Linux 的 Windows 子系统</strong>，WSL可让开发人员按原样运行 GNU/Linux 环境 - 包括大多数命令行工具、实用工具和应用程序 - 且不会产生传统虚拟机或双启动设置开销。</p><p>在WSL中可以做以下工作：</p><ul><li>在 Microsoft Store 中选择你偏好的 GNU/Linux 分发版。</li><li>运行常用的命令行软件工具（例如 grep、sed、awk）或其他 ELF-64 二进制文件。</li><li>运行 Bash shell 脚本和 GNU/Linux 命令行应用程序，包括：</li><li>工具：vim、emacs、tmux 等。</li><li>语言：NodeJS、Javascript、Python、Ruby、C/ C++、C# 与 F#、Rust、Go 等。</li><li>服务：SSHD、MySQL、Apache、lighttpd、MongoDB、PostgreSQL。</li><li>使用自己的 GNU/Linux 分发包管理器安装其他软件。</li><li>使用类似于 Unix 的命令行 shell 调用 Windows 应用程序。</li><li>在 Windows 上调用 GNU/Linux 应用程序。</li></ul><h2 id="wsl2简介" tabindex="-1"><a class="header-anchor" href="#wsl2简介" aria-hidden="true">#</a> WSL2简介</h2><p>WSL 2 是适用于 Linux 的 Windows 子系统体系结构的一个新版本，它支持适用于 Linux 的 Windows 子系统在 Windows 上运行 ELF64 Linux 二进制文件。 它的主要目标是<strong>提高文件系统性能</strong>，以及添加<strong>完全的系统调用兼容性</strong>。</p><p>这一新的体系结构改变了这些 Linux 二进制文件与Windows 和计算机硬件进行交互的方式，但仍然提供与 WSL 1（当前广泛可用的版本）中相同的用户体验。</p><p>单个 Linux 分发版可以在 WSL 1 或 WSL 2 体系结构中运行。 每个分发版可随时升级或降级，并且你可以并行运行 WSL 1 和 WSL 2 分发版。 WSL 2 使用全新的体系结构，该体系结构受益于运行真正的 Linux 内核。</p><h2 id="安装wsl2" tabindex="-1"><a class="header-anchor" href="#安装wsl2" aria-hidden="true">#</a> 安装WSL2</h2>',10),c={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"},u={href:"https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>WSL2 仅在 Windows 10 18917 或更高版本中可用，如果版本太低，可以加入 Windows Insider 升级 Windows ，我们可以在 cmd 中使用 ver 来检查当前 win的版本。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\Users\\xxx&gt;ver

Microsoft Windows [版本 10.0.22621.1105]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用命令 <code>winver</code> 查看</p><h3 id="启用适用于-linux-的-windows-子系统" tabindex="-1"><a class="header-anchor" href="#启用适用于-linux-的-windows-子系统" aria-hidden="true">#</a> 启用适用于 Linux 的 Windows 子系统</h3><p>在 powerShell 中以管理员身份运行下面命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启用虚拟机功能" tabindex="-1"><a class="header-anchor" href="#启用虚拟机功能" aria-hidden="true">#</a> 启用虚拟机功能</h3><p>在 powerShell 中以管理员身份运行下面命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行完成之后，请重启电脑完成安装。</p><h3 id="安装linux内核更新包" tabindex="-1"><a class="header-anchor" href="#安装linux内核更新包" aria-hidden="true">#</a> 安装Linux内核更新包</h3>`,11),b={href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"},m=i(`<h3 id="设置-wsl-发行版" tabindex="-1"><a class="header-anchor" href="#设置-wsl-发行版" aria-hidden="true">#</a> 设置 WSL 发行版</h3><p>如果想要将默认的WSL发行版设置成 WSL2，在 powerShell 中使用下面命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl --set-default-version <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想要设置某一个发行版为WSL2，在 powerShell 中使用下面命令，将 换成你想要设置的发行版即可，例如 Ubuntu-18.04</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl --set-version <span class="token operator">&lt;</span>Distro<span class="token operator">&gt;</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证使用的WSL版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),h={href:"https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-install",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="wsl命令行工具" tabindex="-1"><a class="header-anchor" href="#wsl命令行工具" aria-hidden="true">#</a> WSL命令行工具</h2><p>WSL所有支持的命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>WINDOWS<span class="token punctuation">\\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>wsl <span class="token parameter variable">--help</span>
版权所有 <span class="token punctuation">(</span>c<span class="token punctuation">)</span> Microsoft Corporation。保留所有权利。

用法: wsl.exe <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>选项<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>命令行<span class="token punctuation">]</span>

用于运行 Linux 二进制文件的参数:

    如果未提供命令行，wsl.exe 将启动默认的 shell。

    --exec, <span class="token parameter variable">-e</span> <span class="token operator">&lt;</span>命令行<span class="token operator">&gt;</span>
        执行指定的命令而不使用默认的 Linux shell。

    --
        按原样传递剩余的命令行。

选项:
    --distribution, <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>分发版<span class="token operator">&gt;</span>
        运行指定的分发。

    --user, <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span>
        以指定用户身份运行。

用于管理适用于 Linux 的 Windows 子系统的参数:

    <span class="token parameter variable">--export</span> <span class="token operator">&lt;</span>分发版<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span>
        将分发导出到 <span class="token function">tar</span> 文件。
        对于标准输出，文件名可以是 -。

    <span class="token parameter variable">--import</span> <span class="token operator">&lt;</span>分发版<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>安装位置<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>
        将指定的 <span class="token function">tar</span> 文件作为新分发进行导入。
        对于标准输入，文件名可以是 -。

        选项:
            <span class="token parameter variable">--version</span> <span class="token operator">&lt;</span>版本<span class="token operator">&gt;</span>
                指定用于新分发的版本。

    --list, <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>
        列出分发。

        选项:
            <span class="token parameter variable">--all</span>
                列出所有分发，包括当前正在
                安装或卸载的分发。

            <span class="token parameter variable">--running</span>
                只列出当前正在运行的分发。

            --quiet, <span class="token parameter variable">-q</span>
                只显示分发名称。

            --verbose, <span class="token parameter variable">-v</span>
                显示有关所有分发的详细信息。

    --set-default, <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>分发版<span class="token operator">&gt;</span>
        将分发设置为默认值。

    --set-default-version <span class="token operator">&lt;</span>版本<span class="token operator">&gt;</span>
        更改新分发的默认安装版本。

    --set-version <span class="token operator">&lt;</span>分发版<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>版本<span class="token operator">&gt;</span>
        更改指定分发的版本。

    <span class="token parameter variable">--shutdown</span>
        立即终止所有正在运行的分发和 WSL <span class="token number">2</span> 轻型工具虚拟机。

    --terminate, <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>分发版<span class="token operator">&gt;</span>
        终止指定的分发。

    <span class="token parameter variable">--unregister</span> <span class="token operator">&lt;</span>分发版<span class="token operator">&gt;</span>
        注销分发。

    <span class="token parameter variable">--help</span>
        显示用法信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>wslconfig所有支持的命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>WINDOWS<span class="token punctuation">\\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>wslconfig
在适用于 Linux 的 Windows 子系统上执行管理操作

用法:
    /l, /list <span class="token punctuation">[</span>Option<span class="token punctuation">]</span>
        列出已注册的分发。
        /all - 可选择列出所有分发，包括当前正在
               安装或卸载的分发。

        /running - 只列出当前正在运行的分发。

    /s, /setdefault <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span>
        将分发设置为默认值。

    /t, /terminate <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span>
        终止分发。

    /u, /unregister <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span>
        注销分发。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看wsl列表" tabindex="-1"><a class="header-anchor" href="#查看wsl列表" aria-hidden="true">#</a> 查看WSL列表</h3><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出已注册分发</span>
wsl -l, <span class="token parameter variable">--list</span>
wslconfig /l, /list

<span class="token comment"># 列出所有分发，包括当前正在安装或卸载的分发</span>
wslconfig /l /all
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">--all</span>

<span class="token comment"># 仅列出当前正在运行的分发</span>
wslconfig /l /running
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">--running</span>

<span class="token comment"># 查看列表及其WSL版本</span>
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例1：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>xxx<span class="token operator">&gt;</span>wslconfig /l
适用于 Linux 的 Windows 子系统分发版:
CentOS7 <span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
docker-desktop-data
docker-desktop
Ubuntu22.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>xxx<span class="token operator">&gt;</span>wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
  NAME                   STATE           VERSION
* CentOS7                Stopped         <span class="token number">1</span>
  docker-desktop-data    Stopped         <span class="token number">2</span>
  docker-desktop         Stopped         <span class="token number">2</span>
  Ubuntu22.04            Running         <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进入指定的wsl" tabindex="-1"><a class="header-anchor" href="#进入指定的wsl" aria-hidden="true">#</a> 进入指定的WSL</h3><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl, <span class="token function">bash</span> <span class="token comment"># 进入默认WSL环境</span>
wsl --distribution, <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span> <span class="token comment"># 运行指定的分发</span>
wsl --user, <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>UserName<span class="token operator">&gt;</span> <span class="token comment"># 以指定用户身份运行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl
<span class="token function">bash</span>
wsl <span class="token parameter variable">-d</span> Ubuntu22.04
wsl <span class="token parameter variable">-d</span> Ubuntu22.04 <span class="token parameter variable">-u</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入WSL后，使用 <code>exit</code> 命令退出WSL。</p><h3 id="查看可在线安装的wsl" tabindex="-1"><a class="header-anchor" href="#查看可在线安装的wsl" aria-hidden="true">#</a> 查看可在线安装的wsl</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>❯ wsl <span class="token parameter variable">--list</span> <span class="token parameter variable">--online</span>
以下是可安装的有效分发的列表。
使用‘wsl.exe <span class="token parameter variable">--install</span> <span class="token operator">&lt;</span>Distro<span class="token operator">&gt;</span>&#39;安装。

NAME               FRIENDLY NAME
Ubuntu             Ubuntu
Debian             Debian GNU/Linux
kali-linux         Kali Linux Rolling
SLES-12            SUSE Linux Enterprise Server v12
SLES-15            SUSE Linux Enterprise Server v15
Ubuntu-18.04       Ubuntu <span class="token number">18.04</span> LTS
Ubuntu-20.04       Ubuntu <span class="token number">20.04</span> LTS
OracleLinux_8_5    Oracle Linux <span class="token number">8.5</span>
OracleLinux_7_9    Oracle Linux <span class="token number">7.9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载指定的wsl" tabindex="-1"><a class="header-anchor" href="#卸载指定的wsl" aria-hidden="true">#</a> 卸载指定的WSL</h3><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 注销分发</span>
wslconfig  /u, /unregister <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span>
wsl <span class="token parameter variable">--unregister</span> <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wslconfig /u Ubuntu22.04
wsl <span class="token parameter variable">--unregister</span> Ubuntu22.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将分发设置为默认值" tabindex="-1"><a class="header-anchor" href="#将分发设置为默认值" aria-hidden="true">#</a> 将分发设置为默认值</h3><p>格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl -setdefault, <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span>
wslconfig /s, /setdefault <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将默认版本设置为WSL2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl --set-default-version <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将指定分发设置为默认版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">-s</span> Ubuntu22.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将指定分发设置为WSL2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl --set-version Ubuntu22.04 <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果在设置分支的时候报以下错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WSL 2 需要更新其内核组件。有关信息，请访问 https://aka.ms/wsl2kernel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36),g={href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"},x=i(`<h3 id="查看状态" tabindex="-1"><a class="header-anchor" href="#查看状态" aria-hidden="true">#</a> 查看状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>xxx<span class="token operator">&gt;</span> wsl <span class="token parameter variable">--status</span>
默认分发：CentOS7
默认版本：2

适用于 Linux 的 Windows 子系统最后更新于 <span class="token number">2023</span>/2/12
适用于 Linux 的 Windows 子系统内核可以使用“wsl --update”手动更新，但由于你的系统设置，无法进行自动更新。
 若要接收自动内核更新，请启用 Windows 更新设置:“在更新 Windows 时接收其他 Microsoft 产品的更新”。
 有关详细信息，请访问https://aka.ms/wsl2kernel。
Windows 更新已暂停。

内核版本： <span class="token number">5.10</span>.16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="升级版本" tabindex="-1"><a class="header-anchor" href="#升级版本" aria-hidden="true">#</a> 升级版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>xxx<span class="token operator">&gt;</span> wsl <span class="token parameter variable">--update</span>                           <span class="token punctuation">]</span>
正在安装: 适用于 Linux 的 Windows 子系统
已安装 适用于 Linux 的 Windows 子系统。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导出镜像" tabindex="-1"><a class="header-anchor" href="#导出镜像" aria-hidden="true">#</a> 导出镜像</h3><p>比如我们需要导出Ubuntu22.04：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--export</span> Ubuntu22.04 D:<span class="token punctuation">\\</span>linux<span class="token punctuation">\\</span>Ubuntu22.04.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定要导出的子系统名称，并指定导出路径即可。</p><h3 id="导入镜像" tabindex="-1"><a class="header-anchor" href="#导入镜像" aria-hidden="true">#</a> 导入镜像</h3><p>找到刚才导出的镜像，执行以下命令即可导入进行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--import</span> Ubuntu22.04 D:<span class="token punctuation">\\</span>linux<span class="token punctuation">\\</span>Ubuntu22.04 D:<span class="token punctuation">\\</span>linux<span class="token punctuation">\\</span>Ubuntu22.04.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function w(L,S){const a=r("ExternalLinkIcon");return d(),t("div",null,[o,s("p",null,[s("a",c,[n("官方文档"),e(a)]),n("："),s("a",u,[n("手动安装教程"),e(a)]),n("。")]),v,s("p",null,[n("下载更新包并安装："),s("a",b,[n("适用于 x64 计算机的 WSL2 Linux 内核更新包"),e(a)])]),m,s("p",null,[n("安装WSL2的详细步骤可以参考官方文档："),s("a",h,[n("WSL 2 的安装说明"),e(a)])]),k,s("p",null,[n("可以到下面链接下载内核更新包安装即可成功升级："),s("a",g,[n("更新 WSL 2 Linux 内核"),e(a)])]),x])}const _=l(p,[["render",w],["__file","WSL.html.vue"]]);export{_ as default};
