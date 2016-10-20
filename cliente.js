angular.module('misCosas', [])
    .component('cliente', {
        template: '<div> {{ $ctrl.cabecera() }} </div>',
        //<div ng-click="$ctrl.alPinchar()"></div>
        // Al hacer click en el div, lanza la funcion alPinchar()
        bindings: {
            nombre: "<",
            empresa: "<" //,
                //alPinchar = "&"
        },
        controller: function () {
            this.cabecera = function () {
                return this.nombre + " de " + this.empresa;
            }
        }
    })





/*HTMLLLLLLL*/

<
cliente
nombre = "cliente.nombre"
empresa = "cliente.empresa"
    //alPinchar = "console.log()" 
    >
    <
    /cliente>