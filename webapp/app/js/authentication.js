angular.module('header', [])
  .factory('$header', function() {
    var service = {
      title: ''
    };
    
    return service;
  });

angular.module('authentication', ['restangular'])
  .factory('$authentication', function($http, Restangular) {
    var service = {
      token: null,
      group: null,
      isAuthenticated: false
    };
    
    service.authenticate = function(username, password, successCallback, errorCallback) {
      $http.post('http://localhost/tcbern/backend/public/auth', {'username': username, 'password': password}, { 'successCallback': successCallback })
        .success(function(data, status, header, config) {
          service.token = data.token;
          service.group = data.group;
          service.isAuthenticated = true;
          
          Restangular.setDefaultHeaders({ 'Authorization': 'Bearer ' + service.token });
          if (typeof(successCallback) != undefined) {
            successCallback.call(this, data, status, header, config);
          }
        })
        .error(function(data, status, header, config) {
          service.token = null;
          service.group = null;
          service.isAuthenticated = false;
          
          if (typeof(errorCallback) != undefined) {
            errorCallback.call(this, data, status, header, config);
          }
        });
    };
    
    service.logout = function() {
      service.token = null;
      service.group = null;
      service.isAuthenticated = false;
    };
    
    return service;
  });