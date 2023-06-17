const { obtenerUsuarios, crearUsuario } = require('../controllers/usuario.controllers');
const { validarJWT } = require('../middlewares/validar_jwt');

const router = require('express').Router();

// ==========================================
// Rutas para renderizar las vistas de usuarios
// ==========================================
router.get('/usuarios/', async (req, res) => {
    return res.render('usuario/lista_usuarios');
});

router.get('/usuario/nuevo', async (req, res) => {
    return res.render('usuario/nuevo_usuario');
});

// ==========================================
//         Rutas para CRUD de usuarios
// ==========================================

router.get('/api/usuarios/', [validarJWT] , obtenerUsuarios);

router.post('/api/usuario/', crearUsuario);

router.put('/api/usuario/:id', (req, res) => { });

router.delete('/api/usuario/:id', (req, res) => { });



module.exports = router;