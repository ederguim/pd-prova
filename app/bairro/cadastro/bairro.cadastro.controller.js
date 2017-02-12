(function () {
    'use strict';

    angular
        .module('app')
        .controller('BairroCadastroController', BairroCadastroController);

    BairroCadastroController.$inject = ['BairroCadastroService', 'CidadeConsultaService', 'EstadoConsultaService',
        '$state', '$stateParams'];

    /* @ngInject */
    function BairroCadastroController(BairroCadastroService, CidadeConsultaService,
                                      EstadoConsultaService, $state, $stateParams) {

        var vm = this;
        vm.appService = BairroCadastroService.getAppService();
        vm.appServiceCidade = CidadeConsultaService.getAppService();
        vm.appServiceEstado = EstadoConsultaService.getAppService();

        iniciar();

        vm.tipos = [
            {valor: 1, descricao: 'Litro'},
            {valor: 2, descricao: 'Caixa'},
            {valor: 3, descricao: 'Unidade'}
        ];

        vm.paginaConsulta = paginaConsulta;

        function paginaConsulta(state) {
            $state.go(state);
        }

        function iniciar() {
            vm.id = $stateParams.id;
            var edit = $stateParams.edit
            vm.editar = edit === 'true' ? true : false;

            if (vm.editar) {
                vm.entidade = vm.appService.recuperar(vm.id);
            }
            vm.listaCidade = vm.appServiceCidade.consultar();
            vm.listaEstado = vm.appServiceEstado.consultar();
        }
    }

})();

