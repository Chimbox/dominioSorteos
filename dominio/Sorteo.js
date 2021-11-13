const mongoose = require('mongoose');
const schema = mongoose.Schema;

const SorteoSchema = new mongoose.Schema({
    numMin: Number,
    numMax: Number,
    precioDeNumeros: Number,
    fechaInicioVenta: Date,
    fechaFinVenta: Date,
    fechaCreacion: { type: Date, default: Date.now },
    fechaSorteo: Date,
    diasLimiteApartado: Number,
    imagen: String,
    titulo: String,
    descripcion: String,
    tiempoRecordatorio: Number,
    boletoGanador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boleto'
    },
    boletos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Boleto'
        }
    ],
    estadoSorteo: {
        type: String,
        enum : ['VIGENTE','TERMINADO', 'TERMINADO'],
        default: 'VIGENTE'
    }
});

const sorteo = mongoose.model('Sorteo', SorteoSchema);

module.exports = sorteo;
