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
            },
            link: link
        };

        function link(scope, element, attrs) {
            iniciar();

            function iniciar() {
                scope.formName = 'appCrudForm' + scope.$id;
            }
        }
    }

})();

