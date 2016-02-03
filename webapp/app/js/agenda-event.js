(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appAgendaEvent', {
        templateUrl: 'partials/agenda-event.html',
        controller: AgendaEventController,
        controllerAs: 'vm',
        bindings: {
            event: '=',
            dateFormatter: '&'
        }
    });

    function AgendaEventController() {
        var vm = this;

        // TODO check outside the SBB net
        vm.formatDate = function(date) {
            return vm.dateFormatter()(date);
        };
    }
})();