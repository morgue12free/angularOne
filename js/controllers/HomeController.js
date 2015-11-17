
'use strict';

app.controller('HomeController',['$scope','stream', function($scope, stream) {
    stream.then(function(data) {
        $scope.photos = data
      });  
        //show more functionality

       $scope.showMoreItems = function(data) {
         $scope.photos = $scope.photos + data;
         $route.reload();
           $scope.photos = $scope.photos.push(data);
       }; 


}]);
