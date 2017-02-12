(function () {
    'use strict';

    angular
        .module('app')
        .controller('CidadeCadastroController', CidadeCadastroController);

    CidadeCadastroController.$inject = ['CidadeCadastroService', 'EstadoConsultaService', '$state', '$stateParams'];

    /* @ngInject */
    function CidadeCadastroController(CidadeCadastroService, EstadoConsultaService, $state, $stateParams) {

        var vm = this;
        vm.appService = CidadeCadastroService.getAppService();
        vm.appServiceEstado = EstadoConsultaService.getAppService();
        vm.listaEstado = [];
        vm.paginaConsulta = paginaConsulta;
        vm.listarEstado = vm.listarEstado;

        iniciar();

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
            vm.listaEstado = vm.appServiceEstado.consultar();
        }
    }

})();

