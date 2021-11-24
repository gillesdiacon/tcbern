(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appWelcome', {
        templateUrl: 'components/welcome/welcome.html',
        controllerAs: 'vm',
        controller: [WelcomeController]
    });

    function WelcomeController() {
        var vm = this;

        vm.interestKey = 'TRAINING_INTEREST';
        vm.halleBernmobilKey = 'TRAINING_HALLE_NEUFELD';
        vm.contactKey = 'CONTACT';
        vm.tournamentKey = 'TOURNAMENT';
    }
})();