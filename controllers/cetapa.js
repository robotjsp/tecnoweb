//Importamos desde la carpeta models el tipo que corresponde al archivo
//Procedemos a poner el mismo nombre del Alias exportado desde el "models"
const EtapasJSON = require('../models/metapas');
//Importa el tipo de dato
const { request, response } = require('express');

// Create (necesita recibir cuerpo) ------------------------------------
const CreateEtapas = async (req = request, res = response) => {
    console.log(req.body)
    
    //New method
    const {nombre} = req.body;
    // Creamos una condicion
    try {
        const name = (req.body.name) ? req.body.name.toString() : '';
        const EtapasJSON_Query = await EtapasJSON.findOne({nombre})
        if (EtapasJSON_Query) {
            return res.status(400).json({ msg: 'File cEtapas| ❎ Error: Nombre de director repetido. 🛈 Esta acción no modificará la DB' })
        }
        const data = {nombre}
        const JSON = new EtapasJSON(data)
        console.log(JSON)
        await JSON.save()
        //Crear respuesta positiva #201
        res.status(201).json(JSON)
    } catch (e) {
        return res.status(500).json({ msg: 'File cEtapas| ❌ Error durante la solicitud para crear:', e });
    }
};
// Read by ID ------------------------------------------------------------
const GetEtapasbyID = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const query = { _id: id }
        const EtapasJSON_QuerybyId = await EtapasJSON.findOne(query)
        return res.json(EtapasJSON_QuerybyId)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cEtapas| ❌ Error durante la lectura:', e })
    }
}

// Read All ------------------------------------------------------------
const GetEtapas = async (req = request, res = response) => {
    try {
        console.log(req.query)
        const status = req.query.status
        const query = { status: status }
        const EtapasJSON_Query = await EtapasJSON.find(query)
        return res.json(EtapasJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cEtapas| ❌ Error durante la lectura:', e })
    }
}

// Update------------------------------------------------------------
const UpdateEtapas = async (req = request, res = response) => {
    try {
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        const EtapasJSONQuerybyId = await EtapasJSON.findById(id)
    
        data.updatedate = new Date()
        console.log(data)
        const mEtapasJSON_Query = await EtapasJSON.findByIdAndUpdate(id, data, { new: true })
        return res.json(EtapasJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cEtapas| ❌ Error durante la actualizacion:', e })
    }
}

// Delete ------------------------------------------------------------
const DeleteEtapas = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const EtapasJSON_QuerybyId = await EtapasJSON.findById(id)
        if (!EtapasJSON_QuerybyId) {
            return res.status(404).json({ msg: 'File cEtapas| 🛈 Este Id no existe en nuestra BD' })
        }
        await EtapasJSON.findByIdAndDelete(id)
        return res.status(404).json({ msg: 'File cEtapas| ✔️ Elemento eliminado con exito' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cEtapas| ❌ Error durante la solicitud para eliminar:', e })
    }
}
module.exports = {
    CreateEtapas,
    GetEtapasbyID,
    GetEtapas,
    UpdateEtapas,
    DeleteEtapas
}