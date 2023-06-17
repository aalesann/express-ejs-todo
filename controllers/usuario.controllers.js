const usuarioCtrl = {};
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

// Controlador para crear nuevo usuario
usuarioCtrl.crearUsuario = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Se verifica si el usuario ya existe
        const existeUsuario = await Usuario.findOne({
            where: {
                email
            }
        });


        if (existeUsuario) {
            throw ({ // throw siempre debe ejecutarse dentro de un try catch
                status: 400,
                message: 'El usuario ya existe',
            })
        };

        const nuevoUsuario = new Usuario({
            username,
            email,
            password,
        });

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        nuevoUsuario.password = await bcrypt.hash(password, salt);

        // Guardar usuario en la base de datos
        const usuarioCreado = await nuevoUsuario.save();

        if (!usuarioCreado) {
            throw ({
                message: 'Error al crear el usuario',
            })
        }

        // Se retorna la respuesta al cliente
        return res.status(201).json({
            message: 'Usuario creado exitosamente',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al crear el usuario',
        });
    }
};

// Ctrl para obtener datos de un único usuario
usuarioCtrl.obtenerUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            throw ({
                status: 404,
                message: 'No se ha encontrado el usuario'
            })
        }

        return res.json(usuario);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message
        })
    };

}

// Controlador para obtener todos los usuarios
usuarioCtrl.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            where: {
                estado: true,
            }
        });

        if (!usuarios) {
            throw ({
                status: 404,
                message: 'No se encontraron usuarios',
            });
        }

        return res.status(200).json(usuarios);

    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al obtener los usuarios',
        });
    }
};


usuarioCtrl.actualizarUsuario = async (req, res) => {

    const { id } = req.params;

    const { email, username } = req.body;


    try {

        const usuarioActualizado = await Usuario.update({
            email,
            username
        }, {
            where: {
                id
            }
        })

        if (!usuarioActualizado) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar el usuario'
            })
        }

        return res.json({
            message: 'Usuario actualizado correctamente',
            usuarioActualizado
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error de servidor, contacte al area de sistemas'
        })
    }


}

// Ctrl para eliminar un usuario de forma lógica
usuarioCtrl.eliminarUsuario = async (req, res) => {

    const { id } = req.params

    try {

        // Se cambia el estado del registro a false para indicar que el usuario fue eliminado
        const usuarioEliminado = Usuario.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        })


        // Si la BD devuelve false, significa que no eliminó
        if (!usuarioEliminado) {
            throw ({
                status: 400,
                message: 'Error al eliminar usuario'
            })
        }

        // Si pasa la validación
        return res.json({
            message: 'Usuario eliminado con éxito',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 5000).json({
            message: error.message || 'Error de servidor, contacte al área de sistemas'
        })
    }

}




module.exports = usuarioCtrl;