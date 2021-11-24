(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appContact', {
        templateUrl: 'components/contact/contact.html',
        controllerAs: 'vm',
        controller: [ContactController]
    });

    function ContactController() {
        var vm = this;
        vm.contentKey = 'CONTACT';
    }
})();