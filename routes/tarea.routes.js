const router = require('express').Router();
const {
    obtenerTareas,
    obtenerTarea,
    crearTarea,
    actualizarTarea,
    eliminarTarea
} = require('../controllers/tarea.controllers');


// ==========================================
// Rutas para renderizar las vistas de tareas
// ==========================================
router.get('/tareas', (req, res) => {
    res.render('tarea/index');
});

router.get('/tarea/editar/:id', (req, res) => {
    res.render('tarea/editar_tarea', { id: req.params.id });
});

router.get('/tarea/crear', (req, res) => {
    res.render('tarea/crear_tarea');
});

// ==========================================
//         Rutas para CRUD de tareas
// ==========================================


router.get('/api/tarea', obtenerTareas);

router.get('/api/tarea/:id', obtenerTarea);

router.post('/api/tarea', crearTarea);

router.put('/api/tarea/:id', actualizarTarea);

router.delete('/api/tarea/:id', eliminarTarea);


module.exports = router;