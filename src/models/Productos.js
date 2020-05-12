const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ProductosSchema = new mongoose.Schema({
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
            'accesorioscell',
            '',
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


const Productos = mongoose.model('Productos', ProductosSchema);

module.exports = Productos;