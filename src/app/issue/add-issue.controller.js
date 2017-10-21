(function() {
    angular
        .module('app')
        .controller('AddIssueController', [
            'issueService', '$rootScope', 'NgMap',
            AddIssueController
        ]);

    function AddIssueController(alertService, rootScope, ngMap) {
        var vm = this;
        vm.create = create;
        vm.centerChanged = centerChanged;
        vm.lat = '';
        vm.longit = '';
        vm.issue = {
            Title: "",
            Description: "",
            Category: "",
            Citizen_Id: ""
        }
        vm.center = [40.74, -74.18];

        ngMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });

        function centerChanged() {
            ngMap.getMap().then(function(map) {
                console.log(map);
                vm.center = [map.center.lat, map.center.lng];
            });
        }

        function create() {

            console.log(vm.issue);
            alertService.create(vm.issue).then(function(response) {
                console.log(response);
            });
        }
    }
})();