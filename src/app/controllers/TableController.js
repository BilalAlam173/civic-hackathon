(function() {

    angular
        .module('app')
        .controller('TableController', [
            'tableService', '$rootScope', 'NgMap', 'issueService', '$rootScope',
            TableController
        ]);

    function TableController(tableService, rootScope, ngMap, issueService, rootscope) {
        var vm = this;
        vm.tableData = [];
        var map;
        console.log(rootScope.userType);

        ngMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });

        issueService.customRow(JSON.parse(localStorage.getItem('user')).Id).then(function(response) {
            vm.tableData = response.data;
            console.log(response);
            vm.tableData.forEach(function(element, index) {
                vm.tableData[index].location = [element.lat, element.longit];
                console.log(vm.tableData[index].location);
            }, this);

        });
    }

})();