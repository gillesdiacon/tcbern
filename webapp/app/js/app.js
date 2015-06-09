angular.module('tcbernApp', ['ui.router', 'tcbernControllers']).config(function($stateProvider, $urlRouterProvider) {
  //For any unmatched urls, redirect to the infos page
  $urlRouterProvider.otherwise('/infos');
  $urlRouterProvider.when('', '/infos');
  
  $stateProvider
    .state('infos', {
      url: '/infos',
      templateUrl: 'partials/infos.html',
      controller: 'InfosCtrl'
    })
    .state('infos.detail', {
      url: '/:id',
      templateUrl: 'partials/infos.detail.html',
      controller: 'InfosDetailCtrl'
    })
    .state('items', {
      url: '/items',
      templateUrl: 'partials/items.html',
      controller: function ($scope) {
        $scope.itemList = ['A', 'B', 'C'];
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    });
});
