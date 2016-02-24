'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
    .controller('HeaderCtrl', function($scope, LoginService,$rootScope) {
    	console.log('in header');
        $scope.getUserName = function() {
            $scope.uName = LoginService.getInfo();
            console.log($scope.uName);
        };

    }).filter('welcomeFilter',function(){
    return function(input){
        var wish ="Hello"+ " "+input;
        return wish;
    };
});
