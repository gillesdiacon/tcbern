var tcbernControllers = angular.module('tcbernControllers', ['ui.bootstrap', 'ngAside', 'restangular', 'authentication', 'header', 'hc.marked', 'pascalprecht.translate'])
  .config(function($translateProvider) {
    $translateProvider.useLoader('translateCustomLoader', {});
    //$translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('de');
  });
  
tcbernControllers.factory('translateCustomLoader', function ($http, $q) {
  return function(options) {
    var language = options.key;
    return $http.get('http://192.168.1.106/tcbern/backend/public/api/internationalisation')
      .then(function(response) {
        var result = {};
        response.data.forEach(function(entry) {
          result[entry.key] = entry[language];
        });
        return result;
      }, function(response) {});
  };
});

tcbernControllers.controller('MainCtrl', function($scope, $aside, $state, Restangular, $header) {
    Restangular.setBaseUrl('http://192.168.1.106/tcbern/backend/public/api');
    
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
            {'route': 'committee', 'html': 'MENU_COMMITTEE', 'requiresAuthentication': false},
            {'route': 'identities', 'html': 'MENU_MEMBERS', 'requiresAuthentication': true},
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
tcbernControllers.controller('InfosDetailCtrl', function ($scope, $stateParams, Restangular, $header, marked) {
  $header.title = 'TITLE_INFO_DETAIL';
  
  Restangular.one('infos', $stateParams.id).get().then(function(info) {
    $header.title = info.title;
    $scope.detail = info;
  });
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
tcbernControllers.controller('CommitteeCtrl', function ($scope, $stateParams, Restangular, $header) {
  $header.title = 'TITLE_COMMITTEE';
  
  Restangular.all('committee').getList().then(function(allCommitteeMembers) {
    $scope.committeeMemberList = allCommitteeMembers;
  });
  
  $scope.getPositions = function(member) {
    return member.positions.map(function(entry) {
      return entry.key;
    });
  };
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
        $state.go('infos');
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