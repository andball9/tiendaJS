const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Puerto} = require('./Config/index');
require('dotenv').config()
const app = express();

// Peticiones y convertir a json
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))

// creando rutas del proyecto
app.use('/',require('./routes/routes.routes'))

const PORT = process.env.PORT?process.env.PORT:Puerto

// Creando puertos del servidor 
app.listen(PORT,()=>{
    console.log(`Aplicacion corriendo en ${PORT}`);
})
