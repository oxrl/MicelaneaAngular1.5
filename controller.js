'use strict';
angular.module('TestAPP1',[]).controller('PrimerControlador',['$scope',function($scope) {

    $scope.username='Omar Romero';
    $scope.sayHello = function(){
         $scope.greeting = 'Hello ' + $scope.username + '!';
    };
}]);
