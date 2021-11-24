(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appEditable', {
        templateUrl: 'shared/editable/editable.html',
        controllerAs: 'vm',
        controller: ['$scope', '$loadedcontent', EditableController],
        bindings: {
            contentKey: '=',
        }
    });

    function EditableController($scope, $loadedcontent) {
        var vm = this;
        vm.pageContent = '';

        $loadedcontent.contentForKey(vm.contentKey).then(function(response) {
            vm.content = response;
            vm.pageContent = vm.content.content;
        });
    }
})();
