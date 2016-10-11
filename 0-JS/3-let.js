"use strict";
let varES6 = "let es el nuevo var";

console.log(varES6);

let a = 1;
let b = 1;
let mensaje = "inicial";

if (a == b) {
    let mensaje = "son iguales";
    console.log(mensaje);
}
else {
    let mensaje = "son distintos";
    console.log(mensaje);
}

// la variable mensaje se define en distinso ámbitos
console.log(mensaje);