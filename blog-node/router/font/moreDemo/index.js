const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()

router.get('/getBannerSrc',function (req,res){
    new Result({url:'http://img2.zol.com.cn/product/93/902/ce4q2hEbUkT6.jpg'},'欢迎使用小温博客管理系统，查询标签banner图信息成功').success(res)
})

router.get('/getTitle',function (req,res){
    new Result({title:'更多示例'},'欢迎使用小温博客管理系统，查询更多示例标题信息成功').success(res)
})

module.exports = router