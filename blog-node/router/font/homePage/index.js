const express = require('express')
const Result = require('../../../models/Result')

const router = express.Router()
router.get('/getTitle',function (req,res){
    new Result({
        title: 'Vixcity',
        typed: ['面朝大海，春暖花开', '今日事，今日毕'],
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

module.exports = router