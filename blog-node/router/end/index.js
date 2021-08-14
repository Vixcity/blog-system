const express = require('express')
const Result = require('../../models/Result')
const jwtAuth = require('../jwt')

const router = express.Router()
router.use(jwtAuth)

module.exports = router