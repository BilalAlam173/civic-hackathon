(function() {

    angular
        .module('app')
        .controller('LoginController', [
            '$mdDialog', '$interval', 'citizenService','authorityService','journalistService','$location','$rootScope',
            LoginController
        ]);

    function LoginController($mdDialog, $interval, citizenService,authorityService,journalistService,location,rootscope) {
        var vm = this;
        vm.list = list;
        vm.login=login;
        vm.type="";
        vm.formCitizen=formCitizen;
        vm.formJournalist=formJournalist;
        vm.formAuthority=formAuthority;
        vm.user={
            email:'',
            password:''
        }
        vm.signupType;

        function list() {
            citizenService.auth().then(function(response) {
                console.log(response);
            });
        }
        function login() {
            console.log(vm.user);
            if(vm.type==="citizen"){
            citizenService.login(vm.user).then(function(response) {
                if(response.data.length>0){
                    rootscope.userType="citizen";
                    location.path("/dashboard");
                    
                }
            });
        }else if(vm.type==="authority"){
            
            authorityService.login(vm.user).then(function(response){
                if(response.data.length>0){
                    rootscope.userType="authority";
                    location.path("/dashboard");
                }else{
                    console.log(response);
                }
            });

        }else if(vm.type==="journalist"){
            console.log(vm.type)
            journalistService.login(vm.user).then(function(response){
                if(response.data.length>0){
                    rootscope.userType="journalist";
                    location.path("/dashboard");
                }else{
                    console.log(response);
                }
            });
        }
        }
        function formCitizen() {
            location.path("/signup-citizen");
        }
        function formAuthority() {
                location.path("/signup-authority");
        }
        function formJournalist() {
                location.path("/signup-journalist");
        }

    }

})();