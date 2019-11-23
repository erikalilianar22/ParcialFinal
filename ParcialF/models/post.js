const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    codigo: {
      type: String,
      required: true
    },
    marca: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    peso: {
      type: String,
      required: true
    },
    precio: {
      type: String,
      required: true
    }
  });


module.exports = mongoose.model("Post", PostSchema);
