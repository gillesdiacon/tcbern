(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('InfosCtrl', ['$header', 'Restangular', InfosController]);

    function InfosController($header, Restangular) {
        $header.title = 'TITLE_INFO';

        var vm = this;

        var infos = Restangular.all('infos');
        infos.getList().then(function(allInfos) {
            vm.infosList = allInfos;
        });
    }
})();