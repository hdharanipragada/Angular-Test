'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
    .controller('DashboardCtrl', function($scope, $state, LoginService) {
        $scope.fnLogout = function() {
            console.log('Successfully Logged Out');
            // $rootScope.uName=" ";
            LoginService.removeInfo();
            $state.go('home');
        };
    })
    .directive('customFooter', function() {
        return {
            restrict: 'ECMA',
            transclude: true,
            scope: {},
            templateUrl: 'views/footer.html'
        };
    });
