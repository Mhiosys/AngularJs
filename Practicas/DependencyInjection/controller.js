var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", [ "$scope", function($scope){
	$scope.nuevocomentario = {};
	$scope.comentarios = [
		{
			comentario: "Buen tutorial",
			username: "codigofacilito"
		},
		{
			comentario: "Malísimo tutorial",
			username: "otro_usuario"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevocomentario);
		$scope.nuevocomentario = {};
	}
}]);