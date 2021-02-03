const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//bodyParser, responsável por interpretar dados da requisiçao
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const port = 3003

server.listen(port, function(){
  console.log(`\nBACKEND is running on port ${port}...`)
})

module.exports = server
