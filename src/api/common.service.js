/*
 * @Author: chengchunlin 
 * @Date: 2024-03-21 08:54:17
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-30 15:14:31
 * @FilePath: /个人项目/src/api/common.service.js
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
 */

import { BaseService, HttpHost, HttpRejectHandle } from './base.service';

function handler(res) {
  if (res.errorCode === 0) {
    return res.data;
  } else {
    return Promise.reject(res.data);
  }
}

@HttpRejectHandle(handler)
@HttpHost(import.meta.env.VITE_APIURL)
class CustomApi extends BaseService {
  // 文件上传-支持格式.jpg|.png|.gif|.bmp|.pdf|.txt
  upload(params) {
    return this.postFormDataService('/upload/image', params);
  }
}
export default new CustomApi();
