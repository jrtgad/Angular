(function () {
	angular.module('servicios').service('movimientosService', movimientosService);

	function movimientosService($resource) {
		/**  Estamos devolviendo recursos, que internamente usan promesas */

		this.movimientos = $resource(
			"/api/priv/movimientos/:id", // plantilla de la url del api
			{ id: '@id' }, // la plantilla se rellena con la propiedad id
			{ 'update': { method: 'PUT' } }// un método custom con el verobo put para actualizaciones
		); 
		
		this.total = $resource("/api/priv/movimientos/totales/");

	};
} ());
