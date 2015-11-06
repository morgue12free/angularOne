/*app.factory('stream', ['$http', function($http){ 
  return $http.get('http://cdn.rawgit.com/angular/angular-phonecat/master/app/phones/phones.json')
      .success(function(data){
         return data;
      })
       .error(function(err){
       	 return err;
       });
}]);*/

app.factory('stream', ['$http', function($http) { 
  return $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=JSON_CALLBACK')
      .then(function(response) {
          return response.data;
      });
}]);

/*
app.factory('stream', ['$http', '$q'], function($http, $q){ 

    var defer = $q.defer();
    $http.get('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&json_callback=JSON_CALLBACK')
           .success(function(data){
               defer.resolve(data);
           })
           .error(function(err){
               defer.reject(err);
          });

    return defer.promise;
}]);
*/

/*
app.factory('stream', ['$http', function($http){ 
  return {
        get : function(){ 
  $http.get('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=JSON_CALLBACK');
}}}]);
*/