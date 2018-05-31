(function(){
  'use strict';
  angular.module('loop.theme', ['ngMaterial']).config(config);
  function config($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('teal', {
      'default': '500'
    })
    .backgroundPalette('grey', {
      default: '100'
    });
  }

  config.$inject = ['$mdThemingProvider'];
})();
