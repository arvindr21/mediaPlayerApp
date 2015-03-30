angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, $ionicLoading) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    $rootScope.toggle = function(text, timeout) {
      $rootScope.show(text);

      setTimeout(function() {
        $rootScope.hide();
      }, (timeout || 1000));
    };

    $rootScope.show = function(text) {
      $ionicLoading.show({
        template: text
      });
    };

    $rootScope.hide = function() {
      $ionicLoading.hide();
    };
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })


  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html",
        controller: 'BrowseCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/app/browse');
});
