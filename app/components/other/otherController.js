bBazApp.controller('otherController', ['$scope', 'otherData', function($scope, otherData) {
  $scope.otherData = [];
  
  if (otherData.status == 200) // OK
  {
    $scope.otherData = otherData.data;
    //console.log("From controller: otherData");
    //console.log($scope.otherData);
  }
  else {  // Error
    console.log("Error retrieving 'otherData'");
    console.log("response.status: " + otherData.status);
    console.log("response.statusText: " + otherData.statusText);
  }

  $scope.onMouseEnterBeastImg = function() {
    //console.log("onMouseEnterBeastImg");
    $scope.otherData[0].pClasses.animateBgColor = "true";
  }

  $scope.onMouseLeaveBeastImg = function() {
    $scope.otherData[0].pClasses.animateBgColor = "";
  }
}]);
