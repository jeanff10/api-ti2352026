const express = require('express');
const router = express.Router();

const produtoRoutes = require(',/produtoRoutes');

// Associa o prefixo /produtos ao arquivo produtoRoutes
router.use('/produtos', produtoRoutes);


module.exports = router;
