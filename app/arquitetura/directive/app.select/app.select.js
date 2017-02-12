(function () {

    'use strict';

    angular.module('app').directive('appSelect', appSelect);

    function appSelect() {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/app.select/app.select.html',
            scope: {
                selectLabel: '@',
                ngModel: '=',
                colspan: '@',
                provider: '=',
                providerValor: '@',
                providerDescricao: '@'
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.providerValor = scope.providerValor || 'valor';
            scope.providerDescricao = scope.providerDescricao || 'descricao';
            scope.colMd = 'col-md-' + (scope.colspan || '3');
            scope.nameSelect = 'appSelect' + scope.$id;
        }
    }

})();