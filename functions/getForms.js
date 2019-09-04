'use strict'
const fs = require('fs')

const createResponse = (status, body) => ({
  statusCode: status,
  headers: { 'Access-Control-Allow-Origin': '*' },
  body: JSON.stringify(body)
})

module.exports.handler = (event, context, callback) => {
  const forms = fs.readFileSync(`${__dirname}/../assets/fields.json`)
  return callback(null, createResponse(200, JSON.parse(forms)))
}

module.exports.test = { createResponse }
