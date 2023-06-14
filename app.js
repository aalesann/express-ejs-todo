const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./db');
require('ejs');

const port = 4000;

// Se inicializa express para poder usar sus métodos
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Archivos estáticos
app.use(express.static(__dirname + '/public'));

// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');

// Conexión a base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));

// Configuración de rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/tarea.routes'));

// Servidor en escucha de peticiones
app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));