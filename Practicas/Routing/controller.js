angular.module("CustomDirective")
.controller("ReposController", ["$scope", "$http", function($scope, $http){
	$scope.repos = [];
	$scope.sourceAutocomplete = [];

	$http.get("https://api.github.com/users/mijailstell/repos")
	.success(function(data, status){
		$scope.repos = data;
		for(var i = data.length - 1; i>=0; i--){
			var repo = data[i];
			$scope.sourceAutocomplete.push(repo.name);
		}
	})
	.error(function(error, status){
		console.log(error);
	});

	$scope.optionSelected = function(data){
		$scope.$apply(function(){
			$scope.main_repo = data;
		});
	};
}])
.controller("DetalleController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
	$scope.repo = {};
	debugger;
	$http.get("https://api.github.com/repos/mijailstell/" + $routeParams.name)
	.success(function(data, status){
		$scope.repo = data;		
	})
	.error(function(error, status){
		console.log(error);
	});
}]);