angular.module('authentication', [])
  .factory('$authentication', function($http) {
    var service = {
      token: null,
      group: null,
      isAuthenticated: false
    };
    
    service.authenticate = function(username, password, successCallback, errorCallback) {
      $http.post('http://192.168.1.106/tcbern/backend/api/auth', {'username': username, 'password': password})
      .success(function(data, status, header, config) {
        service.token = data.token;
        service.group = data.group;
        service.isAuthenticated = true;
        
        if (typeof(successCallback) != undefined) {
          sucessCallback(data, status, header, config);
        }
      })
      .error(function(data, status, header, config) {
        service.token = null;
        service.group = null;
        service.isAuthenticated = false;
        
        if (typeof(successCallback) != undefined) {
          sucessCallback(data, status, header, config);
        }
      });
    };
    
    return service;
  });