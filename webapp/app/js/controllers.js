var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside', 'restangular', 'authentication']);
var token = '';

tcbernControllers.controller('MainCtrl', function($scope, $aside, $state, Restangular) {
    Restangular.setBaseUrl('http://localhost/tcbern/backend/public/api');
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
            {'route': 'infos', 'html': 'News', 'requiresAuthentication': false},
            {'route': 'identities', 'html': 'Members', 'requiresAuthentication': true},
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
  
tcbernControllers.controller('InfosCtrl', function ($scope, Restangular) {
  var infos = Restangular.all('infos');
  infos.getList().then(function(allInfos) {
    $scope.infosList = allInfos;
  });
  
  $scope.getInfoById = function(id) {
    for (i = 0; i < $scope.infosList.length; i++) {
      if ($scope.infosList[i].id == id) {
        return $scope.infosList[i];
      }
    }
    
    return {};
  };
});
tcbernControllers.controller('InfosDetailCtrl', function ($scope, $stateParams) {
  $scope.detail = $scope.getInfoById($stateParams.id);
});
tcbernControllers.controller('IdentitiesCtrl', function ($scope, Restangular) {
  var identities = Restangular.all('identities');
  identities.getList().then(function(allIdentities) {
    $scope.identityList = allIdentities;
  });
});

tcbernControllers.controller('LoginCtrl', function ($scope, $authentication) {
  $scope.username = '';
  $scope.password = '';
  
  $scope.login = function() {
    $authentication.authenticate($scope.username, $scope.password, function() {},
      function(data, status, header, config) {
        alert('Error during the authentication: ' + data + ' with status ' + status);
      });
    $authentication.isAuthenticated = true;
  };
});