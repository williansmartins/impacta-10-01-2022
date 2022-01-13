var express = require('express');
var load = require('express-load');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var express = require('express');
var load = require('express-load');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contatos');
global.db = mongoose;

load('models')
.then('routes')
.into(app);

// var Contato = app.models.contato;


app.listen(3000, function () {
	console.log('ok');
});
