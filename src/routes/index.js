const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuarioRoutes');

// Associa o prefixo /produtos ao arquivo produtoRoutes
router.use('/usuario', usuarioRoutes);


module.exports = router;
