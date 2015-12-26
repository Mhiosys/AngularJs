var app = angular.module("CustomDirective",["ngRoute"])
.config(function ($routeProvider) {
	$routeProvider
		.when("/",{
			controller: "ReposController",
			templateUrl: "templates/home.html"
		})
		.when("/repo/:name",{
			controller: "DetalleController",
			templateUrl: "templates/detalle.html"
		})
		.otherwise("/");
})