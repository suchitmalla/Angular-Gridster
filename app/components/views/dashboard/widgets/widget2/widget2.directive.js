(function (){
  "use strict";

  angular.module('loop').directive('widgetTwo', function() {
    return {
      templateUrl: 'components/views/dashboard/widgets/widget2/widget2.template.html',
      controller: 'widget2Ctrl',
      controllerAs: 'widget2Vm'
    };
  });
})();
