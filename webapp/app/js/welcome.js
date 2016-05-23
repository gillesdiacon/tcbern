(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appWelcome', {
        templateUrl: 'partials/welcome.html',
        controllerAs: 'vm',
        controller: ['$state', 'Restangular', WelcomeController]
    });

    function WelcomeController($state, Restangular) {
        var vm = this;

        vm.infoPreview = [];
        var preview = Restangular.all('infopreview');
        preview.getList().then(function(infoPreview) {
            vm.infoPreview = infoPreview;
        });

        vm.gotoInfo = function(id) {
            $state.go('infos_detail', { 'id': id });
        };
    }
})();