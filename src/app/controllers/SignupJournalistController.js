(function() {

    angular
        .module('app')
        .controller('SignupJournalistController', [
            '$mdDialog', '$interval','journalistService','$location',
            SignupJournalistController
        ]);

    function SignupJournalistController($mdDialog, $interval,journalistService,location) {
        var vm = this;
        vm.signup=signup;
        vm.user={
            FullName:"",
            Email:"",
            Phone:"",
            Designation:"",
            Firm:"",
            IsApproved:true,
            Password:""
        }

        function signup(){

            console.log(vm.user);
            journalistService.create(vm.user).then(function(response){
                journalistService.login(vm.user.Email,vm.user.Password).then(function(response){
                    console.log("login",response);
                    location.path("/dashboard");
                });
            });
        }

    }

})();