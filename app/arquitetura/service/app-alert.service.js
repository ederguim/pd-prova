(function () {
    'use strict';

    angular
        .module('app')
        .service('AppAlertService', AppAlertService);

    AppAlertService.$inject = ['toastr'];

    /* @ngInject */
    function AppAlertService(toastr) {

        var vm = this;

        vm.showError = showError;
        vm.showSuccess = showSuccess;

        function showSuccess(message, title) {
            title = title || 'Sucesso';
            toastr.info(message, title);
        }

        function showError(message, title) {
            title = title || 'Error';
            toastr.error(message, title);
        }
    }

})();