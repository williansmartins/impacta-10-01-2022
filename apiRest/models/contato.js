module.exports = function(){
    var Schema = require('mongoose').Schema;
	var contato = Schema({
		cpf: String,
		nome: String,
		telefone: String
	});

	return db.model('contatos', contato);
}