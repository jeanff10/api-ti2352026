const express = require ('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// 1. Rota POST
// /produtos/novo
router.post('/',produtoController.criarProduto);


module.exports = router;