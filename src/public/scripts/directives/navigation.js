'use strict';

angular.module('trackerApp')
.directive('navigation', function(){
  return {
    templateUrl:'static/templates/navigation.html',
    replace: true,
    link: function(scope, elem, attrs){
      console.log("loaded nav directive");
    }
  };
});
