var app = angular.module("ToDoList",['LocalStorageModule']);
app.controller("ToDoController", ["$scope","localStorageService",function($scope, localStorageService){
	if(localStorageService.get("angular-todoList")){
		$scope.todo = localStorageService.get("angular-todoList");	
	}else{
		$scope.todo = [];
	}	

	$scope.$watchCollection('todo',function(newValue, oldValue){
		localStorageService.set("angular-todoList",$scope.todo);
	});
	$scope.addAct = function(){
		$scope.todo.push($scope.newAct);
		$scope.newAct = {};		
	}
}]);