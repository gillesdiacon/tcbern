(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.component('appEditable', {
        templateUrl: 'shared/editable/editable.html',
        controllerAs: 'vm',
        controller: ['$scope', '$authentication', '$loadedcontent', EditableController],
        bindings: {
            contentKey: '=',
            groups: '='
        }
    });

    function EditableController($scope, $authentication, $loadedcontent) {
        var vm = this;
        vm.edit = false;
        vm.preview = false;
        vm.canNotEdit = !$authentication.isAuthenticated || !$authentication.isInAnyGroup(vm.groups);
        vm.pageContent = '';

        $loadedcontent.contentForKey(vm.contentKey).then(function(response) {
            vm.content = response;
            vm.pageContent = vm.content.content;
        });

        vm.startEdit = function() {
            vm.edit = true;
        };
        vm.save = function() {
            vm.content.content = vm.pageContent;
            vm.content.put();
            vm.edit = false;
        };
        vm.cancelEdit = function() {
            vm.pageContent = vm.content.content;
            vm.edit = false;
        };
        vm.switchToPreview = function() {
            vm.preview = true;
        };
        vm.backToEdit = function() {
            vm.preview = false;
        };
    }
})();
