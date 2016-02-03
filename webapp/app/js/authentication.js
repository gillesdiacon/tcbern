angular.module('header', [])
    .factory('$header', function () {
        'use strict';
        var service = {
            title: ''
        };

        return service;
    });

angular.module('authentication', ['restangular'])
    .factory('$authentication', function ($http, Restangular) {
        'use strict';
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

        // TODO convert to promise
        service.authenticate = function (username, password, successCallback, errorCallback) {
            $http.post('../../backend/public/auth', {
                    'username': username,
                    'password': md5(password)
                }, {'successCallback': successCallback})
                .success(function (data, status, header, config) {
                    service.token = data.token;
                    service.userId = data.userId;
                    service.group = data.group;
                    service.isAuthenticated = true;

                    Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + service.token});
                    if (typeof(successCallback) !== undefined) {
                        successCallback.call(this, data, status, header, config);
                    }
                })
                .error(function (data, status, header, config) {
                    service.logout();

                    if (typeof(errorCallback) !== undefined) {
                        errorCallback.call(this, data, status, header, config);
                    }
                });
        };

        return service;
    });