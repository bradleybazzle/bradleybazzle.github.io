bBazApp.controller('storiesController', ['$scope', function($scope) {
  //console.log("Hello from 'storiesController'");

  $scope.onMouseEnterMagellanImg = function() {
    //console.log("Entered Magellan image");
    $('#magellan-item').animate({backgroundColor: "#80FF80"}, 'slow');
  }

  $scope.onMouseLeaveMagellanImg = function() {
    //console.log("Left Magellan image");
    $('#magellan-item').animate({backgroundColor: "#fff"}, 'slow');
  }
}]);
