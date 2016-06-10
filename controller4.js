/**
 * Created by oxrl on 6/10/16.
 */

angular.module('ToDoList',['LocalStorageModule'])
    .controller("MainCtrl",['$scope','localStorageService',function($scope,localStorageService){
     if(localStorageService.get('MiDiscoDuro')){
         $scope.todo=localStorageService.get('MiDiscoDuro');
     }
     else{
         $scope.todo=[];
     }

    $scope.$watchCollection('todo',function(newValue,oldValue){
        localStorageService.set('MiDiscoDuro',$scope.todo);
    });


     $scope.addAct=function(){
         $scope.todo.push($scope.newActv);
         $scope.newActv={};
     };
     $scope.clean=function(){
         $scope.todo=[];
     };


}]);