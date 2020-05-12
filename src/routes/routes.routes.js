const express = require('express');
const routes = express.Router();

const {Usuarios} = require('../Controllers/index')

routes.get('/usuarios',Usuarios.index)

module.exports = routes;