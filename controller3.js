/**
 * Created by oxrl on 6/9/16.
 */
'use strict';

angular.module('AppPila',[])
    .controller('ctl1',['$scope',function($scope){

        $scope.nuevoComentario={};
        $scope.comentarios=[
            {
                comentario:"Buen Tutorial",
                username:"Codigo Facilito"
            },
            {
                comentario:"Malo Tutorial",
                username:"Codigo Dificilito"
            }
        ];
     $scope.addComentario=function(){
         $scope.comentarios.push($scope.nuevoComentario);
         $scope.nuevoComentario={};
     };
}]);
