/** REVISAR */
//"use strict";
// this =  contexto de ejecución de una función


function miFuncion() {
    console.log(this.variable);
}

var variable = "módulo";

miFuncion();

var complejo = { variable: "propiedad", funcion: miFuncion };
complejo.funcion();

this.function name(params) {
    
}

function superfuncion(){
    var privada = "1";
    this.publica ="2";
    var self = this;
    var otracosa= function(par1){
        console.log(privada);
        console.log(par1);
    }
    this.funcion = function(){
        console.log(privada);
        console.log(self.publica);
    }
    function otra(){
        console.log(privada);   
    }
    return this;
}

superfuncion().publica
// probar en chorme!!!
// probar con new 

// 1- new ?
// 2- call-apply
// 3- within an object
// 4- global || undefined en strict mode

/** CLOSURES */


for (var i = 1; i <= 5; i++){
    console.log("PRESENT OUT i" + i);
    function pepe () {
        console.log("FUTURE IN i" + i);
    }
    setTimeout(function () {
        console.log("FUTURE IN i" + i);
    }, 1000 * i);
}
for (var i = 1; i <= 5; i++){
    console.log("PRESENT OUT i" + i);
    (function (j) {
        setTimeout(function () {
            console.log("FUTURE IN i" + j);
        }, 1000* j);
    })(i);    
}
for (let i = 1; i <= 5; i++){
    console.log("PRESENT OUT i" + i);
    setTimeout(function () {
        console.log("FUTURE IN i" + i);
    }, 1000*i);
}
