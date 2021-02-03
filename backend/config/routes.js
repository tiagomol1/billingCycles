const express = require('express')

module.exports = (server) => {

  //API DE ROTAS
  const router = express.Router()//middleware queé chamado sempre que na url houver '/api'
  server.use('/api', router)

  const billingCycleService = require('../api/billingCycle/billingCycleService')

  billingCycleService.register(router, '/billingCycles')

}