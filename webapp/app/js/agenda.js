(function() {
    'use strict';

    var tcbernControllers = angular.module('tcbernControllers');
    tcbernControllers.controller('AgendaCtrl', ['$scope', AgendaController]);

    function AgendaController($scope) {
        var vm = this;

        $scope.setTitle('TITLE_AGENDA');

        vm.event = undefined;
        vm.eventClick = function (event, jsEvent) {
            vm.event = event;
            jsEvent.stopPropagation();
            jsEvent.preventDefault();
        };
        vm.uiConfig = {
            calendar:{
                lang: 'de',
                height: 450,
                editable: false,
                header:{
                    left: '',
                    center: 'title',
                    right: 'today prev,next'
                },
                firstDay: 1, // Set monday as first day
                eventClick: vm.eventClick
            }
        };
        vm.eventSources = [{
            url: 'http://www.google.com/calendar/feeds/webmaster%40tcbern.ch/public/basic',
            googleCalendarApiKey: 'AIzaSyBJXlRv1-B4O9DdLL6qKfvm76Mu70IrgDA',
            className: 'gcal-event',
            currentTimezone: 'Europe/Zurich'
        }, {
            url: 'http://www.google.com/calendar/feeds/tcbern.ch_eql9autq91jrg4u7sttjmijoe0%40group.calendar.google.com/public/basic',
            googleCalendarApiKey: 'AIzaSyBJXlRv1-B4O9DdLL6qKfvm76Mu70IrgDA',
            className: 'gcal-event',
            currentTimezone: 'Europe/Zurich'
        }];

        // TODO receive the translation component to format the date in the right language
        vm.formatDate = function(date) {
            return date.toLocaleTimeString('de', {hour: '2-digit', minute: '2-digit'});
        };
    }
})();