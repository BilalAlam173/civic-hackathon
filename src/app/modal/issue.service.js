(function() {
    'use strict';

    angular.module('app')
        .factory('issueService', [
            '$q', '$http',
            navService
        ]);

    function navService($q, $http) {
        var service = {};
        service.list = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/issue/list',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }

        service.create = function(issue) {
            var req = {
                method: 'POST',
                url: 'http://localhost:8090/issue/create',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA=',
                    'Content-Type': 'application/json'
                },
                data: issue
            }

            return $http(req);
        }

        service.customRow = function(id) {
            var req = {
                method: 'GET',
                url: 'http://localhost:8090/issue/customRow?id=' + id,
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            }

            return $http(req);
        }

        return service;
    }

})();