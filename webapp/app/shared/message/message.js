(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appMessage', {
        templateUrl: 'shared/message/message.html',
        controllerAs: 'vm',
        bindings: {
            message: '=',
            isError: '='
        }
    });
})();

