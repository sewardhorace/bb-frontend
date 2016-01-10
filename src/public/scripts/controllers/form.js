'use strict';

angular.module('trackerApp')
.controller('FormCtrl', function ($scope) {

  $scope.newReport = {};

  //title
  $scope.titlePlaceholder = "+Title";
  $scope.inputSize = $scope.titlePlaceholder.length;
  $scope.change = function(text){
    // var p = angular.element(document.createElement('p'));
    // p.text(text);
    // console.log(p.text());

    if (text.length === 0){
      $scope.inputSize = $scope.titlePlaceholder.length;
    } else {
      $scope.inputSize = text.length + 1;
    }
  };


  $scope.save = function(){
    console.log($scope.newReport);
  };
});
