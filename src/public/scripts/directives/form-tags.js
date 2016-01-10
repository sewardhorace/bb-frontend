'use strict';

angular.module('trackerApp')
.directive('tags', function(){
  return {
    templateUrl:'static/templates/form-tags.html',
    controller:'tagsCtrl',
    replace: true
  };
});
