(function () {
    'use strict';

    angular
        .module('app')
        .service('AppService', AppService);

    AppService.$inject = ['AppAlertService', 'AppStorageService'];

    /* @ngInject */
    function AppService(AppAlertService, AppStorageService) {

        return function (key) {

            var self = this;
            self.key = key;
            self.entidade = {};
            self.parametro = {}
            self.provider = [];

            self.msgSalvar = 'salvar';
            self.msgEditar = 'editar';
            self.msgExcluir = 'excluir';

            self.salvar = salvar;
            self.recuperar = recuperar;
            self.editar = editar;
            self.excluir = excluir;
            self.consultar = consultar;
            self.pesquisar = pesquisar;
            self.limpar = limpar;
            self.consultaLimpar = consultaLimpar;

            self.push = push;
            self.isVerificarNavegador = isVerificarNavegador;
            self.getLocalStorage = getLocalStorage;
            self.setLocalStorage = setLocalStorage;
            self.messageSuccess = messageSuccess;
            self.messageError = messageError;
            self.geradoroId = geradoroId;

            function salvar() {

                if (!isVerificarNavegador) {
                    return false;
                }

                self.provider = getLocalStorage();

                var id = geradoroId();

                self.entidade.id = id;

                push();

                var data = setLocalStorage();

                data ? salvarResult() : salvarFault();

                function salvarResult() {
                    self.limpar();
                    messageSuccess(self.msgSalvar);
                }

                function salvarFault() {
                    messageError(self.msgSalvar);
                }
            }

            function editar() {

                if (!isVerificarNavegador) {
                    return false;
                }

                self.provider = getLocalStorage();

                for (var i = 0; i < self.provider.length; i++) {
                    if (self.provider[i].id === self.entidade.id) {
                        self.provider[i] = self.entidade;
                        break;
                    }
                }

                var data = setLocalStorage();

                data ? editarResult() : editarFault();

                function editarResult() {
                    self.limpar();
                    messageSuccess(self.msgEditar);
                }

                function editarFault() {
                    messageError(self.msgEditar);
                }
            }

            function excluir(index) {

                if (!isVerificarNavegador) {
                    return false;
                }

                self.provider = getLocalStorage();

                self.provider.splice(index, 1);

                setLocalStorage();

                messageSuccess(self.msgExcluir);
            }

            function limpar() {
                self.entidade = {};
            }

            function consultaLimpar() {
                self.parametro = {}
            }

            function consultar() {
                return self.provider = getLocalStorage();
            }

            function pesquisar() {
                self.provider = getLocalStorage();
                for (var i = 0; i < self.provider.length; i++) {

                    if (self.provider[i].nome === self.parametro.param
                        || self.provider[i].estado === self.parametro.param
                        || self.provider[i].bairro === self.parametro.param
                        || self.provider[i].cidade === self.parametro.param
                        && self.provider[i].data === self.parametro.data) {
                        self.provider = self.provider[i];
                        break;
                    }

                    if (self.provider[i].nome === self.parametro.param
                        || self.provider[i].estado === self.parametro.param
                        || self.provider[i].bairro === self.parametro.param
                        || self.provider[i].cidade === self.parametro.param) {
                        self.provider = self.provider[i];
                        break;
                    }

                    if (self.provider[i].data === self.parametro.data) {
                        self.provider = self.provider[i];
                        break;
                    }
                }
                return self.provider;
            }

            function recuperar(id) {
                self.provider = getLocalStorage();
                for (var i = 0; i < self.provider.length; i++) {
                    if (self.provider[i].id === parseInt(id)) {
                        self.entidade = self.provider[i];
                        break;
                    }
                }
                return self.entidade;
            }

            function isVerificarNavegador() {

                if (AppStorageService.isNavegadorSuportaStorage()) {

                    AppAlertService.showError('Navegador não suporta local storage');

                    return true;
                }
                return false;
            }

            function push() {
                return self.provider.push(self.entidade);
            }

            function getLocalStorage() {
                return AppStorageService.get(key) || [];
            }

            function setLocalStorage() {
               return AppStorageService.set(key, self.provider);
            }

            function messageSuccess(msg) {
                AppAlertService.showSuccess('Sucesso ao ' + msg + ' o registro');
            }

            function messageError(msg) {
                AppAlertService.showSuccess('Erro ao ' + msg + ' o registro');
            }

            // apenas neste caso, pois a entidade não possui id.
            function geradoroId() {
                return Math.floor(Math.random() * 9999999);
            }
        }
    }
})();

