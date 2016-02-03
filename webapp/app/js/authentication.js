(function () {
    'use strict';

    angular.module('authentication', ['restangular'])
        .factory('$authentication', ['$http', '$q', 'Restangular', AuthenticationController]);

    function AuthenticationController($http, $q, Restangular) {
        var service = {
            token: null,
            userId: null,
            group: null,
            isAuthenticated: false
        };

        service.logout = function logout() {
            service.token = null;
            service.userId = null;
            service.group = null;
            service.isAuthenticated = false;
        };

        service.authenticate = function authenticate(username, password) {
            return $q(function (resolve, reject) {
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
    }
})();
