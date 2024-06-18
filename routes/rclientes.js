// Importamos modulo de Express para trabajar la Ruta
const { Router } = require('express');
// Importamos los metodos creados en controllers
const {
    Createcliente,
    GetclientebyID,
    Getcliente,
    Updatecliente,
    Deletecliente
} = require('../controllers/cclientes');
// Creamos una instancia del objeto route

const router = Router();

// Create (necesita recibir cuerpo)
router.post('/', Createcliente)

// Read
router.get('/', Getcliente)
router.get('/:id', GetclientebyID)

// Update
router.put('/:id', Updatecliente)

// Delete
router.delete('/:id', Deletecliente)

//Exportacion de rutas(routes)
module.exports = router;