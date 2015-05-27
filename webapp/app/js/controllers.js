var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside'])

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
        //backdrop: true,
        animation: true,
        controller: function($scope, $modalInstance) {
          $scope.ok = function(e) {
            $modalInstance.close();
            e.stopPropagation();
          };
          $scope.cancel = function(e) {
            $modalInstance.dismiss();
            e.stopPropagation();
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
  
tcbernControllers.controller('NewsCtrl', function ($scope) {
  $scope.newsList = [
    {'title': 'Match TC Bern - Carouge',
     'content': 'Matchbericht TC Bern - Carouge'},
    {'title': 'Rimini',
     'content': 'Reise nach Rimini'},
    {'title': 'Match Nyon - TC Bern',
     'content': 'Matchbericht Nyon - TC Bern'}
  ];
});