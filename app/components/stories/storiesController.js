bBazApp.controller('storiesController', ['$scope', function($scope) {
  //console.log("Hello from 'storiesController'");
  $scope.storyBgClass = "";

  $scope.onMouseEnterMagellanImg = function() {
    //console.log("Entered Magellan image");
    // TODO: Determine why transition in CSS isn't working
    $scope.storyBgClass = "greenBg";
  }

  $scope.onMouseLeaveMagellanImg = function() {
    //console.log("Left Magellan image");
    $scope.storyBgClass = "";
  }
}]);
