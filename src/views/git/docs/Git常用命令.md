<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-05-21 15:04:18
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-21 15:53:46
 * @FilePath: /个人项目/src/views/git/common-commands/docs/Git常用命令.md
 * @Description: Git 常用命令
 *
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved.
-->

#### 初始化本地git仓库（创建新仓库）

> git init

#### 配置用户名、邮件

> git config --global user.name "xxx"

> git config --global user.email "xxx@xxx.com"

#### 增加远程定义（用于push/pull/fetch）

> git remote add origin ssh://git@xx.xx.xx.xx/xx.git

#### 从当前分支创建新分支master_copy并检出

> git checkout -b master_copy

#### 合并远程master分支至当前分支

> git merge origin/master

#### 将当前版本重置为HEAD（通常用于merge失败回退）

> git reset --hard HEAD

#### 暂存当前修改，将所有至为HEAD状态

> git stash

#### 查看所有暂存

> git stash list

#### 参考第一次暂存

> git stash show -p stash@{0}

#### 应用第一次暂存

> git stash apply stash@{0}

#### 清理无效的远程追踪分支

> git remote prune origin
