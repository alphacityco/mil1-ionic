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
        success: function(data, status, headers, config) {
          
        },
        error: function(data, status, headers, config) {
          $ionicPopup.alert({
            title: 'Error de conexion',
            template: 'Algo salio mal al comunicarse con el servidor, intentalo de nuevo.'
          });
        },
        finally: function(){
          $scope.isPendingRequest = false;
        }
      });
    };
  });

  this.Mil1App.controller('BooksCtrl', function($scope) {
  });

  this.Mil1App.controller('AboutCtrl', function($scope) {
  });

}).call(this);
