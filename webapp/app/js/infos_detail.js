(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appInfosDetail', {
        templateUrl: 'partials/infos.detail.html',
        controllerAs: 'vm',
        controller: ['$stateParams', 'Restangular', InfosDetailController]
    });

    function InfosDetailController($stateParams, Restangular) {
        //$scope.setTitle('TITLE_INFO_DETAIL');

        var vm = this;

        Restangular.one('infos', $stateParams.id).get().then(function(info) {
            //$scope.setTitle(info.title);
            vm.detail = info;
        });
    }
})();