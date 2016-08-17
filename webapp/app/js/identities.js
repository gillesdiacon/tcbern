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
            var vm = this;

            Restangular.all('identities').getList().then(function(allIdentities) {
                vm.identityList = allIdentities;
            });

            vm.phone = function(identity) {
                return (identity.phonenumber !== null) ? identity.phonenumber : identity.mobilenumber;
            };
            vm.go = function(event, identity) {
                event.stopPropagation();
                $state.go('identity_detail', { 'id': identity.id });
            };
        }
    }
})();