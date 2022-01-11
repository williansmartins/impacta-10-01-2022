module.exports = function (app) {
    var EventosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/menu', params);
        }
    };
    return EventosController;
};