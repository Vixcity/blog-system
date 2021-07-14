const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getLinkList',function (req,res){
    new Result([
        {
          name:'🚀 快速开始的个人博客',
          href:'www.vip.com',
          imgSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          autograph:'123456213454313548646'
        },
        {
          name:'📑 主题页面的个人博客',
          href:'www.vip.com',
          imgSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          autograph:'123456213454313548646'
        },
        {
          name:'🛠 主题配置-1的个人博客',
          href:'www.vip.com',
          imgSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          autograph:'123456213454313548646'
        },
        {
          name:'⚔️ 主题配置-2的个人博客',
          href:'www.vip.com',
          imgSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          autograph:'123456213454313548646'
        },
        {
          name:'❓ 主题问答的个人博客',
          href:'www.vip.com',
          imgSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          autograph:'123456213454313548646'
        },
        {
          name:'⚡️ 进阶教程的个人博客',
          href:'www.vip.com',
          imgSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          autograph:'123456213454313548646'
        },
        {
          name:'✨ 更新日誌的个人博客',
          href:'www.vip.com',
          imgSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
          autograph:'123456213454313548646'
        },
      ],'欢迎使用小温博客管理系统，查询友链列表信息成功').success(res)
})

router.get('/getBannerSrc',function (req,res){
    new Result({url:'http://img2.cache.hxsd.com/hxsdmy/gallery/2013/00/84/52/54/04/16/134039732/134039732_9.jpg'},'欢迎使用小温博客管理系统，查询友链banner图信息成功').success(res)
})

router.get('/getTitle',function (req,res){
  new Result({title:'友链'},'欢迎使用小温博客管理系统，查询友链标题信息成功').success(res)
})

module.exports = router