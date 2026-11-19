const produtoModel = require('../models/produtoModel');
 
const produtoController = {
    criarProduto:  async (req, res) =>{
        const { codigo, nome, quantidade, preco } = req.body;
        // 1. Validação simples dos campos obrigatórios
        if(!codigo || !nome || !quantidade|| !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem: "Todos os campos (codigo, nome, qtde, preco) são obrigatórios!"
            })
        }
        //2. Transformar e calcular os dados
        const nomeMaiusculo = String(nome).toUpperCase();
        const qtde = Number(quantidade);
        const valorPreco = Number(preco);
        const valorTotal = quantidade * valorPreco;
 
 
        const novoProduto = await produtoModel.create({
        data: {
 
            codigo,
            nome: nomeMaiusculo,
            quantidade: qtde,
            preco: valorPreco,
            total: valorTotal
        }
       
        });
     
        // Retorna a resposta HTTP 201 (Created)
        return res.status(201).json({
            sucesso:true,
            mensagem: "Produto cadastrado com sucesso no MySQL!",
            produto: novoProduto
        })
    },
 
    listarProdutos: async (req, res) =>{
        try {
            const produtos = produtoModel.buscarTodos();
            return res.json({
                sucesso: true,
                total: produtos.length,
                produtos
            })
        } catch (error) {
            return res,status(500).json({sucesso: false, erro: error.message})
        }
       
    }
}
module.exports = produtoController;