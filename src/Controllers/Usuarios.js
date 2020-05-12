const Usuario = require('../models/Usuarios')


function index(req, res) {
    Usuario.find({})
        .then(users => {
            if (users.length) {
                return res.send({ users });
            } else {
                return res.send({ mensaje: 'Sin Usuarios' });
            }
        }).catch(error => res.send({ error }));
}

function show(req, res) {
    if (req.body.error) return res.send({ error });
    if (!req.body.users) return res.send({ mensaje: 'No Funciona' });
    let users = req.body.users;
    return res.status(200).send({ users });
}
function create(req, res) {
    mensaje = "usuario creado correctamente"
    new Usuario(req.body).save()
        .then(user => {
            res.send({ mensaje, user })
        })
        .catch(error => res.send({ error }));
}
function update(req,res){
    if(req.body.error) return res.send({error});
    if(!req.body.users) return res.send({mensaje: 'No funciona'});
    let Usuario = req.body.users[0];
    Usuario = Object.assign(Usuario,req.body);
    Usuario.save().then(user => res.status(200).send({message: "Actualizado", user})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.users) return res.status(404).send({message: 'No funciona'});
    req.body.users[0].remove().then(user => res.status(200).send({message: 'Eliminado', user})).catch(error => res.status(500).send({error}));
}
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Usuario.find(query).then(users => {
        if(!users.length) return next();
        req.body.users = users;
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