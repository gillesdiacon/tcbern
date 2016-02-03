(function () {
    'use strict';

    angular.module('authentication', ['restangular'])
        .factory('$authentication', ['$http', '$q', 'Restangular', function ($http, $q, Restangular) {
            var service = {
                token: null,
                userId: null,
                group: null,
                isAuthenticated: false
            };

            service.logout = function () {
                service.token = null;
                service.userId = null;
                service.group = null;
                service.isAuthenticated = false;
            };

            service.authenticate = function (username, password) {
                return $q(function(resolve, reject) {
                    $http.post('../../backend/public/auth', {
                            'username': username,
                            'password': md5(password)
                        })
                        .then(function (response) {
                            service.token = response.data.token;
                            service.userId = response.data.userId;
                            service.group = response.data.group;
                            service.isAuthenticated = true;
                            Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + service.token});
                            resolve();
                        })
                        .catch(function (data, status) {
                            service.logout();
                            reject(data, status);
                        });
                });
            };

            return service;
        }]);
})();
