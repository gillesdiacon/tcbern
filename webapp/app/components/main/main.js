(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('MainCtrl', ['$scope', 'Restangular', MainController]);

    function MainController($scope, Restangular) {
        Restangular.setBaseUrl('../../backend/v3/public/api');
    }
})();