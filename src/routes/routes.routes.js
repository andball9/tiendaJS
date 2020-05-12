const express = require('express');
const app = express();

const restricciones = require('../middlewares/Acceso')

app.use('/usuarios',restricciones,require('./Usuarios'));
app.use('/productos',restricciones,require('./Productos'));
app.use('/Pagos',restricciones,require('./Pagos'));
app.use('/Clientes',restricciones,require('./Clientes'));
app.use('/Login',require('./Login'))

module.exports = app;