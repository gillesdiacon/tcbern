(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('InfosCtrl', ['$scope', 'Restangular', InfosController]);

    function InfosController($scope, Restangular) {
        $scope.setTitle('TITLE_INFO');

        var vm = this;

        var infos = Restangular.all('infos');
        infos.getList().then(function(allInfos) {
            vm.infosList = allInfos;
        });
    }
})();
