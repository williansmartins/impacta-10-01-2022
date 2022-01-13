var express = require('express');
var app = express();

app.get('/exemplo', function(requisicao, resposta){
    resposta.send("<h1>Exemplo de uso do Express</h1>");
});

app.listen(3000, function(){
    console.log("Servidor iniciado com sucesso!");
});