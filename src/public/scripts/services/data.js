'use strict';

angular.module('trackerApp')
.service('dataService', function($http){
  this.getReports = function(options){
    var url = 'http://localhost:3000/api/v1/reports.json'
    if (options.string) {
      url += "?query_string="+options.string
    }
    var req = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    $http(req).then(options.callback);
  };
  this.submitReport = function(user, report, callback){
    var req = {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/reports.json',
      headers: {
        'Authorization': user.auth_token,
        'Content-Type': 'application/json'
      },
      data: report
    };
    $http(req).then(callback);
  };
  this.getStudents = function(string, roomId) {
    var queryString = "?query_string="+string;
    if (roomId){
      queryString += "&room_id="+roomId;
    }
    var req = {
      method: 'GET',
      url: 'http://localhost:3000/api/v1/students.json' + queryString,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return $http(req).then(function(response){
        return response.data.map(function(student){
          return student;
        });
    });
  };
  this.getRooms = function(callback){
    $http.get('http://localhost:3000/api/v1/rooms.json')
    .then(callback);
  };
});
