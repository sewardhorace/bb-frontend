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
    var form = angular.element(document.getElementById('form'));
    var width;

    if (className === 'title-input'){
      p.text($scope.newReport.title.text);
      p.addClass('title-width');
      form.append(p);
      width = p[0].clientWidth;
      $scope.newReport.title.style = {'width':width+4+'px'};

    } else if (className === 'tag-input'){
      p.text($scope.newReport.tags[idx].text);
      p.addClass('tag-width');
      form.append(p);
      width = p[0].clientWidth;
      $scope.newReport.tags[idx].style = {'width':width+4+'px'};

    } else if (className === 'student-input'){
      p.text($scope.newReport.students[idx].text);
      p.addClass('student-width');
      form.append(p);
      width = p[0].clientWidth;
      $scope.newReport.students[idx].style = {'width':width+4+'px'};
    }
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
