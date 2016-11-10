(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appSingleInfo', {
        templateUrl: 'shared/info/single-info.html',
        controllerAs: 'vm',
        bindings: {
            info: '='
        }
    });
})();
