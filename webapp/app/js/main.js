(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('MainCtrl', ['$scope', '$aside', '$state', 'Restangular', '$header', '$authentication', MainController]);

    function MainController($scope, $aside, $state, Restangular, $header, $authentication) {
        Restangular.setBaseUrl('../../backend/public/api');
        Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers) {
            var updatedRequest = {};
            if ($authentication.token !== null) {
                headers.Token = $authentication.token;
                updatedRequest.headers = headers;
            }
            return updatedRequest;
        });

        $scope.title = $header.title;
        $scope.$watch(
            function() { return $header.title; },
            function() { $scope.title = $header.title; });

        $scope.asideState = {
            open: false
        };

        $scope.openAside = function() {
            $scope.asideState = {
                open: true
            };

            function postClose() {
                $scope.asideState.open = false;
            }

            $aside.open({
                templateUrl: 'partials/menu.html',
                placement: 'left',
                size: 'sm',
                animation: true,
                controller: ['$scope', '$modalInstance', '$authentication', function($scope, $modalInstance, $authentication) {
                    $scope.menuElementList = [
                        {'route': 'infos', 'html': 'MENU_INFO', 'requiresAuthentication': false},
                        {'route': 'agenda', 'html': 'MENU_AGENDA', 'requiresAuthentication': false},
                        {'route': 'club', 'html': 'MENU_CLUB', 'requiresAuthentication': false},
                        {'route': 'training', 'html': 'MENU_TRAINING', 'requiresAuthentication': false},
                        {'route': 'identities', 'html': 'MENU_MEMBERS', 'requiresAuthentication': true},
                        {'route': 'account', 'html': 'MENU_ACCOUNT', 'requiresAuthentication': true},
                        {'route': 'login', 'html': 'MENU_LOGIN', 'requiresAuthentication': false}
                    ];

                    $scope.checkAuthorization = function(value) {
                        if ($authentication.isAuthenticated) {
                            return true;
                        } else {
                            return value.requiresAuthentication === false;
                        }
                    };

                    $scope.go = function(e, element) {
                        $modalInstance.dismiss();
                        e.stopPropagation();
                        $state.go(element.route);
                    };
                }]
            }).result.then(postClose, postClose);
        };
    }
})();