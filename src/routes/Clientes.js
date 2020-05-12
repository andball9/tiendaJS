const express = require('express');
const Router = express.Router();
const Productos = require('../Controllers/Clientes')

Router.get('/',Productos.index)
module.exports = Router;