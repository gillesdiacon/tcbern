angular.module('authentication', ['restangular'])
  .factory('$authentication', function($http, Restangular) {
    var service = {
      token: null,
      group: null,
      isAuthenticated: false
    };
    
    service.authenticate = function(username, password, successCallback, errorCallback) {
      $http.post('http://localhost/tcbern/backend/public/auth', {'username': username, 'password': password})
      .success(function(data, status, header, config) {
        service.token = data.token;
        service.group = data.group;
        service.isAuthenticated = true;
        
        Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + service.token });
        /*if (typeof(successCallback) != undefined) {
          sucessCallback(data, status, header, config);
        }*/
      })
      .error(function(data, status, header, config) {
        service.token = null;
        service.group = null;
        service.isAuthenticated = false;
        
        /*if (typeof(errorCallback) != undefined) {
          errorCallback(data, status, header, config);
        }*/
      });
    };
    
    return service;
  });