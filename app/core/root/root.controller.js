(function() {
  'use strict';
  angular.module('loop').controller('rootCtrl', rootCtrl);
  function rootCtrl($rootScope, $scope, $state, $timeout) {
    var vm = this;
    var timer;

    vm.currentState = $state;
    vm.showLoader = false;
    vm.showLoaderMessage = true;

    $rootScope.$on('loader.show', function() {
      timer = $timeout(function(){
        vm.showLoader = true;
      }, 150);
    });

    $rootScope.$on('loader.hideMessage', function() {
      vm.showLoaderMessage = false;
    });

    $rootScope.$on('loader.hide', function() {
      $timeout.cancel(timer);
      timer = $timeout(function(){
        vm.showLoader = false;
      }, 150);
    });

    getThemeColors();

    ////////////////////////////////////////

    function getThemeColors(){
      var $mdThemingProvider = $state.params.primaryColor;
      var primaryColor = $mdThemingProvider._THEMES.default.colors.primary.name;
      var accentColor = $mdThemingProvider._THEMES.default.colors.accent.name;
      var primaryHue = $mdThemingProvider._THEMES.default.colors.primary.hues.default;
      var primaryHueDark = $mdThemingProvider._THEMES.default.colors.primary.hues['hue-2'];
      var primaryHueAccent = $mdThemingProvider._THEMES.default.colors.accent.hues.default;
      var primaryHueHex = $mdThemingProvider._PALETTES[primaryColor][primaryHue];
      var primaryHueHexDark = $mdThemingProvider._PALETTES[primaryColor][primaryHueDark];
      var primaryHueHexAccent = $mdThemingProvider._PALETTES[accentColor][primaryHueAccent];

      $rootScope.primaryColor = 'rgb('+primaryHueHex.value[0]+','+primaryHueHex.value[1]+','+primaryHueHex.value[2]+')';
      $rootScope.primaryDarkColor = 'rgb('+primaryHueHexDark.value[0]+','+primaryHueHexDark.value[1]+','+primaryHueHexDark.value[2]+')';
      $rootScope.primaryAccentColor = 'rgb('+primaryHueHexAccent.value[0]+','+primaryHueHexAccent.value[1]+','+primaryHueHexAccent.value[2]+')';
    }
  }

  rootCtrl.$Inject = ['$rootScope', '$scope', '$state', '$timeout'];
})();
