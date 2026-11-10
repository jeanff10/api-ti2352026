const fs = require('fs')
// fs = arquivo
const path = require ('path')
// path = caminho

//1. Define o caminho do arquivo produto
const arquivoProdutos = path.join(__dirname, '..', '..', 'database', 'produtos.json');

const produtoModel = {
    // 1. Lê todos os produtos do arquivo JSON
    buscarTodos: () =>{
     if (!fs.readFileSync(arquivoProdutos, 'utf-8')){
        return [];
     }
      const conteudo = fs.readFileSync(arquivoProdutos, 'utf-8');
      return conteudo.trim() ? JSON.parse(conteudo) : [];
    },
    // 2. Salva um novo produto no arquivo JSON
     salvar: (novoProduto) =>{
        const listaProdutos = produtoModel.buscarTodos();
      // 3.Adicionar o novo produto na lista
        listaProdutos.push(novoProduto);
      // 4.Salvar
        fs.writeFileSync(arquivoProdutos, JSON.stringify(listaProdutos, null, 2))
        return novoProduto
    }
}
module.exports = produtoModel;