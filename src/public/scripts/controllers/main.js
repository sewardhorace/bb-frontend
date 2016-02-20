'use strict';

angular.module("trackerApp")
.controller('mainCtrl', function($scope, dataService){
  dataService.getReports(function(response){
    $scope.reports = response.data;
  });
  $scope.submitReport = dataService.submitReport;
  dataService.getStudents(function(response){
    $scope.students = response.data;
  });
  dataService.getRooms(function(response){
    $scope.rooms = response.data;
  });
  $scope.currentUser = {
    username: "User2",
    auth_token: "85jKZd_TR5SFXUy6k1E-"
  };
});
