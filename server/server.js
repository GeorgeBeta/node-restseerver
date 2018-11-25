const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./config/config')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto :', process.env.PORT);
})

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});