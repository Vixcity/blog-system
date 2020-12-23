const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getMenu',function (req,res){
    new Result([
        {
          title:'首页',
          href:'/'
        },
        {
          title:'归档',
          href:'/archives'
        },
        {
          title:'分类',
          href:'/categories'
        },
        {
          title:'标签',
          href:'/tags'
        },
        {
          title:'文档',
          href:'/docs'
        },
        {
          title:'娱乐',
          href:'/amusement'
        },
        {
          title:'友链',
          href:'/friendLink'
        },
        {
          title:'留言板',
          href:'/messageBoard'
        },
        {
          title:'关于我',
          href:'/aboutMe'
        },
        {
          title:'自言自语',
          href:'/talkToMyself'
        },
        {
          title:'更多示例',
          href:'/moreDemo'
        }
    ],'欢迎使用小温博客管理系统，查询菜单  信息成功').success(res)
})

module.exports = router