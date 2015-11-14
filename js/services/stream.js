app.factory('stream', ['$http', function($http) { 
  return $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=JSON_CALLBACK')
      .then(function(response) {
          return response.data;
      });
}]);
