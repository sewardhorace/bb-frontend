'use strict';

angular.module('trackerApp')
.service('dataService', function($http){
  // this.getReports = function(callback){
  //   $http.get('static/mock/reports.json')
  //   .then(callback);
  // },
  this.getReports = function(callback){
    $http.get('http://localhost:3000/api/v1/reports.json')
    .then(callback);
  };
  this.submitReport = function(user, report, callback){
    var req = {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/reports.json',
      headers: {
        'Authorization': user.auth_token,
        'Content-Type': 'application/json'
      },
      data: report
    };
    $http(req).then(callback);
  };
});
