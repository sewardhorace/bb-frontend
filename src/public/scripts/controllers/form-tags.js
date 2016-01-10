'use strict';

angular.module('trackerApp')
.controller('tagsCtrl', function($scope){
  $scope.addTag = function(){
    var tagElem = angular.element('<a class="add-tag-btn"></a>');
    tagElem.text("#butt");
    console.log(tagElem);
  };
});
