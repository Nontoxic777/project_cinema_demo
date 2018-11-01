var myApp = angular.module('Movie')
myApp.controller('listMovie', ['$scope', 'apiService', function ($scope, apiService) {
  apiService.getMovies().then(function (response) {
    $scope.movieList = response.data.list
    // console.log($scope.movieList)
    console.log($scope.movieList)
  })
}
])
