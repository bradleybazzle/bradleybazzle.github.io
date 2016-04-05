bBazApp.controller('otherController', ['$scope', 'othersService', function($scope, othersService) {
  $scope.others = othersService.getOthers();

  $scope.onMouseEnterBeastImg = function() {
    //console.log("onMouseEnterBeastImg");
    $scope.beastClass = "animateBgColor";
    $scope.others[0].pClasses.animateBgColor = "true";
  }

  $scope.onMouseLeaveBeastImg = function() {
    $scope.beastClass = "";
    $scope.others[0].pClasses.animateBgColor = "";
  }
}]);
