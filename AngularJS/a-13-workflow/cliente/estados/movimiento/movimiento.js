(function () {

	angular.module('movimiento', ['ui.router', 'abFiltros', 'abComponentes', 'servicios'])
		.config(function ($stateProvider) {
			$stateProvider
				.state('movimiento', {
					/** declaración de ruta parametrizada */
					url: '/movimiento/:id', // parámetro id de movimiento
					template: '<ab-movimiento></ab-movimiento>'
				})
		})
		.component('abMovimiento', {
			templateUrl: './estados/movimiento/movimiento.html',
			controller: function (movimientosService, maestrosService, $state, $stateParams) {
				var vm = this;
				/** Recuperación de parámetros */
                var movimientoId = $stateParams.id;
				
				/** Envío del parámetro en la consulta */
				// se recibe un resurso con super poderes
                vm.movimiento = movimientosService.movimientos.get({ id: movimientoId });
				
                vm.maestros = maestrosService.get();
                
				/**
				 * La actualización el resurso se hace vía el método custom $update
				 */
				vm.guardarMovimiento = function () {
                    vm.movimiento.fecha = new Date(vm.movimiento.fecha);
                    // Llamamos al método uptade
					vm.movimiento.$update()
						.then(function (result) {
							$state.go('lista')
						}, function (error) {
							console.error(error);
							vm.movimiento.importe = -9999;
						});
                };
                
                vm.borrarMovimiento = function () {
                    vm.movimiento.fecha = new Date(vm.movimiento.fecha);
                    // Llamamos al método uptade
					vm.movimiento.$delete()
						.then(function (result) {
							$state.go('lista')
						}, function (error) {
							console.error(error);
							vm.movimiento.importe = -9999;
						});
				};
			}
		})
}());
