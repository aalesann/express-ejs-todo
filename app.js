const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./db');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Conexión a base de datos

sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));

app.use(require('./routes/producto.routes'));

app.listen(3000, console.log('Servidor corriendo en puerto 3000'));