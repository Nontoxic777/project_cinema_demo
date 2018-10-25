var myApp = angular.module('Movie')
myApp.controller('namesCtrl', ['$scope', 'apiService', function ($scope, apiService) {
  apiService.getMovies().then(function (response) {
    $scope.movieList = response.data.list
    console.log(response)
  })
}
])
