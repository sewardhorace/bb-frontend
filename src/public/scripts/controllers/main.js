'use strict';

angular.module("trackerApp")
.controller('mainCtrl', function($scope, dataService){
  dataService.getReports(function(response){
    $scope.reports = response.data;
  });
});
