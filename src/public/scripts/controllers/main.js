'use strict';

angular.module("trackerApp")
.controller('mainCtrl', function($scope, dataService){
  $scope.getReports = dataService.getReports;
  $scope.getReports({
    callback: function(response){
      $scope.reports = response.data;
    }
  });
  $scope.getStudents = dataService.getStudents;
  dataService.getRooms(function(response){
    $scope.rooms = response.data;
  });
  $scope.editButtonClicked = function(report){
    console.log("edit button clicked");
    report.editing = true;
  };

  $scope.newReport = {
    editing: false,
    students: [],
    room: {}
  };
});
