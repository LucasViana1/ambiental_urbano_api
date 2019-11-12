const Sequelize = require("sequelize");

const banco = 'ambiental_urbano';
const user = 'root';
const senha = '';
const server = 'localhost';

const sequelize = new Sequelize(banco, user, senha,{
    host: server,
    dialect: 'mysql',
    timezone: 'America/Sao_Paulo'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}