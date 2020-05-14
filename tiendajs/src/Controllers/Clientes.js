const Cliente = require('../models/Clientes')


function index(req, res) {
    Cliente.find({})
        .then(clientes => {
            if (clientes.length) {
                return res.send({ clientes });
            } else {
                return res.send({ mensaje: 'Sin Clientes' });
            }
        }).catch(error => res.send({ error }));
}

function show(req, res) {
    if (req.body.error) return res.send({ error });
    if (!req.body.clientes) return res.send({ mensaje: 'No Funciona' });
    let clientes = req.body.clientes;
    return res.status(200).send({ clientes });
}
function create(req, res) {
    mensaje = "Cliente registrado correctamente"
    new Cliente(req.body).save()
        .then(cliente => {
            res.send({ mensaje, cliente })
        })
        .catch(error => res.send({ error }));
}
function update(req,res){
    if(req.body.error) return res.send({error});
    if(!req.body.clientes) return res.send({mensaje: 'No funciona'});
    let Cliente = req.body.clientes[0];
    Cliente = Object.assign(Cliente,req.body);
    Cliente.save().then(cliente => res.status(200).send({message: "Actualizado", cliente})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.clientes) return res.status(404).send({message: 'No funciona'});
    req.body.clientes[0].remove().then(cliente => res.status(200).send({message: 'Eliminado', cliente})).catch(error => res.status(500).send({error}));
}
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Cliente.find(query).then(clientes => {
        if(!clientes.length) return next();
        req.body.clientes = clientes;
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