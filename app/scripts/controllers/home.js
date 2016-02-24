'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
.controller('HomeCtrl', function($scope, $state) {
	  $scope.fnDisplayLoginPage = function() {
        console.log('Welcome user!!');
        $state.go('login');
    };
})
.directive('customHeader', function() {
  return {
    restrict: 'ECMA',
    transclude: true,
    scope: {},
    templateUrl: 'views/header.html'
  };
});