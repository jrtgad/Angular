(function () {
    angular.module('cashFlow').controller('MenuCtrl',menuCtrl);
    
    function menuCtrl($location) {
        this.isActive = function (ruta) {
            return ruta === $location.path();
        }
    }
    
}());
