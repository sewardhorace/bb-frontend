'use strict';

angular.module('trackerApp')
.controller('FormCtrl', function ($scope) {

  $scope.newReport = {};
  $scope.currentUser = {
    name:"Username"
  };

  $scope.change = function(className,idx){
    //render the text in a <p> element to get its width, then remove the <p> element
    var p = angular.element(document.createElement('p'));
    var input;

    if (className === 'title-input'){
      p.text($scope.newReport.title);
      p.addClass('title-width');
      input = angular.element(document.getElementsByClassName(className));

    } else if (className === 'tag-input'){
      p.text($scope.newReport.tags[idx]);
      p.addClass('tag-width');
      input = angular.element(document.getElementsByClassName(className)[idx]);

    }

    var form = angular.element(document.getElementById('form'));
    form.append(p);
    var width = p[0].clientWidth;
    input.css("width", width+4+"px");
    p.remove();
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
