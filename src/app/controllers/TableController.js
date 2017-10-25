(function() {

    angular
        .module('app')
        .controller('TableController', [
            'tableService', '$rootScope', 'NgMap', 'issueService', '$rootScope',
            TableController
        ]);

    function TableController(tableService, rootScope, ngMap, issueService, rootscope) {
        var vm = this;
        vm.userType = localStorage.getItem("userType");
        vm.status = "";
        vm.tableData = [];
        var map;
        vm.myList = myList;
        vm.allIssues = allIssues;
        console.log(vm.userType);
        ngMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });

        issueService.list().then(function(response) {
            vm.tableData = response.data.reverse();
            console.log(response);
            vm.tableData.forEach(function(element, index) {
                vm.tableData[index].location = [element.lat, element.longit];
                vm.tableData[index].priority = Math.floor(Math.random() * 100) + 1;
                console.log(vm.tableData[index].location);
            }, this);

        });

        function myList() {
            issueService.customRow(JSON.parse(localStorage.getItem('user')).Id).then(function(response) {
                vm.tableData = response.data;
                console.log(response);
                if (vm.tableData.length < 1) {
                    vm.status = "no issues in the list";
                } else {
                    vm.status = "";
                }
                vm.tableData.forEach(function(element, index) {
                    vm.tableData[index].location = [element.lat, element.longit];
                    console.log(vm.tableData[index].location);
                }, this);

            });
        }

        function allIssues() {
            issueService.list().then(function(response) {
                vm.tableData = response.data;
                console.log(response);
                if (vm.tableData.length < 1) {
                    vm.status = "no issues in the list";
                } else {
                    vm.status = "";
                }
                vm.tableData.forEach(function(element, index) {
                    vm.tableData[index].location = [element.lat, element.longit];
                    console.log(vm.tableData[index].location);
                }, this);

            });
        }
    }

})();