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
        scope.newReport.tags.push("");
        console.log("added tag");
      };
      scope.removeTag = function(idx){
        console.log('baleted');
        scope.newReport.tags.splice(idx, 1);
      };
    }
  };
});
