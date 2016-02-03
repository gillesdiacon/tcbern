(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('IdentitiesCtrl', IdentitiesController);

    function IdentitiesController($state, Restangular, $header, $authentication) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            $header.title = 'TITLE_MEMBERS';

            var vm = this;

            Restangular.all('identities').getList().then(function(allIdentities) {
                vm.identityList = allIdentities;
            });

            vm.go = function(event, identity) {
                event.stopPropagation();
                $state.go('identity_detail', { 'id': identity.id });
            };
        }
    }
})();