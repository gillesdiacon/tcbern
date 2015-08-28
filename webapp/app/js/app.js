angular.module('tcbernApp', ['ui.router', 'tcbernControllers', 'hc.marked'])
.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
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
    .state('committee', {
      url: '/committee',
      templateUrl: 'partials/committee.html',
      controller: 'CommitteeCtrl'
    })
    .state('training', {
      url: '/training',
      templateUrl: 'partials/training.html',
      controller: 'TrainingCtrl'
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
