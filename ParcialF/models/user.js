const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

  var RegSchema = Schema({
    codigo: {
        type: String,
        required: true,
       unique:true
    },
    marca: String,
    nombre: String,
    peso: String,
    precio: String
});

module.exports = mongoose.model("Reg", RegSchema);