module.exports = function (app) {
    var eventos = app.controllers.eventos;
    app.get('/menu', eventos.menu);

    app.get('/cadUsuario', eventos.cadastroUsuario);
    app.get('/cadEvento', eventos.cadastroEvento);
    app.get('/listaEventos', eventos.listaEventos);
};