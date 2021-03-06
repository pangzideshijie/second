import axios from 'axios'

export function request(config){
    //创建axios实例
    const instance = axios.create({
        baseUrl:'',
        timeout:5000
    })
    //请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })
    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    },err=>{
        console.log(err)
    })
    return instance(config)
}