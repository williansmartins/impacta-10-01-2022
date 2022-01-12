var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
app = express();

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/dbusuarios');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

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