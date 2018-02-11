bBazApp.config(function($routeProvider) {
	$routeProvider
		.when('/about', {
			templateUrl : 'app/components/about/aboutView.html',
			controller  : 'aboutController'
		})
		.when('/book', {
			templateUrl : 'app/components/book/bookView.html',
			controller  : 'bookController'
		})
		.when('/stories', {
			templateUrl : 'app/components/stories/storiesView.html',
			controller  : 'storiesController',
			// 'resolve' is a map of dependencies injected into the controller.  'service.getData()' returns a promise.
			// The router will wait for the promise to be resolved or rejected before the controller is instantiated.
			// See https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
			resolve: {
				storiesData: function(storiesService) {
					return storiesService.getData();
				}
			}
		})
		.when('/other', {
			templateUrl : 'app/components/other/otherView.html',
			controller  : 'otherController',
			resolve: {
				otherData: function(otherService) {
					return otherService.getData();
				}
			}
		})
		.when('/press', {
			templateUrl : 'app/components/press/pressView.html',
			controller  : 'pressController',
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
			redirectTo: '/book'
		});
});
