(function () {
    'use strict';

    angular
        .module('app')
        .service('CidadeConsultaService', CidadeConsultaService);

    CidadeConsultaService.$inject = ['AppService'];

    /* @ngInject */
    function CidadeConsultaService(AppService) {
        this.getAppService = getAppService;

        function getAppService() {
            var as = new AppService('listaDeCidades');
            return as;
        }
    }

})();
