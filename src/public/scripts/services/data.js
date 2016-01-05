'use strict';

angular.module('trackerApp')
.service('dataService', function($http){
  // this.getReports = [{"title":"butts"},{"title":"boobs"}];
  this.getReports = function(callback){
    $http.get('static/mock/reports.json')
    .then(callback);
  }
});
