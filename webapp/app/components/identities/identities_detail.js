(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appIdentitiesDetail', {
        templateUrl: 'components/identities/identities.detail.html',
        controllerAs: 'vm',
        controller: ['$stateParams', '$state', 'Restangular', '$authentication', IdentityDetailController]
    });

    function IdentityDetailController($stateParams, $state, Restangular, $authentication) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            var vm = this;

            Restangular.one('identities', $stateParams.id).get().then(function(identity) {
                vm.identity = identity;
            });
        }
    }
})();