'use strict';

angular.module('trackerApp')
.directive('rooms', function(){
  return {
    templateUrl:'static/templates/form-rooms.html',
    replace: true,
    restrict:'E',
    link: function(scope, elem, attrs){
      if(attrs.room){
        scope.room = scope.$eval(attrs.room);
      }
    }
  };
});
