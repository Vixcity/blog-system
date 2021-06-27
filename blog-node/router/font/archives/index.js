const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getTimeDate',function (req,res){
    new Result([
        {
          year: '2020',
          dataInfo: [
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:true
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            }
          ]
        },
        {
          year: '2020',
          dataInfo: [
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:true
            },
            {
              data:'2020.01.03',
              title:'123132',
              summary:'564654654654654654654654',
              href:'www.baidu.com',
              isLight:false
            }
          ]
        }
      ],'欢迎使用小温博客管理系统，查询归档信息成功').success(res)
})

router.get('/getTitle',function (req,res){
    new Result({title:'归档'},'欢迎使用小温博客管理系统，查询归档标题信息成功').success(res)
})

router.get('/getBannerSrc',function (req,res){
    new Result({
        url:'https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/archive.jpg'
    },'欢迎使用小温博客管理系统，查询归档banner图片信息成功').success(res)
})

router.get('/getSubTitle',function (req,res){
    new Result({
        leftTitle:'时间线',
        rightTitle:'奥义-时光倒流之术'
    },'欢迎使用小温博客管理系统，查询归档小标题信息成功').success(res)
})

module.exports = router