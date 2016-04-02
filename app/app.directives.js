bBazApp
.directive('bazStory', function() {
  return {
    restrict: 'E',
    scope: {
      pid: '@',
      paraClasses: '=',
      title: '@',
      publication: '@',
      // if 'issue' is not included, the template displays 'forthcoming' with the .forthcoming class
      issue: '@',
      url: '@',
      note: '@' 
    },
    templateUrl: 'app/components/stories/baz-story.html',
    link: function(scope, elem, attrs) {
      var pEl = elem.find('p');
      pEl.attr('id' , scope.pid);
      //console.log("scope.paraClasses:");
      //console.log(scope.paraClasses);
      /*
      if (scope.pclass != undefined && scope.pclass.length > 0) {
        pEl.addClass(scope.pclass);
      }
      */
    }
  };
});