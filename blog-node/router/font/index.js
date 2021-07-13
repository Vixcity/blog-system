const express = require('express')
const tags = require('./tags')
const docs = require('./docs')
const homePage = require('./homePage')
const siderBar = require('./siderBar')
const archives = require('./archives')
const amusement = require('./amusement')
const categories = require('./categories')

const router = express.Router()
router.use('/tags',tags)
router.use('/docs',docs)
router.use('/homePage',homePage)
router.use('/siderBar',siderBar)
router.use('/archives',archives)
router.use('/amusement',amusement)
router.use('/categories',categories)

module.exports = router