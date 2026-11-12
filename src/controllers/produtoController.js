const produtoModel = require('../models/produtoModel');

const produtoController = {
    criarProduto: (req, res) =>{
        const { codigo, nome, qtde, preco } = req.body;
        // 1. Validação simples dos campos obrigatórios
        console.log(req.body)
        if(!codigo || !nome || !qtde|| !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem: "Todos os campos (codigo, nome, qtde, preco) são obrigatórios!"
            })
        }
        //2. Transformar e calcular os dados
        const nomeMaiusculo = String(nome).toUpperCase();
        const quantidade = Number(qtde);
        const valorPreco = Number(preco);
        const valorTotal =quantidade * valorPreco;


        const novoProduto ={
        codigo,
        nome: nomeMaiusculo,
        quantidade: quantidade,
        preco: valorPreco,
        total: valorTotal,
        criadoEm: new Date().toISOString()
        }
        //Chama o Model para persistir no arquivo JSON
        const produtoSalvo = produtoModel.salvar(novoProduto);

        // Retorna a resposta HTTP 201 (Created)
        return res.status(201).json({
            sucesso:true,
            mensagem: "Produto cadastrado com sucesso!",
            produto: produtoSalvo
        })
    },

    listarProdutos: (req, res) =>{
        const produtos = produtoModel.buscarTodos();
        return res.json({
            sucesso: true,
            total: produtos.length,
            produtos
        })
    }
}
module.exports = produtoController;    