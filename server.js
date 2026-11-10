require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const fs = require('fs')
// fs = arquivo
const path = require ('path')
// path = caminho

//1. Define o caminho do arquivo produto
const arquivoProdutos = path.join(__dirname, 'database', 'produtos.json');

app.post('/produtos', (req, res) =>{
    const { codigo, nome, qtde, preco } = req.body;

//2. Transformar e calcular os dados
const novoProduto ={
    codigo,
    nome: String(nome).toUpperCase(),
    quantidade: Number(qtde),
    preco: Number(preco),
    total: Number(qtde) * Number(preco)
}
//3. Ler o arquivo produtos.json
const conteudoTexto = fs.readFileSync(arquivoProdutos, 'utf-8');
console.log(conteudoTexto)
const listaProdutos = JSON.parse(conteudoTexto); // converte texto em array JS

//4.Adicionar o novo produto na lista
listaProdutos.push(novoProduto);
//5.Salvar
fs.writeFileSync(arquivoProdutos, JSON.stringify(listaProdutos, null, 2))

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