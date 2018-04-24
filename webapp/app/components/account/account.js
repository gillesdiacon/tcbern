(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appAccountEditor', {
        templateUrl: 'components/account/account.html',
        controllerAs: 'vm',
        controller: ['$state', 'Restangular', '$authentication', '$http', AccountController]
    });

    function AccountController($state, Restangular, $authentication, $http) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            var vm = this;

            vm.identity = {};
            vm.password = '';
            vm.passwordRepeated = '';

            vm.message = '';

            Restangular.one('identities', $authentication.userId).get().then(function(identity) { vm.identity = identity; });

            vm.updateIdentity = function() {
                vm.identity.put();
            };
            vm.updateUser = function() {
                if (vm.password === '') {
                    vm.message = 'The new password cannot be empty';
                } else if (vm.password !== vm.passwordRepeated) {
                    vm.message = 'The password and the repeated one must be identical';
                } else {
                    $http.post('../../backend/v2/public/password/' + $authentication.userId, {'password': md5(vm.password)}, {headers: {'Token': $authentication.token}})
                        .then(function() {
                            vm.password = '';
                            vm.passwordRepeated = '';
                            vm.message = 'Password saved';
                        })
                        .catch(function() {
                            vm.message = 'Error during operation';
                        });
                }
            };
        }
    }
})();