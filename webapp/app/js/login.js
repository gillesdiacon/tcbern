(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appLogin', {
        templateUrl: 'partials/login.html',
        controllerAs: 'vm',
        controller: ['$scope', '$state', '$authentication', LoginController]
    });

    function LoginController($scope, $state, $authentication) {
        var vm = this;

        vm.username = '';
        vm.password = '';
        vm.message = undefined;
        vm.isError = false;
        vm.authenticated = false;

        $scope.$watch(function () {
                return $authentication.isAuthenticated;
            },
            function (value) {
                vm.authenticated = value;
            });

        vm.resetInfosWithMessage = function (reset, isError, message) {
            if (reset) {
                vm.username = '';
                vm.password = '';
            }
            vm.message = message;
            vm.isError = isError;
        };
        vm.login = function () {
            $authentication.authenticate(vm.username, vm.password)
                .then(function () {
                    vm.resetInfosWithMessage(true, false);
                    $state.go('infos');
                }).catch(function (response) {
                    if (response.status === 503) {
                        vm.resetInfosWithMessage(false, true, 'Username or password invalid');
                    } else {
                        vm.resetInfosWithMessage(false, true, 'Problem during authentication: status = ' + response.status);
                    }
                });
        };
        vm.logout = function () {
            $authentication.logout();
        };
    }
})();
