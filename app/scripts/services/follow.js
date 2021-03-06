'use strict';

/**
 * @ngdoc service
 * @name tipsApp.follow
 * @description
 * # follow
 * Service in the tipsApp.
 */
angular.module('FollowService', ['ngResource'])
  .service('Follow', function ($resource, $http) {
  
    this.followCreate = function(categoryId, createdBy, cb){
    	// console.log('hello');
    	$http.post('/api/user/subscribe/' + categoryId + '/' + createdBy)
    	.success( function(following){
    		// console.log('Info: service following ',following);
    		cb(null, following);
    	})
    	.error( function(err){
    		// console.log('Info: service following ',err);
    		cb (following, null);
    	})
    },

    this.followingGet = function(list ,cb){
        $http.get('/api/user/user-subscribe/' + list)
        .success(function(following){
            cb(null, following);
        })
        .error( function(err){
            cb (err);
        })
    }

  });