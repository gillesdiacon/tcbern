(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('InfosDetailCtrl', ['$scope', '$stateParams', 'Restangular', InfosDetailController]);

    function InfosDetailController($scope, $stateParams, Restangular) {
        $scope.setTitle('TITLE_INFO_DETAIL');

        var vm = this;

        Restangular.one('infos', $stateParams.id).get().then(function(info) {
            $scope.setTitle(info.title);
            vm.detail = info;
        });
    }
})();