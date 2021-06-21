const mongoose = require('../index');
const rotulo = require('./cadastroDeRotulos')


const resultado = rotulo.find({})

module.exports = resultado