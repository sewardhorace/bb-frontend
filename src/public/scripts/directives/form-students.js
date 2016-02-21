'use strict';

angular.module('trackerApp')
.directive('students', function($timeout){
  return {
    templateUrl:'static/templates/form-students.html',
    replace: true,
    link: function(scope, elem, attrs){
      scope.newReport.students = [];

      scope.addStudent = function(idx){
        scope.newReport.students.push({});
        //TODO focus on input
      };
      scope.removeStudent = function(idx){
        scope.newReport.students.splice(idx, 1);
      };
      scope.onTypeaheadSelect = function(item, model, label, event, idx){
        var student = scope.newReport.students[idx];
        student.id = model.id;
        student.name = model.name;
        scope.change('student-input',idx);
      };
      scope.onBlur = function(idx){
        $timeout(function () {
          if (!scope.newReport.students[idx].id){
            scope.removeStudent(idx);
          }
        }, 250); //delay so that valid options can be selected from the typeahead dropdown
      };
    }
  };
});
