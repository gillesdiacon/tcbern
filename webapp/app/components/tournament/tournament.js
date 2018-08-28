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
        vm.edit = false;
        vm.canNotEdit = !$authentication.isAuthenticated || !$authentication.isInGroup('admin');
        vm.email = 'turnier' + '@' + 'tcbern.ch';
        vm.pageContent = '';

        $loadedcontent.contentForKey('TOURNAMENT').then(function(response) {
            vm.content = response;
            vm.pageContent = vm.content.content;
        });

        vm.startEdit = function() {
            vm.edit = true;
        }
        vm.save = function() {
            vm.content.content = vm.pageContent;
            vm.content.put();
            vm.edit = false;
        }
        vm.cancelEdit = function() {
            vm.pageContent = vm.content.content;
            vm.edit = false;
        }
    }
})();
