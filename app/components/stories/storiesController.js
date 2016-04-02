bBazApp.controller('storiesController', ['$scope', function($scope) {
  //console.log("Hello from 'storiesController'");
  $scope.paraClasses = {
    magellanItem: "true",
    animateBgColor: ""
  };

  $scope.onMouseEnterMagellanImg = function() {
    //console.log("Entered Magellan image");
    //$scope.paraClasses.animateBgColor = "true";
    $scope.magellan.paraClasses.animateBgColor = "true";
    $scope.stories[1].paraClasses.animateBgColor = "true";
  }

  $scope.onMouseLeaveMagellanImg = function() {
    //console.log("Left Magellan image");
    //$scope.paraClasses.animateBgColor = "";
    $scope.magellan.paraClasses.animateBgColor = "";
    $scope.stories[1].paraClasses.animateBgColor = "";
  }

  $scope.stories = [
    {
      title: "Test Title from Object Array",
      publication: "Test Publication",
      issue: "Test Issue",
      paraClasses: {
        testClass1: "true",
        testClass2: "true"
      }
    },
    {
      title: "Magellan from Object Array",
      publication: "The Iowa Review",
      issue: "41, No. 3 (winter 2011-2012): 1-15",
      pid: "magellan-item",
      url: "http://www.iowareview.org/from-the-issue/volume-41-issue-3-%E2%80%94-winter-2011/magellan",
      paraClasses: {
        magellanItem: "true",
        animateBgColor: ""
      }
    }
  ];

  $scope.testStory = {
    title: "Test Title",
    publication: "Test Publication",
    issue: "Test Issue",
    paraClasses: {
      testClass1: "true",
      testClass2: "true"
    }
  };

  $scope.magellan = {
    title: "Magellan",
    publication: "The Iowa Review",
    issue: "41, No. 3 (winter 2011-2012): 1-15",
    pid: "magellan-item",
    url: "http://www.iowareview.org/from-the-issue/volume-41-issue-3-%E2%80%94-winter-2011/magellan",
    paraClasses: {
      magellanItem: "true",
      animateBgColor: ""
    }
  };

}]);
