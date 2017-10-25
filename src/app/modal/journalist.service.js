(function() {
    'use strict';

    angular.module('app')
        .factory('journalistService', [
            '$q', '$http',
            navService
        ]);

    function navService($q, $http) {
        var service = {};
        service.list = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/journalist/list',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }

        service.login = function(user) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/journalist/auth?email='+user.email+'&password='+user.password,
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }

        service.create = function(user) {
            var req = {
                method: 'POST',
                url: 'http://localhost:8090/journalist/create',
                headers: {
                 'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA=',
                  'Content-Type': 'application/json'
                },
                data: user
               }
               
            return $http(req);
        }

        return service;
    }

})();