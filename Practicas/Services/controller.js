var app = angular.module("ToDoList",['LocalStorageModule']);
app.service('ToDoService', function(localStorageService){
	this.key = "angular-todoList";

	if(localStorageService.get(this.key)){
		this.activities = localStorageService.get(this.key);	
	}else{
		this.activities = [];
	}	

	this.add = function(newAct){
		this.activities.push(newAct);
		this.updateLocalStorage();
	};

	this.updateLocalStorage = function(){
		localStorageService.set(this.key, this.activities);
	};

	this.clean =function(){
		this.activities = [];
		this.updateLocalStorage();
	};

	this.getAll = function(){
		return this.activities;
	};

	this.removeItem = function(item){
		this.activities = this.activities.filter(function(activity){
			return activity !== item;
		});
		this.updateLocalStorage();
		return this.getAll();
	};

});
app.controller("ToDoController", ["$scope","ToDoService",function($scope, ToDoService){
	$scope.todo = ToDoService.getAll();
	$scope.newAct = {};

	$scope.addAct = function(){
		ToDoService.add($scope.newAct);
		$scope.newAct = {};		
	};

	$scope.removeItem = function(item){
		$scope.todo = ToDoService.removeItem(item);
	};

	$scope.clean = function(){
		$scope.todo = ToDoService.clean();
	};
}]);