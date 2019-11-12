const db = require('./db');

const Registros = db.sequelize.define('registros', {
    data_ocorrido: {
        type: db.Sequelize.DATE
    },
    foto: {
        type: db.Sequelize.TEXT('long')
    },
    nivel_gravidade: {
        type: db.Sequelize.STRING
    },
    logradouro: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    },
    n_casa: {
        type: db.Sequelize.INTEGER
    },
    observacoes: {
        type: db.Sequelize.TEXT
    }
});

//Criar a tabela
//Registros.sync({force: true})

module.exports = Registros