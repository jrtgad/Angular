// JS compila antes de ejecutar
// es más que un intérprete
// aunque no produce binarios 
// pero si valida el código

var miVariable = "modular";

function miFuncion() {
    console.log(miVariable); // no definida
     miVariable = "privada de miFuncion";
    console.log(miVariable);
}

function otraFuncion(miVariable) {
    miVariable = "privada de otraFuncion vía parámetros";
    otraVariable = "no es global, es local de otraFuncion!!!";
    console.log(miVariable);
    console.log(otraVariable);
}

function superFuncion() {
    var miVariable = "privada de superFuncion";
    var miVariable2 = "privada de superFuncion";

    function intraFuncion() {
        console.log(miVariable2);
        console.log(miVariable); // no definida
        var miVariable = "privada de miFuncion";
        console.log(miVariable);
    }
    intraFuncion();
}

var miFuncionExpresion = function nombreInterno() {
    console.log(miVariable); // no definida
    var miVariable = "privada de miFuncionExpresion";
    console.log(miVariable);
    //nombreInterno() ; // es un correcto bucle infinito
    // util para recursividad
    
    return {
        lafuncionaexponer : expresionInterna
    };
    var expresionInterna = function otraInterna(){
        console.log("Otra interna");
    };
};
miFuncionExpresion().lafuncionaexponer();
miFuncion();
console.log(miVariable);
//console.log(otraVariable);// Variable aún no declarada
otraVariable = "es global!!!";
console.log(otraVariable);

miFuncion();
otraFuncion(miVariable);
miFuncionExpresion();
//nombreInterno();// No Conocida