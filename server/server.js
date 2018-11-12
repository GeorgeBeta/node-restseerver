const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./config/config')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('Hola mundo - getUsuario')
})

app.post('/usuario', function(req, res) { // AÑADIR REGISTROS
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            OK: false,
            mensaje: 'El nombre del usuario es necesario'
        })

    } else {
        res.json(body)
    }

})

app.put('/usuario/:id', function(req, res) { // ACTUALIZAR
    let id = req.params.id;
    res.json({
        id
    });
})

app.delete('/usuario', function(req, res) {
    res.json('DELETEusuario')
})

app.listen(process.env.PORT, () => console.log(`Escuchando el puerto : ${process.env.PORT}`));