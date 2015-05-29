var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside', 'restangular'])

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
  $scope.newsList = [
    {'title': 'Match TC Bern - Carouge',
     'content': 'Matchbericht TC Bern - Carouge'},
    {'title': 'Rimini',
     'content': 'Reise nach Rimini'},
    {'title': 'Match Nyon - TC Bern',
     'content': 'Matchbericht Nyon - TC Bern'}
  ];
});