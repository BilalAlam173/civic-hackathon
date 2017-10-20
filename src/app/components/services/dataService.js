(function(){
    'use strict';
  
    angular.module('app')
          .factory('dataService', [
          '$q','$http',
        dataService
    ]);
  
    function dataService($q,$http){
        var service={};

        service.test=function(){
            return $http({method: 'GET', url: 'https://civic-hackathon-server.herokuapp.com/test', headers: {
                'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='}
            });
        }
        return service;
    }
  })();
  