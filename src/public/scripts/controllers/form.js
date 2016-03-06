'use strict';

angular.module('trackerApp')
.controller('formCtrl', function ($scope) {

  $scope.newReport = {
    title: "",
    room: {}
  };

  // $scope.redRoom = {
  //   name:'Red',
  //   hexColor:'#A3372C'
  // };
  // $scope.blueRoom = {
  //   name:'Blue',
  //   hexColor:'#093455'
  // };
  // $scope.purpleRoom = {
  //   name:'Purple',
  //   hexColor:'#643275'
  // };

  $scope.change = function(className,idx){
    console.log("changed");
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
      var text = $scope.newReport.students[idx].name
      if (text.length > 0){
        p.text(text);
        p.addClass('student-width');
        form.append(p);
        width = p[0].clientWidth;
      } else {
        width = 44;
      }
      $scope.newReport.students[idx].style = {'width':width+4+'px'};
    }
    p.remove();
  };


  $scope.save = function(){
    console.log("saved button clicked");
    var date = $scope.newReport.date;
    var time = $scope.newReport.time;
    var report = {
      title:$scope.newReport.title.text,
      time: new Date(date.getFullYear(), date.getMonth(), date.getDate(),
               time.getHours(), time.getMinutes(), time.getSeconds()),
      students: $scope.newReport.students.map(function(student){return {id: student.id};}),
      description:$scope.newReport.notes,
      room_id:$scope.newReport.room.id,
      // tags:$scope.newReport.tags
    };
    console.log(report);
    var data = {
      "report":report
    };
    $scope.submitReport($scope.currentUser, data, function(response){
      console.log(response.statusText);
      if (response.status === 201){
        $scope.$parent.reports.push(response.data.report);
        $scope.newReport = {
          title:"",
          date: new Date(),
          time: new Date(),
          students: [],
          tags: [],
          notes: "",
          room:null
        };
      } else {
        console.log("Record not created");
      }
    });
  };
});
