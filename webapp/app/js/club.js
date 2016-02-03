(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('ClubCtrl', ['$scope', 'Restangular', ClubController]);

    function ClubController($scope, Restangular) {
        $scope.setTitle('TITLE_COMMITTEE');

        var vm = this;

        Restangular.all('committee').getList().then(function(allCommitteeMembers) {
            vm.committeeMemberList = allCommitteeMembers;
        });

        function getPositions(member) {
            return member.positions.map(function(entry) {
                return entry.key;
            });
        }

        vm.contact = 'vorstand' + '@' + 'tcbern.ch';
        vm.getPositions = getPositions;
    }
})();