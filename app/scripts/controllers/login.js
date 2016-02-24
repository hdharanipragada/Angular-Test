'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
    .controller('LoginCtrl', function($scope, LoginService, $state) {
        console.log('In ctrl');
        $scope.data = {};
        $scope.fnlogin = function() {
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
                LoginService.setUserInfo($scope.data.username, $scope.data.password);
                $state.go('dashboard');
            }).error(function(data) {
                window.alert(data+
                    'Name Should have alphabets and password should be atleast 6 characters long!'
                );
            });
        };
        if($state.is('login')){
            LoginService.removeInfo();
        }

    });
