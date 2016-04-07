bBazApp
.factory('storiesService', ['$http', function($http) {
  return {
    getData: function() {
      var data = {};
      var url = "app/components/stories/stories.json";
      var config = {cache: true};

      var promise = $http.get(url, config);

      return promise;
    }
  };
  // When I tried converting this array of objects into one object whose properties were each story objects,
  // the order of story properties created here was not maintained by ng-repeat.
  // JavaScript does not support associative arrays.
  /* Template for adding new Story object to JSON file
    {
      title: "",
      publication: "",
      issue: "",
      type: "",
      url: "",
      note: "",
      pClasses: {
      }
    },
  */
}])
.service("othersService", function() {
  this.getOthers = function() {
  /*
    {
      title: "",
      publication: "",
      issue: "",
      type: "",
      url: "",
      note: "",
      pClasses: {
      }
    },
  */
    var others = [
      {
        title: "Flag on the Moon: the Beast of Yucca Flats",
        publication: "NER Digital",
        issue: "(June 21, 2012):",
        type: "creative nonfiction",
        pid: "beast-item",
        url: "http://www.nereview.com/tag/the-beast-of-yucca-flats/",
        pClasses: {
          beastItem: "true",
          animateBgColor: ""
        }
      },
      {
        title: "Maceo Montoya, The Scoundrel and the Optimist",
        publication: "Indiana Review",
        issue: "32, No. 1 (Summer 2010): 176-177",
        type: "book review"
      },
      {
        title: "The Paris Review Perspective",
        publication: "Critical Insights: Benjamin Franklin.",
        issue: "Pasadena, CA: Salem Press, 2009",
        type: "critical anthology"
      },
      {
        title: "Bernard Share, Inish",
        publication: "Indiana Review",
        issue: "31, No. 2 (Winter 2009): 180-181",
        type: "book review"
      }
    ];

    return others;
  }

})
.factory("pressService", ['$http', function($http) {
  return {
    getData: function() {
      var data = {};
      var url = "app/components/press/press.json";
      var config = {cache: true};

      var promise = $http.get(url, config);

      return promise;
    }
  };
  /* Template for adding new press object to JSON file
    {
      title: "",
      quote: "",
      reviewer: "",
      url: "",
      publication: ""
    },
  */
}]);

/*
.service("testAjaxService", ['$http', function($http) {
  this.getData = function() {
    $http.get('app/components/press/press.json')
    .then(function(response) {
      // successCallback
      console.log("testAjaxService.getAjax() SUCCESS");
      console.log(response.data);
    },
    function(response) {
      // errorCallback
      console.log("testAjaxService.getAjax() FAILURE");
      console.log("status: " + response.status);
      console.log("statusText: " + response.statusText);
    });

  }
}])
*/
