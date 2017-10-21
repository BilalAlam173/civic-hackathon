(function() {

    angular
        .module('app')
        .controller('SignupCitizenController', [
            '$mdDialog', '$interval','citizenService','$location',
            SignupCitizenController
        ]);

    function SignupCitizenController($mdDialog, $interval,citizenService,location) {
        var vm = this;
        vm.signup=signup;
        vm.user={
            FullName:"",
            Email:"",
            Phone:"",
            CNIC:"",
            Address:"",
            Town:"",
            City:"",
            PostalCode:"",
            Password:"",
            DOB:"",
            Profession:""
        }
        console.log("asdsd");

        function signup(){
            
            // var obj={
            //     "FullName":"te2st",
            //     "Email":"tests2",
            //     "Phone":"test",
            //     "CNIC":"tes2t",
            //     "Address":"te2st",
            //     "Town":"te2st",
            //     "City":"test",
            //     "PostalCode":"test",
            //     "Password":"test",
            //     "DOB":"test",
            //     "Profession":"test"
            // };
            vm.user.Date=String(vm.user.Date);
            console.log(vm.user);
            citizenService.create(vm.user).then(function(response){
                citizenService.login(vm.user.Email,vm.user.Password).then(function(response){
                    console.log("login",response);
                    location.path("/dashboard");
                });
            });
        }

    }

})();