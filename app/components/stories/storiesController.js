bBazApp.controller('storiesController', ['$scope', function($scope) {
  //console.log("Hello from 'storiesController'");
  $scope.magellanClass = "";

  $scope.onMouseEnterMagellanImg = function() {
    //console.log("Entered Magellan image");
    $scope.magellanClass = "magellan-bg-color";
  }

  $scope.onMouseLeaveMagellanImg = function() {
    //console.log("Left Magellan image");
    $scope.magellanClass = "";
  }
}]);
