const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.post('/getContent',function (req,res){
    new Result([
        {
          title:'🚀 快速开始',
          href:'www.vip.com'
        },
        {
          title:'📑 主题页面',
          href:'www.vip.com'
        },
        {
          title:'🛠 主题配置-1',
          href:'www.vip.com'
        },
        {
          title:'⚔️ 主题配置-2',
          href:'www.vip.com'
        },
        {
          title:'❓ 主题问答',
          href:'www.vip.com'
        },
        {
          title:'⚡️ 进阶教程',
          href:'www.vip.com'
        },
        {
          title:'✨ 更新日誌',
          href:'www.vip.com'
        },
      ],'欢迎使用小温博客管理系统，查询文档信息成功').success(res)
})

router.post('/getBannerSrc',function (req,res){
    new Result({url:'https://img.zcool.cn/community/01efa1594a2999a8012193a33c886f.jpg@1280w_1l_2o_100sh.jpg'},'欢迎使用小温博客管理系统，查询文档banner图信息成功').success(res)
})

router.post('/getArticleTitle',function (req,res){
  new Result({
      title:'文章',
      time:'2021-08-11',
      categories:[{categorie:'购物网赚',href:'www.baidu.com'},{categorie:'健康长寿',href:'www.baidu.com'}],
      commentCount:'83',
      updataTime:'2021-08-11 09:14',
      isUpdata:true,
    },'欢迎使用小温博客管理系统，查询文档标题信息成功').success(res)
})

module.exports = router