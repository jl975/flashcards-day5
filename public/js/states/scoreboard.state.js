app.config(function($stateProvider) {
	$stateProvider.state('scoreboard', {
		url: '/scoreboard',
		template: '<div id="statistics"><div id="scoreboard"><h3>Correct: <span>{{ scores.correct }}</span></h3><h3>Incorrect: <span>{{ scores.incorrect }}</span></h3></div></div>',
		controller: 'StatsController'
	});
});