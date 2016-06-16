angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoControlador", function($scope, localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}else{
	$scope.todo = [];
	}
	/*
	{
	    Autor : 'OXRL',
		descripcion: 'Terminar el curso Angular',
		fecha: '16-06-16 20:00pm'
	}
	*/
	$scope.$watchCollection('todo', function(newValue,oldValue){
		localStorageService.set("angular-todolist",$scope.todo);
	});
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
	}

});