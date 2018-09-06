(function () {
    'use strict';

    angular.module('tcbernApp', ['ui.router', 'tcbernControllers', 'hc.marked'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            //For any unmatched urls, redirect to the infos page
            $urlRouterProvider.otherwise('/welcome');
            $urlRouterProvider.when('', '/welcome');

            $stateProvider
                .state('welcome', {
                    url: '/welcome',
                    template: '<app-welcome></app-welcome>'
                })
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
                .state('contact', {
                    url: '/contact',
                    template: '<app-contact></app-contact>'
                })
                .state('training', {
                    url: '/training',
                    template: '<app-training></app-training>'
                })
                .state('tournament', {
                    url: '/tournament',
                    template: '<app-tournament></app-tournament>'
                })
                .state('identities', {
                    url: '/identities',
                    template: '<app-identities-list></app-identities-list>'
                })
                .state('identity_detail', {
                    url: '/identities/:id',
                    template: '<app-identities-detail></app-identities-detail>'
                })
                .state('identity_create', {
                    url: '/identity/create',
                    template: '<app-identity-create></app-identity-create>'
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
