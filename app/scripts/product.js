var product = angular.module('store-directives', []);

product.directive('tabPanels', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/panel-controller.tpl.html',
		controller: function(){
			this.tab = 1;

			this.selectTab = function(setTab){
				this.tab = setTab;
			};

			this.isSelected = function(selectedTab){
				return this.tab === selectedTab;
			};
		},
		controllerAs: 'tab'
	};
});

product.directive('productGallery', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/product-gallery.tpl.html',
		controller: function(){
			this.current = 0;

			this.setCurrent = function(currentImg){
				this.current = currentImg || 0;
			}
		},
		controllerAs: 'gallery'
	};
})

product.directive('productDescription', function(){
	return {
		templateUrl: 'templates/product-desc.tpl.html',
		restrict: 'E'
	};
});

product.directive('productReview', function(){
	return {
		templateUrl: 'templates/product-review.tpl.html',
		restrict: 'E'
	}
});

product.directive('productIngredients', function(){
	return {
		templateUrl: 'templates/product-ingredients.tpl.html',
		restrict: 'A'
	}
});