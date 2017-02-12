(function () {
    'use strict';

    angular
        .module('app')
        .service('EstadoConsultaService', EstadoConsultaService);

    EstadoConsultaService.$inject = ['AppService'];

    /* @ngInject */
    function EstadoConsultaService(AppService) {
        this.getAppService = getAppService;

        function getAppService() {
            var as = new AppService('listaDeEstados');
            return as;
        }
    }

})();
