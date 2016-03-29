'use strict';

angular.module('trackerApp')
.controller('formCtrl', function ($scope, $attrs, dataService) {

  if($attrs.report){
    $scope.report = $scope.$eval($attrs.report);
  }

  $scope.cancel = function(){
    $scope.report.editing = false;
  }

  $scope.save = function(){
    console.log("save button clicked");

    var date = $scope.report.date;
    var time = $scope.report.time;
    var report = {
      id: $scope.report.id,
      title:$scope.report.title,
      time: new Date(date.getFullYear(), date.getMonth(), date.getDate(),
               time.getHours(), time.getMinutes(), time.getSeconds()),
      students: $scope.report.students.map(function(student){return {id: student.id};}),
      description:$scope.report.description,
      room_id:$scope.report.room.id,
      // tags:$scope.report.tags
    };

    var data = {
      "report":report
    };
    dataService.submitReport($scope.currentUser, data, function(response){
      console.log(response.statusText);
      if (response.status === 201){
        $scope.reports.push(response.data.report);
        $scope.report = {
          title:"",
          date: new Date(),
          time: new Date(),
          students: [],
          tags: [],
          notes: "",
          room:null
        };
      } else if (response.status === 200){
        console.log("Update successful");
        $scope.report.editing = false;
      } else {
        console.log("Record not created");
      }
    });
  };
});
