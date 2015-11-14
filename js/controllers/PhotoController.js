'use strict';

app.controller('PhotoController',['$scope', 'stream', '$routeParams', function($scope, stream, $routeParams) {
    stream.then(function(data) {
        $scope.detail = data.items[$routeParams.id];
      });  
}]);
