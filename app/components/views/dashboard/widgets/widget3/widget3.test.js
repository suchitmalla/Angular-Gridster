describe('Widget3Controller', function () {

  beforeEach(module('loop'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function () {
    it('1 + 1 should equal 2', function () {
      var $scope = {};
      var controller = $controller('widget3Ctrl', {'$scope': $scope});
      $scope.x = 1;
			$scope.y = 2;
			$scope.sum();
			expect($scope.z).toBe(3);
    });
  });
});
