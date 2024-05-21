#!/bin/bash
###
 # @Author: chengchunlin chengchunlin@eastmoney.com
 # @Date: 2024-04-28 09:56:52
 # @LastEditors: chengchunlin chengchunlin@eastmoney.com
 # @LastEditTime: 2024-05-21 15:49:38
 # @FilePath: /个人项目/Users/wo/Desktop/自用库/git.sh
 # @Description: write something
 # 
 # Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
### 
# 获取所有本地的且已合并到当前分支的分支名（排除release分支和当前分支），建议在master或release分支执行
branches=`git branch --merged | grep -v "\*" | grep -v "release"`; 
echo $branches; # 打印获取到的分支列表
for branch in $branches
do
res=`git branch -d $branch`; # 删除分支
echo $res # 打印删除结果
done;