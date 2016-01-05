'use strict';

angular.module("trackerApp")
.controller('mainCtrl', function($scope){
  $scope.fart = function(){
    console.log("fart noise");
  };
  $scope.reports = [
    {
      "title" : "Sample Report #1",
      "time" : "10:30",
      "author" : "Jim",
      "students" : [
        "Jenny",
        "Leroy",
        "Tim"
      ],
      "description" : "Lermon Ispasn",
      "tags" : [
        "#behavior",
      ],
    },
    {
      "title" : "Sample Report #2",
      "time" : "10:50",
      "author" : "Jim",
      "students" : [
        "Leroy",
      ],
      "description" : "barfing",
      "tags" : [
        "#illness",
      ],
    },
  ];
});
