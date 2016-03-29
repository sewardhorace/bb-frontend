'use strict';

angular.module('trackerApp')
.directive('reportform', function(){
  return {
    templateUrl:'static/templates/form.html',
    controller:'formCtrl',
    replace: true,
  };
});
