const { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto, obtenerProducto } = require('../controllers/producto.controllers');

// Se requiere el modelo Producto
const router = require('express').Router();

// Ruta para crear un producto en la Base de Datos mysql
router.post('/api/producto', crearProducto);

// Ruta para obtener un producto
router.get('/api/producto/:id', obtenerProducto);

// Devuelve los productos almacenados en la Base de Datos mysql
router.get('/api/productos', obtenerProductos);

// Eliminar un producto
router.delete('/api/producto/:id', eliminarProducto);

// Actualizar un producto
router.put('/api/producto/:id', actualizarProducto);

module.exports = router;