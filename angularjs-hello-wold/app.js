angular
.module('modulo1', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    // $locationProvider.hashPrefix('');
    
    $routeProvider
    .when('/', {
        template: '<h1>Página inicial</h1>'
    })
    .when('/carrega-html', {
        templateUrl: 'arquivo.html'
    })
    .when('/sessao1', {
        templateUrl: 'sessao1.html'
    })
    .when('/sessao2', {
        templateUrl: 'sessao2.html'
    })
    .when('/eventos', {
        templateUrl: 'eventos.html'
    })
    .otherwise({redirectTo: '/'})
}])
.controller('controller1', ['MathService', '$http', function(MathService, $http){
    
    var self = this;
    self.mensagem = "vindo do controller";
    self.nomes = ['Pedro', 'Maria', 'Felipe', 'Miguel'];
    self.alunos = [
        {nome: 'luis miguel', curso: 'javascript'},
        {nome: 'luis felipe', curso: 'java'},
        {nome: 'luis carlos', curso: 'angular'}
    ];
    self.eventos = [];

    self.alterarMensagem = function(){
        this.mensagem = "Mensagem alterada";
    }

    self.submit = function(){
        console.info(self.aluno.nome);
        console.info(self.aluno.curso);
    }

    console.info("O valor da soma é: " + MathService.somar(11, 22));
    console.info("O valor da subtração é: " + MathService.subtrair(11, 22));
    console.info("O valor da divisão é: " + MathService.dividir(11, 22));
    console.info("O valor da multiplicação é: " + MathService.multiplicar(11, 22));


    $http.get('http://localhost:3200/eventos')
    .then(function(sucesso){
        console.info(sucesso);
        self.eventos = sucesso.data;
    }, function(erro){
        console.info(erro);
    });

    // $http.get('http://williansmartins.com')
    // .then(function(sucesso){
    //     console.info(sucesso.data);
    // }, function(erro){
    //     console.info(erro);
    // });



    // $http.delete('http://localhost:3200/eventos/61e19fbfe73f34e30b639982')
    // .then(function(sucesso){
    //     console.info(sucesso);
    // }, function(erro){
    //     console.info(erro);
    // });

}])
.factory('MathService', MathService);

function MathService () {
    return {

        somar : function (a, b) {
            return a + b;
        },

        dividir : function (a, b) {
            return a / b;
        },

        multiplicar : function (a, b) {
            return a * b;
        },

        subtrair : function (a, b) {
            return a - b;
        }

    };
}

