const express = require('express');
const Router = express.Router();

const Clientes = require('../Controllers/Clientes')

Router.get('/', Clientes.index)
    .post('/register', Clientes.create)
    .get('/:key/:value', Clientes.find, Clientes.show)
    .put('/:key/:value', Clientes.find, Clientes.update)
    .delete('/:key/:value', Clientes.find, Clientes.remove)

module.exports = Router;