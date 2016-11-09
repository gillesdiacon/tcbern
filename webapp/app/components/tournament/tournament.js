(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appTournament', {
        templateUrl: 'components/tournament/tournament.html',
        controllerAs: 'vm',
        controller: [TournamentController]
    });

    function TournamentController() {
        var vm = this;
        vm.email = 'turnier' + '@' + 'tcbern.ch';
    }
})();
