(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appIdentitiesList', {
        templateUrl: 'components/identities/identities.html',
        controllerAs: 'vm',
        controller: ['$state', 'Restangular', '$authentication', IdentitiesController]
    });

    function IdentitiesController($state, Restangular, $authentication) {
        if (!$authentication.isAuthenticated) {
            $state.go('login');
        } else {
            var vm = this;
            vm.isAdmin = $authentication.isInAnyGroup(["admin"]);

            vm.phone = function(identity) {
                return (identity.phonenumber) ? identity.phonenumber : identity.mobilenumber;
            };
            vm.go = function(event, identity) {
                event.stopPropagation();
                $state.go('identity_detail', { 'id': identity.id });
            };
            vm.createIdentity = function() {
                $state.go('identity_create');
            };
            vm.deleteIdentity = function(identity) {
                if (window.confirm("Mitglied " + identity.firstname + " " + identity.lastname + " wirklich löschen?")) {
                    Restangular.one('users', identity.user_id).get().then(function(user) {
                        return user.remove();
                    }).then(function() {
                        vm.loadIdentities();
                    });
                }
            };

            vm.loadIdentities = function() {
                Restangular.all('identities').getList().then(function(allIdentities) {
                    vm.identityList = allIdentities;
                });
            }

            vm.loadIdentities();
        }
    }
})();