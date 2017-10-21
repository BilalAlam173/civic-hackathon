(function() {

    angular
        .module('app')
        .controller('MessagesController', [
            'alertService',
            MessagesController
        ]);

    function MessagesController(alertService) {
        var vm = this;

        vm.messages = [];

        alertService
            .list()
            .then(function(response) {
                vm.messages = response.data;
                console.log(vm.messages);
            });
    }

})();