const restful = require('node-restful')
const { mongoose } = require('node-restful/lib/restful')
const mogoose = restful.mongoose


const credSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
  status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  credits: [credSchema],
  debts: [debtSchema]
})

//Este modo de exportar o módulo faz com que somente a regra definida em billingCycleSchema seja publica
module.exports = restful.model('BillingCycle', billingCycleSchema)