// Importamos modulo de Express para trabajar la Ruta
const { Router } = require('express');
// Importamos los metodos creados en controllers
const {
    Createcategorias,
    GetcategoriasbyID,
    Getcategorias,
    Updatecategorias,
    Deletecategorias
} = require('../controllers/ccategorias');
// Creamos una instancia del objeto route

const router = Router();

// Create (necesita recibir cuerpo)
router.post('/', Createcategorias)

// Read
router.get('/', Getcategorias)
router.get('/:id', GetcategoriasbyID)

// Update
router.put('/:id', Updatecategorias)

// Delete
router.delete('/:id', Deletecategorias)

//Exportacion de rutas(routes)
module.exports = router;