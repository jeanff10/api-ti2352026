require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const prisma = require('../database/prisma');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(routes);

app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);

  try {
    await prisma.$connect();
    console.log('🗄️  Conectado ao banco de dados MySQL com sucesso!');
  } catch (error) {
    console.error('❌ Falha ao conectar no MySQL. Verifique se o serviço está ligado!');
    console.error(error.message);
  }
});