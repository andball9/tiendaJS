const express = require('express');
const app = express();

app.use('/usuarios',require('./Usuarios'));
app.use('/productos',require('./Productos'))
module.exports = app;