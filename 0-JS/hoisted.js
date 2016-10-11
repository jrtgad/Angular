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