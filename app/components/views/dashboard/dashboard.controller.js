(function() {
    'use strict';

    angular.module('loop').controller('DashboardController', DashboardController);

    function DashboardController($scope){
      var vm = this;
      $scope.sum = function() {
        $scope.z = $scope.x + $scope.y;
      };

      vm.customItems = [
        { size: { x: 2, y: 1 }, position: [0, 0], value:"widget-one" },
        { size: { x: 2, y: 2 }, position: [0, 2], value:"widget-two" },
        { size: { x: 1, y: 1 }, position: [0, 4], value:"widget-three" },
        { size: { x: 1, y: 1 }, position: [0, 5], value:"widget-four" }
      ];
    }
})();
