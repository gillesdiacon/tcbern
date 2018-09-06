(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appIdentityEditor', {
        templateUrl: 'shared/identity_editor/identity_editor.html',
        controllerAs: 'vm',
        controller: ['$scope', IdentityEditorController],
        bindings: {
            identity: '='
        }
    });

    function IdentityEditorController($scope) {
        var vm = this;
        vm.identity = $scope.identity;
    }
})();