import axios from "axios";
import { getToken } from "./auth";
import { notify } from "./message";

const instance = axios.create({
    baseURL: '/api', // 被vite代理
    timeout: 1000,
  });

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送之前自动添加token
    const token = getToken();
    if(token){
        config.headers['token'] = token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 直接返回响应数据
    return response.data;
  }, function (error) {
    // 错误响应统一提示
    notify(error.response.data.msg || '请求失败', 'error')
    return Promise.reject(error);
  });

export default instance