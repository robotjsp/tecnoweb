//Importamos desde la carpeta models el tipo que corresponde al archivo
//Procedemos a poner el mismo nombre del Alias exportado desde el "models"
const universidadJSON = require('../models/muniversidades');
//Importa el tipo de dato
const { request, response } = require('express');

// Create (necesita recibir cuerpo) ------------------------------------
const Createuniversidades = async (req = request, res = response) => {
    console.log(req.body)
    
    //New method
    const { nombre, direccion, pbx} = req.body;
    // Creamos una condicion
    try {
        const name = (req.body.name) ? req.body.name.toString() : '';
        const universidadJSON_Query = await universidadJSON.findOne({nombre})
        if (universidadJSON_Query) {
            return res.status(400).json({ msg: 'File cUni| ❎ Error: Nombre de director repetido. 🛈 Esta acción no modificará la DB' })
        }
        const data = {nombre, direccion, pbx}
        const JSON = new universidadJSON(data)
        console.log(JSON)
        await JSON.save()
        //Crear respuesta positiva #201
        res.status(201).json(JSON)
    } catch (e) {
        return res.status(500).json({ msg: 'File cuniversidad| ❎ Error durante la solicitud para crear: Logs', e })
    }
}

// Read by ID ------------------------------------------------------------
const GetuniversidadesbyID = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const query = { _id: id }
        const universidadJSON_QuerybyId = await universidadJSON.findOne(query)
        return res.json(universidadJSON_QuerybyId)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cuniversidades| ❌ Error durante la lectura:', e })
    }
}

// Read All ------------------------------------------------------------
const Getuniversidades = async (req = request, res = response) => {
    try {
        console.log(req.query)
        const status = req.query.status
        const query = { status: status }
        const universidadJSON_Query = await universidadJSON.find(query)
        return res.json(universidadJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cuniversidades| ❌ Error durante la lectura:', e })
    }
}

// Update------------------------------------------------------------
const Updateuniversidades = async (req = request, res = response) => {
    try {
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        const universidadJSONQuerybyId = await universidadJSON.findById(id)
        data.updatedate = new Date()
        console.log(data)
        const universidadJSON_Query = await universidadJSON.findByIdAndUpdate(id, data, { new: true })
        return res.json(universidadJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cuniversidades| ❌ Error durante la actualizacion:', e })
    }
}

// Delete ------------------------------------------------------------
const Deleteuniversidades = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const universidadJSON_QuerybyId = await universidadJSON.findById(id)
        if (!universidadJSON_QuerybyId) {
            return res.status(404).json({ msg: 'File cuniversidades| 🛈 Este Id no existe en nuestra BD' })
        }
        await universidadJSON.findByIdAndDelete(id)
        return res.status(404).json({ msg: 'File cuniversidades| ✔️ Elemento eliminado con exito' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cuniversidades| ❌ Error durante la solicitud para eliminar:', e })
    }
}

module.exports = {
    Createuniversidades,
    GetuniversidadesbyID,
    Getuniversidades,
    Updateuniversidades,
    Deleteuniversidades
}