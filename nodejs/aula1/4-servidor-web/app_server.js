var http = require('http');

var requisicao = function(request, response){
    response.writeHead(404, { "Content-Type" : "text/html" });
    response.write("<h1>Texto a ser exibido no Browser</h1>");
    response.end();
}

var server = http.createServer(requisicao);

var resultado = function(){
    console.log("Servidor em Funcionamento!");
}

server.listen(3000, resultado);