var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", function($scope){
	$scope.nombre = "Mijail";
	document.querySelector("#btnCambiar").addEventListener("click", function(){
		$scope.$apply(function(){
			$scope.nombre = "Mijail Alexander Castillo Alfaro";
		});
	});	
	
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.nombre = "Mijail Alexander";
		});
	},2000);
	
});