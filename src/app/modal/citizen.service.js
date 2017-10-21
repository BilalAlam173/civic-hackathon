(function() {
    'use strict';

    angular.module('app')
        .factory('citizenService', [
            '$q', '$http',
            navService
        ]);

    function navService($q, $http) {
        var service = {};
        service.list = function() {
            return $http({
                method: 'GET',
                url: 'https://civic-hackathon-server.herokuapp.com/citizen/list',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }
        return service;
    }

})();