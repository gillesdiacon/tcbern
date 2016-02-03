(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('LoginCtrl', LoginController);

    function LoginController($scope, $state, $authentication, $header) {
        $header.title = 'TITLE_LOGIN';

        var vm = this;
        vm.username = '';
        vm.password = '';
        vm.message = '';
        vm.authenticated = false;

        $scope.$watch(function () {
                return $authentication.isAuthenticated;
            },
            function (value) {
                vm.authenticated = value;
            });

        vm.resetInfosWithMessage = function (reset, message) {
            if (reset) {
                vm.username = '';
                vm.password = '';
            }
            vm.message = message;
        };
        vm.login = function () {
            $authentication.authenticate(vm.username, vm.password, function () {
                    vm.resetInfosWithMessage(true, '');
                    $state.go('infos');
                },
                function (data, status) {
                    if (status === 503) {
                        vm.resetInfosWithMessage(false, 'Username or password invalid');
                    } else {
                        vm.resetInfosWithMessage(false, 'Problem during authentication: status = ' + status);
                    }
                });
        };
        vm.logout = function () {
            $authentication.logout();
        };
    }
})();
