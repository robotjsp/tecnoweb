const { Schema, model } = require("mongoose");

const proyectoSchema = Schema({
  number: {
    type: String,
    maxLength: 255,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    maxLength: 255,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  mclientes: {
    type: Schema.Types.ObjectId,
    ref:'mclientes'
  },
  tipoproyectos: {
    type: Schema.Types.ObjectId,
    ref:'Tipoproyectos'
  },
  universidad: {
    type: Schema.Types.ObjectId,
    ref:'Universidades'
  },
  etapa: {
    type: Schema.Types.ObjectId,
    ref:'Etapas'
  },
});

module.exports = model("Proyectos", proyectoSchema);
