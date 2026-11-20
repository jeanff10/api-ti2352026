const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
const categoriaModel = require('../models/categoriaModel');

router.post('/categorias', categoriaController.criarCategoria);
router.get('/categorias', categoriaController.listarCategorias);

module.exports = router;