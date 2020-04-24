import axios, { Method } from 'axios';
import { message } from 'antd';
import { pre_fix, baseURL } from '@src/config/apiConfig';

interface Options {
  headers?: any;
  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params?: any;
  method?: Method;
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data?: any;
}

const requestMap = new Map();
const CancelToken = axios.CancelToken;
// 不需要进行防重复请求的接口的白名单
const whiteList: string | string[] = [];

// 防止重复请求
const removeRequest = (mapkey: any) => {
  const cancel = requestMap.get(mapkey);
  cancel('亲，请慢慢点');
  requestMap.delete(mapkey);
};

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // console.log('request------>', config);
    config.headers['Authorization'] = 'Basic ' + localStorage.getItem('token');
    const mapkey = `${config.method}-${config.url}`;
    if (requestMap.has(mapkey)) {
      removeRequest(mapkey);
    }
    if (!requestMap.has(mapkey)) {
      config.cancelToken = new CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        if (config.url && whiteList.indexOf(config.url) === -1) {
          requestMap.set(mapkey, c);
        }
      });
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    // console.log('response------>', response);
    const mapkey = `${response.config.method}-${response.config.url}`;
    if (requestMap.has(mapkey)) {
      removeRequest(mapkey);
    }
    if (response.status === 200 && response.statusText === 'OK') {
      if (response.data.status === 0) {
        return response.data.data;
      } else {
        // 抛出 自定义错误
        return Promise.reject(response.data.msg);
      }
    } else {
      // 网络错误
      return Promise.reject(response.statusText);
    }
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default async function request(url: string, options: Options = {}) {
  return axios
    .request({
      url: pre_fix + url,
      baseURL: baseURL,
      method: options.method ? options.method : 'get',
      headers: options.headers,
      params: options.params,
      data: options.data,
      timeout: 30 * 1000,
    })
    .catch((e) => {
      message.error(e.message, 2);
    });
}
