const express = require('express');
const Router = express.Router();
const Productos = require('../Controllers/Productos')

Router.get('/',Productos.index)
module.exports = Router;