require('dotenv').config();
const express = require('express');
const routes = require('./routes') // Importa automáticamente o routes/index.js
const app = express();

app.use(express.json());

app.use(routes); // Carrega todas as rotas principais da API


const PORT = process.env.PORT
//app.listen(PORT, function nome(){
//})
app.listen(PORT, () =>{
   console.log(`Servidor rodando na porta ${PORT}`)
})