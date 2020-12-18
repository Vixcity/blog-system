const express = require('express')
const boom = require('boom')
const fontRouter = require('./font')

// 注册路由
const router = express.Router()

router.get('/', function(req, res) {
    res.send('欢迎使用小温博客管理系统')
})

router.use('/font', fontRouter)

module.exports = router