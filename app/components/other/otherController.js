bBazApp.controller('otherController', ['$scope', function($scope) {

  $scope.onMouseEnterBeastImg = function() {
    //console.log("onMouseEnterBeastImg");
    $('#beast-yucca-flats-item').animate({backgroundColor: "#80FF80"}, 'slow');
  }

  $scope.onMouseLeaveBeastImg = function() {
    $('#beast-yucca-flats-item').animate({backgroundColor: "#fff"}, 'slow');
  }
}]);
