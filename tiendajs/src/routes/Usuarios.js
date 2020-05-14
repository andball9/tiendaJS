const express = require('express');
const Router = express.Router();

const Usuarios = require('../Controllers/Usuarios')

Router.get('/', Usuarios.index)
    .post('/register', Usuarios.create)
    .get('/:key/:value', Usuarios.find, Usuarios.show)
    .put('/:key/:value', Usuarios.find, Usuarios.update)
    .delete('/:key/:value', Usuarios.find, Usuarios.remove)

module.exports = Router;