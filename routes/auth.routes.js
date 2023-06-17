const { login } = require('../controllers/auth.controllers');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

// =====================================================
// Rutas para renderizar las vistas de login y registro
// =====================================================

router.get('/login', (req, res) => res.render('auth/login'));

router.get('/register', (req, res) => res.render('auth/register'));



// =====================================================
//         Rutas para autenticar y registrar usuarios
// =====================================================

router.post('/api/login', login)

// ruta para validar el token
router.get('/api/validar-token', (req, res) => {

    const token = req.header('Authorization');

    if (!token) {
        return res.redirect('/login');
    }

    const isValidToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!isValidToken) {
        return res.redirect('/login');
    }

    return res.json({ ok: true })
})


module.exports = router;