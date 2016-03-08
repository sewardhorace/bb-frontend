'use strict';

angular.module('trackerApp')
.directive('search', function(){
  return {
    templateUrl:'static/templates/search.html',
    replace: true,
    link: function(scope, elem, attrs){
      scope.searchReports = function(){
        console.log("search clicked");
        scope.getReports({
          string: scope.queryString,
          callback: function(response){
            scope.reports = response.data;
          }
        });
      }
    }
  };
});
