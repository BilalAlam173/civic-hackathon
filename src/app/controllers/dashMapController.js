(function () {
    
        angular
            .module('app')
            .controller('dashMapController', [
                '$mdDialog', '$interval',
                ControlPanelController
            ]);
    
        function ControlPanelController($mdDialog, $interval) {
            var vm = this;
            var map = L.map('map', {
                center: [24.9294, 67.1284],
                zoom: 6
            });
    
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            var marker = L.marker([24.9294, 67.1284], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.9786, 67.1456], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.9678, 67.1352], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.9678, 67.1245], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.9768, 67.1532], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.68678, 67.1235], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.9278, 67.1244], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.9678, 67.1224], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.7765, 67.1325], {
                draggable: true
            }).addTo(map);

            var marker = L.marker([24.9768, 67.1234], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.9678, 67.1245], {
                draggable: true
            }).addTo(map);

            var marker = L.marker([24.9212, 67.1245], {
                draggable: true
            }).addTo(map);
            var marker = L.marker([24.9298, 67.2356], {
                draggable: true
            }).addTo(map);
        }
    
    })();
    