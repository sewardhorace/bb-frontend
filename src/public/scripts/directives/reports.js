'use strict';

angular.module('trackerApp')
.directive('reports', function(){
  return {
    templateUrl:'static/templates/reports.html',
    controller:'mainCtrl',
    replace: true
  };
});
