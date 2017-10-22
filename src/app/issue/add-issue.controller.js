(function() {
    angular
        .module('app')
        .controller('AddIssueController', [
            'issueService', '$rootScope', 'NgMap','$location',
            AddIssueController
        ]);

    function AddIssueController(issueService, rootScope, ngMap,location) {
        var vm = this;
        vm.create = create;
        vm.lat = '';
        vm.longit = '';
        vm.issue = {
            Title: "",
            Description: "",
            Category: "",
            lat:'',
            longit:'',
            Citizen_Id: JSON.parse(localStorage.getItem("user")).Id
        }

        var map = L.map('mapid', {
            center: [24.9294, 67.1284],
            zoom: 14
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var marker = L.marker([24.9294, 67.1284], {
            draggable: true
        }).addTo(map);

        marker.on('dragend', function(e) {
            vm.issue.lat=marker.getLatLng().lat;
            vm.issue.longit=marker.getLatLng().lng;
        });

        function create() {

            console.log(vm.issue);
            issueService.create(vm.issue).then(function(response) {
                location.path("/dashboard")
                console.log(response);
            });
        }
    }
})();