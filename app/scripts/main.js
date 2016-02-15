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

var app = angular.module('sweetStore', ['store-directives']);

app.controller('ReviewController', function(){
	this.review = {};

	this.addReview = function(item){
		this.review.createdOn = Date.now();

		item.reviews.push(this.review)

		this.review = {};
	}

});

app.controller('StoreController', function(){
	this.products = inventory; //$http

});
