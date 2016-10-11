/** REVISAR */
"use strict";


/**
 * this =  contexto de ejecución de una función
 */
function miFuncion() {
    console.log(this.variable);
}

var variable = "variable en el módulo, accesible desde this";

miFuncion();


/**
 * this =  el objeto en el que se defina
 */
var complejo = { variable: "this apunta a su objeto padre, y tomo la varible como una propiedad", funcion: miFuncion };
complejo.funcion();


/**
 * patrón self
 */

function superFuncion() {
    this.propiedad = "propiedad accesible desde el exterior";
    
    this.metodo = function () {
        console.log("método llamable desde el exterior");
    };

    function interno() {
        console.log("método invisible desde el exterior");
    }

    this.metodoSorpresa = function () {
        // probar en chrome (ES6) y Explorer8(ES5)
        console.log(this.propiedad);
    };
    
    var self = this;
    this.metodoPatron = function () {
        console.log(self.propiedad);
    };
    return this;
}

var miSuperFuncion = new superFuncion();
console.log(miSuperFuncion.propiedad);
miSuperFuncion.metodo();
miSuperFuncion.interno();
miSuperFuncion.metodoSorpresa();
miSuperFuncion.metodoPatron();
