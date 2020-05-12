const express = require('express');
const Router = express.Router();
const contrologin =require('../Controllers/Login')

Router.post('/',contrologin.login)
module.exports = Router;