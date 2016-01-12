'use strict';

angular.module('trackerApp')
.controller('FormCtrl', function ($scope) {

  $scope.newReport = {};
  $scope.currentUser = {
    name:"Username"
  };

  //title
  $scope.titlePlaceholder = "+Title";
  $scope.inputSize = $scope.titlePlaceholder.length;
  $scope.change = function(text){
    // var p = angular.element(document.createElement('p'));
    // p.text(text);
    // console.log(p.text());

    if (text.length === 0){
      $scope.inputSize = $scope.titlePlaceholder.length;
    } else {
      $scope.inputSize = text.length + 1;
    }
  };


  $scope.save = function(){
    var date = $scope.newReport.date;
    var time = $scope.newReport.time;
    var report = {
      title:$scope.newReport.title,
      time: new Date(date.getFullYear(), date.getMonth(), date.getDate(),
               time.getHours(), time.getMinutes(), time.getSeconds()),
      author:$scope.currentUser.name,
      students:$scope.newReport.students,
      description:$scope.newReport.notes,
      tags:$scope.newReport.tags
    };
    $scope.$parent.reports.push(report);
    $scope.newReport = {
      title:"",
      date: new Date(),
      time: new Date(),
      students: [],
      tags: [],
      notes: ""
    };
  };
});
