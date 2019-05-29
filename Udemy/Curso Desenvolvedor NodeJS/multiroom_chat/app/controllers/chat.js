module.exports.iniciaChat = function(application, req, res) {
    var dadosForm = req.body;

    req.assert("apelido", "Nome ou apelido são obrigatórios").notEmpty();
    req.assert("apelido", "Nome ou apelido devem ter entre 3 e 15 caracteres").len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        res.render("index", { validacao: erros });
        return;
    }

    application.get("io").emit(
        "msgParaCliente", { apelido: dadosForm.apelido, mensagem: "Acabou de entrar no chat" }
    );

    res.render("chat", { dadosForm: dadosForm });
}