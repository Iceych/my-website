import axios from 'axios';
import Qs from 'qs';
import { useMyInfoStore } from '@/stores/myInfo';

const commonHeaders = {
  'Content-Type': 'application/json'
};

const objToQuery = (obj) => Qs.stringify(obj, { addQueryPrefix: true });
const objToString = (obj) => Qs.stringify(obj);

const addCommonParams = (obj) => {
  obj = Object.assign({}, obj);
  return obj;
};

export const HttpHost = (baseUrl) => {
  return (target) => {
    target.prototype.baseUrl = baseUrl;
  };
};

export const HttpRejectHandle = (handler) => {
  return (target) => {
    target.prototype.rejectHandle = handler;
  };
};

export class BaseService {
  constructor() {
    this.service = axios.create({
      timeout: 1000 * 30,
      baseURL: this.baseUrl
    });
    // http request 拦截器
    this.service.interceptors.request.use(
      (config) => {
        config.headers['Content-Type'] =
          config.headers['Content-Type'] || commonHeaders['Content-Type'];
        config.headers['token'] = useMyInfoStore().token; // 自动携带token
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    // http response 拦截器
    this.service.interceptors.response.use(
      async (response) => {
        try {
          // 是否是下载数据
          if (response.config.responseType === 'blob') {
            return response;
          } else {
            // 登录过期-根据接口状态码判断
            let res = this.rejectHandle ? await this.rejectHandle(response.data) : response.data;
            return res;
          }
        } catch (error) {
          return Promise.reject(response.data);
        }
      },
      (error) => {
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          return Promise.reject('接口超时，请检查网络再重新连接');
        }
        return Promise.reject(error);
      }
    );
  }
  getService(url, query = {}) {
    return this.service.get(`${url}${objToQuery(addCommonParams(query))}`);
  }
  postService(url, data) {
    return this.service.post(url, addCommonParams(data));
  }
  deleteService(url, data) {
    return this.service.delete(url, { ...addCommonParams(data) });
  }
  putService(url, data) {
    return this.service.put(url, { ...addCommonParams(data) });
  }
  postFormService(url, data) {
    return this.service.post(url, objToString(addCommonParams(data)), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
  postFormDataService(url, data) {
    let formData = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      formData.append(k, v);
    });
    return this.service.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
  async downloadaService(url, data) {
    try {
      const res = await this.service.post(url, data, {
        responseType: 'blob'
      });
      $tools.downloadFile(res);
    } catch (error) {
      console.log('下载文件失败', error);
    }
  }
  async downloadGetService(url, query) {
    try {
      const res = await this.service.get(`${url}${objToQuery(addCommonParams(query))}`, {
        responseType: 'blob'
      });
      $tools.downloadFile(res);
    } catch (error) {
      console.log('下载文件失败', error);
    }
  }
}

export default {
  HttpHost,
  BaseService
};
