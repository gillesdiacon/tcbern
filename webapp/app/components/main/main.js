(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('MainCtrl', ['$scope', '$aside', '$state', 'Restangular', MainController]);

    function MainController($scope, $aside, $state, Restangular) {
        Restangular.setBaseUrl('../../backend/v2/public/api');

        var vm = this;
        vm.asideState = {
            open: false
        };

        vm.openAside = function() {
            if (vm.asideState.open === true) {
                vm.asideState.$uibModalInstance.dismiss();
                return;
            }

            function postClose() {
                vm.asideState.open = false;
            }

            var parentVm = vm;
            vm.asideState.open = true;
            $aside.open({
                templateUrl: 'components/main/menu.html',
                placement: 'left',
                size: 'sm',
                animation: true,
                controllerAs: 'vm',
                controller: ['$uibModalInstance', function($uibModalInstance) {
                    parentVm.asideState.$uibModalInstance = $uibModalInstance;
                    var vm = this;
                    vm.menuElementList = [
                        {'route': 'training', 'html': 'MENU_TRAINING'},
                        {'route': 'tournament', 'html': 'MENU_TOURNAMENT'},
                        {'route': 'contact', 'html': 'MENU_CONTACT'},
                    ];

                    vm.go = function(e, element) {
                        $uibModalInstance.dismiss();
                        e.stopPropagation();
                        $state.go(element.route);
                    };
                }]
            }).result.then(postClose, postClose);
        };
    }
})();