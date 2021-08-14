const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getDocsList',function (req,res){
    new Result([
        {
          title:'🚀 快速开始',
          href:'/article/🚀 快速开始'
        },
        {
          title:'📑 主题页面',
          href:'/article/📑 主题页面'
        },
        {
          title:'🛠 主题配置-1',
          href:'/article/🛠 主题配置-1'
        },
        {
          title:'⚔️ 主题配置-2',
          href:'/article/⚔️ 主题配置-2'
        },
        {
          title:'❓ 主题问答',
          href:'/article/❓ 主题问答'
        },
        {
          title:'⚡️ 进阶教程',
          href:'/article/⚡️ 进阶教程'
        },
        {
          title:'✨ 更新日誌',
          href:'/article/✨ 更新日誌'
        },
      ],'欢迎使用小温博客管理系统，查询文档信息成功').success(res)
})

router.get('/getBannerSrc',function (req,res){
    new Result({url:'https://img.zcool.cn/community/01efa1594a2999a8012193a33c886f.jpg@1280w_1l_2o_100sh.jpg'},'欢迎使用小温博客管理系统，查询文档banner图信息成功').success(res)
})

router.get('/getTitle',function (req,res){
  new Result({title:'文档'},'欢迎使用小温博客管理系统，查询文档标题信息成功').success(res)
})

module.exports = router