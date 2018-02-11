bBazApp.controller('navbarController', ['$scope', function($scope) {

	$scope.setSelection = function(option) {
		//console.log(option + ' menu option clicked.');
		$scope.selected = option;
	};

	$scope.isSelected = function(option) {
		return $scope.selected === option;
	};

	$scope.init = function() {
		$scope.setSelection('book');
	};

	$scope.init();

}]);
