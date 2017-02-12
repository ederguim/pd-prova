(function () {
    'use strict';

    angular
        .module('app')
        .controller('CidadeCadastroController', CidadeCadastroController);

    CidadeCadastroController.$inject = ['CidadeCadastroService', '$state', '$stateParams'];

    /* @ngInject */
    function CidadeCadastroController(CidadeCadastroService, $state, $stateParams) {

        var vm = this;
        vm.appService = CidadeCadastroService.getAppService();

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
        }
    }

})();
