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
			controller  : 'pressController'
		})
		.when('/contact', {
			templateUrl : 'app/components/contact/contactView.html',
			controller  : 'contactController'
		})
		.otherwise({
			redirectTo: '/about'
		});
});
