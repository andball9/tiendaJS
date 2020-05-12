const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Puerto} = require('./Config/index');
const app = express();

// Peticiones y convertir a json
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))

// creando rutas del proyecto
app.use('/',require('./routes/routes.routes'))

// Creando puertos del servidor 
app.listen(Puerto,()=>{
    console.log(`Aplicaion corriendo en ${Puerto}`)
})
