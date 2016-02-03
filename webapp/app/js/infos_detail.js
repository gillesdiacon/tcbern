(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('InfosDetailCtrl', ['$stateParams', 'Restangular', '$header', InfosDetailController]);

    function InfosDetailController($stateParams, Restangular, $header) {
        $header.title = 'TITLE_INFO_DETAIL';

        var vm = this;

        Restangular.one('infos', $stateParams.id).get().then(function(info) {
            $header.title = info.title;
            vm.detail = info;
        });
    }
})();