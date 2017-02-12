(function () {
    'use strict';

    angular
        .module('app')
        .service('CidadeCadastroService', CidadeCadastroService);

    CidadeCadastroService.$inject = ['AppService'];

    /* @ngInject */
    function CidadeCadastroService(AppService) {
        this.getAppService = getAppService;

        function getAppService() {
            var as = new AppService('listaDeCidades');
            return as;
        }
    }

})();
