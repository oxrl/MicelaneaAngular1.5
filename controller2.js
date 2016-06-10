'use strict';
angular.module('calculadora',[])
    .controller('sumadora',['$scope',function($scope){

        $scope.n1=0;
        $scope.n2=0;
        $scope.sum=0;

        $scope.suma=function(){
           $scope.sum= parseInt($scope.n1) + parseInt($scope.n2);
        };
}]).controller('restadora',['$scope',function($scope){
    $scope.n1=0;
    $scope.n2=0;
    $scope.res=0;

    $scope.resta=function(){
        $scope.res= parseInt($scope.n1) - parseInt($scope.n2);
    };
}]);