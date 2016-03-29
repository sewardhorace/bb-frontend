'use strict';

angular.module('trackerApp')
.directive('students', function($timeout){
  return {
    templateUrl:'static/templates/form-students.html',
    restrict:'E',
    replace: true,
    link: function(scope, elem, attrs){
      if(attrs.students){
        scope.students = scope.$eval(attrs.students);
      }

      // scope.students = [];

      scope.addStudent = function(){
        scope.students.push({});
        //TODO focus on input
      };
      scope.removeStudent = function(idx){
        scope.students.splice(idx, 1);
      };
      scope.onTypeaheadSelect = function(item, model, label, event, idx){
        var student = scope.students[idx];
        student.id = model.id;
        student.name = model.name;
        scope.$broadcast("valueChanged", { newValue: student, oldValue: student });
      };
      scope.onBlur = function(idx){
        $timeout(function () {
          if (!scope.students[idx].id){
            scope.removeStudent(idx);
          }
        }, 250); //delay so that valid options can be selected from the typeahead dropdown
      };
    }
  };
});
