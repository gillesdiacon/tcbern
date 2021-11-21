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
                });
        }]);
})();
