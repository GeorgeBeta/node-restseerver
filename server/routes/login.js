const express = require('express')
const Usuario = require('../models/usuarios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const app = express();

app.post('/login', (req, res) => {
    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '(Usuario) o Password no valido'
                }
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o (Password) no valido'
                }
            });
        }

        let token = jwt.sign({
            data: usuarioDB
        }, 'secret', { expiresIn: Number(process.env.CADUCIDAD_TOKEN) });

        res.json({
            ok: true,
            usuario: usuarioDB,
            caducidad: process.env.CADUCIDAD_TOKEN,
            seed: process.env.SEED,
            token: token
        })
    })
})

module.exports = app;