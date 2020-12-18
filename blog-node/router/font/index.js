const express = require('express')
const homePage = require('./homePage')

const router = express.Router()
router.use('/homePage',homePage)

module.exports = router