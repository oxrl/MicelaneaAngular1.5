'use strict';
angular.module('TestAPP2',[]).controller('PControlador',['$scope',function($scope){
    
    $scope.count= 0;
    $scope.incrementar= function(){
       $scope.count++;
    };
}]);