(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appInfosList', {
        templateUrl: 'components/info/infos.html',
        controllerAs: 'vm',
        controller: ['$state', 'Restangular', InfosController]
    });

    function InfosController($state, Restangular) {
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
