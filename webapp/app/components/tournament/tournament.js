(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appTournament', {
        templateUrl: 'components/tournament/tournament.html',
        controllerAs: 'vm',
        controller: ['$authentication', '$loadedcontent', TournamentController]
    });

    function TournamentController($authentication, $loadedcontent) {
        var vm = this;
        vm.tournamentKey = 'TOURNAMENT';
    }
})();
