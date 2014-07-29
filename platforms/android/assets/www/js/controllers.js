(function(){

  this.Mil1App.controller('HomeCtrl', function($scope) {
  });
  this.Mil1App.controller('CalculatorCtrl', function($scope, $ionicPopup, BooksBeforeDeath) {
    $scope.user = {};
    $scope.isPendingRequest = false;

    $scope.onCalculateBooks = function(){
      $scope.isPendingRequest = true;

      BooksBeforeDeath.get({
        data: { age: $scope.user.age, books_per_year: $scope.user.booksPerYear},
        onSuccess: function(data, status, headers, config) {
          $scope.isPendingRequest = false;
        },
        onError: function(data, status, headers, config) {
          $scope.isPendingRequest = false;
          $ionicPopup.alert({
            title: 'Error de conexion',
            template: 'Algo salio mal al comunicarse con el servidor, intentalo de nuevo.'
          });
        }
      });
    };
  });

  this.Mil1App.controller('BooksCtrl', function($scope) {
  });

  this.Mil1App.controller('AboutCtrl', function($scope) {
  });

}).call(this);
