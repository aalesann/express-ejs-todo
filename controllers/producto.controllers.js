const Producto = require('../models/Producto');

const ctrlProducto = {};

ctrlProducto.obtenerProductos = async (req, res) => {

    const productos = await Producto.findAll();

    return res.json({
        message: 'Productos obtenidos exitosamente',
        data: productos
    });

}

ctrlProducto.obtenerProducto = async (req, res) => {
    const { id } = req.params;

    try {
        const producto = await Producto.findByPk(id);

        if (!producto) {
            throw ({
                status: 404,
                message: 'Producto no encontrado'
            })
        }

        return res.json({
            message: 'Producto obtenido exitosamente',
            data: producto
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Ocurrió un error al obtener el producto'
        });
    }
}

ctrlProducto.crearProducto = async (req, res) => {

    const { nombre, cod, estado, precio, stock } = req.body;

    const producto = Producto.create({
        nombre,
        cod,
        estado,
        precio,
        stock
    })

    return res.json({
        message: 'Producto creado exitosamente',
        data: producto
    });

}


// Eliminación lógica
ctrlProducto.eliminarProducto = async (req, res) => {

    const { id } = req.params;

    try {
        const producto = await Producto.update({
            estado: 0,
            deletedAt: new Date()
        }, {
            where: {
                id
            }
        });

        if (data[0] === 0) {
            throw ({
                status: 404,
                message: 'Producto no encontrado'
            })
        }

        return res.json({
            message: 'Producto eliminado exitosamente',
            data: producto
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Ocurrió un error al eliminar el producto'
        });
    }
}

ctrlProducto.actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const { nombre, cod, estado, precio, stock } = req.body;

    const producto = await Producto.update({
        nombre,
        cod,
        estado,
        precio,
        stock
    }, {
        where: {
            id
        }
    });

    return res.json({
        message: 'Producto actualizado exitosamente',
        data: producto
    });
}


module.exports = ctrlProducto;