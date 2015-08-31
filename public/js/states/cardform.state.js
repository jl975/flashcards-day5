app.config(function($stateProvider) {
	$stateProvider.state('cardForm', {
		url: '/cardform',
		templateUrl: '../js/directives/flashcard/newflashcard.html',
		controller: 'NewCardController'
	});
});