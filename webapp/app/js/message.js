(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appMessage', {
        templateUrl: 'partials/message.html',
        controllerAs: 'vm',
        bindings: {
            message: '=',
            isError: '='
        }
    });
})();

