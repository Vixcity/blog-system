const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getMsgList',function (req,res){
    new Result({
        msgs:[
            {
                content: "嘻嘻嘻1",
                gravatarSrc: "https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash",
                reTime: "22小时前",
                userName: "火星飞鸟"
            },
            {
                content: "嘻嘻嘻2",
                gravatarSrc: "https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash",
                reTime: "22小时前",
                userName: "火星飞鸟"
            },
            {
                content: "嘻嘻嘻3",
                gravatarSrc: "https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash",
                reTime: "22小时前",
                userName: "火星飞鸟"
            },
            {
                content: "嘻嘻嘻4",
                gravatarSrc: "https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash",
                reTime: "22小时前",
                userName: "火星飞鸟"
            },
            {
                content: "嘻嘻嘻5",
                gravatarSrc: "https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash",
                reTime: "22小时前",
                userName: "火星飞鸟"
            },
            {
                content: "嘻嘻嘻6",
                gravatarSrc: "https://gravatar.loli.net/avatar/f8496f42e482f457a85613e8bbb2b711?d=robohash",
                reTime: "22小时前",
                userName: "火星飞鸟"
            },
        ],
        title:'留言板'
    },'欢迎使用小温博客管理系统，查询留言板列表信息成功').success(res)
})

router.get('/getBannerSrc',function (req,res){
    new Result({url:'http://pic3.178.com/699/6990004/month_1208/1346034125-8816.jpg'},'欢迎使用小温博客管理系统，查询友链banner图信息成功').success(res)
})

module.exports = router