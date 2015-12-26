var app = angular.module("CustomDirective",[]);
app.controller("AppCtrl", ["$scope", "$http", function($scope, $http){
	$http.get("https://api.github.com/users/mijailstell/repos")
	.success(function(data, status){
		$scope.repos = data;
	})
	.error(function(error, status){
		console.log(error);
	});
	$scope.nombre = "Mijail";
}]);