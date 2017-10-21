(function() {

    angular
        .module('app')
        .controller('MessagesController', [
            'alertService', 'authorityService',
            MessagesController
        ]);

    function MessagesController(alertService, authorityService) {
        var vm = this;

        vm.messages = [];

        alertService
            .list()
            .then(function(response) {
                vm.messages = response.data;
                console.log(vm.messages);
                vm.messages.forEach(function(element, index) {
                    authorityService.readOne(vm.messages[index].Authority_ID).then(function(response) {
                        vm.messages[index].author = response.data[0].FullName;
                        console.log(response);
                    })
                }, this);
                // for (var i = 1; i <= vm.messages.length; i++) {
                //     console.log(vm.messages[i]);
                // authorityService.readOne(vm.messages[i].Authority_ID).then(function(response) {
                //     vm.messages[i].author = response.data.FullName;
                //     console.log(response);
                // })
                // }
            });
    }

})();