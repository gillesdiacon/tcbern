var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside', 'restangular', 'authentication', 'ui.calendar', 'header', 'hc.marked', 'pascalprecht.translate'])
  .config(function($translateProvider) {
    $translateProvider.useLoader('translateCustomLoader', {});
    //$translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('de');
  });
  
tcbernControllers.factory('translateCustomLoader', function ($http, $q) {
  return function(options) {
    var language = options.key;
    return $http.get('../../backend/public/api/internationalisation')
      .then(function(response) {
        var result = {};
        response.data.forEach(function(entry) {
          result[entry.key] = entry[language];
        });
        return result;
      }, function(response) {});
  };
});

tcbernControllers.controller('MainCtrl', function($scope, $aside, $state, Restangular, $header, $authentication) {
    Restangular.setBaseUrl('../../backend/public/api');
    Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers, queryParams) {
        var updatedRequest = {};
        if ($authentication.token != null) {
            headers.Token = $authentication.token;
            updatedRequest.headers = headers;
        }
        return updatedRequest;
    });
    
    $scope.title = $header.title;
    $scope.$watch(
      function() { return $header.title; },
      function(oldValue, newValue) { $scope.title = $header.title; });
    
    $scope.asideState = {
      open: false
    };
    
    $scope.openAside = function() {
      $scope.asideState = {
        open: true,
      };
      
      function postClose() {
        $scope.asideState.open = false;
      }
      
      $aside.open({
        templateUrl: 'partials/menu.html',
        placement: 'left',
        size: 'sm',
        animation: true,
        controller: function($scope, $modalInstance, $authentication, $filter) {
          $scope.menuElementList = [
            {'route': 'infos', 'html': 'MENU_INFO', 'requiresAuthentication': false},
            {'route': 'agenda', 'html': 'MENU_AGENDA', 'requiresAuthentication': false},
            {'route': 'club', 'html': 'MENU_CLUB', 'requiresAuthentication': false},
            {'route': 'training', 'html': 'MENU_TRAINING', 'requiresAuthentication': false},
            {'route': 'identities', 'html': 'MENU_MEMBERS', 'requiresAuthentication': true},
            {'route': 'account', 'html': 'MENU_ACCOUNT', 'requiresAuthentication': true},
            {'route': 'login', 'html': 'MENU_LOGIN', 'requiresAuthentication': false}
          ];
          
          $scope.checkAuthorization = function(value, index) {
            if ($authentication.isAuthenticated) return true;
            else return value.requiresAuthentication == false;
          };
          
          $scope.go = function(e, element) {
            $modalInstance.dismiss();
            e.stopPropagation();
            $state.go(element.route);
          }
        }
      }).result.then(postClose, postClose);
    }
  });
  
tcbernControllers.controller('InfosCtrl', function ($scope, Restangular, $header) {
  $header.title = 'TITLE_INFO';
  
  var infos = Restangular.all('infos');
  infos.getList().then(function(allInfos) {
    $scope.infosList = allInfos;
  });
  
  $scope.getInfoById = function(id) {
    for (i = 0; i < $scope.infosList.length; i++) {
      if ($scope.infosList[i].id == id) {
        return $scope.infosList[i];
      }
    }
    
    return {};
  };
});
tcbernControllers.controller('InfosDetailCtrl', function ($scope, $stateParams, Restangular, $header) {
  $header.title = 'TITLE_INFO_DETAIL';
  
  Restangular.one('infos', $stateParams.id).get().then(function(info) {
    $header.title = info.title;
    $scope.detail = info;
  });
});
tcbernControllers.controller('AgendaCtrl', function($scope, $header) {
  $header.title = 'TITLE_AGENDA';
  
  $scope.event = undefined;
  $scope.eventClick = function (event, jsEvent, view, resourceObj) {
    $scope.event = event;
    jsEvent.stopPropagation();
    jsEvent.preventDefault();
  };
  $scope.uiConfig = {
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
        eventClick: $scope.eventClick
      }
    };
  $scope.eventSources = [
    {
      url: "http://www.google.com/calendar/feeds/webmaster%40tcbern.ch/public/basic",
      googleCalendarApiKey: 'AIzaSyBJXlRv1-B4O9DdLL6qKfvm76Mu70IrgDA',
      className: 'gcal-event',
      currentTimezone: 'Europe/Zurich'
    }, {
      url: "http://www.google.com/calendar/feeds/tcbern.ch_eql9autq91jrg4u7sttjmijoe0%40group.calendar.google.com/public/basic",
      googleCalendarApiKey: 'AIzaSyBJXlRv1-B4O9DdLL6qKfvm76Mu70IrgDA',
      className: 'gcal-event',
      currentTimezone: 'Europe/Zurich'
    }];
    
  $scope.formatDate = function(date) {
    return date.toLocaleTimeString("de", {hour: "2-digit", minute: "2-digit"});
  };
});

