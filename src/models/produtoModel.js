const prisma = require('../../database/prisma');

// Expõe os métodos do Prisma (findMany, create, update, delete, etc.)
const ProdutoModel = prisma.produto;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma.categoria;

module.exports = ProdutoModel;