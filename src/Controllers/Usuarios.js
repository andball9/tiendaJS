const Usuario = require('../models/Usuarios')


function index(req, res) {
    Usuario.find({})
        .then(users => {
            if (users.length) {
                return res.status(200).send({ users });
            } else {
                return res.send({ message: 'NO CONTENT' });
            }
        }).catch(error => res.status(500).send({ error }));
}
module.exports = {
    index
}