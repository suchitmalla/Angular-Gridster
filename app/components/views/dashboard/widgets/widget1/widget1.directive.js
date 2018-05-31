(function (){
  "use strict";

  angular.module('loop').directive('widgetOne', function() {
    return {
      templateUrl: 'components/views/dashboard/widgets/widget1/widget1.template.html',
      controller: 'widget1Ctrl',
      controllerAs: 'widget1Vm'
    };
  });
})();
