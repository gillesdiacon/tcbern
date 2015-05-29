var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside', 'restangular']);
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
        controller: function($scope, $modalInstance) {
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
  /*$scope.newsList = [
    {'title': 'Match TC Bern - Carouge',
     'content': 'Matchbericht TC Bern - Carouge'},
    {'title': 'Rimini',
     'content': 'Reise nach Rimini'},
    {'title': 'Match Nyon - TC Bern',
     'content': 'Matchbericht Nyon - TC Bern'}
  ];*/
});

tcbernControllers.controller('LoginCtrl', function ($scope, $http) {
  $scope.username = '';
  $scope.password = '';
  
  $scope.login = function() {
    $http.post('http://192.168.1.106/tcbern/backend/api/auth', {'username': $scope.username, 'password': $scope.password})
      .success(function(data, status, header, config) {
        token = data.token;
      })
      .error(function(data, status, header, config) {
        alert('Error during the authentication: ' + data + ' with status ' + status);
      });
  };
});