bBazApp
.directive('bazStoryObj', function() {
  return {
    restrict: 'E',
    scope: {
      story: '=',
    },
    templateUrl: 'app/components/stories/baz-story-obj.html'
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