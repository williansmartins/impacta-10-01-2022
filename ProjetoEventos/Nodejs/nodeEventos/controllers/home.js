module.exports = function (app) {

    var Usuario = app.models.usuarios;

    var HomeController = {
        index: function (req, res) {
            //definindo um novo usuario
            var nome = "usuario novo";
            var email = "email@teste.com";
            var usuario = { "nome": nome, "email": email};

            //definindo a resposta
            var resultado;

            Usuario.create(usuario, function(erro, usuario){
                if(erro){
                    resultado = "Ocorreu um erro ao incluir usuário.";
                }else{
                    resultado = "Usuário incluído com sucesso!";
                }
            });

            res.render('home/index', { titulo: "Express", resultado: resultado});
        },
        login: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            if (nome == 'admin' && senha == 'admin') {
                var usuario = request.body.usuario;
                request.session.usuario = usuario;
                response.redirect('/menu');
            }
            else {
                response.redirect('/');
            }
        },
        logout: function (request, response) {
            request.session.destroy();
            response.redirect('/');
        },
        novoUsuario: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirma = request.body.usuario.confirma;
            //código a ser implementado
            response.redirect('/menu');
        }

    };
    return HomeController;
};