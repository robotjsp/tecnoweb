const { Schema, model } = require("mongoose");

const EtapasSchema = Schema({
  nombre: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = model("Etapas", EtapasSchema);