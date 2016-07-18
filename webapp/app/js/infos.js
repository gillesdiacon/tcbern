(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appInfosList', {
        templateUrl: 'partials/infos.html',
        controllerAs: 'vm',
        controller: ['Restangular', InfosController]
    });

    function InfosController(Restangular) {
        var vm = this;

        var infos = Restangular.all('infos');
        infos.getList().then(function(allInfos) {
            vm.infosList = allInfos;
        });

        vm.gotoInfo = function(id) {
            $state.go('infos_detail', { 'id': id });
        };
    }
})();
