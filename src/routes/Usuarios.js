const express = require('express');
const Router = express.Router();

const Usuarios = require('../Controllers/Usuarios')

Router.get('/',Usuarios.index)

module.exports = Router;