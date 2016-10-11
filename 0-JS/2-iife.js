(
    // es un sentencia
    //console.log('como expresión el iiffe falla')
    function funcionInterna() {
        var nombre = "Luis";
        console.log("funcionInterna autoinvocada: " + nombre);
    }
)();
(function () {
    var nombre = "Pepe";
    console.log("saludo autoinvocada: " + nombre);
}
)();


//saludar();

(
    function saludar(nombre) {
        console.log(nombre);
    }
)("Alberto");

var miVariable = "modular";

/** creación de un espacio de nombre protegido
 * y autoejecutable
 */

(function funcionIIFE() {
    var miVariable = "local de la funcionIIFE";
    console.log(miVariable);
})();

console.log(miVariable);

/** Module pattern */

var logger = (function () {
    var deboUsarConsola = true;
    var resultado = {
        quieroUsarConsola: function(p){
            deboUsarConsola = p;
        }, //deboUsarConsola,
        debug: funcionDebug,
        error: function (excepcion) {
            if (deboUsarConsola) {
                console.error(excepcion);
            }
        }
    };
    function funcionDebug (mensaje) {
        if (deboUsarConsola) {
            console.debug(mensaje);
        }
    }

    return resultado;
}
)();

logger.quieroUsarConsola(false);
logger.debug("hola");
