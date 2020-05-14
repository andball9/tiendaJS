const express = require('express');
const Router = express.Router();

const Productos = require('../Controllers/Productos')

Router.get('/', Productos.index)
    .post('/register', Productos.create)
    .get('/:key/:value', Productos.find, Productos.show)
    .put('/:key/:value', Productos.find, Productos.update)
    .delete('/:key/:value', Productos.find, Productos.remove)
    
module.exports = Router;