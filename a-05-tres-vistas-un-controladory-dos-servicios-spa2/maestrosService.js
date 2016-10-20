(function () {

	// se registran dentro de un módulo con la palabra clave service
	angular.module('cashFlow').service('maestrosService', maestrosService);

	function maestrosService() {

		var privado = "esto sólo se ve dentro de la función actual";

		var srv = this;
		srv.categorias = {
			categoriasIngresos: ['Nómina', 'Ventas', 'Intereses Depósitos'],
			categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
		};

	}


}());
