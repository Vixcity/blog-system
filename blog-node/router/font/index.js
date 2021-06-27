const express = require('express')
const homePage = require('./homePage')
const siderBar = require('./siderBar')
const archives = require('./archives')

const router = express.Router()
router.use('/homePage',homePage)
router.use('/siderBar',siderBar)
router.use('/archives',archives)

module.exports = router