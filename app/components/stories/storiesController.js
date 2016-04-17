bBazApp.controller('storiesController', ['$scope', 'storiesData', function($scope, storiesData) {
  //console.log("Hello from 'storiesController'");

  $scope.storiesData = [];
  
  if (storiesData.status == 200) // OK
  {
    $scope.storiesData = storiesData.data;
    //console.log("From controller: storiesData");
    //console.log($scope.storiesData);
  }
  else {  // Error
    console.log("Error retrieving 'storiesData'");
    console.log("response.status: " + storiesData.status);
    console.log("response.statusText: " + storiesData.statusText);
  }

}]);
