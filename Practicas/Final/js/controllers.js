angular.module("FinalApp")
.controller("MainController", ["$scope","$resource", function($scope, $resource){
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
	User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});

	$scope.posts = Post.query();
	$scope.users = User.query();
}]);