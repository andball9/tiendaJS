const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ProductoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
        enum: [
            'audifonos',
            'cables',
            'cargadores',
            'mauses',
            'teclados',
            'forros',
            'vidrios',
            'popsokets',
            'otro'
        ]
    },
    stock: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true
    }
});


const Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;