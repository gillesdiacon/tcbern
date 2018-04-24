(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.directive('appIdentityEditor', function() {
        return {
            restrict: 'E',
            templateUrl: 'shared/identity_editor/identity_editor.html',
            controllerAs: 'vm',
            controller: ['$state', 'Restangular', '$authentication', '$http', '$scope', AccountController],
            scope: {
                identity: '='
            }
        }
    });

    function AccountController($state, Restangular, $authentication, $http, $scope) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            var vm = this;
            vm.identity = $scope.identity;
        }
    }
})();