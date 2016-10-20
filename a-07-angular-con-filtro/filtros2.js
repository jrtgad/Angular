(function () {
    angular.module('abFiltros2', [])
        .filter('abRecortar', recortar)
        .filter('abRellenarVacios', rellenarVacios);


    // Devuelve un trozo de texto y tres puntos suspensivos... para indicar que hay más...
    // Demuestra que un filtro puede tener parámetros y cómo tratar valores por defecto.
    function recortar() {
        var funcionFiltro = function (cadena, largo, quitarInicio) {
            if (!cadena) {
                return ''
            }
            if (!largo) {
                largo = 10
            }
            if (cadena.length <= largo) {
                return cadena
            }
            if (quitarInicio) {
                return '...' + cadena.substring(cadena.length - largo)
            } else {
                return cadena.substring(0, largo) + '...'
            }
        };
        return funcionFiltro;
    }

    // Con control de errores y lógica compleja
    function rellenarVacios() {
        var funcionFiltro = function (cadena) {
            try {
                if (!cadena || cadena === undefined || cadena.trim() === "") {
                    return '---';
                };
            } catch (err) {
                return '---';
            }
            return cadena;
        }
        return funcionFiltro;
    }
})()