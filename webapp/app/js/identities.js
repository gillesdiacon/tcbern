(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('IdentitiesCtrl', ['$scope', '$state', 'Restangular', '$authentication', IdentitiesController]);

    function IdentitiesController($scope, $state, Restangular, $authentication) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            $scope.setTitle('TITLE_MEMBERS');

            var vm = this;

            Restangular.all('identities').getList().then(function(allIdentities) {
                vm.identityList = allIdentities;
            });

            vm.go = function(event, identity) {
                event.stopPropagation();
                $state.go('identity_detail', { 'id': identity.id });
            };
        }
    }
})();