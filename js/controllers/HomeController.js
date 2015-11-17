
'use strict';

app.controller('HomeController',['$scope','stream', function($scope, stream) {
    stream.then(function(data) {
        $scope.photos = data
      });  
        //show more functionality

}]);
