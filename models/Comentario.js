const { sequelize, DataTypes } = require('../db');

const Comentario = sequelize.define('Comentario', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    tableName: 'comentarios'
});

// Crear tabla si no existe
Comentario.sync();

module.exports = Tarea;
