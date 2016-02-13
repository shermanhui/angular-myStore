'use strict'

var inventory = [
	{
		'name': 'Ice Cream 1',
		'price': 10,
		'description': 'Filler Filler',
		'ingredients': 'Filler Filler',
		'in_stock': true,
		'images': [
			{
				full: 'img.jpg',
				thumb: 'thumb.jpg'

			}
		],
		'reviews': [
			{
				stars: 5,
				body: 'This is Awesome',
				author: 'jill@icecream.com',
				createdOn: 1397490980837
			}
		]
	},
	{
		'name': 'Ice Cream 2',
		'price': 15,
		'description': 'Filler Filler',
		'ingredients': 'Filler Filler',
		'in_stock': false,
		'images': [
			{
				full: 'img.jpg',
				thumb: 'thumb.jpg'

			}
		],
		'reviews': [
			{
				stars: 5,
				body: 'This is Awesome',
				author: 'jill@icecream.com',
				createdOn: 1397490980837
			},
			{
				stars: 3,
				body: 'This is Okay',
				author: 'bob@icecream.com',
				createdOn: 1397490980837
			}

		]
	},
	{
		'name': 'Ice Cream 4',
		'price': 20,
		'description': 'Filler Filler',
		'ingredients': 'Filler Filler',
		'in_stock': true,
		'images': [
			{				full: 'img.jpg',
				thumb: 'thumb.jpg'

			},
			{
				full: 'img.jpg',
				thumb: 'thumb.jpg'

			}
		],
		'reviews': [
			{
				stars: 5,
				body: 'This is Awesome',
				author: 'jill@icecream.com',
				createdOn: 1397490980837
			}
		]
	}
];

var app = angular.module('sweetStore', []);

app.controller('ReviewController', function(){
	this.review = {};

	this.addReview = function(item){
		this.review.createdOn = Date.now();

		item.reviews.push(this.review)

		this.review = {};
	}

})

app.controller('GalleryController', function(){
	this.current = 0;

	this.setCurrent = function(currentImg){
		this.current = currentImg || 0;
	}
});

app.controller('StoreController', function(){
	this.products = inventory;

});

app.controller('TabController', function(){
	this.tab = 1;

	this.selectTab = function(setTab){
		this.tab = setTab;
	};

	this.isSelected = function(selectedTab){
		return this.tab === selectedTab;
	};
});

app.directive('tabPanels', function(){
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

app.directive('productDescription', function(){
	return {
		templateUrl: 'templates/product-desc.tpl.html',
		restrict: 'E'
	};
});

app.directive('productReview', function(){
	return {
		templateUrl: 'templates/product-review.tpl.html',
		restrict: 'E'
	}
});

app.directive('productIngredients', function(){
	return {
		templateUrl: 'templates/product-ingredients.tpl.html',
		restrict: 'A'
	}
})
