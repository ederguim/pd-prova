(function () {
    'use strict';

    angular
        .module('app')
        .service('EstadoCadastroService', EstadoCadastroService);

    EstadoCadastroService.$inject = ['AppService'];

    /* @ngInject */
    function EstadoCadastroService(AppService) {
        this.getAppService = getAppService;

        function getAppService() {
            var as = new AppService('listaDeEstados');
            return as;
        }
    }

})();
