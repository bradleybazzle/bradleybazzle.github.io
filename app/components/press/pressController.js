bBazApp.controller('pressController', ['$scope', 'pressData',
 function($scope, pressData) {
  $scope.pressData = [];

  if (pressData.status == 200) // OK
  {
    $scope.pressData = pressData.data;
    //console.log("From controller: pressData");
    //console.log($scope.pressData);
  }
  else {  // Error
    console.log("Error retrieving 'pressData'");
    console.log("response.status: " + pressData.status);
    console.log("response.statusText: " + pressData.statusText);
  }
}]);
