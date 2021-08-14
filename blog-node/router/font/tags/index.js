const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.post('/getTagsList',function (req,res){
    if(req.body.tag==='文kabrhbva'){
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
                href:"/tagsDetail/文档aa",
                tagName:'文档aa'
            },{
                href:"/tagsDetail/文kabrhbva",
                tagName:'文kabrhbva'
            },{
                href:"/tagsDetail/文kabrhbva",
                tagName:'fgsdfvgbva'
            },{
                href:"/tagsDetail/文kabrhbva",
                tagName:'rhbva'
            },{
                href:"/tagsDetail/文kabrhbva",
                tagName:'文brhbva'
            },{
                href:"/tagsDetail/文kabrhbva",
                tagName:'brhbva'
            },{
                href:"/tagsDetail/文kabrhbva",
                tagName:'文档ava'
            },{
                href:"/tagsDetail/文kabrhbva",
                tagName:'文档asdfavbjkabva'
            }
        ],'欢迎使用小温博客管理系统，查询标签信息成功').success(res)
    }
})

router.get('/getBannerSrc',function (req,res){
    new Result({url:'https://img.zcool.cn/community/01a74d5c00a04ca8012092526f1339.jpg@3000w_1l_2o_100sh.jpg'},'欢迎使用小温博客管理系统，查询标签banner图信息成功').success(res)
})

router.get('/getTitle',function (req,res){
    new Result({title:'标签'},'欢迎使用小温博客管理系统，查询标签标题信息成功').success(res)
})

module.exports = router