(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appInfosDetail', {
        templateUrl: 'partials/infos.detail.html',
        controllerAs: 'vm',
        controller: ['$stateParams', 'Restangular', InfosDetailController]
    });

    function InfosDetailController($stateParams, Restangular) {
        var vm = this;

        Restangular.one('infos', $stateParams.id).get().then(function(info) {
            vm.detail = info;
        });
    }
})();