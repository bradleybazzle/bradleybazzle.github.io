bBazApp.controller('storiesController', ['$scope', 'storiesService', function($scope, storiesService) {
  //console.log("Hello from 'storiesController'");

  $scope.stories = storiesService.getStories();

  $scope.onMouseEnterMagellanImg = function() {
    //console.log("Entered Magellan image");
    $scope.stories[8].pClasses.animateBgColor = "true";
  }

  $scope.onMouseLeaveMagellanImg = function() {
    //console.log("Left Magellan image");
    $scope.stories[8].pClasses.animateBgColor = "";
  }

}]);
