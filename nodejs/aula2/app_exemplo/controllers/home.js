module.exports = function(){
    var HomeController = {
        index: function(requisicao, resposta){
            resposta.render('home/index')
        }
    }

    return HomeController;
}