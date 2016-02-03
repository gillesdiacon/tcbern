var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside', 'restangular', 'authentication', 'ui.calendar', 'header', 'hc.marked', 'pascalprecht.translate'])
    .config(function($translateProvider) {
        'use strict';
        $translateProvider.useLoader('translateCustomLoader', {});
        //$translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.preferredLanguage('de');
    });

tcbernControllers.factory('translateCustomLoader', function ($http) {
    'use strict';
    return function(options) {
        var language = options.key;
        return $http.get('../../backend/public/api/internationalisation')
            .then(function(response) {
                var result = {};
                response.data.forEach(function(entry) {
                    result[entry.key] = entry[language];
                });
                return result;
            }, function(response) {});
    };
});

tcbernControllers.controller('MainCtrl', function($scope, $aside, $state, Restangular, $header, $authentication) {
    'use strict';
    Restangular.setBaseUrl('../../backend/public/api');
    Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers, queryParams) {
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
        function(oldValue, newValue) { $scope.title = $header.title; });

    $scope.asideState = {
        open: false
    };

    $scope.openAside = function() {
        $scope.asideState = {
            open: true,
        };

        function postClose() {
            $scope.asideState.open = false;
        }

        $aside.open({
            templateUrl: 'partials/menu.html',
            placement: 'left',
            size: 'sm',
            animation: true,
            controller: function($scope, $modalInstance, $authentication, $filter) {
                $scope.menuElementList = [
                    {'route': 'infos', 'html': 'MENU_INFO', 'requiresAuthentication': false},
                    {'route': 'agenda', 'html': 'MENU_AGENDA', 'requiresAuthentication': false},
                    {'route': 'club', 'html': 'MENU_CLUB', 'requiresAuthentication': false},
                    {'route': 'training', 'html': 'MENU_TRAINING', 'requiresAuthentication': false},
                    {'route': 'identities', 'html': 'MENU_MEMBERS', 'requiresAuthentication': true},
                    {'route': 'account', 'html': 'MENU_ACCOUNT', 'requiresAuthentication': true},
                    {'route': 'login', 'html': 'MENU_LOGIN', 'requiresAuthentication': false}
                ];

                $scope.checkAuthorization = function(value, index) {
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
            }
        }).result.then(postClose, postClose);
    };
});


