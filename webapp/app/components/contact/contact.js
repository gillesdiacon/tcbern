(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appContact', {
        templateUrl: 'components/contact/contact.html',
        controllerAs: 'vm',
        controller: ['Restangular', ContactController]
    });

    function ContactController(Restangular) {
        var vm = this;
        vm.contentKey = 'CONTACT';
        vm.groups = ['admin'];
    }
})();