/*angular.module('tcbernApp', ['ngRoute', 'tcbernControllers'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/news', {
          templateUrl: 'partials/news.html',
          controller: 'NewsListCtrl'
        }).
        otherwise({
          redirectTo: '/news'
        });
    }]);*/
    
angular.module('tcbernApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  //For any unmatched urls, redirect to ...
  //$urlRouterProvider.otherwise('/news');
  //$urlRouterProvider.when('', '/news');
  $stateProvider
    /*.state('base', {
      views: {
        'header': {
          templateUrl: 'partials/header.html'
        }
      }
    })*/
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
      }
    })
    .state('items', {
      url: '/items',
      templateUrl: 'partials/items.html',
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    });
    /*.state('news.detail', {
      url: "/news/:newsId",
      templateUrl: "partials/news.html",
      controller: function($scope) {
      }
    });*/
});