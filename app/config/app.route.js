(function () {

    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        const estadoCadastro = {
            name: 'estadoCadastro',
            url: '/estado-cadastro/:id/:edit',
            templateUrl: 'app/estado/cadastro/estado.cadastro.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            'app/estado/cadastro/estado.cadastro.controller.js',
                            'app/estado/cadastro/estado.cadastro.service.js'
                        ]);
                }
            }
        };

        const estadoConsulta = {
            name: 'estadoConsulta',
            url: '/estado-consulta',
            templateUrl: 'app/estado/consulta/estado.consulta.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            'app/estado/consulta/estado.consulta.controller.js',
                            'app/estado/consulta/estado.consulta.service.js'
                        ]);
                }
            }
        };

        const cidadeCadastro = {
            name: 'cidadeCadastro',
            url: '/cidade-cadastro/:id/:edit',
            templateUrl: 'app/cidade/cadastro/cidade.cadastro.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            'app/cidade/cadastro/cidade.cadastro.controller.js',
                            'app/cidade/cadastro/cidade.cadastro.service.js',
                            'app/estado/consulta/estado.consulta.service.js'
                        ]);
                }
            }
        };

        const cidadeConsulta = {
            name: 'cidadeConsulta',
            url: '/cidade-consulta',
            templateUrl: 'app/cidade/consulta/cidade.consulta.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            'app/cidade/consulta/cidade.consulta.controller.js',
                            'app/cidade/consulta/cidade.consulta.service.js',
                            'app/estado/consulta/estado.consulta.service.js',
                            'app/bairro/consulta/bairro.consulta.service.js'
                        ]);
                }
            }
        };

        const bairroCadastro = {
            name: 'bairroCadastro',
            url: '/bairro-cadastro/:id/:edit',
            templateUrl: 'app/bairro/cadastro/bairro.cadastro.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            'app/bairro/cadastro/bairro.cadastro.controller.js',
                            'app/bairro/cadastro/bairro.cadastro.service.js',
                            'app/cidade/consulta/cidade.consulta.service.js',
                            'app/estado/consulta/estado.consulta.service.js'
                        ]);
                }
            }
        };

        const bairroConsulta = {
            name: 'bairroConsulta',
            url: '/bairro-consulta',
            templateUrl: 'app/bairro/consulta/bairro.consulta.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        [
                            'app/bairro/consulta/bairro.consulta.controller.js',
                            'app/bairro/consulta/bairro.consulta.service.js',
                            'app/cidade/consulta/cidade.consulta.service.js',
                            'app/estado/consulta/estado.consulta.service.js'
                        ]);
                }
            }
        };

        $stateProvider
            .state('estadoCadastro', estadoCadastro)
            .state('estadoConsulta', estadoConsulta)
            .state('cidadeCadastro', cidadeCadastro)
            .state('cidadeConsulta', cidadeConsulta)
            .state('bairroCadastro', bairroCadastro)
            .state('bairroConsulta', bairroConsulta);

        $urlRouterProvider.otherwise('/bairro-consulta');
    }

})();