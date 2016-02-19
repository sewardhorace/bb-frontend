'use strict';

angular.module('trackerApp')
.service('authService', function($http){
  this.login = function(callback){
    $http.post()
    .then(callback);
  };
  this.logout = function(callback){
    $http.post()
    .then(callback);
  };
});
