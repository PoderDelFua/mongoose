const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express()

//Le decimos a la app de express() que use cors para evitar el error Cross-Domain (XD)
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000
//Importamos la conexión a la BD
const dbConnect = require('./config/mongo')
dbConnect()
app.use("/api", require("./routes")) //Lee routes/index.js por defecto

app.listen(port, () => {
 console.log("Servidor escuchando en el puerto " + port)
})