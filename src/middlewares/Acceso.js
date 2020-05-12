const jwt = require('jsonwebtoken');
const CONFIG = require('../config/index');

module.exports = function (req, res, next) {
    const token = req.header('authorization');
    if (!token) {
        return res.send({ mensaje: 'Acceso Denegado' })
    }
    try {
        next();
    }
    catch{
        res.send('token invalido')
    }
}