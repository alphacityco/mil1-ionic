(function(){

  this.Mil1App.factory('BooksBeforeDeath', function($http) {
    var API_URL = 'http://mil1-api.herokuapp.com/books/to_read_before_death';
    // var JSONP_SUFIX = 'callback=JSON_CALLBACK';
    // $http.defaults.useXDomain = true;
    // delete $http.defaults.headers.common['X-Requested-With'];

    return {
      get: function(request) {
        $http.get(API_URL, {params: request.data})
        .success(request.success)
        .error(request.error)
        .finally(request.finally);
        return this;
      }
    }
  });

}).call(this);
