// Se importan las clases de la librería
const { Sequelize, Model, DataTypes } = require('sequelize');

// Se crea una instancia de la conexión a la base de datos
const sequelize = new Sequelize('tareadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' // 'mysql' | 'mariadb' | 'postgres' | 'mssql'
});

// Se exportan la conexión a MySQL, Model y DataTypes para poder usarlas en los modelos
module.exports = {
    sequelize,
    DataTypes,
    Model
}
