//Importamos desde la carpeta models el tipo que corresponde al archivo
//Procedemos a poner el mismo nombre del Alias exportado desde el "models"
const clienteJSON = require('../models/mclientes');
//Importa el tipo de dato
const { request, response } = require('express');

// Create (necesita recibir cuerpo) ------------------------------------
const Createcliente = async (req = request, res = response) => {
    console.log(req.body)
    
    //New method
    const { dni, nombre, mail} = req.body;
    // Creamos una condicion
    try {
        const name = (req.body.name) ? req.body.name.toString() : '';
        const clienteJSON_Query = await clienteJSON.findOne({dni})
        if (clienteJSON_Query) {
            return res.status(400).json({ msg: 'File cclientes| ❎ Error: Nombre de director repetido. 🛈 Esta acción no modificará la DB' })
        }
        const data = {dni, nombre, mail}
        const JSON = new clienteJSON(data)
        console.log(JSON)
        await JSON.save()
        //Crear respuesta positiva #201
        res.status(201).json(JSON)
    } catch (e) {
        return res.status(500).json({ msg: 'File cclientes| ❎ Error durante la solicitud para crear: Logs', e })
    }
};
// Read by ID ------------------------------------------------------------
const GetclientebyID = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const query = { _id: id }
        const clienteJSON_QuerybyId = await clienteJSON.findOne(query)
        return res.json(clienteJSON_QuerybyId)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File ccliente| ❌ Error durante la lectura:', e })
    }
}

// Read All ------------------------------------------------------------
const Getcliente = async (req = request, res = response) => {
    try {
        console.log(req.query)
        const status = req.query.status
        const query = { status: status }
        const clienteJSON_Query = await clienteJSON.find(query)
        return res.json(clienteJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File ccliente| ❌ Error durante la lectura:', e })
    }
}

// Update------------------------------------------------------------
const Updatecliente = async (req = request, res = response) => {
    try {
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        const clienteJSONQuerybyId = await clienteJSON.findById(id)

        data.updatedate = new Date()
        console.log(data)
        const clienteJSON_Query = await clienteJSON.findByIdAndUpdate(id, data, { new: true })
        return res.json(clienteJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File ccliente| ❌ Error durante la actualizacion:', e })
    }
}

// Delete ------------------------------------------------------------
const Deletecliente = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const clienteJSON_QuerybyId = await clienteJSON.findById(id)
        if (!clienteJSON_QuerybyId) {
            return res.status(404).json({ msg: 'File ccliente| 🛈 Este Id no existe en nuestra BD' })
        }
        await clienteJSON.findByIdAndDelete(id)
        return res.status(404).json({ msg: 'File ccliente| ✔️ Elemento eliminado con exito' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File ccliente| ❌ Error durante la solicitud para eliminar:', e })
    }
}

module.exports = {
    Createcliente,
    GetclientebyID,
    Getcliente,
    Updatecliente,
    Deletecliente
}