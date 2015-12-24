var app = angular.module("MyFirstApp",[]);
app.filter('removeHtml', function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'')
	}
});
app.controller("FiltersController", function($scope){
	$scope.mi_html = "<p>Hola Mundo</p>";
	$scope.miObjeto = {};
	$scope.miObjeto.id = 1;
	$scope.miObjeto.nombre = 'Mi Nombre';
	$scope.miObjeto.descripcion = 'Mi Descripcion';
	$scope.costo = 10;
});