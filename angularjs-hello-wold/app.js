angular
.module('modulo1', [])
.controller('controller1', ['$scope', function($scope){
    
    var self = this;
    self.mensagem = "vindo do controller";
    self.nomes = ['Pedro', 'Maria', 'Felipe', 'Miguel'];
    self.alunos = [
        {nome: 'luis miguel', curso: 'javascript'},
        {nome: 'luis felipe', curso: 'java'},
        {nome: 'luis carlos', curso: 'angular'}
    ];

    self.alterarMensagem = function(){
        this.mensagem = "Mensagem alterada";
    }

    // self.alterarMensagem = () => {
    //     this.mensagem = 123;
    // };


    // self.alunos.forEach(element => {
    //     $( "ul" ).append( "<li>" + element.nome  + " ("+element.curso+")</li>" );
    // });

    self.submit = function(){
        console.info(self.aluno.nome);
        console.info(self.aluno.curso);
    }

}]);

