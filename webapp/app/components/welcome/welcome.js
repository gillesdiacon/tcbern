(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appWelcome', {
        templateUrl: 'components/welcome/welcome.html',
        controllerAs: 'vm',
        controller: ['$location', '$anchorScroll', WelcomeController]
    });

    function WelcomeController($location, $anchorScroll) {
        var vm = this;

        vm.interestKey = 'TRAINING_INTEREST';
        vm.halleBernmobilKey = 'TRAINING_HALLE_NEUFELD';
        vm.contactKey = 'CONTACT';
        vm.tournamentKey = 'TOURNAMENT';

        vm.scrollTo = function(name) {
            $location.hash(name);
            $anchorScroll();
        };
    }
})();