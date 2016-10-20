(function () {

	angular.module('servicios').service('maestrosService', maestrosService);

	function maestrosService($http) {
		this.gettingCategorias = $http.get('/api/pub/maestros');
	}

}());
