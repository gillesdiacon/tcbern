(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appSingleInfo', {
        templateUrl: 'partials/single-info.html',
        controllerAs: "vm",
        bindings: {
            info: '='
        }
    });
})();
