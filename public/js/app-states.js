app.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		template: ''
	});
});

app.config(function($stateProvider) {
	$stateProvider.state('scoreboard', {
		url: '/scoreboard',
		template: '<div id="statistics"><div id="scoreboard"><h3>Correct: <span>{{ scores.correct }}</span></h3><h3>Incorrect: <span>{{ scores.incorrect }}</span></h3></div></div>',
		controller: 'StatsController'
	});
});

app.config(function($stateProvider) {
	$stateProvider.state('cardForm', {
		url: '/cardform',
		templateUrl: '../js/directives/flashcard/newflashcard.html',
		controller: 'NewCardController'
	});
});

app.config(function($stateProvider) {
	$stateProvider.state('cardView', {
		url: '/cardview',
		templateUrl: '../js/directives/flashcard/flashcardview.html',
		controller: 'MainController'
	});
});