const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El campo nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El campo email es imprecindible']
    },
    password: {
        type: String,
        required: [true, 'El password es preciso']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_NAME'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema);