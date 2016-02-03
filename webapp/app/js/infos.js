(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('InfosCtrl', InfosController);

    function InfosController(Restangular, $header) {
        $header.title = 'TITLE_INFO';

        var vm = this;

        var infos = Restangular.all('infos');
        infos.getList().then(function(allInfos) {
            vm.infosList = allInfos;
        });
    }
})();