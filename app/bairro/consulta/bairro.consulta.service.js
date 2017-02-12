(function () {
    'use strict';

    angular
        .module('app')
        .service('BairroConsultaService', BairroConsultaService);

    BairroConsultaService.$inject = ['AppService'];

    /* @ngInject */
    function BairroConsultaService(AppService) {
        this.getAppService = getAppService;

        function getAppService() {
            var as = new AppService('listaDeBairros');
            return as;
        }
    }

})();
