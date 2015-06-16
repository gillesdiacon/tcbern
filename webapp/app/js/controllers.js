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
          
          $scope.go = function(e, element) {
            $modalInstance.dismiss();
            e.stopPropagation();
            $state.go(element.route);
          }
        }
      }).result.then(postClose, postClose);
    }
  });
  
tcbernControllers.controller('InfosCtrl', function ($scope, Restangular) {
  $scope.title = 'News';
  
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
  $scope.title = 'Login';
  
  $scope.username = '';
  $scope.password = '';
  $scope.message = '';
  
  $scope.resetInfosWithMessage = function(reset, message) {
    if (reset) {
      $scope.username = '';
      $scope.password = '';
    }
    $scope.message = message;
  };
  $scope.login = function() {
    $authentication.authenticate($scope.username, $scope.password, function(data, status, header, config) {
        $scope.resetInfosWithMessage(true, 'Successfuly authenticated');
      },
      function(data, status, header, config) {
        if (status == 503) {
          $scope.resetInfosWithMessage(false, 'Username or password invalid');
        } else {
          $scope.resetInfosWithMessage(false, 'Problem during authentication: status = ' + status);
        }
      });
    $authentication.isAuthenticated = true;
  };
});