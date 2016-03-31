bBazApp.controller('otherController', ['$scope', function($scope) {
  $scope.beastClass = "";

  $scope.onMouseEnterBeastImg = function() {
    //console.log("onMouseEnterBeastImg");
    $scope.beastClass = "beast-bg-color";
  }

  $scope.onMouseLeaveBeastImg = function() {
    $scope.beastClass = "";
  }
}]);
