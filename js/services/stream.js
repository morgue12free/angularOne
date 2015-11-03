app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
    $scope.photos = [
      {
      name: 'nice pic',
      rating: 5
     },
      {
       name: 'another nice pic',
       rating: 4
     }
    ]; 
}]);