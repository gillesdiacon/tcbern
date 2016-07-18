(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appTraining', {
        templateUrl: 'partials/training.html',
        controllerAs: 'vm',
        controller: [TrainingController]
    });

    function TrainingController() {
        var vm = this;
    }
})();
