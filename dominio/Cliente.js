const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ClientSchema = new mongoose.Schema({
    nombre: String,
    contrasenia: String,
    correo: String,
    direccion: String,
    numeroTelefono: String,
    ciudad: String,
    entidad: String
});

const cliente = mongoose.model('Cliente', ClientSchema);

module.exports = cliente;
