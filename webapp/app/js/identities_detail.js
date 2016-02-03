(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('IdentityDetailCtrl', IdentityDetailController);

    function IdentityDetailController($stateParams, $state, Restangular, $header, $authentication) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            $header.title = 'TITLE_MEMBERS_DETAIL';

            var vm = this;

            Restangular.one('identities', $stateParams.id).get().then(function(identity) {
                $header.title = identity.lastname + ' ' + identity.firstname;
                vm.identity = identity;
            });
        }
    }
})();