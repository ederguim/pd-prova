(function () {
    'use strict';

    angular
        .module('app')
        .service('BairroCadastroService', BairroCadastroService);

    BairroCadastroService.$inject = ['AppService'];

    /* @ngInject */
    function BairroCadastroService(AppService) {
        this.getAppService = getAppService;

        function getAppService() {
            var as = new AppService('listaDeBairros');
            return as;
        }
    }

})();
