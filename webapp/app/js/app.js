angular.module('tcbernApp', ['ui.router', 'tcbernControllers', 'hc.marked']).config(function($stateProvider, $urlRouterProvider) {
  //For any unmatched urls, redirect to the infos page
  $urlRouterProvider.otherwise('/infos');
  $urlRouterProvider.when('', '/infos');
  
  $stateProvider
    .state('infos', {
      url: '/infos',
      templateUrl: 'partials/infos.html',
      controller: 'InfosCtrl'
    })
    .state('infos_detail', {
      url: '/infos/:id',
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
    .state('committee', {
      url: '/committee',
      templateUrl: 'partials/committee.html',
      controller: 'CommitteeCtrl'
    })
    .state('identities', {
      url: '/identities',
      templateUrl: 'partials/identities.html',
      controller: 'IdentitiesCtrl'
    })
    .state('identity_detail', {
      url: '/identities/:id',
      templateUrl: 'partials/identities.detail.html',
      controller: 'IdentityDetailCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    });
});
