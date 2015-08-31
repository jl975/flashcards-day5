app.controller('EditCardController', function ($scope, FlashCardsFactory, $stateParams, $state) {
	$scope.categories = FlashCardsFactory.categories;
	$scope.saveCard = function () {
		FlashCardsFactory.updateCard($scope.card)
		.then($state.go('cardView'));
	};

	$scope.getCard = function(id) {
		console.log(FlashCardsFactory);
		FlashCardsFactory.getCardById(id).then(function(card){
			$scope.card=card;
		});
	};

	$scope.deleteCard = function() {
		FlashCardsFactory.deleteCardById($stateParams.id).then(function() {
			$state.go('cardView');
		})
	}

	$scope.getCard($stateParams.id);

});