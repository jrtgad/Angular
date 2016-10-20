(function () {

    // Podemos usar una sintaxis fluida y declarar todo en una solo línea
    // Atención a la declaración de un nuevo módulo específico para filtros
    angular.module('abFiltros', [])
        .filter('abLimpiarNumero', limpiarNumero)
        .filter('abLimpiarCadena', limpiarCadena)
        .filter('abGranImporte', granImporte);

    // Estos módulos podrían reutilizarse entre aplicaciones

    // Los filtros se declaran como funciones que a su vez devuelven... funciones


    // Esas funciones internas se aplican sobre los valores,
    // Tienen al menos un parámetro, que sirve de entrada


    // Esta función oculta ceros y cadenas no numéricas
    function limpiarNumero() {
        var funcionFiltro = function (cadena) {
            if (cadena) {
                if (angular.isNumber(cadena)) {
                    var numero = parseInt(cadena)
                    if (numero != 0)
                        return numero;
                }
            }
            return "";
        };
        return funcionFiltro;
    }

    // Esta función le quita acentos, guiones medios, y otros caracteres raros
    // Los sustituye por guiones bajos
    function limpiarCadena() {
        var funcionFiltro = function (cadena) {
            if (cadena) {
                var resultado = cadena.toLowerCase();
                var patron = /[^-A-Za-z0-9]+/g;
                return resultado.replace(patron, '_');
            }
        };
        return funcionFiltro;
    }

    // Permite tener filtros predeterminados en un array
    function granImporte() {
        var funcionFiltro = function (movimientos, valorCorte) {
            var corte = valorCorte || 1000;
            var filtrados = [];
            for (var i = 0; i < movimientos.length; i++) {
                var mov = movimientos[i];
                if (mov.importe >= corte) {
                    filtrados.push(mov);
                }
            }
            /** Versión ES6*/
            //filtrados = movimientos.filter(m => m.importe >= corte);
            //filtrados = movimientos.filter(function(m){return m.importe >= corte;});
            return filtrados;
        };
        return funcionFiltro;
    }

    // podrían recibir dependencias inyectables
    // en ese caso se aplican en la función principal,
    // la que define el filtro
}());