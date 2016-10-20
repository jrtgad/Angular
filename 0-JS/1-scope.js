// JS compila antes de ejecutar
// es más que un intérprete
// aunque no produce binarios 
// pero si valida el código

var sumar;

sumar(3, 4);

sumar = function (a, b) {
    return a + b;
};


sumar(3, 4);


var miVariable = "modular";

function miFuncion() {
    console.log(miVariable); // modular
    miVariable = "privada de miFuncion";
    console.log(miVariable);
}

function otraFuncion(miVariable) {
    console.log(miVariable);
    miVariable = "privada de otraFuncion vía parámetros";
    console.log(miVariable);
    otraVariable = "no es global, es local de otraFuncion!!!";
    console.log(otraVariable);
}

function superFuncion() {
    var miVariable = "miVariable privada de superFuncion";
    var miVariable2 = "miVariable2 privada de superFuncion";
    console.log(miVariable); // se usa la de nivel superior
    function intraFuncion() {
        console.log(miVariable); // se redeclara pero aún está no definida
        console.log(miVariable2);
        var miVariable = "miVariable privada de intraFuncion";
        console.log(miVariable);
    }
    intraFuncion();
}

var misFunciones = function nombreInterno() {
    console.log(miVariable); // no definida
    var miVariable = "privada de miFuncionExpresion";
    console.log(miVariable);
    //nombreInterno() ; // ATENCIÓN es un correcto bucle infinito
    // podría ser util para recursividad
    
    var unaExpresionInterna = function unaFuncionExpresionInterna(){
        console.log("Una función expresión interna");
    };

    return {
        unaFuncionExpresionExpuesta: unaExpresionInterna,
        unaFuncionSetenciaExpuesta: funcionSentenciaInterna
    };
    function funcionSentenciaInterna() {
        console.log("Una función sentencia interna");
    }
    
};
misFunciones().funcionSentenciaInterna();
misFunciones().unaFuncionExpuesta();
misFunciones().unaFuncionExpresionExpuesta();
miFuncion();
console.log(miVariable);
//console.log(otraVariable);// Variable aún no declarada
otraVariable = "es global!!!";
console.log(otraVariable);

miFuncion();
otraFuncion(miVariable);
misFunciones();
//nombreInterno();// No Conocida