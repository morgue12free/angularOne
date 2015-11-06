/*app.controller('HomeController', ['$scope','stream',
 function($scope, stream) {
 	stream.success(function(data){
 	 	$scope.datar = data;
  });  
}]); */

app.controller('HomeController', ['$scope','stream', function($scope, stream) {
    stream.then(function(data) {
        $scope.datar = data;
    });  
}]);

/*
app.controller('HomeController', ['$scope','stream',
 stream.then(function (res) {
    $scope.datar = res;
},function(err) {
    // hande error
})
}]); 
*/

/*
app.controller('HomeController', ['$scope','stream',
 function($scope, stream) {
    stream.get().success(function(response){
        $scope.datar = response.data;
  })
  .error(function(data) {
                    console.log('Error: ' + data);
            });  
}]);
*/