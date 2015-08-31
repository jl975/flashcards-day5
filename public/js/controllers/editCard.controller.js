app.controller('EditCardController', function ($scope, FlashCardsFactory, $stateParams) {
	$scope.categories = FlashCardsFactory.categories;
	$scope.saveCard = function () {
		FlashCardsFactory.updateCard($scope.card)
		.then(function (updatedCard) {
			$scope.$parent.editing = false;
		});
	};
	FlashCardsFactory.getCardById($stateParams.id).then(function(card){
		$scope.card=card;
	})
});