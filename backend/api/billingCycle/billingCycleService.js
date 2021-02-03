const BillingCycle = require('./billingCycle')

//cria padrao de HTTP url para o objeto BillingCycle
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) //exibe dados novos ao alterar api e valida conforme devinido no billingCycle.js

module.exports = BillingCycle