bBazApp.controller('otherController', ['$scope', function($scope) {
  $scope.otherBgClass = "";

  $scope.onMouseEnterBeastImg = function() {
    //console.log("onMouseEnterBeastImg");
    $scope.otherBgClass = "greenBg";
  }

  $scope.onMouseLeaveBeastImg = function() {
    $scope.otherBgClass = "";
  }
}]);
