'use strict';

angular.module('trackerApp')
.directive('navigation', function(){
  return {
    templateUrl:'static/templates/navigation.html',
    replace: true,
    link: function(scope, elem, attrs){
      scope.searchBarCollapsed = true;

      scope.logOutButtonClicked = function(){
        scope.currentUser = null;
      };
      scope.newReportClicked = function(){
        scope.newReport.editing = !scope.newReport.editing;
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
