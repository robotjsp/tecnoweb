// Importamos modulo de Express para trabajar la Ruta
const { Router } = require('express');
// Importamos los metodos creados en controllers
const {
    Createuniversidades,
    GetuniversidadesbyID,
    Getuniversidades,
    Updateuniversidades,
    Deleteuniversidades
} = require('../controllers/cuniversidades');
// Creamos una instancia del objeto route

const router = Router();

// Create (necesita recibir cuerpo)
router.post('/', Createuniversidades)

// Read
router.get('/', Getuniversidades)
router.get('/:id', GetuniversidadesbyID)

// Update
router.put('/:id', Updateuniversidades)

// Delete
router.delete('/:id', Deleteuniversidades)

//Exportacion de rutas(routes)
module.exports = router;