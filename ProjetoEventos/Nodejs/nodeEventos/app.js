var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://127.0.0.1:27017/dbusuarios');;

mongoose.connection.on('connected', function () {
    console.log('=====Conexão estabelecida com sucesso=====');
});
mongoose.connection.on('error', function (err) {
    console.log('=====Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('=====Conexão finalizada=====');
});

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

var error = require('./middlewares/error');

//middlewares
app.use(error.notFound);
app.use(error.serverError);

app.listen(3000, function () {
    console.log("Aplicação no ar.");
});
