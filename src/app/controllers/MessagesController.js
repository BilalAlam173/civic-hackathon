(function() {

    angular
        .module('app')
        .controller('MessagesController', [
            'alertService', 'authorityService', '$rootScope',
            MessagesController
        ]);

    function MessagesController(alertService, authorityService, rootscope) {
        var vm = this;

        vm.messages = [];

        function load() {
            alertService.list().then(function(response) {
                vm.messages = response.data.reverse();
                console.log(vm.messages);
                vm.messages.forEach(function(element, index) {
                    authorityService.readOne(vm.messages[index].Authority_ID).then(function(response) {
                        vm.messages[index].author = response.data[0].FullName;
                        console.log(response);
                    })
                }, this);
            });
        }
        load();
    }

})();