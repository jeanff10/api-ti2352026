const usuarioContoller = {
    criarUsuario: (req, res) => {
        const { nome, idade, telefone } = req.body;

        // 1. Validação simples dos campos obrigatórios
        if (!nome || !idade || !telefone) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "Todos os campos (nome, idade, telefone) são obrigatórios!"
            });
        }

        const novoUsuario = {
            nome: nome.toUpperCase(),
            idade: idade,
            telefone: telefone,
            cadastradoEm: new Date().toISOString()
        };

        // Sem model: apenas devolve o objeto montado
        return res.status(201).json({
            sucesso: true,
            mensagem: "Usuário cadastrado com sucesso!",
            usuario: novoUsuario
        });
    },
};

module.exports = usuarioContoller;