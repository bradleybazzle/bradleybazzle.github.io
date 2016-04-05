bBazApp
.directive('bazStory', function() {
  return {
    restrict: 'E',
    scope: {
      pid: '@',
      pClasses: '=',
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
    }
  };
})
.directive('bazStoryObj', function() {
  return {
    restrict: 'E',
    scope: {
      story: '=',
    },
    templateUrl: 'app/components/stories/baz-story-obj.html',
    link: function(scope, elem, attrs) {
      var pEl = elem.find('p');
      pEl.attr('id' , scope.story.pid);
    }
  };
});