(function () {
    angular
        .module('app')
        .controller('AddAlertController', [
            'alertService','authorityService','$rootScope',
            AddAlertController
        ]);

    function AddAlertController(alertService,authorityService,rootScope) {
        var vm = this;
        vm.create=create;
        vm.alert={
            Title:"",
            Description:"",
            Authority_ID:JSON.parse(localStorage.getItem("user")).Id
        }
        function create(){
            
                        console.log(vm.alert);
                        alertService.create(vm.alert).then(function(response){
                            console.log(response);
                        });
                    }
    }
})();
