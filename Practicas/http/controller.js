var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", function($scope,$http){
	$scope.newPost = {};
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(){
			console.log(data);
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