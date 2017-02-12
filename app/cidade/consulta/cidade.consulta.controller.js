(function () {
    'use strict';

    angular
        .module('app')
        .controller('CidadeConsultaController', CidadeConsultaController);

    CidadeConsultaController.$inject = ['CidadeConsultaService', 'EstadoConsultaService', '$state'];

    /* @ngInject */
    function CidadeConsultaController(CidadeConsultaService, EstadoConsultaService, $state) {
        var vm = this;
        vm.lista = vm.lista || [];
        vm.appService = CidadeConsultaService.getAppService();
        vm.appServiceEstado = EstadoConsultaService.getAppService();

        vm.paginaCadastro = paginaCadastro;

        iniciar();

        function paginaCadastro(state) {
            $state.go(state);
        }

        function editar(entidade) {
            $state.go('cidadeCadastro', {id: entidade.id, edit: true});
        }

        vm.gridOptions = {
            data: 'vm.lista',
            enableColumnMenus: false,
            enableRowSelection: true,
            columnDefs: [
                {name: 'Nome', field: 'nome'},
                {name: 'Estado', field: 'estado'},
                {name: 'Data de Cadastro', field: 'data', cellTemplate: 'app/template/data.grid.html'},
                {
                    name: 'Ações', cellTemplate: 'app/template/acoes.grid.html',
                    onEditar: editar, onExcluir: excluir, width: 150
                }
            ]
        };

        function iniciar() {
            vm.lista = vm.appService.consultar();
        }

        function excluir(index) {
            vm.appService.excluir(index);
            iniciar();
        }
    }

})();

