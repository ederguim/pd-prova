(function () {
    'use strict';

    angular
        .module('app')
        .directive('appInput', appInput);

    function appInput() {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/app.input/app.input.html',
            scope: {
                inputLabel: '@',
                ngModel: '=',
                colspan: '@',
                tipo: '@'
            },
            link: link
        };
        function link(scope, element, attrs) {
            scope.colMd = 'col-md-' + (scope.colspan || '3');
            scope.nameInput = 'appInput' + scope.$id;
            scope.tipo = scope.tipo || 'text';
        }
    }
})();