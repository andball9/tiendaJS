const express = require('express');
const Router = express.Router();
const contrologin = require('../Controllers/Login');
const Controlclientes = require('../Controllers/Clientes');

Router.post('/', contrologin.login)
    .post('/cliente', contrologin.loginCliente)
    .post('/register', Controlclientes.create)
module.exports = Router;