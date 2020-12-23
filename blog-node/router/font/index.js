const express = require('express')
const homePage = require('./homePage')
const siderBar = require('./siderBar')

const router = express.Router()
router.use('/homePage',homePage)
router.use('/siderBar',siderBar)

module.exports = router