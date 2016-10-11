/**
 * Practicar para ver cómo se elevan las variables y funciones
 * Ocurre duranta la compilación JIT
 * Previa a la interpretación
 */
function funcionDeclaradaSuperElevada() {
    return "Me elevo... :-)";
}
var llamadaElevada;
var llamadaProfunda;
var funcionExpresionSeQueda;
llamadaElevada = funcionDeclaradaSuperElevada();
llamadaProfunda = funcionExpresionSeQueda();
console.log(llamadaElevada);
console.log(llamadaProfunda);

funcionExpresionSeQueda = function () {
    return "Me quedo :-( ";
};