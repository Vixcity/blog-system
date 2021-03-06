const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.post('/getTimeDate',function (req,res){
  if(req.body.time===""){
    new Result([
      {
        year: '2020',
        dataInfo: [
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:true
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
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
            href:'/article/foo',
            isLight:true
          },
          {
            data:'2020.01.03',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          }
        ]
      }
    ],'???????????????????????????????????????????????????????????????').success(res)
  } else if(req.body.time === "2020-01-02") {
    new Result([
      {
        year: '2020',
        dataInfo: [
          {
            data:'2020.01.02',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:true
          },
          {
            data:'2020.01.02',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.02',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          },
          {
            data:'2020.01.02',
            title:'123132',
            summary:'564654654654654654654654',
            href:'/article/foo',
            isLight:false
          }
        ]
      },
    ],'???????????????????????????????????????????????????????????????').success(res)
  }
    
})

router.get('/getTitle',function (req,res){
    new Result({title:'??????'},'?????????????????????????????????????????????????????????????????????').success(res)
})

router.get('/getBannerSrc',function (req,res){
    new Result({
        url:'https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/archive.jpg'
    },'???????????????????????????????????????????????????banner??????????????????').success(res)
})

router.get('/getSubTitle',function (req,res){
    new Result({
        leftTitle:'?????????',
        rightTitle:'??????-??????????????????'
    },'????????????????????????????????????????????????????????????????????????').success(res)
})

module.exports = router