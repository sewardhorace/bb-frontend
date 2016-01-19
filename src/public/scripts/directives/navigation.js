'use strict';

angular.module('trackerApp')
.directive('navigation', function(){
  return {
    templateUrl:'static/templates/navigation.html',
    replace: true,
    link: function(scope, elem, attrs){
      console.log("loaded nav directive");
      scope.reportFormCollapsed = true;

      scope.newReportClicked = function(){
        scope.reportFormCollapsed = !scope.reportFormCollapsed;
      }

      scope.filterReports = function(room){
        if (scope.filter === room){
          scope.filter = "";
        } else {
          scope.filter = room;
        }
      }
    }
  };
});
