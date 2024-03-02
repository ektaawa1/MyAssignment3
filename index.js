const express = require('express')
const https = require('https')

const fs = require('fs')

const studentInfo = require('./routes/springStudentInfo')

const app = express()
// const cert = fs.readFileSync('./ssl/cert.pem')
// const key = fs.readFileSync('./ssl/key.pem')

//also you can write the above 2 lines like this-
const httpsOptions = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
    passphrase: '1234'
}

const server = https.createServer(httpsOptions,app)
app.use(express.json())

app.use('/https-web-service/v1', studentInfo)
// domain-name/web-service/v1/<route/path/endpoint>
// example-
// safeway.com/order-purchases/v1/purchaseHistory


server.listen(8080, () => {
    console.log('Server is up')
})
