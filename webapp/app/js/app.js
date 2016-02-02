angular.module('tcbernApp', ['ui.router', 'tcbernControllers', 'hc.marked'])
.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
  'use strict';
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
    .state('agenda', {
      url: '/agenda',
      templateUrl: 'partials/agenda.html',
      controller: 'AgendaCtrl'
    })
    .state('club', {
      url: '/club',
      templateUrl: 'partials/club.html',
      controller: 'ClubCtrl'
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
    .state('account', {
      url: '/account',
      templateUrl: 'partials/account.html',
      controller: 'AccountCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    });
});