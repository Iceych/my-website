<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-07-03 19:17:11
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-07-03 19:31:33
 * @FilePath: /个人项目/src/views/node/docs/node版本切换.md
 * @Description: write something
 *
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved.
-->

### 查看nodejs版本

> node -v

### [nvm](https://github.com/coreybutler/nvm-windows)

- nvm install <version> [arch]

  > 安装指定版本的nodejs。版本可以是特定版本，“latest”表示最新当前版本，“lts”表示最新的 LTS 版本。

- nvm use <version> [arch]

  > 切换使用指定版本版本。可选择使用latest、lts或newest。newest是最新安装的版本。

- nvm list [available]

  > 列出已安装所有nodejs版本

- nvm version

  > 显示当前运行的NVM 版本

- nvm root <path>

  > 设置nvm存放不同版本node.js的目录，若未<path>设置则显示当前根目录。
