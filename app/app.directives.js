bBazApp
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
})
.directive('bazPressObj', function() {
  return {
    restrict: 'E',
    scope: {
      press: '=',
    },
    templateUrl: 'app/components/press/baz-press-obj.html'
  };
});