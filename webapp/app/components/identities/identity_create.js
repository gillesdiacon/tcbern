(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appIdentityCreate', {
        templateUrl: 'components/identities/identity.create.html',
        controllerAs: 'vm',
        controller: ['$stateParams', '$state', '$http', '$authentication', IdentityCreateController]
    });

    function IdentityCreateController($stateParams, $state, $http, $authentication) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            var vm = this;
            vm.identity = {};
            vm.message = '';

            vm.cancel = function() {
                $state.go('identities');
            }
            vm.persistIdentity = function() {
                $http.post('../../backend/v2/public/api/identities/create', {
                         identity: vm.identity,
                         groups: []
                     })
                    .then(function (response) {
                        $state.go('identities');
                    })
                    .catch(function (response) {
                        vm.message = 'Dieses Person ist bereit in System eingetragen';
                    });
            }
        }
    }
})();