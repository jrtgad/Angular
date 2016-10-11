# Historia
- 1995: JavaScript 
- 1997: ECMAScript
- 2001: JSON
- 2005: AJAX 
- 2006: JQuery
- 2009: NodeJs
- 2011: ES5
- 2015: ES6

# Sintaxis
## Variables
- No tipado
- Ámbito global o local a una función

Ejemplo:
```JavaScript
var unidades = 10;

var calcularImporte = function(precio){
    var resultado = unidades * precio;
    return resultado;
};

console.log(calcularImporte(5));
```
---

## Funciones
- Tres formas de definirlas

```JavaScript
function miFuncionDeclarada(parametro){
    console.log(parametro);
}

var miFuncionExpresion = (parametro){
    console.log(parametro);
};

var llamadaConDelegado = unaFuncion(unParametro, function(){
    console.log('Una función anónima inline');
});
```

### Tipos
**Puras:** No dependen del entrono, ante la misma entrada responden lo mismo, no cambian la entrada.

**Impuras:** Dependen del entorno o cambian la entrada.

---

## Estructuras de control
### Condicionales

```JavaScript

if (a == b){
    console.log('a y b tienen un valor equivalente')
    if (a === b){
        console.log('a y b son además del mismo tipo')
    }
}
else{
    console.log('a y b son cosas distintas')
}

switch (numHijos) {
    case 0:
        console.log("Sin hijos.");
        break;
    case 1:
        console.log("Un hijo.");
        break;
    default:
        console.log(numHijos + " hijos.")
}

```

### Repetitivas

```JavaScript

for (i = 0; i < hijos.length; i++) { 
    console.log(hijos[i]);
}

while (i < 10) {
    i++;
    console.log(i);
}

```

---

## Asincronismo
### Callbacks: Paso de una función para su ejecución futura

```JavaScript

servicio.funcionLenta(function(err, res) {  
  if (err)  {
    console.error(err);
    return;
  }
  console.log(res);
});

```

### Promesas: Posible resultado de una ejcución

```JavaScript
servicio.funcionLenta.save()  
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  })
```

---

## POO
### Objetos JSON

{ clave1 : valor1, clave2 : valor2 }

```JavaScript
{
    "_id": "2016-125000369",
    "fecha": "2016-04-01T19:09:48.388Z",
    "importe": 1100,
    "cliente" : {
      "nombre" : "Industria Comercial S.A.",
      "nif" : "A15326985"
    },
    "productos" : [
      {
        "referencia" : "zm-35",
        "cantidad" : 4 ,
        "precio": 300
      },
      {
        "descuento": -100
      }
    ]
}
```

### Construcción de Objetos
```JavaScript

function Personaje(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
var miPadre = new Personaje("Anakin", "Skywalker", 50);

```

### Propiedades: acceso directo o por array

```JavaScript
var miPadre = new Personaje("Anakin", "Skywalker", 50);

var nombre = miPadre.nombre;
var apellido = miPadre["apellido"];
var edad = miPadre[2];

Object.keys(miPadre);
Object.keys(miPadre)[2]:

miPadre.profesion = "Jedi";

Object.keys(miPadre);

```

### Métodos
```JavaScript

function Personaje(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.luchar = function(){
        console.log("Sable Laser Rojo");
    }
}
var miPadre = new Personaje("Anakin", "Skywalker", 50);
miPadre.luchar();
```

### Prototipo
```JavaScript

function Personaje(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.luchar = function(){
        console.log("Sable Laser Rojo");
    }
}
var miPadre = new Personaje("Anakin", "Skywalker", 50);
miPadre.profesion = "Jedi"; 

Personaje.prototype.nombreCompleto = function(){
    return this.nombre + ' ' + this.apellido;
}

miPadre.nombreCompleto();

```

---