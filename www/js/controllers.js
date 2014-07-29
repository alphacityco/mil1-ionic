(function(){

  this.Mil1App.controller('HomeCtrl', function($scope) {
  });
  this.Mil1App.controller('CalculatorCtrl', function($scope, $state, $ionicPopup, BooksBeforeDeath) {
    $scope.user = {};
    $scope.isPendingRequest = false;

    $scope.onCalculateBooks = function(){
      $scope.isPendingRequest = true;

      BooksBeforeDeath.get({ data: { age: $scope.user.age, books_per_year: $scope.user.booksPerYear},
        success: function(data, status, headers, config) {
          store.set('user', data);
          $state.go('tab.books');
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

  this.Mil1App.controller('BooksCtrl', function($scope, $state) {
    $scope.user = store.get('user');

    if (!$scope.user){
      $state.go('tab.calculator');
    }

  });

  this.Mil1App.controller('AboutCtrl', function($scope) {
  });

}).call(this);
