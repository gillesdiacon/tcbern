(function () {
    'use strict';

    angular.module('tcbernApp', ['ui.router', 'tcbernControllers', 'hc.marked'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            //For any unmatched urls, redirect to the infos page
            $urlRouterProvider.otherwise('/infos');
            $urlRouterProvider.when('', '/infos');

            $stateProvider
                .state('infos', {
                    url: '/infos',
                    templateUrl: 'partials/infos.html',
                    controller: 'InfosCtrl as vm'
                })
                .state('infos_detail', {
                    url: '/infos/:id',
                    templateUrl: 'partials/infos.detail.html',
                    controller: 'InfosDetailCtrl as vm'
                })
                .state('agenda', {
                    url: '/agenda',
                    templateUrl: 'partials/agenda.html',
                    controller: 'AgendaCtrl as vm'
                })
                .state('club', {
                    url: '/club',
                    templateUrl: 'partials/club.html',
                    controller: 'ClubCtrl as vm'
                })
                .state('training', {
                    url: '/training',
                    templateUrl: 'partials/training.html',
                    controller: 'TrainingCtrl as vm'
                })
                .state('identities', {
                    url: '/identities',
                    templateUrl: 'partials/identities.html',
                    controller: 'IdentitiesCtrl as vm'
                })
                .state('identity_detail', {
                    url: '/identities/:id',
                    templateUrl: 'partials/identities.detail.html',
                    controller: 'IdentityDetailCtrl as vm'
                })
                .state('account', {
                    url: '/account',
                    templateUrl: 'partials/account.html',
                    controller: 'AccountCtrl as vm'
                })
                .state('login', {
                    url: '/login',
                    template: '<app-login></app-login>'//'partials/login.html',
                    //controller: 'LoginCtrl as vm'
                });
        }]);
})();
