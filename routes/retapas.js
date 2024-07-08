// Importamos modulo de Express para trabajar la Ruta
const { Router } = require('express');
// Importamos los metodos creados en controllers
const {
    CreateEtapas,
    GetEtapasbyID,
    GetEtapas,
    UpdateEtapas,
    DeleteEtapas
} = require('../controllers/cetapa');
// Creamos una instancia del objeto route

const router = Router();

// Create (necesita recibir cuerpo)
router.post('/', CreateEtapas)

// Read
router.get('/', GetEtapas)
router.get('/:id', GetEtapasbyID)

// Update
router.put('/:id', UpdateEtapas)

// Delete
router.delete('/:id', DeleteEtapas)

//Exportacion de rutas(routes)
module.exports = router;