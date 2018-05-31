(function (){
  "use strict";

  angular.module('loop').directive('widgetFour', function() {
    return {
      templateUrl: 'components/views/dashboard/widgets/widget4/widget4.template.html',
      controller: 'widget4Ctrl',
      controllerAs: 'widget4Vm'
    };
  });
})();
