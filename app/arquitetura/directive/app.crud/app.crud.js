(function () {
    'use strict';

    angular
        .module('app')
        .directive('appCrud', appCrud);


    /* @ngInject */
    function appCrud() {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/app.crud/app.crud.html',
            transclude: true,
            scope: {
                titulo:'@',
                service:'=',
                editar: '=',
                ngDisabled: '='
            },
            link: link
        };

        function link(scope, element, attrs, formCtrl) {
            iniciar();

            function iniciar() {
                scope.formName = 'appCrudForm' + scope.$id;
                scope.formCtrl = scope.formName;
            }
        }
    }

})();

