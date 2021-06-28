const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getTagsList',function (req,res){
    new Result([
        {
            href:"www.baidu.com",
            tagName:'文档aa'
        },{
            href:"www.baidu.com",
            tagName:'文kabrhbva'
        },{
            href:"www.baidu.com",
            tagName:'fgsdfvgbva'
        },{
            href:"www.baidu.com",
            tagName:'rhbva'
        },{
            href:"www.baidu.com",
            tagName:'文brhbva'
        },{
            href:"www.baidu.com",
            tagName:'brhbva'
        },{
            href:"www.baidu.com",
            tagName:'文档ava'
        },{
            href:"www.baidu.com",
            tagName:'文档asdfavbjkabva'
        }
    ],'欢迎使用小温博客管理系统，查询标签信息成功').success(res)
})

router.get('/getBannerSrc',function (req,res){
    new Result({url:'https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/Photo/tags.jpg'},'欢迎使用小温博客管理系统，查询标签banner图信息成功').success(res)
})

module.exports = router