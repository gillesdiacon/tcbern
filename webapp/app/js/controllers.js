var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside', 'restangular', 'authentication']);
var token = '';

tcbernControllers.controller('MainCtrl', function($scope, $aside, $state) {
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
            {'route': 'news', 'html': 'News', 'requiresAuthentication': false},
            {'route': 'items', 'html': 'Items', 'requiresAuthentication': true},
            {'route': 'login', 'html': 'Login', 'requiresAuthentication': false}
          ];
          
          $scope.checkAuthorization = function(value, index) {
            if ($authentication.isAuthenticated) return true;
            else return value.requiresAuthentication == false;
          };
          
          $scope.go = function(e, to) {
            $modalInstance.dismiss();
            e.stopPropagation();
            $state.go(to);
          }
        }
      }).result.then(postClose, postClose);
    }
  });
  
tcbernControllers.controller('NewsCtrl', function ($scope, Restangular) {
  Restangular.setBaseUrl('http://192.168.1.106/tcbern/backend/api/api');
  Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + token });
  
  var infos = Restangular.all('infos');
  infos.getList().then(function(allInfos) {
    $scope.newsList = allInfos;
  });
});

tcbernControllers.controller('LoginCtrl', function ($scope, $authentication) {
  $scope.username = '';
  $scope.password = '';
  
  $scope.login = function() {
    /*$authentication.authenticate($scope.username, $scope.password, function() {},
      function(data, status, header, config) {
        alert('Error during the authentication: ' + data + ' with status ' + status);
      });*/
    $authentication.isAuthenticated = true;
  };
});