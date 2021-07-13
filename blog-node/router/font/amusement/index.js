const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getImageListList',function (req,res){
    new Result([
        "https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/image-6-lg.jpg",
        "https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/image-12-lg.jpg",
        'https://img.zcool.cn/community/01efa1594a2999a8012193a33c886f.jpg@1280w_1l_2o_100sh.jpg',
        'https://img.zcool.cn/community/01a74d5c00a04ca8012092526f1339.jpg@3000w_1l_2o_100sh.jpg',
        'https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/archive.jpg',
        'https://img.zcool.cn/community/01637559b21e93a8012028a9e02d2e.jpg@1280w_1l_0o_100sh.jpg',
        'http://img-arch.pconline.com.cn/images/upload/upc/tx/photoblog/1403/16/c1/32128948_32128948_1394930387876.jpg',
        'http://img-arch.pconline.com.cn/images/upload/upc/tx/photoblog/1403/16/c1/32128948_32128948_1394930405625.jpg',
      ],'欢迎使用小温博客管理系统，查询图片列表成功').success(res)
})

router.get('/getTitle',function (req,res){
    new Result({title:'娱乐 - 摄影 - 美图'},'欢迎使用小温博客管理系统，查询娱乐标题信息成功').success(res)
})

router.get('/getBannerSrc',function (req,res){
    new Result({
        url:'http://img-arch.pconline.com.cn/images/upload/upc/tx/photoblog/1403/16/c1/32128948_32128948_1394930405625.jpg'
    },'欢迎使用小温博客管理系统，查询娱乐banner图片信息成功').success(res)
})

module.exports = router