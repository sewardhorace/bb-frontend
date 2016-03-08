'use strict';

angular.module("trackerApp")
.controller('mainCtrl', function($scope, dataService){
  $scope.getReports = dataService.getReports;
  $scope.getReports({
    callback: function(response){
      $scope.reports = response.data;
    }
  });
  $scope.submitReport = dataService.submitReport;
  $scope.getStudents = dataService.getStudents;
  dataService.getRooms(function(response){
    $scope.rooms = response.data;
  });
  $scope.currentUser = {
    username: "User2",
    auth_token: "85jKZd_TR5SFXUy6k1E-"
  };
});
