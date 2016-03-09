(function () {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside', 'restangular', 'authentication', 'ui.calendar', 'hc.marked', 'pascalprecht.translate'])
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useLoader('translateCustomLoader', {});
            //$translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.preferredLanguage('de');
        }]);

    tcbernControllers.factory('translateCustomLoader', ['$http', function ($http) {
        return function (options) {
            var language = options.key;
            return $http.get('../../backend/public/api/internationalisation')
                .then(function (response) {
                    var result = {};
                    response.data.forEach(function (entry) {
                        result[entry.key] = entry[language];
                    });
                    return result;
                });
        };
    }]);
})();
