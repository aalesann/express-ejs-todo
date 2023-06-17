const usuarioCtrl = {};
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

// Controlador para crear nuevo usuario
usuarioCtrl.crearUsuario = async (req, res) => {
    const { username, email, password } = req.body;

    try {
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

        if(!usuarioCreado) {
            throw({
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

// Controlador para obtener todos los usuarios
usuarioCtrl.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find({
            where: {
                estado: true,
            }
        });

        if(!usuarios) {
            throw({
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




module.exports = usuarioCtrl;