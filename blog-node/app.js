const fs = require('fs')
const cors = require('cors')
const https = require('https')
const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)

const privateKey = fs.readFileSync('https/4773855_www.vixcity.xyz.key','utf8')
const certificate = fs.readFileSync('https/4773855_www.vixcity.xyz.pem','utf8')
const credentials = { key: privateKey, cert: certificate }
const httpsServer = https.createServer(credentials, app)
const SSLPORT = 2345

const server = app.listen(SSLPORT-1, '0.0.0.0', function() {
    const { address, port } = server.address()
    console.log('Http服务启动成功：http://%s:%s', address, port)
})

httpsServer.listen(SSLPORT, '0.0.0.0', function() {
    console.log('HTTPS Server is running on: https://www.vixcity.xyz:%s', SSLPORT)
})