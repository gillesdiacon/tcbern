(function () {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'restangular', 'hc.marked', 'pascalprecht.translate'])
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useLoader('translateCustomLoader', {});
            //$translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.preferredLanguage('de');
        }]);

    tcbernControllers.factory('translateCustomLoader', ['$http', function ($http) {
        return function (options) {
            var language = options.key;
            return $http.get('../../backend/v2/public/api/internationalisation')
                .then(function (response) {
                    var result = {};
                    response.data.forEach(function (entry) {
                        result[entry.key] = entry[language];
                    });
                    return result;
                });
        };
    }]);

    function mapToAssociative(a) {
        var result = {};
        a.forEach(function(e) { result[e.key] = e; });
        return result;
    }

    tcbernControllers.factory('$loadedcontent', ['$http', 'Restangular', '$q', function($http, Restangular, $q) {
        var service = {
            content: undefined
        };

        service.contentForKey = function contentForKey(key) {
            if (service.content === undefined) {
                return Restangular.all('pages').getList().then(function(response) {
                    var mapped = mapToAssociative(response);
                    service.content = mapped;
                    return mapped[key];
                });
            } else {
                var defer = $q.defer();
                defer.resolve(service.content[key]);
                return defer.promise;
            }
        };

        return service;
    }]);
})();
