import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
// 创建一个实例
const instance = axios.create({
    baseURL: "http://kumanxuan1.f3322.net:8001",
    timeout: 5000
})

// 请求拦截(器)
instance.interceptors.request.use(config => {
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    });
    let token = localStorage.getItem("token");
    if (token) {
        config.headers = {
            "X-Nideshop-Token": token
        }
    }
    return config;
}, (err) => {
    Toast.clear();
    return Promise.reject(err);
})


// 响应拦截
instance.interceptors.response.use((res) => {

    Toast.clear();
    return res.data;
}, (err) => {

    Toast.clear();
    return Promise.reject(err); // 抛出错误
})

// 导出这个实例
export default instance;