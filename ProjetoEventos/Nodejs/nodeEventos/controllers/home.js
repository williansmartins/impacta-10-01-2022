module.exports = function (app) {

    var Usuario = app.models.usuarios;

    var HomeController = {
        index: function (req, res) {
            //definindo um novo usuario
            var nome = "usuario novo";
            var email = "email@teste.com";
            var usuario = { "nome": nome, "email": email };

            //definindo a resposta
            var resultado;

            Usuario.create(usuario, function (erro, usuario) {
                if (erro) {
                    resultado = "Ocorreu um erro ao incluir usuário.";
                } else {
                    resultado = "Usuário incluído com sucesso!";
                }
            });

            res.render('home/index', { titulo: "Express", resultado: resultado });
        },
        login: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;

            var query = { 'nome': nome, 'senha': senha };
            Usuario.findOne(query).select('nome senha')
                .exec(function (erro, usuario) {
                    if (erro) {
                        response.redirect('/');
                    }
                    else {
                        request.session.usuario = usuario;
                        response.redirect('/menu');
                    }
                });
        },
        logout: function (request, response) {
            request.session.destroy();
            response.redirect('/');
        },
        novoUsuario: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirma = request.body.usuario.confirma;

            if ((senha != confirma) || nome.trim().length == 0) {
                response.redirect('/');
            }
            else {
                var usuario = request.body.usuario;
                Usuario.create(usuario, function (erro, usuario) {
                    if (erro) {
                        response.redirect('/');
                    }
                    else {
                        response.redirect('/menu');
                    }
                });
            }
        }

    };
    return HomeController;
};