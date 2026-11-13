const express = require ('express');
const router = express.Router();
const usuarioContoller = require('../controllers/usuarioContoller');

// 1. Rota POST
// /usuarios/novo
router.post('/novo',usuarioContoller.criarUsuario);


module.exports = router;