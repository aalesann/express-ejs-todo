const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

// nombre, cod, estado, precio, stock
const Producto = sequelize.define('Producto', {
    // Model attributes are defined here
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cod: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    estado: {
        type: DataTypes.BOOLEAN
        // allowNull defaults to true
    },
    precio: {
        type: DataTypes.FLOAT
        // allowNull defaults to true
    },
    stock: {
        type: DataTypes.INTEGER
        // allowNull defaults to true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'productos'
});

module.exports = Producto;