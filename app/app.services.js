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
  // When I tried converting the array of objects in the JSON file into one object whose properties were each
  // story objects, the order of story properties created was not maintained by ng-repeat in the view.
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
.factory("otherService", ['$http', function($http) {
  return {
    getData: function() {
      var data = {};
      var url = "app/components/other/other.json";
      var config = {cache: true};

      var promise = $http.get(url, config);

      return promise;
    }
  };
  /* Template for adding new Other object to JSON file
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
  /* Template for adding new Press object to JSON file
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
