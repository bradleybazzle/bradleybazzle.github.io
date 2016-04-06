bBazApp.config(function($routeProvider) {
	$routeProvider
		.when('/about', {
			templateUrl : 'app/components/about/aboutView.html',
			controller  : 'aboutController'
		})
		.when('/stories', {
			templateUrl : 'app/components/stories/storiesView.html',
			controller  : 'storiesController'
		})
		.when('/other', {
			templateUrl : 'app/components/other/otherView.html',
			controller  : 'otherController'
		})
		.when('/press', {
			templateUrl : 'app/components/press/pressView.html',
			controller  : 'pressController',
      // 'resolve' is a map of dependencies injected into the controller
      // See https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
      resolve: {
        pressData: function(pressService) {
          return pressService.getData();
        }
      }
		})
		.when('/contact', {
			templateUrl : 'app/components/contact/contactView.html',
			controller  : 'contactController'
		})
		.otherwise({
			redirectTo: '/about'
		});
});
