(function () {

	angular.module('lista', ['ui.router', 'abFiltros', 'abComponentes', 'servicios'])
		.config(function ($stateProvider) {
			$stateProvider
				.state('lista', {
					url: '/lista',
					template: '<ab-lista></ab-lista>'
				})
		})
		.component('abLista', {
			templateUrl: './estados/lista/lista.html',
			controller: function (movimientosService) {
				var vm = this;
				// Obtención de la lista de movmimientos
				movimientosService.gettingMovimientos()
					.then(function (result) {
						vm.movimientos = result.data;
					})
			}
		})

}());
