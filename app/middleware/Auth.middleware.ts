const https = require('https')

const customerKey = process.env.AGORA_CUSTOMER_ID;
const customerSecret = process.env.AGORA_CUSTOMER_SECRET;

const plainCredential = customerKey + ":" + customerSecret

const encodedCredential = Buffer.from(plainCredential).toString('base64')
const authorizationField = "Basic " + encodedCredential

const options = {
  hostname: 'api.agora.io',
  port: 443,
  path: '/dev/v2/projects',
  method: 'GET',
  headers: {
    'Authorization':authorizationField,
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  console.log(`Status code: ${res.statusCode}`)
  res.on('data', d => {
    process.stdout.write(d)
  })
})
req.on('error', error => {
  console.error(error)
})
req.end()