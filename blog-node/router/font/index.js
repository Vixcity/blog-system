const express = require('express')
const tags = require('./tags')
const docs = require('./docs')
const homePage = require('./homePage')
const siderBar = require('./siderBar')
const archives = require('./archives')
const categories = require('./categories')

const router = express.Router()
router.use('/tags',tags)
router.use('/homePage',homePage)
router.use('/siderBar',siderBar)
router.use('/archives',archives)
router.use('/categories',categories)
router.use('/docs',docs)

module.exports = router