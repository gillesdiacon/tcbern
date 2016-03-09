(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('MainCtrl', ['$scope', '$aside', '$state', 'Restangular', '$authentication', MainController]);

    function MainController($scope, $aside, $state, Restangular, $authentication) {
        Restangular.setBaseUrl('../../backend/public/api');
        Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers) {
            if ($authentication.token !== null) {
                headers.Token = $authentication.token;
                return { 'headers': headers };
            } else {
                return {};
            }
        });

        var vm = this;
        vm.title = '';
        // inherited and thus usable by all the other controllers
        $scope.setTitle = function(t) {
            vm.title = t;
        };

        vm.asideState = {
            open: false
        };

        vm.openAside = function() {
            vm.asideState.open = true;

            function postClose() {
                vm.asideState.open = false;
            }

            $aside.open({
                templateUrl: 'partials/menu.html',
                placement: 'left',
                size: 'sm',
                animation: true,
                controllerAs: 'vm',
                controller: ['$modalInstance', '$authentication', function($modalInstance, $authentication) {
                    var vm = this;
                    vm.menuElementList = [
                        {'route': 'infos', 'html': 'MENU_INFO', 'requiresAuthentication': false},
                        {'route': 'agenda', 'html': 'MENU_AGENDA', 'requiresAuthentication': false},
                        {'route': 'club', 'html': 'MENU_CLUB', 'requiresAuthentication': false},
                        {'route': 'training', 'html': 'MENU_TRAINING', 'requiresAuthentication': false},
                        {'route': 'identities', 'html': 'MENU_MEMBERS', 'requiresAuthentication': true},
                        {'route': 'account', 'html': 'MENU_ACCOUNT', 'requiresAuthentication': true},
                        {'route': 'login', 'html': 'MENU_LOGIN', 'requiresAuthentication': false}
                    ];

                    vm.checkAuthorization = function(value) {
                        if ($authentication.isAuthenticated) {
                            return true;
                        } else {
                            return value.requiresAuthentication === false;
                        }
                    };

                    vm.go = function(e, element) {
                        $modalInstance.dismiss();
                        e.stopPropagation();
                        $state.go(element.route);
                    };
                }]
            }).result.then(postClose, postClose);
        };
    }
})();