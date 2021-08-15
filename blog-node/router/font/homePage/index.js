const express = require('express')
const homePageService = require('../../../services/font/homepage/homePage')
const Result = require('../../../models/Result')

const router = express.Router()
// homePage
router.post('/getTitle',function (req,res){
  homePageService.getHomePageAllInfo().then(HomeAllInfo => {
    new Result(HomeAllInfo,'欢迎使用小温博客管理系统，查询首页信息成功').success(res)
  }).catch(err => {
    next(boom.badImplementation(err))
  })
})

// 获取IP与时间
router.post('/IPAndTime',function (req,res){
  homePageService.IPAndTime(req.body).then(() => {
    new Result().success(res)
  }).catch(err => {
    next(boom.badImplementation(err))
  })
})

// asideContent↓
router.get('/getACMyInfo',function (req,res){
  homePageService.getACMyInfo(req.body).then(baseInfo => {
    new Result(baseInfo,'欢迎使用小温博客管理系统，查询基本信息成功').success(res)
  }).catch(err => {
    next(boom.badImplementation(err))
  })
})

// 查询查询最新文章公告板
router.get('/announcement',function (req,res){
    homePageService.getAnnouncement().then(Announcement => {
      new Result(Announcement,'欢迎使用小温博客管理系统，查询公告板成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
})

// 查询文档
router.post('/getACDocList',function (req,res){
    homePageService.getACDocList(req.body).then(docsList => {
      new Result(docsList,'欢迎使用小温博客管理系统，查询文档成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
})

// 查询侧边栏最新文章
router.get('/getACArticleList',function (req,res){
    homePageService.getACArticleList().then(ArticleList => {
      new Result(ArticleList,'欢迎使用小温博客管理系统，查询最新文章成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
})

// 查询侧边栏评论
router.post('/getACComments',function (req,res){
  homePageService.getComments(req.body).then(commentDetail => {
    new Result(commentDetail, '欢迎使用小温博客管理系统，查询最新留言成功').success(res)
  }).catch(err => {
    next(boom.badImplementation(err))
  })
})

// 查询侧边栏分类
router.post('/getACCategoryList',function (req,res){
    homePageService.getCategory(req.body).then(category => {
      new Result(category, '欢迎使用小温博客管理系统，查询分类成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
})

// 查询侧边栏标签
router.post('/getACTagsList',function (req,res){
    homePageService.getACTagsList(req.body).then(tagList => {
      new Result(tagList, '欢迎使用小温博客管理系统，查询标签成功').success(res)
    }).catch(err => {
      next(boom.badImplementation(err))
    })
})

// 查询侧边栏归档
router.post('/getACArchiveList',function (req,res){
  homePageService.getACArchiveList(req.body).then(ArchiveList => {
    new Result(ArchiveList, '欢迎使用小温博客管理系统，查询归档成功').success(res)
  }).catch(err => {
    next(boom.badImplementation(err))
  })
})

router.get('/getACWebInfo',function (req,res){
  homePageService.getACWebInfo(req.body).then(WebInfo => {
    new Result(WebInfo, '欢迎使用小温博客管理系统，查询网页信息成功').success(res)
  }).catch(err => {
    next(boom.badImplementation(err))
  })
})

module.exports = router