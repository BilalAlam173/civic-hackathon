(function() {

    angular
        .module('app')
        .controller('SignupAuthorityController', [
            '$mdDialog', '$interval','authorityService','$location',
            SignupAuthorityController
        ]);

    function SignupAuthorityController($mdDialog, $interval,authorityService,location) {
        var vm = this;
        vm.signup=signup;
        vm.user={
            FullName:"",
            Email:"",
            Phone:"",
            Designation:"",
            Address:"",
            DOB:true,
            Password:""
        }

        function signup(){

            console.log(vm.user);
            authorityService.create(vm.user).then(function(response){
                authorityService.login(vm.user.Email,vm.user.Password).then(function(response){
                    console.log("login",response);
                    location.path("/dashboard");
                });
            });
        }

    }

})();