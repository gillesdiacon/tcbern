(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('TrainingCtrl', ['$scope', TrainingController]);

    function TrainingController($scope) {
        $scope.setTitle('TITLE_TRAINING');
    }
})();
