'use strict';

angular.module('loop.version.version-directive', []).directive('loopVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
