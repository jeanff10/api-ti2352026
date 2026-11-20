const categoriaModel = require('../models/categoriaModel');

const categoriaController = {
    criarCategoria: async (req, res) => {
        try {
            const { descricao } = req.body;

            if (!descricao) {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: "O campo descricao é obrigatório!"
                });
            }

            const novaCategoria = await categoriaModel.create({
                data: { descricao: String(descricao) }
            });

            return res.status(201).json({
                sucesso: true,
                mensagem: "Categoria cadastrada com sucesso!",
                categoria: novaCategoria
            });
        } catch (error) {
            return res.status(500).json({ sucesso: false, erro: error.message });
        }
    },

    listarCategorias: async (req, res) => {
        try {
            const categorias = await categoriaModel.findMany();
            return res.json({
                sucesso: true,
                total: categorias.length,
                categorias
            });
        } catch (error) {
            return res.status(500).json({ sucesso: false, erro: error.message });
        }
    }
};

module.exports = categoriaController;