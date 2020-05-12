const Productos = require('../models/Productos')


function index(req, res) {
    Productos.find({})
        .then(productos => {
            if (productos.length) {
                return res.send({ productos });
            } else {
                return res.send({ mensaje: 'Sin Productos' });
            }
        }).catch(error => res.send({ error }));
}

function show(req, res) {
    if (req.body.error) return res.send({ error });
    if (!req.body.productos) return res.send({ mensaje: 'No Funciona' });
    let productos = req.body.productos;
    return res.status(200).send({ productos });
}
function create(req, res) {
    mensaje = "Producto registrado correctamente"
    new Productos(req.body).save()
        .then(productos => {
            res.send({ mensaje, productos })
        })
        .catch(error => res.send({ error }));
}
function update(req,res){
    if(req.body.error) return res.send({error});
    if(!req.body.productos) return res.send({mensaje: 'No funciona'});
    let Productos = req.body.productos[0];
    Productos = Object.assign(Productos,req.body);
    Productos.save().then(productos => res.status(200).send({message: "Actualizado", productos})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.productos) return res.status(404).send({message: 'No funciona'});
    req.body.productos[0].remove().then(productos => res.status(200).send({message: 'Eliminado', productos})).catch(error => res.status(500).send({error}));
}
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Productos.find(query).then(productos => {
        if(!productos.length) return next();
        req.body.productos = productos;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}