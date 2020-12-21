import axios from 'axios'
import router from '@/router'
import Qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers['running-time'] = new Date().getTime()
axios.defaults.timeout = 20000

let notifyErrTime = 0

function exitLogin () {
    router.push('/')
}
// 添加请求拦截器
axios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    if (config.method === 'post' && !config.isJson) {
        config.data = Qs.stringify(config.data)
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    // return Promise.reject(error)
    console.log(error)
})

// 添加响应拦截器
axios.interceptors.response.use((r) => {
    // 对响应数据做点什么
    if (r.data.status === '1001') { // 账号未授权
        window.location.href = '/login'
        let exp = new Date()
        exp.setTime(exp.getTime() - 1)
        document.cookie = 'cat="";expires=' + exp.toGMTString()
        console.log(r.data.message)
        return false
    }

    // 如果数据为空，返回默认值
    if ( !r.data ) {
        return {
            status: '0',
            message: {},
            pagination: {}
        }
    }

    return r.data
}, (e) => {
    if ( !e || !e.response ) {
        exitLogin()
        return
    }

    // 对响应错误做点什么
    let needExit = false
    let err = null
    switch (e.response.status) {
        case 401:
            needExit = true
            err = '登录已过期，请重新登录！'
            break
        case 403:
            // needExit = true
            router.push('/unauthorized')
            // err = '没有操作权限，请联系管理员！'
            break
        case 423:
            needExit = true
            err = '您的账号角色已发生改变，请重新登录！'
            break
        case 503:
            // 返回 503 跳转到登录页面
            needExit = true
            err = '服务器繁忙，请稍后再试！'
            break
        case 502:
        case 504:
            // 返回 504 跳转到登录页面
            needExit = true
            err = '尊敬的用户，服务器正在维护，请您耐心等待。给您带来的不便敬请谅解！'
            break
        default:
            console.log('请求出错，错误码：' + e.response.status)
            break
    }

    if ( err ) {
        let now = new Date().getTime()
        if ( now - notifyErrTime > 3000 ) {
            console.log( err )
            notifyErrTime = now
        }
    }

    if ( needExit ) {
        exitLogin()
    }
})

export default axios
