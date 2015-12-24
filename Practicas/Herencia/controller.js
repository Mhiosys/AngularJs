var app = angular.module("MyFirstApp",[]);
app.run(function($rootScope){
	$rootScope.nombre = "Padre"
});
app.controller("FirstController", function($scope, $rootScope){
	$scope.nombre = "Hijo";
});
app.controller("ChildController", function($scope, $rootScope){
	$scope.nombre = "Nieto";
});