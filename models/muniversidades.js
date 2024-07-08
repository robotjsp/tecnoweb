//Creamos un objeto de tipo Schema que importe el modulo(mongoose)
const { Schema, model } = require("mongoose");
//Creamos una Nueva instancia de Schema que reciba un objeto(con parametro) con los atributos
const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, '🛈 Recuerda: Este campo es obligatorio']
    },
    direccion:{
      type: String,
      required: true
    },
    pbx:{
      type: String,
      required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    },
    createdate: {
        type: Date,
        default: new Date()
    },
    update: {
        type: Date,
        default: new Date()
    }
});
//Procedemos a exportar un modelo de tipo mongoose, se crea Alias 'directorSchema' y se llama desde el controller
module.exports = model('Universidades', UniversidadSchema);