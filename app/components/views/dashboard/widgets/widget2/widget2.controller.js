(function(){
  'use strict';
  angular.module('loop').controller('widget2Ctrl', widget2Ctrl);

  /* @ngInject */
  function widget2Ctrl($rootScope, $scope){
    var vm = this;
    $scope.sum = function() {
      $scope.z = $scope.x + $scope.y;
    };
  }
})();
