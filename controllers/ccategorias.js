//Importamos desde la carpeta models el tipo que corresponde al archivo
//Procedemos a poner el mismo nombre del Alias exportado desde el "models"
const categoriaJSON = require('../models/mcategorias');
//Importa el tipo de dato
const { request, response } = require('express');

// Create (necesita recibir cuerpo) ------------------------------------
const Createcategorias = async (req = request, res = response) => {
    console.log(req.body)
    
    //New method
    const {tipo} = req.body;
    // Creamos una condicion
    try {

        const categoriaJSON_Query = await categoriaJSON.findOne({serial})
        // Validamos los datos
        if (categoriaJSON_Query) {
            return res.status(400).json({ msg: 'File ccategorias| ❌ Error: Nombre esta repetido. 🛈 Esta acción no modificará la DB' })
        }

        // Creamos el objeto con los datos de la media
        const data = {tipo};

        // Creamos el nuevo documento en la base de datos
        const JSON = new categoriaJSON(data);
        console.log(JSON);
        await JSON.save();

        // Crear respuesta positiva #201
        res.status(201).json(JSON);
    } catch (e) {
        console.log(error);
        return res.status(500).json({ msg: 'File ccategorias| ❌ Error durante la solicitud para crear:', error });
    }
};
// Read by ID ------------------------------------------------------------
const GetcategoriasbyID = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const query = { _id: id }
        const categoriaJSON_QuerybyId = await categoriaJSON.findOne(query)
        return res.json(categoriaJSON_QuerybyId)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File ccategorias| ❌ Error durante la lectura:', e })
    }
}

// Read All ------------------------------------------------------------
const Getcategorias = async (req = request, res = response) => {
    try {
        console.log(req.query)
        const status = req.query.status
        const query = { status: status }
        const categoriaJSON_Query = await categoriaJSON.find(query)
        return res.json(categoriaJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File ccategorias| ❌ Error durante la lectura:', e })
    }
}

// Update------------------------------------------------------------
const Updatecategorias = async (req = request, res = response) => {
    try {
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        const categoriaJSONQuerybyId = await categoriaJSON.findById(id)
        //if(!typeDeviceQuerybyId){
        //    return console.log('Este dispositivo no existe')
        //}
        data.updatedate = new Date()
        console.log(data)
        const mcategoriaJSON_Query = await categoriaJSON.findByIdAndUpdate(id, data, { new: true })
        return res.json(categoriaJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File ccategorias| ❌ Error durante la actualizacion:', e })
    }
}

// Delete ------------------------------------------------------------
const Deletecategorias = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const categoriaJSON_QuerybyId = await categoriaJSON.findById(id)
        if (!categoriaJSON_QuerybyId) {
            return res.status(404).json({ msg: 'File ccategorias| 🛈 Este Id no existe en nuestra BD' })
        }
        await categoriaJSON.findByIdAndDelete(id)
        return res.status(404).json({ msg: 'File ccategorias| ✔️ Elemento eliminado con exito' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File ccategorias| ❌ Error durante la solicitud para eliminar:', e })
    }
}
module.exports = {
    Createcategorias,
    GetcategoriasbyID,
    Getcategorias,
    Updatecategorias,
    Deletecategorias
}