(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('TrainingCtrl', ['$header', TrainingController]);

    function TrainingController($header) {
        $header.title = 'TITLE_TRAINING';
    }
})();
