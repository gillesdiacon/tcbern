angular.module('tcbernApp', ['ui.router', 'tcbernControllers']).config(function($stateProvider, $urlRouterProvider) {
  //For any unmatched urls, redirect to ...
  $urlRouterProvider.otherwise('/news');
  $urlRouterProvider.when('', '/news');
  
  $stateProvider
    .state('news', {
      url: '/news',
      templateUrl: 'partials/news.html',
      controller: 'NewsCtrl',
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
