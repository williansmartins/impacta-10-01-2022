module.exports = function (app) {

  app.get('/contato', function(requisicao, resposta){
    resposta.json("acessando todos os contatos");
  });

  
};