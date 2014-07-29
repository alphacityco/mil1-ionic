(function(){

  this.Mil1App.factory('BooksBeforeDeath', function($http) {
    var API_URL = 'http://mil1-api.herokuapp.com/books/to_read_before_death';

    return {
      get: function(request) {
        // $http.defaults.useXDomain = true;
        // delete $http.defaults.headers.common['X-Requested-With'];
        return $http.get(API_URL, {params: request.data})
        .success(request.onSuccess)
        .error(request.onError);
      }
    }
  });

}).call(this);
