(function(){
  'use strict';
  angular.module('loop').controller('widget4Ctrl', widget4Ctrl);

  /* @ngInject */
  function widget4Ctrl($rootScope, $scope){
    var vm = this;
    $scope.sum = function() {
      $scope.z = $scope.x + $scope.y;
    };
  }
})();
