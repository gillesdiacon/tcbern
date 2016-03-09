(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appIdentitiesList', {
        templateUrl: 'partials/identities.html',
        controllerAs: 'vm',
        controller: ['$state', 'Restangular', '$authentication', IdentitiesController]
    });

    function IdentitiesController($state, Restangular, $authentication) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            //$scope.setTitle('TITLE_MEMBERS');

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