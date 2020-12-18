const express = require('express')

const router = express.Router()
router.get('/getTitle',function (req,res){
    res.send('欢迎使用小温博客管理系统')
})

module.exports = router