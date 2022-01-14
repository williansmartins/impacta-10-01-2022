var express = require('express');
var load = require('express-load');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/neventos');

load('models').into(app);
var Evento = app.models.eventos;

//método do serviço
app.get('/', function (request, response) {
  response.send('Servidor no ar');
 });
 app.get('/eventos', function (request, response) {
 });
 app.get('/eventos/:id', function (request, response) {
 });
 app.post('/eventos', function (request, response) {
 });
 app.put('/eventos/:id', function (request, response) {
 });
 app.delete('/eventos/:id', function (request, response) {
 });
 
app.listen(3200, function () {
  console.log('ok');
});