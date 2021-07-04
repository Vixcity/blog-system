const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
// homePage
router.get('/getTitle',function (req,res){
    new Result({
        title: 'Vixcity',
        typed: ['面朝大海，春暖花开', 'Never put off till tomorrow what you can do today','测试测试测试测试', '今日事，今日毕'],
        noticeContent: '最是人间留不住，朱颜辞镜花辞树',
        articleTypePost:[
            {
                title: '中文说明',
                href: 'www.baidu.com',
                createData: '2020-01-02',
                isTopping: true,
                content: `<blockquote><p>12313465464161231346546416123134654641612313465464161231346546416123134654641612313465464161231346546416 <a href="">123123</a></p></blockquote>
              <p><img src="https://cdn.jsdelivr.net/gh/Shen-Yu/cdn/picgo/ayer.jpg" alt=""></p>`,
                tags: [
                    {tag:'技术',href:'www.baidu.com'}
                ]
            },{
                title: '中文说明',
                href: 'www.163.com',
                createData: '2020-01-02',
                isTopping: false,
                content: `<blockquote><p>12313465464161231346546416123134654641612313465464161231346546416123134654641612313465464161231346546416 <a href="">123123</a></p></blockquote>
              <p><img src="https://cdn.jsdelivr.net/gh/Shen-Yu/cdn/picgo/ayer.jpg" alt=""></p>`,
                tags: [
                    {tag:'旅行',href:'www.baidu.com'},
                    {tag:'国内',href:'www.vixcity.com'},
                ]
            }
        ]
    },'欢迎使用小温博客管理系统，查询首页信息成功').success(res)
})

// asideContent↓
router.get('/getMyInfo',function (req,res){
    new Result({
        avatarImgSrc: 'https://butterfly.js.org/image/avatar.png',
        name: 'Vixcity',
        description: 'A Simple and Card UI Design theme for Hexo',
        count:[
          {
            href: 'www.baidu.com',
            handLine: '文章',
            count: 11
          },
          {
            href: '/tags',
            handLine: '标签',
            count: 6
          },
          {
            href: '/categories',
            handLine: '分类',
            count: 3
          }
        ],
        giteeHref: 'https://gitee.com/vixcity',
        showGitee: true,
        showMyInfo: true
      },'欢迎使用小温博客管理系统，查询基本信息成功').success(res)
})

router.get('/announcement',function (req,res){
    new Result({
        isShowAnnouncement:true,
        content:'balabalabalabalabalabalbalablablabalbalbalbalbalblabaaaaalslkjdefbkaljrlkrbsbdvlasbdfbvgsekrtbvrjnvilrbtvglskrbhgklsrdbhgvfkrbhgkusgbvu'
      },'欢迎使用小温博客管理系统，查询公告板成功').success(res)
})

router.get('/getDocList',function (req,res){
    new Result({
        isShowDoc:true,
        docs:[
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
        ]
      },'欢迎使用小温博客管理系统，查询文档成功').success(res)
})

router.get('/getArticleList',function (req,res){
    new Result({
        isShowarticle:true,
        articles:[
            {
            title:'Butterfly添加全局吸底Aplayer教程',
            imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
            createTime:'2020-10-28',
            href:'www.baidu.com'
            },
            {
            title:'Butterfly添加全局吸底Aplayer教程',
            imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
            createTime:'2020-10-28',
            href:'www.baidu.com'
            },
            {
            title:'Butterfly添加全局吸底Aplayer教程',
            imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
            createTime:'2020-10-28',
            href:'www.baidu.com'
            },
            {
            title:'Butterfly添加全局吸底Aplayer教程',
            imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
            createTime:'2020-10-28',
            href:'www.baidu.com'
            },
            {
            title:'Butterfly添加全局吸底Aplayer教程Butterfly添加全局吸底Aplayer教程Butterfly添加全局吸底Aplayer教程Butterfly添加全局吸底Aplayer教程',
            imgSrc:'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png',
            createTime:'2020-10-28',
            href:'www.baidu.com'
            }
        ]},'欢迎使用小温博客管理系统，查询最新文章成功').success(res)
})

router.get('/getComments',function (req,res){
    new Result({
        isShowComment:true,
        commentsList:[
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
            reTime:'22小时前'
          },
        ]},'欢迎使用小温博客管理系统，查询最新留言成功').success(res)
})

router.get('/getCategoryList',function (req,res){
    new Result({
        isShowCategory:true,
        categorys:[
          {
            href:'www.baidu.com',
            categoryName:'Demo',
            categoryCount:5
          },
          {
            href:'www.baidu.com',
            categoryName:'Doc文档',
            categoryCount:7
          },
          {
            href:'www.baidu.com',
            categoryName:'Markdown',
            categoryCount:1
          },
          {
            href:'www.baidu.com',
            categoryName:'Thx',
            categoryCount:1
          },
          {
            href:'www.baidu.com',
            categoryName:'进阶教程',
            categoryCount:2
          }
        ]},'欢迎使用小温博客管理系统，查询分类成功').success(res)
})

router.get('/getTagsList',function (req,res){
    new Result({
        isShowTag:true,
        tags:[
          {
            tag:'教程',
            href:'www.baidu.com'
          },
          {
            tag:'Hexo',
            href:'www.baidu.com'
          },
          {
            tag:'主题',
            href:'www.baidu.com'
          },
          {
            tag:'butterfly',
            href:'www.baidu.com'
          },
          {
            tag:'打赏',
            href:'www.baidu.com'
          },
          {
            tag:'Aplayer',
            href:'www.baidu.com'
          },
          {
            tag:'标籤外挂',
            href:'www.baidu.com'
          },
          {
            tag:'highlight',
            href:'www.baidu.com'
          },
          {
            tag:'Bar',
            href:'www.baidu.com'
          },
          {
            tag:'top_img',
            href:'www.baidu.com'
          },
          {
            tag:'demo',
            href:'www.baidu.com'
          }
        ]},'欢迎使用小温博客管理系统，查询标签成功').success(res)
})

router.get('/getArchiveList',function (req,res){
    new Result({
        isShowArchiveList:true,
        archives:[
        {
          href:'www.baidu.com',
          archiveData:'2020年10月',
          archiveCount:3
        },
        {
          href:'www.baidu.com',
          archiveData:'2020年10月',
          archiveCount:3
        },
        {
          href:'www.baidu.com',
          archiveData:'2020年10月',
          archiveCount:3
        },
        {
          href:'www.baidu.com',
          archiveData:'2020年10月',
          archiveCount:3
        },
        {
          href:'www.baidu.com',
          archiveData:'2020年10月',
          archiveCount:3
        },
      ]},'欢迎使用小温博客管理系统，查询归档成功').success(res)
})

router.get('/getWebInfo',function (req,res){
    new Result({
        isShowWebInfo:true,
        webInfoList:[
          {
            name:'文章数目',
            count:16
          },
          {
            name:'已运行时间',
            count:'398 天'
          },
          {
            name:'本站总字数',
            count:'46.7k'
          },
          {
            name:'本站访客数',
            count:9235
          },
          {
            name:'本站总访问量',
            count:77731
          },
          {
            name:'最后更新时间',
            count:'1 天前'
          },
        ]},'欢迎使用小温博客管理系统，查询网页信息成功').success(res)
})

module.exports = router