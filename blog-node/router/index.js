const express = require('express')
const boom = require('boom')
const fontRouter = require('./font')
const endRouter = require('./end')
const Result = require('../models/Result')

// 注册路由
const router = express.Router()

router.get('/', function(req, res) {
    res.send('欢迎使用小温博客管理系统')
})

router.use('/font', fontRouter)
router.use('/end', endRouter)

/**
 * 集中处理404请求的中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常请求
 */
router.use((req, res, next) => {
    next(boom.notFound('接口不存在'))
})

/**
 * 自定义路由异常处理中间件
 * 注意两点：
 * 第一，方法的参数不能减少
 * 第二，方法的必须放在路由最后
 */
 router.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        const { status = 401, message } = err
        new Result(null, '验证失败，您的Token过期，请重新登录', {
            error: status,
            errorMsg: message
        }).jwtError(res.status(status))
    }else {
        const msg = (err && err.message) || '系统错误'
        const statusCode = (err.output && err.output.statusCode) || 500;
        const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message
        new Result(null, msg, {
            error: statusCode,
            errorMsg
        }).fail(res.status(statusCode))
    }
})

module.exports = router