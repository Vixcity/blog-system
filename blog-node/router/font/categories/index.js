const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getCategoriesList',function (req,res){
    new Result([
        {
            href:'www.baidu.com',
            title:'Demo',
            count:5
        },
        {
            href:'www.baidu.com',
            title:'Docs文檔',
            count:3
        },
        {
            href:'www.baidu.com',
            title:'Markdown',
            count:55
        },
        {
            href:'www.baidu.com',
            title:'Thx',
            count:51
        },
        {
            href:'www.baidu.com',
            title:'進階教程',
            count:50
        },
        {
            href:'www.baidu.com',
            title:'测试',
            count:6
        },
        {
            href:'www.baidu.com',
            title:'css',
            count:8
        },
        {
            href:'www.baidu.com',
            title:'JavaScript',
            count:9
        },
        {
            href:'www.baidu.com',
            title:'Html',
            count:45
        }
    ],'欢迎使用小温博客管理系统，查询分类信息成功').success(res)
})

router.get('/getBannerSrc',function (req,res){
    new Result({url:'https://img.zcool.cn/community/01637559b21e93a8012028a9e02d2e.jpg@1280w_1l_0o_100sh.jpg'},'欢迎使用小温博客管理系统，查询分类banner图信息成功').success(res)
})

router.get('/getTitle',function (req,res){
    new Result({title:'分类'},'欢迎使用小温博客管理系统，查询分类标题信息成功').success(res)
})

module.exports = router