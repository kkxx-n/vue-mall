// config  配置

// 对axios模块的封装 
import Axios from 'axios';


// 步骤一
export function request(config, success, failure) {
    // 配置axios基本文件   将promise中then和catch方法封装好
    const instance = Axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 500
    })
    // 发送网络请求方式一
    instance(config)
        .then(res => {
            // console.log(res)
            success(res)
        })
        .catch(err => {
            failure(err)
        })
}

// 步骤二
export function request2(config) {
    const instance = Axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    instance(config.baseConfig)
        .then(res => {
            config.success(res)
        })
        .catch(err => {
            config.failure(err)
        })
}


// 最终封装结果
// axios.create创建一个axios实例
// axios 返回的就是一个promise对象  
export function requestPromise(config) {
    // 配置一个Axios实例
    const instance = Axios.create({
        baseURL: 'http://152.136.185.210:8000/api/n3',
        timeout: 500
    })

    //   axios拦截器 interceptors拦截器
    // Axios.interceptors.request/response.use()
    // 请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config)
        // 将请求拦截到了  所以需要将config返回
        //1、 每次发送网络请求的时候，显示其他内容（图标）
        // 2、登陆的时候（登陆token），必须携带一些特殊的信息
        return config
    }, err => {
        console.log(err)
    })
    
    // 响应拦截
    instance.interceptors.response.use(res =>{
        // console.log(res)
        return res.data
    },err=>{
        console.log(err)
    })

    // 响应拦截

    return instance(config) //返回的就是promise
}