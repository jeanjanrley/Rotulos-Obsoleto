const mongoose = require('mongoose');
const rotulo = require('./modules/cadastroDeRotulos')

mongoose.connect('mongodb://localhost/rotulos').then(
    () => {
        console.log('Conectado ao banco de dados com sucesso!')
    }
).catch( 
    () => {
        console.log("Houve um erro ao se conectar com o banco de dados! "+err)
    }
)

module.exports = mongoose



