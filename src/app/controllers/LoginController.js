(function() {

    angular
        .module('app')
        .controller('LoginController', [
            '$mdDialog', '$interval', 'citizenService','$location',
            LoginController
        ]);

    function LoginController($mdDialog, $interval, citizenService,location) {
        var vm = this;
        vm.list = list;
        vm.login=login;
        vm.type;
        vm.user={
            email:'',
            password:''
        }

        function list() {
            citizenService.auth().then(function(response) {
                console.log(response);
            });
        }
        function login() {
            citizenService.login(vm.user).then(function(response) {
                if(response.data.length>0){
                    location.path("/dashboard");
                }
            });
        }

    }

})();