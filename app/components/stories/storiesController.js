bBazApp.controller('storiesController', ['$scope', function($scope) {
  //console.log("Hello from 'storiesController'");

  $scope.onMouseEnterMagellanImg = function() {
    //console.log("Entered Magellan image");
    $scope.stories[8].paraClasses.animateBgColor = "true";
  }

  $scope.onMouseLeaveMagellanImg = function() {
    //console.log("Left Magellan image");
    $scope.stories[8].paraClasses.animateBgColor = "";
  }

  // When I tried converting this array of objects into one object whose properties were each story objects,
  // the order of story properties created here was not maintained by ng-repeat.
  // JavaScript does not support associative arrays.
  $scope.stories = [
    {
      title: "In the Presence of the Actor",
      publication: "Copper Nickel"
    },
    {
      title: "Trash Mountain",
      publication: "Third Coast",
      issue: "40 & 41 (Fall 2015): 120-133",
      note: "* Winner of the 2015 Jaimy Gordon Prize, judged by Stuart Dybek"
    },
    {
      title: "The Beard of Human Weakness",
      publication: "Web Conjunctions",
      issue: "(January 19, 2016):",
      url: "http://www.conjunctions.com/webcon/bazzle16.htm"
    },
    {
      title: "Crimes of the Video Age",
      publication: "New Ohio Review",
      issue: "14 (Fall 2013): 120-130"
    },
    {
      title: "A Complaint",
      publication: "NER Digital",
      issue: "(September 4, 2013):",
      url: "http://www.nereview.com/2013/09/04/a-complaint-by-bradley-bazzle/"
    },
    {
      title: "Cinder Blocks",
      publication: "Epoch",
      issue: "No. 1 (February 2013): 3-25"
    },
    {
      title: "The Milkman",
      publication: "The Beloit Fiction Journal",
      issue: "25 (Spring 2012): 66-75"
    },
    {
      title: "The Case Against Dr. Smetana",
      publication: "Phoebe",
      issue: "41, No. 2 (Spring 2012):",
      url: "http://www.phoebejournal.com/the-case-against-dr-smetana/"
    },
    {
      title: "Magellan",
      publication: "The Iowa Review",
      issue: "41, No. 3 (winter 2011-2012): 1-15",
      pid: "magellan-item",
      url: "http://www.iowareview.org/from-the-issue/volume-41-issue-3-%E2%80%94-winter-2011/magellan",
      paraClasses: {
        magellanItem: "true",
        animateBgColor: ""
      }
    },
    {
      title: "Gift Horse",
      publication: "New England Review",
      issue: "31, No. 4 (winter 2010-2011): 54-68",
      url: "http://cat.middlebury.edu/~nereview/31-4/Bazzle.htm"
    },
    {
      title: "Bramilton’s Fury",
      publication: "Splash of Red",
      issue: "(July 9, 2010): online"
    },
    {
      title: "The List",
      publication: "Cold Mountain Review",
      issue: "37, No. 2 (spring 2009): 61-64"
    },
    {
      title: "The Dictionary",
      publication: "Opium",
      issue: "7 (2008): 95-97"
    }
  ];

  /*
    {
      title: "",
      publication: "",
      issue: "",
      url: "",
      note: "",
      paraClasses: {
      }
    },
  */

}]);
