const db = require('../../../db')
const _ = require('lodash')

//  侧边分类
async function getCategory(params) { 
    //const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let categoryList = {
        isShowCategory:params.url==='categories'?false:true,
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
        ]}
    return categoryList
 }

//  侧边评论
async function getComments(params) { 
    //const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let commentsListDetail = {
        isShowComment:params.url==='messageBoard'?false:true,
        commentsList:[
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            src:'/messageBoard',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            src:'/messageBoard',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            src:'/messageBoard',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            src:'/messageBoard',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            src:'/messageBoard',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻',
            reTime:'22小时前'
          },
          {
            gravatarSrc:'https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash',
            src:'/messageBoard',
            userName:'火星飞鸟',
            comment:'嘻嘻嘻火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟火星飞鸟',
            reTime:'22小时前'
          },
        ]}
    return commentsListDetail
 }

//  我的基本信息
async function getACMyInfo(params) { 
    //const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let baseInfo = {
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
      }
    return baseInfo
 }

//  获取IP和观看时间 
async function IPAndTime(params) { 
    //const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
 }

//  获取首页全部信息
async function getHomePageAllInfo(params) {
    let HomeAllInfo = {
        title: 'Vixcity',
        typed: ['面朝大海，春暖花开', 'Never put off till tomorrow what you can do today','测试测试测试测试', '今日事，今日毕'],
        noticeContent: '最是人间留不住，朱颜辞镜花辞树',
        articleTypePost:[
            {
                title: '中文说明',
                href: '/article/foo',
                createData: '2020-01-02',
                commentCount:35,
                zanCount:15,
                isTopping: true,
                content: `<blockquote><p>12313465464161231346546416123134654641612313465464161231346546416123134654641612313465464161231346546416 <a href="">123123</a></p></blockquote>
              <p><img src="https://cdn.jsdelivr.net/gh/Shen-Yu/cdn/picgo/ayer.jpg" alt=""></p>`,
                tags: [
                    {tag:'技术',href:'www.biaoqian.com'}
                ],
                categories:[
                  {category:'技术',categoryHref:'/categoriesDetail/技术'}
                ]
            },{
                title: '中文说明',
                href: '/article/bar',
                createData: '2020-01-02',
                commentCount:35,
                zanCount:20,
                isTopping: false,
                content: `<blockquote><p>12313465464161231346546416123134654641612313465464161231346546416123134654641612313465464161231346546416 <a href="">123123</a></p></blockquote>
              <p><img src="https://cdn.jsdelivr.net/gh/Shen-Yu/cdn/picgo/ayer.jpg" alt=""></p>`,
                tags: [
                    {tag:'旅行',href:'www.biaoqian.com'},
                    {tag:'国内',href:'www.biaoqian.com'},
                ],
                categories:[
                  {category:'旅行',categoryHref:'/categoriesDetail/旅行'},
                  {category:'国内',categoryHref:'/categoriesDetail/国内'}
                ]
            }
        ]
    }
    return HomeAllInfo
}

//  查询公告板
async function getAnnouncement(params) {
//const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let Announcement = {
        isShowAnnouncement:true,
        content:'balabalabalabalabalabalbalablablabalbalbalbalbalblabaaaaalslkjdefbkaljrlkrbsbdvlasbdfbvgsekrtbvrjnvilrbtvglskrbhgklsrdbhgvfkrbhgkusgbvu'
      }
    return Announcement
}

//  查询文档
async function getACDocList(params) {
//const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let docsList = {
        isShowDoc:params.url==='docs'?false:true,
        docs:[
          {
            title:'🚀 快速开始',
            href:'/docs'
          },
          {
            title:'📑 主题页面',
            href:'/docs'
          },
          {
            title:'🛠 主题配置-1',
            href:'/docs'
          },
          {
            title:'⚔️ 主题配置-2',
            href:'/docs'
          },
          {
            title:'❓ 主题问答',
            href:'/docs'
          },
          {
            title:'⚡️ 进阶教程',
            href:'/docs'
          },
          {
            title:'✨ 更新日誌',
            href:'/docs'
          },
        ]
      }
    return docsList
}

//  查询最新文章
async function getACArticleList(params) {
//const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let ArticleList = {
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
        ]}
    return ArticleList
}

//  查询最新标签
async function getACTagsList(params) {
//const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let tagList = {
        isShowTag:params.url==='tags'?false:true,
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
        ]}
    return tagList
}

//  查询归档
async function getACArchiveList(params) {
    //const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let ArchiveList = {
        isShowArchiveList:params.url==='archives'?false:true,
        archives:[
        {
          href:'/archives',
          archiveData:'2020年10月',
          archiveCount:3
        },
        {
          href:'/archives',
          archiveData:'2020年10月',
          archiveCount:3
        },
        {
          href:'/archives',
          archiveData:'2020年10月',
          archiveCount:3
        },
        {
          href:'/archives',
          archiveData:'2020年10月',
          archiveCount:3
        },
        {
          href:'/archives',
          archiveData:'2020年10月',
          archiveCount:3
        },
      ]}
    return ArchiveList
}

//  查询网页信息
async function getACWebInfo(params) {
    //const sql = 'select * from category order by category asc'
    //const result = await db.querySql(sql)
    // const categoryList = []
    // result.forEach(item => {
    //     categoryList.push({
    //         label: item.categoryText,
    //         value: item.category,
    //         num: item.num
    //     })
    // })
    let webInfo = {
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
        ]}
    return webInfo
}

 module.exports = {
    getCategory,
    getComments,
    IPAndTime,
    getACMyInfo,
    getHomePageAllInfo,
    getAnnouncement,
    getACDocList,
    getACArticleList,
    getACTagsList,
    getACArchiveList,
    getACWebInfo
 }