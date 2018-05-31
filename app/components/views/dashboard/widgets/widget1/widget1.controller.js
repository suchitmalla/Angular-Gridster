(function(){
  'use strict';
  angular.module('loop').controller('widget1Ctrl', widget1Ctrl);

  /* @ngInject */
  function widget1Ctrl($rootScope, $scope){
    var vm = this;
    $scope.sum = function() {
      $scope.z = $scope.x + $scope.y;
    };
  };
})();
