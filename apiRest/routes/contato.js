module.exports = function (app) {

    var Contato = app.models.contato;

    app.get('/', function (request, response) {
        response.send('Servidor no ar');
    })

    app.get('/contatos', function (request, response) { 
        Contato.find(function (erro, contato) {
            if (erro) {
                console.info("Erro: " + erro);
                response.send(erro);
            } else {
                console.info(contato);
                response.send(contato);
            }
        });
    })

    app.get('/contatos/:id', function (request, response) {
        var id = request.params.id;

        Contato.findById(id, function (erro, contato) {
            if (erro) {
                console.info("Erro: " + erro);
                response.send(erro);
            } else {
                console.info(contato);
                response.send(contato);
            }
        });

    })

    app.post('/contatos', function (request, response) {
        var cpf = request.body.cpf;
        var nome = request.body.nome;
        var telefone = request.body.telefone;

        var contato = {
            'cpf': cpf,
            'nome': nome,
            'telefone': telefone
        }

        Contato.create(contato, function (erro, contato) {
            if (erro) {
                console.info("Erro: " + erro);
                response.send(erro);
            } else {
                console.info(contato);
                response.send(contato);
            }
        });

    })

    app.delete('/contatos/:id', function (request, response) {
        var id = request.params.id;

        console.info(">>>>>>" + id);

        // Contato.remove({ "_id": id }, function (erro, contato) {
        //     if (erro) {
        //         console.info("Erro: " + erro);
        //         response.send(erro);
        //     } else {
        //         console.info(contato);
        //         response.send('removido');
        //     }
        // });



        Contato.findById(id, function (erro, contato) {
            if (erro) {
                console.info("Erro: " + erro);
                response.send(erro);
            } else {
                contato.deleteOne();
                response.send('removido');
            }
        });

    })

    app.put('/contatos/:id', function (request, response) {
        var id = request.params.id;

        var cpf = request.body.cpf;
        var nome = request.body.nome;
        var telefone = request.body.telefone;

        Contato.findById(id, function (erro, contato) {

            var contatoUpdated = contato;
            contatoUpdated.cpf = cpf;
            contatoUpdated.nome = nome;
            contatoUpdated.telefone = telefone;

            contatoUpdated.save(contatoUpdated, function (erro, contato) {
                if (erro) {
                    response.send(erro);
                } else {
                    response.send(contato);
                }
            });

        });
    });
}