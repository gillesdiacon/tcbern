angular.module('tcbernApp', []).controller('NewsListCtrl', function ($scope) {
  $scope.newsList = [
    {'title': 'Match TC Bern - Carouge',
     'content': 'Matchbericht TC Bern - Carouge'},
    {'title': 'Rimini',
     'content': 'Reise nach Rimini'},
    {'title': 'Match Nyon - TC Bern',
     'content': 'Matchbericht Nyon - TC Bern'}
  ];
});