(function(){
  'use strict';
  angular.module('loop').config(routes);

  /* @ngInject */
  function routes($stateProvider){
    $stateProvider.state('root.dashboard', {
      url: '/dashboard',
      views: {
        'mainView': {
          templateUrl: 'components/views/dashboard/dashboard.component.html',
          controller: 'DashboardController',
          controllerAs: 'dashboardVm'
        }
      }
    });
  }
})();
