(function () {

	angular.module('nuevo', ['ui.router', 'abFiltros', 'abComponentes', 'servicios'])
		.config(function ($stateProvider) {
			$stateProvider
				.state('nuevo', {
					url: '/nuevo',
					template: '<ab-nuevo></ab-nuevo>'
				})
		})
		.component('abNuevo', {
			templateUrl: './estados/nuevo/nuevo.html',
			controller: function (movimientosService, maestrosService) {
				var vm = this;
				vm.nuevoMovimiento = {
					esIngreso: 1,
					esGasto: 0,
					importe: 0,
					fecha: new Date()
				};

				maestrosService.gettingCategorias
					.success(function (result) {
						vm.maestros = result;
					});

				vm.guardarMovimiento = function () {
					var auxCopyMov = angular.copy(vm.nuevoMovimiento);
					movimientosService.postingMovimiento(auxCopyMov)
						.success(function (result) {
							vm.nuevoMovimiento.importe = 0;
						}).error(function (err) {
							console.error(error);
							vm.nuevoMovimiento.importe = -9999;
						});
				}
			}
		})

}());
