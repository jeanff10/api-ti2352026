require('dotenv').config();
const express = require('express');
const routes = require('./routes') // Importa automáticamente o routes/index.js
const app = express();

app.use(express.json());

app.use(routes); // Carrega todas as rotas principais da API

app.post('/produtos', (req, res) =>{
   

//2. Transformar e calcular os dados
const novoProduto ={
    codigo,
    nome: String(nome).toUpperCase(),
    quantidade: Number(qtde),
    preco: Number(preco),
    total: Number(qtde) * Number(preco)
}

    return res.json ({
        mensagem: "Produto recebido com sucesso!",
        dadosOriginais: {codigo, nome, qtde, preco}
    })
})

const PORT = process.env.PORT
//app.listen(PORT, function nome(){
//})
app.listen(PORT, () =>{
   console.log(`Servidor rodando na porta ${PORT}`)
})