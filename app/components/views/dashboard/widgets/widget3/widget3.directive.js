(function (){
  "use strict";

  angular.module('loop').directive('widgetThree', function() {
    return {
      templateUrl: 'components/views/dashboard/widgets/widget3/widget3.template.html',
      controller: 'widget3Ctrl',
      controllerAs: 'widget3Vm'
    };
  });
})();
