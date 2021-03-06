'use strict';

/**
 * @ngdoc service
 * @name tipsApp.create
 * @description
 * # create
 * Service in the tipsApp.
 */
angular.module('TipsServices', ['ngResource'])
	.service('Tip', function ($resource, $http) {

		// console.log('create it',postCreate);
		this.postCreate = function(tip, cb){
			console.log('INFO: Before saving', tip);
			$http.post('/api/tips', tip)
			.success(function(data) {
				console.log('INFO: After saving', data);
				cb(null, data);
			})
			.error(function(data){
				cb(data, null);
			});
		};

	 	this.getTips = function(tip_ids){
	 		if(tip_ids){
		 		return $http.get('/api/tips?tip_ids=' + tip_ids.toString() );
		 		// var r = $http(method: 'GET', url: this.url + '/tips',
		 		// 	params: {
		 		// 	  tip_ids: JSON.stringify(tip_ids)
		 		// 	});
		 		// return r;
		 	// 	var x = $http(
 			// 	  method: 'GET',
  		// 		  url: this.url + '/tips',
  		// 		  params: {
    // 				tip_ids: JSON.stringify(tip_ids) // tip ids is [1, 2, 3, 4]
  		// 		  }
				// )
				// return x;
	 		} else {
		 		return $http.get('/api/tips');
	 		}
	 	};

	//this is for create thumb function
	 	this.postView = function(tipId, cb){
	 		// console.log('service tip',tipId);
	 		return $http.put('/api/tips/' + tipId + '/view')
	 		.success(function(data) {
				cb(null, data);
			})
			.error(function(data){
				cb(data, null);
			});

	 	};

	//edit tip
	 	this.putTip = function(tip, cb){
	 		console.log(tip);
	 		return $http.put('/api/tips/' + tip.id, tip)
	 		.success(function(tip){
	 			cb(null, tip);
	 		})
	 		.error(function(tip){
	 			cb(tip, null);
	 		});
	 	};

	//Delete tip
	 	this.deleteTip = function(tip, cb){
	 		console.log(tip);
	 		$http.delete('/api/tips/' + tip)
	 		.success(function(tip){
	 			cb(null, tip);
	 		})
	 		.error(function(tip){
	 			cb(tip, null);
	 		});
	 	};

	});