(function() {
    'use strict';
    angular.module('loop', [
        'loop.run',
        'loop.routes',
        'loop.version',
        'loop.theme',
        'ngMaterial',
        'gridster'
    ]).run(function(){

    }).config(AppConfig);
    /* @ngInject */
    function AppConfig() {
    };
})();
