'use strict';

angular.module('trackerApp')
.directive('students', function(){
  return {
    templateUrl:'static/templates/form-students.html',
    replace: true,
    link: function(scope, elem, attrs){
      console.log("loaded student directive");
      scope.newReport.students = [];

      scope.addStudent = function(){
        scope.newReport.students.push({});
      };
      scope.removeStudent = function(idx){
        scope.newReport.students.splice(idx, 1);
      };
    }
  };
});
