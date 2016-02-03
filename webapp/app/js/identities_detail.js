(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('IdentityDetailCtrl', ['$scope', '$stateParams', '$state', 'Restangular', '$authentication', IdentityDetailController]);

    function IdentityDetailController($scope, $stateParams, $state, Restangular, $authentication) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            $scope.setTitle('TITLE_MEMBERS_DETAIL');

            var vm = this;

            Restangular.one('identities', $stateParams.id).get().then(function(identity) {
                $scope.setTitle(identity.lastname + ' ' + identity.firstname);
                vm.identity = identity;
            });
        }
    }
})();