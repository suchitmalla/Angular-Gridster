(function(){
  'use strict';
  angular.module('loop.routes', ['ui.router', 'ngMaterial']).config(routes);

  function routes($stateProvider, $urlRouterProvider, $mdThemingProvider){
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider.state('root', {
      url: '',
      params: {
        primaryColor: $mdThemingProvider
      },
      abstract: true,
      views: {
        'rootView@': {
          templateUrl: 'core/root/root.component.html',
          controller: 'rootCtrl',
          controllerAs: 'rootVm'
        },
        'headerNavView@': {
          templateUrl: 'components/header-nav/header-nav.component.html',
          controller: 'HeaderNavController',
          controllerAs: 'headerNavVm'
        },
        'sideNavView@': {
          templateUrl: 'components/side-nav/side-nav.component.html',
          controller: 'SideNavController',
          controllerAs: 'sideNavVm'
        }
      }
    });
  }
})();
