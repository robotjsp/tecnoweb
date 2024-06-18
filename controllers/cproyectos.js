//Importamos desde la carpeta models el tipo que corresponde al archivo
//Procedemos a poner el mismo nombre del Alias exportado desde el "models"
const proyectoJSON = require('../models/mproyectos');
//Importa el tipo de dato
const { request, response } = require('express');

// Create (necesita recibir cuerpo) ------------------------------------
const CreateProyectos = async (req = request, res = response) => {
    console.log(req.body)
    
    //New method
    const {number, title, startDate, deliveryDate, value, mclientes, tipoproyectos, universidad, etapa} = req.body;
    // Creamos una condicion
    try {

        const proyectoJSON_Query = await proyectoJSON.findOne({serial})
        // Validamos los datos
        if (proyectoJSON_Query) {
            return res.status(400).json({ msg: 'File cproyectos| ❌ Error: Nombre esta repetido. 🛈 Esta acción no modificará la DB' })
        }

        // Creamos el objeto con los datos de la media
        const data = {serial,titulo,sinopsis,urlfilm,portada,dateposting,genero,director,productora,tipo};

        // Creamos el nuevo documento en la base de datos
        const JSON = new proyectoJSON(data);
        console.log(JSON);
        await JSON.save();

        // Crear respuesta positiva #201
        res.status(201).json(JSON);
    } catch (e) {
        console.log(error);
        return res.status(500).json({ msg: 'File cproyectos| ❌ Error durante la solicitud para crear:', error });
    }
};
// Read by ID ------------------------------------------------------------
const GetProyectosbyID = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const query = { _id: id }
        const proyectoJSON_QuerybyId = await proyectoJSON.findOne(query)
        return res.json(proyectoJSON_QuerybyId)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cproyectos| ❌ Error durante la lectura:', e })
    }
}

// Read All ------------------------------------------------------------
const GetProyectos = async (req = request, res = response) => {
    try {
        console.log(req.query)
        const status = req.query.status
        const query = { status: status }
        const proyectoJSON_Query = await proyectoJSON.find(query)
        return res.json(proyectoJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cproyectos| ❌ Error durante la lectura:', e })
    }
}

// Update------------------------------------------------------------
const UpdateProyectos = async (req = request, res = response) => {
    try {
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        const proyectoJSONQuerybyId = await proyectoJSON.findById(id)
        //if(!typeDeviceQuerybyId){
        //    return console.log('Este dispositivo no existe')
        //}
        data.updatedate = new Date()
        console.log(data)
        const mproyectoJSON_Query = await proyectoJSON.findByIdAndUpdate(id, data, { new: true })
        return res.json(proyectoJSON_Query)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cproyectos| ❌ Error durante la actualizacion:', e })
    }
}

// Delete ------------------------------------------------------------
const DeleteProyectos = async (req = request, res = response) => {
    try {
        console.log(req.params)
        const id = req.params.id
        const proyectoJSON_QuerybyId = await proyectoJSON.findById(id)
        if (!proyectoJSON_QuerybyId) {
            return res.status(404).json({ msg: 'File cproyectos| 🛈 Este Id no existe en nuestra BD' })
        }
        await proyectoJSON.findByIdAndDelete(id)
        return res.status(404).json({ msg: 'File cproyectos| ✔️ Elemento eliminado con exito' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'File cproyectos| ❌ Error durante la solicitud para eliminar:', e })
    }
}
module.exports = {
    CreateProyectos,
    GetProyectosbyID,
    GetProyectos,
    UpdateProyectos,
    DeleteProyectos
}