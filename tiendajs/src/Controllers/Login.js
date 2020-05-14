//Base de Datos collection Usuario
const User = require('../models/Usuarios');
const Cliente = require('../models/Clientes');
//Bcryp
const bcrypt = require('bcrypt');
//Config
const CONFIG = require('../config/index');
//Jsonwebtoken
const jwt = require('jsonwebtoken');

//Datos necesarios
function login(req,res){
    let email = req.body.email;
    let password = req.body.password;

    //Busca si existe
    User.findOne({email})
        .then(user => {
            if(!user) return res.status(404).send({message: 'EL USUARIO NO EXISTE'});
            //Si existe
            bcrypt.compare(password,user.password)
            //si es la contraseña correcta
                  .then(match => {
                        if(match){
                            payload = {
                                username: user.username,
                                email: user.email,
                                name: user.name,
                                role: user.role,
                                id:user._id,
                                tipo:user.tipo
                            }
                            //Acceso
                            //Crea token secreto
                            jwt.sign(payload,CONFIG.SECRET_TOKEN,{ expiresIn: '24h'},function(error,token){
                                if(error){
                                    res.status(500).send({error:'Error Interno'});
                                }else{
                                    //Envia el token y los datos del usuario
                                    res.status(200).send({message: 'Acceso',token,payload});
                                }
                            })
                        }else{
                            //No doy Acceso
                            res.status(200).send({message: 'Contraseña Incorrecta'});
                        }
                  }).catch(error => {
                    res.send({error:'Sin Contraseña'});
                  });
        }).catch(error => {
            res.send({error:'Correo No Existe'});
        });
}




function loginCliente(req,res){
    let email = req.body.email;
    let password = req.body.password;

    //Busca si existe
    Cliente.findOne({email})
        .then(user => {
            if(!user) return res.status(404).send({message: 'EL USUARIO NO EXISTE'});
            //Si existe
            bcrypt.compare(password,user.password)
            //si es la contraseña correcta
                  .then(match => {
                        if(match){
                            payload = {
                                username: user.username,
                                email: user.email,
                                name: user.name,
                                id:user._id,
                                tipo:user.tipo
                            }
                            //Acceso
                            //Crea token secreto
                            jwt.sign(payload,CONFIG.SECRET_TOKEN,{ expiresIn: '24h'},function(error,token){
                                if(error){
                                    res.status(500).send({error:'Error Interno'});
                                }else{
                                    //Envia el token y los datos del usuario
                                    res.status(200).send({message: 'Acceso',token,payload});
                                }
                            })
                        }else{
                            //No doy Acceso
                            res.status(200).send({message: 'Contraseña Incorrecta'});
                        }
                  }).catch(error => {
                    res.send({error:'Sin Contraseña'});
                  });
        }).catch(error => {
            res.send({error:'Correo No Existe'});
        });
}
module.exports = {login,loginCliente};