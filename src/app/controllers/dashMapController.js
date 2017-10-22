(function() {

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
            zoom: 12
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var marker = L.marker([24.9294, 67.1284], {
            draggable: false
        }).addTo(map);
        var marker = L.marker([24.9386, 67.1456], {
            draggable: false
        }).addTo(map);
        var marker = L.marker([24.9678, 67.1352], {
            draggable: false
        }).addTo(map);
        var marker = L.marker([24.9558, 67.1245], {
            draggable: false
        }).addTo(map);
        var marker = L.marker([24.9468, 67.1532], {
            draggable: false
        }).addTo(map);
    }

})();