(function() {
    'use strict';

    angular.module('app')
        .service('navService', [
            '$q',
            navService
        ]);

    function navService($q) {
        var menuItems = [{
                name: 'Dashboard',
                icon: 'dashboard',
                sref: '.dashboard'
            },
            {
                name: 'Issues',
                icon: 'view_module',
                sref: '.table'
            },
            {
                name: 'Profile',
                icon: 'person',
                sref: '.profile'
            },
            {
                name: 'Data Table',
                icon: 'view_module',
                sref: '.data-table'
            }
        ];

        return {
            loadAllItems: function() {
                return $q.when(menuItems);
            }
        };
    }

})();