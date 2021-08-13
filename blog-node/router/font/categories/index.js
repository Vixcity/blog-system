const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.post('/getCategoriesList',function (req,res){
    if(req.body.category==='Demo'){
        new Result([
            {
                href:'/article/Demo文档的进阶之路',
                title:'Demo文档的进阶之路',
                time:'2021-01-01',
                zanCount:35,
                commentCount:12,
            },
            {
                href:'/article/Demo文档的进阶之路2',
                title:'Demo文档的进阶之路2',
                time:'2021-01-01',
                zanCount:35,
                commentCount:12,
            },
            {
                href:'/article/Markdown',
                title:'Markdown',
                time:'2021-01-01',
                zanCount:35,
                commentCount:12,
            },
            {
                href:'/article/Thx',
                title:'Thx',
                time:'2021-01-01',
                zanCount:35,
                commentCount:12,
            },
            {
                href:'/article/進階教程',
                title:'進階教程',
                time:'2021-01-01',
                zanCount:35,
                commentCount:12,
            },
        ],'欢迎使用小温博客管理系统，查询分类信息成功').success(res)
    } else {
        new Result([
            {
                href:'/categoriesDetail/Demo',
                title:'Demo',
                count:5
            },
            {
                href:'/categoriesDetail/Docs文檔',
                title:'Docs文檔',
                count:3
            },
            {
                href:'/categoriesDetail/Markdown',
                title:'Markdown',
                count:55
            },
            {
                href:'/categoriesDetail/Thx',
                title:'Thx',
                count:51
            },
            {
                href:'/categoriesDetail/進階教程',
                title:'進階教程',
                count:50
            },
            {
                href:'/categoriesDetail/测试',
                title:'测试',
                count:6
            },
            {
                href:'/categoriesDetail/css',
                title:'css',
                count:8
            },
            {
                href:'/categoriesDetail/JavaScript',
                title:'JavaScript',
                count:9
            },
            {
                href:'/categoriesDetail/Html',
                title:'Html',
                count:45
            }
        ],'欢迎使用小温博客管理系统，查询分类信息成功').success(res)
    }
})

router.get('/getBannerSrc',function (req,res){
    new Result({url:'https://img.zcool.cn/community/01637559b21e93a8012028a9e02d2e.jpg@1280w_1l_0o_100sh.jpg'},'欢迎使用小温博客管理系统，查询分类banner图信息成功').success(res)
})

router.get('/getTitle',function (req,res){
    new Result({title:'分类'},'欢迎使用小温博客管理系统，查询分类标题信息成功').success(res)
})

module.exports = router