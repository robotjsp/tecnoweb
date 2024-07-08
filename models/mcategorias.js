const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema({
  tipo: {
    type: String,
    maxLength: 255,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model("Categorias", CategoriaSchema);