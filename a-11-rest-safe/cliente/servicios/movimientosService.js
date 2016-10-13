(function () {
	angular.module('servicios').service('movimientosService', movimientosService);


	function movimientosService($http)  {	

		this.gettingMovimientos =   function ()  {
			return $http.get('/api/priv/movimientos');
		};

		this.gettingTotal =   function ()  {
			return $http.get('/api/priv/movimientos/totales');
		};

		this.postingMovimiento =   function (movimiento)  {
			movimiento.tipo = tipo(movimiento);
			return $http.post('/api/priv/movimientos', movimiento);
		};

		var tipo = function (movimiento) {
			return movimiento.esIngreso && 'Ingreso' || 'Gasto'
		}


	};

}());
