bBazApp.controller('pressController', ['$scope', 'pressService', function($scope, pressService) {
  $scope.pressAry = pressService.getPressAry();
}]);
