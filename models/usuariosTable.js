const db = require('./db');

const Usuarios = db.sequelize.define('usuarios', {
    login: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
});

//Criar a tabela
// Usuarios.sync({force: true})

module.exports = Usuarios
