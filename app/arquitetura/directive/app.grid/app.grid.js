(function () {
    'use strict';

    angular
        .module('app')
        .directive('appGrid', appGrid);


    /* @ngInject */
    function appGrid() {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/app.grid/app.grid.html',
            transclude: true,
            scope: {
                classPanel:'@',
                gridName:'@',
                vm:'='
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.classPanel = scope.classPanel || 'panel-default';
        }
    }

})();

