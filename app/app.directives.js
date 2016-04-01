bBazApp
.directive('bazStory', function() {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      publication: '@',
      issue: '@',
      forthcoming: '@',
      online: '@'
    },
    templateUrl: 'app/components/stories/baz-story.html'
  };
});