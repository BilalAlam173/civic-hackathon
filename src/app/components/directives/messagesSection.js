(function() {
    'use strict';

    angular
        .module('app')
        .directive('messagesSection', messagesSectionDirective);

    function messagesSectionDirective() {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                theme: '@',
                messages: '='
            },
            template: '' +
                '<section>' +
                '  <md-list>' +
                '    <md-list-item class="md-3-line" ng-repeat="message in messages">' +
                '    <img class="md-avatar" ng-src="assets/images/einstein.jpg">' +
                '    <div class="md-list-item-text">' +
                '      <h3>{{message.Title}}</h3>' +
                '      <h4>{{message.author}} 22 Oct,2017</h4>' +
                '      <p>{{message.Description}}</p>' +
                '      <div style="height:5px;"></div>' +
                '    </div>' +
                '    </md-list-item>' +
                '  </md-list>' +
                '</section>',
            link: function(scope, element, attrs) {}
        };
    }
})();