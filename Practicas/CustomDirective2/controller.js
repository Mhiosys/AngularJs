var app = angular.module("CustomDirective",[]);
app.directive('myAutocomplete', function(){
	function link(scope, element, attrs){
		$(element).autocomplete({
			source: scope[attrs.myAutocomplete],
			select: function(ev, ui){
				ev.preventDefault();
				if(ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			focus: function(ev, ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return {
		link: link
	};
});
app.directive('backImg', function(){
	return function(scope, element, attrs){
		attrs.$observe('backImg', function(value){
			element.css(
			{
				"background": "url(" + value + ")",
				"background-position": "center",
				"background-size": "cover"

			});
		});
	}
});
app.controller("AppCtrl", ["$scope", "$http", function($scope, $http){
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
}]);