const express = require('express');
const app = express();
app.use(express.json());

// 1) Rota GET raiz
app.get('/', (req, res) => {
  res.send('API de Produtos rodando!');
});

// 2) Rota POST de usuário (exemplo)
app.post('/usuario', (req, res) => {
  const { nome, idade } = req.body;
  res.status(201).json({ nome, idade });
});

// 3) Rota POST de produto
app.post('/produto', (req, res) => {
  const { nome, preco, categoria, estoque } = req.body;

  if (!nome || preco === undefined || !categoria || estoque === undefined) {
    return res.status(400).json({ erro: 'Informe nome, preco, categoria e estoque.' });
  }

  res.status(201).json({
    mensagem: 'Produto recebido com sucesso!',
    produto: { nome, preco, categoria, estoque },
  });
});

// 4) Por último: liga o servidor
app.listen(4500, () => console.log('Servidor rodando em http://localhost:4500'));