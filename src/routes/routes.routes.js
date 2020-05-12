const express = require('express');
const app = express();

app.use('/usuarios',require('./Usuarios'));
app.use('/productos',require('./Productos'));
app.use('/Pagos',require('Pagos'));
app.use('/Clientes',require('Clientes'));
module.exports = app;