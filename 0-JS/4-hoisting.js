// las declaraciones 'suben' al principio del módulo
// pero las inicializaciones se quedan

/*
var inicializadaAntes = 1;
var declaradaAntes;
console.log(inicializadaAntes + " - " + declaradaAntes + " - " + declaradaDespues + " - " + inicializadaDespues );
declaradaAntes = 2;
declaradaDespues = 3;
console.log(inicializadaAntes + " - " + declaradaAntes + " - " + declaradaDespues + " - " + inicializadaDespues );
var declaradaDespues;
var inicializadaDespues = 4;
console.log(inicializadaAntes + " - " + declaradaAntes + " - " + declaradaDespues + " - " + inicializadaDespues );
*/

/** Impacto en la Elevación de funciones según su definición */


var llamadaElevada = funcionDeclaradaSuperElevada();
var llamadaProfunda = funcionExpresionSeQueda();
console.log(llamadaElevada);
console.log(llamadaProfunda);

function funcionDeclaradaSuperElevada() {
    return "Me elevo... :-)";
}
var funcionExpresionSeQueda = function () {
    return "Me quedo :-( ";
};







/*
function funcionDeclaradaSuperElevada() {
    return c;
}
var a;
var c;
var funcionExpresionSeQueda;
a = funcionDeclaradaSuperElevada();
c = funcionExpresionSeQueda();
console.log(a);
console.log(c);
funcionExpresionSeQueda = function () {
    return funcionDeclaradaSuperElevada();
};
*/