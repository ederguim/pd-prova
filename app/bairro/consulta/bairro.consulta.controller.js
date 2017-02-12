(function () {
    'use strict';

    angular
        .module('app')
        .controller('BairroConsultaController', BairroConsultaController);

    BairroConsultaController.$inject = ['BairroConsultaService', '$state'];

    /* @ngInject */
    function BairroConsultaController(BairroConsultaService, $state) {
        var vm = this;
        vm.lista = vm.lista || [];
        vm.appService = BairroConsultaService.getAppService();

        vm.paginaCadastro = paginaCadastro;

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
            enableFiltering: false,
            columnDefs: [
                {name: 'Nome', field: 'nome'},
                {name: 'Cidade', field: 'cidade'},
                {name: 'Estado', field: 'estado'},
                {name: 'Data de Cadastro', field: 'data', cellTemplate: 'app/template/data.grid.html'},
                {
                    name: 'Ações', cellTemplate: 'app/template/acoes.grid.html',
                    onEditar: editar, onExcluir: excluir, width: 150
                }
            ]
        };

        iniciar();

        function iniciar() {
            vm.lista = vm.appService.consultar();
        }

        function excluir(index) {
            vm.appService.excluir(index);
            iniciar();
        }
    }

})();

