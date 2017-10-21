(function() {
    'use strict';

    angular.module('app')
        .factory('authorityService', [
            '$q', '$http',
            navService
        ]);

    function navService($q, $http) {
        var service = {};
        service.list = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/authority/list',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }

        service.login = function(user) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/authority/auth?email=' + user.email + '&password=' + user.password,
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }

        service.create = function(user) {
            var req = {
                method: 'POST',
                url: 'http://localhost:8090/authority/create',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA=',
                    'Content-Type': 'application/json'
                },
                data: user
            }

            return $http(req);
        }

        service.readOne = function(id) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/authority/readOne?id=' + id,
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }


        return service;
    }

})();