(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appTraining', {
        templateUrl: 'components/training/training.html',
        controllerAs: 'vm',
        controller: [TrainingController]
    });

    function TrainingController() {
        var vm = this;
        vm.interestKey = 'TRAINING_INTEREST';
        vm.halleBernmobilKey = 'TRAINING_HALLE_BERNMOBIL';
    }
})();
