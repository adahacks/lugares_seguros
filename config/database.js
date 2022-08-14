const {Sequelize} = require("sequelize");
const {DB} = require("./config");

const db = new Sequelize(DB.NAME, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: DB.DIALECT,
})


module.exports = {db};

