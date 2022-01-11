var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/exemplo', function(requisicao, resposta){
  resposta.render("exemplos/app");
});


app.listen(3000, function(){
  console.log("Servidor no ar!");
});