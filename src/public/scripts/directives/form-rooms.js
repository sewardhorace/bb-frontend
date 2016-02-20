'use strict';

angular.module('trackerApp')
.directive('rooms', function(){
  return {
    templateUrl:'static/templates/form-rooms.html',
    replace: true,
    link: function(scope, elem, attrs){
      // scope.selectRoom = function(){
      //   console.log("room selected");
      //   // scope.room =
      // };
    }
  };
});
