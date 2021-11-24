(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appWelcome', {
        templateUrl: 'components/welcome/welcome.html',
        controllerAs: 'vm',
        controller: ['$state', 'Restangular', WelcomeController]
    });

    function WelcomeController($state, Restangular) {
        var vm = this;

        vm.interestKey = 'TRAINING_INTEREST';
        vm.halleBernmobilKey = 'TRAINING_HALLE_NEUFELD';
        vm.infoPreview = [];

        vm.gotoInfo = function(id) {
            $state.go('infos_detail', { 'id': id });
        };
    }
})();