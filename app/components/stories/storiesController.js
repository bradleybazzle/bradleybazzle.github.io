bBazApp.controller('storiesController', ['$scope', function($scope) {
  //console.log("Hello from 'storiesController'");
  $scope.paraClasses = {
    magellanItem: "true",
    animateBgColor: ""
  };

  $scope.onMouseEnterMagellanImg = function() {
    //console.log("Entered Magellan image");
    //$scope.magellanClass = "magellan-bg-color";
    $scope.paraClasses.animateBgColor = "true";
  }

  $scope.onMouseLeaveMagellanImg = function() {
    //console.log("Left Magellan image");
    //$scope.magellanClass = "";
    $scope.paraClasses.animateBgColor = "";
  }

}]);
