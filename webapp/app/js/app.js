angular.module('tcbernApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  //For any unmatched urls, redirect to ...
  $urlRouterProvider.otherwise('/news');
  $urlRouterProvider.when('', '/news');
  
  $stateProvider
    .state('news', {
      url: '/news',
      templateUrl: 'partials/news.html',
      controller: function ($scope) {
        $scope.newsList = [
          {'title': 'Match TC Bern - Carouge',
           'content': 'Matchbericht TC Bern - Carouge'},
          {'title': 'Rimini',
           'content': 'Reise nach Rimini'},
          {'title': 'Match Nyon - TC Bern',
           'content': 'Matchbericht Nyon - TC Bern'}
        ];
      },
      onEnter: function() {
        console.log('Enter /news');
      },
      onExit: function() {
        console.log('Exit /news');
      }
    })
    .state('items', {
      url: '/items',
      templateUrl: 'partials/items.html',
      controller: function ($scope) {
        $scope.itemList = ['A', 'B', 'C'];
      },
      onEnter: function() {
        console.log('Enter /news');
      },
      onExit: function() {
        console.log('Exit /news');
      }
    });
});

// ng-controller="AppCtrl"
//angular.module('tcbernApp', []).controller('AppCtrl', function($scope) {});