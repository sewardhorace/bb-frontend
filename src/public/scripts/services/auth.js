'use strict';

angular.module('trackerApp')
.service('authService', function($http){
  this.login = function(credentials, callback){
    var data = {
      'session':credentials
    };
    var req = {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/sessions',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    $http(req).then(callback);
  };
  this.logout = function(callback){
    $http.post()
    .then(callback);
  };
});
