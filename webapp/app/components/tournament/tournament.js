(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appTournament', {
        templateUrl: 'components/tournament/tournament.html',
        controllerAs: 'vm',
        controller: ['Restangular', '$pagecontent', TournamentController]
    });

    function TournamentController(Restangular, $pagecontent) {
        var vm = this;
        vm.edit = false;
        vm.email = 'turnier' + '@' + 'tcbern.ch';
        //vm.content = '*Wann/when/quand?* 23.09.2018 (Sonntag / Sunday / Dimanche)'

        /*Restangular.one('pages', '2').get().then(function(response) {
            vm.content = response.content;
        });*/
        vm.content = $pagecontent.content('TOURNAMENT');

        vm.startEdit = function() {
            vm.edit = true;
        }
        vm.save = function() {
            vm.edit = false;
        }
        vm.cancelEdit = function() {
            vm.edit = false;
        }
    }
})();
