app.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise('/');
});


app.config(function($stateProvider) {
	$stateProvider.state('cardView', {
		url: '/',
		templateUrl: '../js/directives/flashcard/flashcardview.html',
		controller: 'MainController'
	})
	.state('scoreboard', {
		url: '/scoreboard',
		template: '<div id="statistics"><div id="scoreboard"><h3>Correct: <span>{{ scores.correct }}</span></h3><h3>Incorrect: <span>{{ scores.incorrect }}</span></h3></div></div>',
		controller: 'StatsController'
	})
	.state('cardForm', {
		url: '/cardform',
		templateUrl: '../js/directives/flashcard/newflashcard.html',
		controller: 'NewCardController'
	})
	.state('managecard', {
		url: '/cards/:id',
		template: '<edit-card></edit-card>',
		controller: 'EditCardController'
	})
	.state('managecard.edit', {
		url: '/edit',
		template: '<edit-card></edit-card>',
		controller: 'EditCardController'
	})
	.state('managecard.delete', {
		url: '/delete',
		template: '<p><i>Are you sure you want to delete this card?????</i></p><button ng-click="deleteCard()">YES</button>',
		controller: 'EditCardController'
	});
});
