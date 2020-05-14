require('dotenv').config()
console.log(process.env.DB)
module.exports = {
    //Puerto
    PORT: process.env.PORT ? process.env.PORT : 2000,
    //Dase de datos
    DB: process.env.DB ?process.env.DB:'mongodb://localhost:27017/pendul_electrónics',
    //llave de login
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'estaesmillavesecreta'
}