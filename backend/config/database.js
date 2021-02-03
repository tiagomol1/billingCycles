const mongoose = require('mongoose')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o liminte mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o liminte máximo de '{MAX}'."

module.exports = mongoose.connect('mongodb://localhost/db_finance', {useNewUrlParser: true, useUnifiedTopology: true })
