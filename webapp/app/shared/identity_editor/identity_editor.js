(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appIdentityEditor', {
        templateUrl: 'shared/identity_editor/identity_editor.html',
        controllerAs: 'vm',
        controller: ['$state', '$authentication', '$scope', IdentityEditorController],
        bindings: {
            identity: '='
        }
    });

    function IdentityEditorController($state, $authentication, $scope) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            var vm = this;
            vm.identity = $scope.identity;
        }
    }
})();