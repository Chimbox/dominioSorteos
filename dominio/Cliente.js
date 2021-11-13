const mongoose = require('mongoose');

const Cliente = {
    nombre: String,
    contrasenia: String,
    correo: String,
    direccion: String,
    numeroTelefono: String,
    ciudad: String,
    entidad: String
}


module.exports = Cliente;
