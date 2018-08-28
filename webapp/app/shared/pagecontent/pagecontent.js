(function () {
    'use strict';

    angular.module('pagecontent', ['restangular'])
        .factory('$pagecontent', ['Restangular', PagecontentController]);

    function PagecontentController(Restangular) {
        function mapToAssociative(a) {
            var result = {};
            a.forEach(function(e) { result[e.key] = e.content; });
            return result;
        };

        var service = {
            pages: mapToAssociative(Restangular.all('pages'))
        };

        service.content = function(key) {
            return service.pages[key];
        };

        return service;
    }
})();
