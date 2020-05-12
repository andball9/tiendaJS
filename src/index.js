const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {PORT} = require('./Config/index');
const app = express();

// base de datos
const Database = require('./Config/database');
Database.connect();

// Peticiones y convertir a json
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))

// creando rutas del proyecto
app.use('/',require('./routes/routes.routes'));

// Creando puertos del servidor 
app.listen(PORT,()=>{
    console.log(`Aplicacion corriendo en ${PORT}`);
})
