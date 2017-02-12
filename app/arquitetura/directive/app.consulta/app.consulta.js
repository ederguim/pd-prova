(function () {
    'use strict';

    angular
        .module('app')
        .directive('appConsulta', appConsulta);


    /* @ngInject */
    function appConsulta() {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/app.consulta/app.consulta.html',
            transclude: true,
            scope: {
                titulo:'@',
                service:'='
            },
            link: link
        };

        function link(scope, element, attrs) {
            iniciar();

            function iniciar() {
                scope.formName = 'appConsultaForm' + scope.$id;
            }
        }
    }

})();

