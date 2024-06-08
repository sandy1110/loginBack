'use strict'
const mongoose = require('mongoose');
require('custom-env').env(true)

const ip = require("ip");

const app= require("./app");
const port = 8080

console.log(process.env.DB_HOST);

mongoose.connect(process.env.DB_HOST)
  .then(() => {
    console.log(`Conexion a la base de datos en: ${process.env.DB_HOST}`)

    app.listen(port, () => {
      console.log(`API REST corriendo en http://${ip.address()}:${port}/`)
    });
  })
  .catch(err => {
    console.error(`Error al conectar a la base de datos: ${err}`)
});