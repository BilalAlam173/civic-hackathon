(function() {
    'use strict';

    angular.module('app')
        .factory('alertService', [
            '$q', '$http',
            navService
        ]);

    function navService($q, $http) {
        var service = {};
        service.list = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/alert/list',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }

        service.create = function(alert) {
            var req = {
                method: 'POST',
                url: 'http://localhost:8090/alert/create',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA=',
                    'Content-Type': 'application/json'
                },
                data: alert
            }

            return $http(req);
        }

        return service;
    }

})();