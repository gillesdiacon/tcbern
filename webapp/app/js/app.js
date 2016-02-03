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
                    template: '<app-infos-list></app-infos-list>'
                })
                .state('infos_detail', {
                    url: '/infos/:id',
                    template: '<app-infos-detail></app-infos-detail>'
                })
                .state('agenda', {
                    url: '/agenda',
                    template: '<app-agenda></app-agenda>'
                })
                .state('club', {
                    url: '/club',
                    template: '<app-club></app-club>'
                })
                .state('training', {
                    url: '/training',
                    template: '<app-training></app-training>'
                })
                .state('identities', {
                    url: '/identities',
                    template: '<app-identities-list></app-identities-list>'
                })
                .state('identity_detail', {
                    url: '/identities/:id',
                    template: '<app-identities-detail></app-identities-detail>'
                })
                .state('account', {
                    url: '/account',
                    template: '<app-account-editor></app-account-editor>'
                })
                .state('login', {
                    url: '/login',
                    template: '<app-login></app-login>'
                });
        }]);
})();
