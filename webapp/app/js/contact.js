(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appContact', {
        templateUrl: 'partials/contact.html',
        controllerAs: 'vm',
        controller: ['Restangular', ContactController]
    });

    function ContactController(Restangular) {
        var vm = this;

        Restangular.all('committee').getList().then(function(allCommitteeMembers) {
            vm.committeeMemberList = allCommitteeMembers;
        });

        function getPositions(member) {
            return member.positions.map(function(entry) {
                return entry.key;
            });
        }

        vm.contactCommittee = 'vorstand' + '@' + 'tcbern.ch';
        vm.contactTournament = 'turnier' + '@' + 'tcbern.ch';
        vm.contactCoaches = 'coach' + '@' + 'tcbern.ch';
        vm.getPositions = getPositions;
    }
})();