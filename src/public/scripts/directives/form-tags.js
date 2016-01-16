'use strict';

angular.module('trackerApp')
.directive('tags', function(){
  return {
    templateUrl:'static/templates/form-tags.html',
    replace: true,
    link: function(scope, elem, attrs){
      console.log("loaded tag directive");
      scope.newReport.tags = [];

      scope.addTag = function(){
        scope.newReport.tags.push({});
      };
      scope.removeTag = function(idx){
        scope.newReport.tags.splice(idx, 1);
      };
    }
  };
});
