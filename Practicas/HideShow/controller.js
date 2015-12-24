var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", function($scope,$http){
	$scope.newPost = {};
	$scope.loading = true;
	$scope.posts = [];
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			$scope.posts = data;
			$scope.loading = false;
		})
		.error(function(){
			$scope.loading = false;	
			$scope.posts = [];		
		});

	$scope.agregarPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",
		{
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
		.success(function(data,status,header,config){
			console.log(data);
			$scope.posts.push(data);
			$scope.newPost = {};
		})
		.error(function(error,status,header,config){
			console.log(error);
		});
	}	
});