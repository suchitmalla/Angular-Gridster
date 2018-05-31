(function(){
  'use strict';
  angular.module('loop').controller('widget3Ctrl', widget3Ctrl);

  /* @ngInject */
  function widget3Ctrl($rootScope, $scope){
    var vm = this;
    $scope.sum = function() {
      $scope.z = $scope.x + $scope.y;
    };
  }
})();
