const ctrlTarea = {};
const Tarea = require('../models/Tarea');

// Ctrl para obtener todas las tareas
ctrlTarea.obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.findAll({
            where: {
                estado: true
            }
        });

        if (!tareas || tareas.length === 0) {
            throw ({
                status: 404,
                message: 'No hay tareas registradas'
            })
        }

        return res.json(tareas);
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para obtener una tarea
ctrlTarea.obtenerTarea = async (req, res) => {
    const { id } = req.params;

    try {
        const tarea = await Tarea.findOne({
            where: {
                id,
                estado: true
            }
        });

        if (!tarea) {
            throw ({
                status: 404,
                message: 'No existe la tarea'
            })
        }
    
        return res.json(tarea);

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para crear una tarea
ctrlTarea.crearTarea = async (req, res) => {
    const { titulo, descripcion } = req.body;

    try {
        const tarea = await Tarea.create({
            titulo,
            descripcion
        });

        if (!tarea) {
            throw ({
                status: 400,
                message: 'No se pudo crear la tarea'
            })
        }

        return res.json(tarea);
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para actualizar una tarea
ctrlTarea.actualizarTarea = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    
    try {
        const tareaActualizada = await Tarea.update({
            titulo,
            descripcion
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!tareaActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la tarea'
            })
        }

        return res.json({
            message: 'Tarea actualizada correctamente',
            tareaActualizada
            
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para eliminar una tarea
ctrlTarea.eliminarTarea = async (req, res) => {
    const { id } = req.params;

    try {
        const tareaEliminada = await Tarea.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!tareaEliminada) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la tarea'
            })
        }

        return res.json({tareaEliminada, message: 'Tarea eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}




module.exports = ctrlTarea;