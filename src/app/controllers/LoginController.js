(function() {

    angular
        .module('app')
        .controller('LoginController', [
            '$mdDialog', '$interval', 'citizenService',
            LoginController
        ]);

    function LoginController($mdDialog, $interval, citizenService) {
        var vm = this;
        vm.list = list;

        function list() {
            citizenService.list().then(function(response) {
                console.log(response);
            });
        }
        list();

    }

})();