tcbernControllers.controller('IdentitiesCtrl', function ($scope, $state, Restangular, $header) {
  $header.title = 'TITLE_MEMBERS';
  
  var identities = Restangular.all('identities');
  identities.getList().then(function(allIdentities) {
    $scope.identityList = allIdentities;
  });
  
  $scope.go = function(event, identity) {
    event.stopPropagation();
    $state.go('identity_detail', { 'id': identity.id });
  };
});
tcbernControllers.controller('IdentityDetailCtrl', function ($scope, $stateParams, Restangular, $header) {
  $header.title = 'TITLE_MEMBERS_DETAIL';
  
  Restangular.one('identities', $stateParams.id).get().then(function(identity) {
    $header.title = identity.lastname + ' ' + identity.firstname;
    $scope.identity = identity;
  });
});
tcbernControllers.controller('ClubCtrl', function ($scope, $stateParams, Restangular, $header) {
  $header.title = 'TITLE_COMMITTEE';
  $scope.contact = 'vorstand' + '@' + 'tcbern.ch';
  
  Restangular.all('committee').getList().then(function(allCommitteeMembers) {
    $scope.committeeMemberList = allCommitteeMembers;
  });
  
  $scope.getPositions = function(member) {
    return member.positions.map(function(entry) {
      return entry.key;
    });
  };
});
tcbernControllers.controller('TrainingCtrl', function ($header) {
  $header.title = 'TITLE_TRAINING';
});

tcbernControllers.controller('LoginCtrl', function ($scope, $state, $authentication, $header) {
  $header.title = 'TITLE_LOGIN';
  
  $scope.username = '';
  $scope.password = '';
  $scope.message = '';
  $scope.authenticated = false;
  
  $scope.$watch(function() { return $authentication.isAuthenticated; },
    function(value) { $scope.authenticated = value; });
  
  $scope.resetInfosWithMessage = function(reset, message) {
    if (reset) {
      $scope.username = '';
      $scope.password = '';
    }
    $scope.message = message;
  };
  $scope.login = function() {
    $authentication.authenticate($scope.username, $scope.password, function(data, status, header, config) {
        $scope.resetInfosWithMessage(true, '');
        $state.go('account');
      },
      function(data, status, header, config) {
        if (status == 503) {
          $scope.resetInfosWithMessage(false, 'Username or password invalid');
        } else {
          $scope.resetInfosWithMessage(false, 'Problem during authentication: status = ' + status);
        }
      });
  };
  $scope.logout = function() {
    $authentication.logout();
  };
});
tcbernControllers.controller('AccountCtrl', function ($scope, $header, Restangular, $authentication, $http) {
  $header.title = 'TITLE_ACCOUNT';
  
  $scope.identity = {};
  $scope.password = '';
  $scope.passwordRepeated = '';
  
  $scope.message = '';
  
  Restangular.one('identities', $authentication.userId).get().then(function(identity) { $scope.identity = identity; });
  
  $scope.updateIdentity = function() {
    $scope.identity.put();
  };
  $scope.updateUser = function() {
    if ($scope.password == '') {
        $scope.message = 'The new password cannot be empty';
    } else if ($scope.password != $scope.passwordRepeated) {
        $scope.message = 'The password and the repeated one must be identical';
    } else {
        $http.post('../../backend/public/password/' + $authentication.userId, {'password': md5($scope.password)}, {headers: {'Token': $authentication.token}})
        .success(function(data, status, header, config) {
          $scope.password = '';
          $scope.passwordRepeated = '';
          $scope.message = 'Password saved';
        })
        .error(function(data, status, header, config) {
          $scope.message = 'Error during operation';
        });
    }
  };
});