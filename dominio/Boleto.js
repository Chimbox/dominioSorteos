const mongoose = require('mongoose');

const Boleto = {
    numero: Number,
    comprobantePago: String,
    estadoBoleto: {
        type: String,
        enum : ['LIBRE','APARTADO', 'PAGADO'],
        default: 'LIBRE'
    },
    tipoPago: {
        type: String,
        enum : ['PAYPAL','TRANSFERENCIA', 'EFECTIVO'],
        default: 'PAYPAL'
    },
    movimientoBoleto: {
        fecha: Date,
        descripcion: String
    },
    persona: {
        nombre: String,
        correo: String,
        direccion: String,
        numTelefono: String,
        ciudad: String,
        entidad: String
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cliente'
    },
    sorteo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sorteo'
    }
}

module.exports = Boleto;


