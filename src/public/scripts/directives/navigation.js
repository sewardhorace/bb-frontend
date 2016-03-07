'use strict';

angular.module('trackerApp')
.directive('navigation', function(){
  return {
    templateUrl:'static/templates/navigation.html',
    replace: true,
    link: function(scope, elem, attrs){
      scope.reportFormCollapsed = true;
      scope.searchBarCollapsed = true;

      scope.newReportClicked = function(){
        scope.reportFormCollapsed = !scope.reportFormCollapsed;
      };
      scope.searchButtonClicked = function(){
        scope.searchBarCollapsed = !scope.searchBarCollapsed;
      }

      scope.filterReports = function(room){
        if (scope.filter === room){
          scope.filter = "";
        } else {
          scope.filter = room;
        }
      };
    }
  };
});
