// Importamos modulo de Express para trabajar la Ruta
const { Router } = require('express');
// Importamos los metodos creados en controllers
const {
    CreateProyectos,
    GetProyectosbyID,
    GetProyectos,
    UpdateProyectos,
    DeleteProyectos
} = require('../controllers/cproyectos');
// Creamos una instancia del objeto route

const router = Router();

// Create (necesita recibir cuerpo)
router.post('/', CreateProyectos)

// Read
router.get('/', GetProyectos)
router.get('/:id', GetProyectosbyID)

// Update
router.put('/:id', UpdateProyectos)

// Delete
router.delete('/:id', DeleteProyectos)

//Exportacion de rutas(routes)
module.exports = router;