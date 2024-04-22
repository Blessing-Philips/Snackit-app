const express = require('express')
const https = require('https')
const router = express.Router()
const env = require('dotenv').config({path: '../.env'})

router.get('/payment', () => {
    const params = JSON.stringify({
        "email": "customer@email.com",
        "amount": "20000"
    })

    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
            Authorization: 'Bearer sk_test_4409745e09f62c3e0a11af019b64536605d4858f',
            'Content-Type': 'application/json'
        }
    }

    const req = https.request(options, res => {
        let data = ''

        respaystack.on('data', (chunk) => {
            data += chunk
        });

        respaystack.on('end', () => {
            console.log(JSON.parse(data))
        })
    }).on('error', error => {
        console.error(error)
    })

    req.write(params)
    req.end()
});


module.exports = router;
