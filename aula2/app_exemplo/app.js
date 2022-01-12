var express = require('express');
var load = require('express-load');
var app = express();

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/exemplo', function(requisicao, resposta){
    resposta.render("exemplos/app");
});

load('models') 
.then('controllers')
.then('routes')
.into(app)

app.listen(3000, function(){
    console.log("Servidor iniciado com sucesso!");
});