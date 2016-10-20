(function () {

	angular.module('total', ['ui.router', 'abFiltros', 'abComponentes', 'servicios'])
		.config(function ($stateProvider) {
			$stateProvider
				.state('total', {
					url: '/',
					template: '<ab-total></ab-total>'
				})
		})
		.component('abTotal', {
			templateUrl: './estados/total/total.html',
			controller: function (movimientosService) {
				var vm = this;
				// Obtención del objeto con los datos totales
				movimientosService.gettingTotal()
					.then(function (result) {
						vm.total = result.data;
					})
			}
		})

}());
