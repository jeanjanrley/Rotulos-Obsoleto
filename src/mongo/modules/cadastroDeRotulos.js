const mongoose = require('../index');

const { Schema } = mongoose

const CadastroDeRotuloSchema = Schema({

    categoria:{
        type: String,
        require: true,
    },
    fragrancia:{
        type: String,
        require: true,
    },
    volume:{
        type: String,
        require: true,
    },
    responsavelTecnico:{
        type: String,
        require: true,
    },
    dataDeFabricacao:{
        type: String,
        require: true,
    },
    contraRotulo:{
        type: String,
        require: true,
    },
    
})

const rotulo = mongoose.model('rotulo', CadastroDeRotuloSchema)

module.exports = rotulo
