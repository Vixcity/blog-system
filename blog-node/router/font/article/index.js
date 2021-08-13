const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.post('/getContent',function (req,res){
    new Result({
        content:`<p class=\"ql-align-justify\">其实我一直搞不懂YouTube上对于尺度的定义，很多我感觉过分的影片没删除，</p><p class=\"ql-align-justify\">我感觉这没啥吧的视频，却是动不动就下架了！</p><p class=\"ql-align-justify\">油管上看妹子，不外乎就是日韩妹子瑜伽，欧美姑娘健身，中国女主播之类，</p><p class=\"ql-align-justify\">今天推荐的这个油管频道“Realgraphic”主要是韩国妹子，</p><p class=\"ql-align-justify\">内容上主要是瑜伽和一些很有生活感的视频，视频清晰度高，拍摄角度好，剪辑优秀，</p><p class=\"ql-align-justify\">摄影师绝对是专业LSP，十分懂得男孩子想看什么？</p><p class=\"ql-align-justify\">一共两个频道，都是一个机构出品的，油管主要是几分钟的预览视频，长视频需要付费，</p><p class=\"ql-align-justify\">根据网上的信息我发现其中几期在中文互联网是有人购买的，比如下面这个第49期的家政妇，</p><p class=\"ql-align-justify\">韩版的原作名称是下面这样，中文版的作品名改成了“韩国极品美少女家政服务福利写真…”</p><blockquote class=\"ql-align-justify\">NO49 벚꽃이피었습니다 Cherry blossoms have bloomed Main Cam</blockquote><pre class=\"ql-syntax ql-align-justify\" spellcheck=\"false\">&lt;p&gt;alert(1)&lt;/p&gt;\n&lt;script&gt;alert(1)&lt;/script&gt;\n</pre><p class=\"ql-align-justify\">哪位老司机如果有收藏付费视频，欢迎大力<a href=\"https://fuliba2021.net/%e7%a6%8f%e5%88%a9%e5%90%a7%e6%8a%95%e7%a8%bf\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(69, 182, 247);\">投稿</a>！</p><p class=\"ql-align-justify\">在B站搜索“Realgraphic”也能搜到一些用户转载的视频，但是没有油管多！</p><p class=\"ql-align-justify\">话不多说，开冲！</p><p class=\"ql-align-justify\"><strong>注意：部分视频有年龄限制，需要登陆查看！</strong></p><p class=\"ql-align-justify\">作品列表：https://krg.gumroad.com</p><p class=\"ql-align-justify\">访问地址：油管/channel/UCsqRr_bHxNFB56VCZQiLChg</p><p class=\"ql-align-justify\">访问地址：油管/channel/UCPCNMhVpNcdPsI_M6bZFSAA</p><p><img src="https://tvax3.sinaimg.cn/large/006BNqYCly1gt95onpam3j30zk0k0ju0.jpg" data-tag="bdshare"></p>`,
        zanCount:35
    },'欢迎使用小温博客管理系统，查询文章成功').success(res)
})

router.post('/getBannerSrc',function (req,res){
    new Result({url:'https://img.zcool.cn/community/01efa1594a2999a8012193a33c886f.jpg@1280w_1l_2o_100sh.jpg'},'欢迎使用小温博客管理系统，查询文章banner图信息成功').success(res)
})

router.post('/getArticleTitle',function (req,res){
  new Result({
      title:'文章',
      time:'2021-08-11',
      categories:[{categorie:'购物网赚',href:'/categoriesDetail/Docs文檔'},{categorie:'健康长寿',href:'/categoriesDetail/Demo'}],
      commentCount:'83',
      updataTime:'2021-08-11 09:14',
      isUpdata:true,
    },'欢迎使用小温博客管理系统，查询文章标题信息成功').success(res)
})

module.exports = router