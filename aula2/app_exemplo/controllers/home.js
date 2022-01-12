module.exports = function(){
    var HomeController = {
        index: function(requisicao, resposta){
            resposta.render('home/index', {titulo: "Meu titulo", detalhes: 123});
        }
    }

    return HomeController;
}