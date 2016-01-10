'use strict';

angular.module('trackerApp')
.directive('students', function(){
  return {
    templateUrl:'static/templates/form-students.html',
    replace: true,
    link: function(scope, elem, attrs){
      console.log("loaded student directive");
      scope.newReport.students = [];

      scope.change = function(idx){
        console.log(scope.newReport.students[idx]);
      }

      scope.addStudent = function(){
        scope.newReport.students.push("");
        console.log("added student");
      };
    }
  };
});
