(function () {

    'use strict';

    angular.module('app',
        [
            'ngMessages',
            /*'ngAnimate', Está apresentando o seguinte erro na dependencia: Unknown provider: $$MapProvider <- $$Map <- $$animateQueue <- $animate <- $compile <- $$animateQueue*/
            'toastr',
            'ui.router',
            'ui.grid',
            'oc.lazyLoad',
            'LocalStorageModule'
        ]
    );

})();