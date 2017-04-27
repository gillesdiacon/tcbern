(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('MainCtrl', ['$scope', '$aside', '$state', 'Restangular', '$authentication', MainController]);

    function MainController($scope, $aside, $state, Restangular, $authentication) {
        Restangular.setBaseUrl('../../backend/v1/public/api');
        Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers) {
            if ($authentication.token !== null) {
                headers.Token = $authentication.token;
                return { 'headers': headers };
            } else {
                return {};
            }
        });

        var vm = this;
        vm.asideState = {
            open: false
        };

        vm.openAside = function() {
            if (vm.asideState.open === true) {
                vm.asideState.$uibModalInstance.dismiss();
                return;
            }

            function postClose() {
                vm.asideState.open = false;
            }

            var parentVm = vm;
            vm.asideState.open = true;
            $aside.open({
                templateUrl: 'components/main/menu.html',
                placement: 'left',
                size: 'sm',
                animation: true,
                controllerAs: 'vm',
                controller: ['$uibModalInstance', '$authentication', function($uibModalInstance, $authentication) {
                    parentVm.asideState.$uibModalInstance = $uibModalInstance;
                    var vm = this;
                    vm.menuElementList = [
                        {'route': 'infos', 'html': 'MENU_INFO', 'requiresAuthentication': false},
                        {'route': 'agenda', 'html': 'MENU_AGENDA', 'requiresAuthentication': false},
                        {'route': 'training', 'html': 'MENU_TRAINING', 'requiresAuthentication': false},
                        {'route': 'tournament', 'html': 'MENU_TOURNAMENT', 'requiresAuthentication': false},
                        {'route': 'identities', 'html': 'MENU_MEMBERS', 'requiresAuthentication': true},
                        {'route': 'account', 'html': 'MENU_ACCOUNT', 'requiresAuthentication': true},
                        {'route': 'contact', 'html': 'MENU_CONTACT', 'requiresAuthentication': false},
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
                        $uibModalInstance.dismiss();
                        e.stopPropagation();
                        $state.go(element.route);
                    };
                }]
            }).result.then(postClose, postClose);
        };
    }
})();