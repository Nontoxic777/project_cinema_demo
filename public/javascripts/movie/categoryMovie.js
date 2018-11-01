var myApp = angular.module('Movie')
myApp.controller('categoryMovie', ['$scope', 'apiService', function ($scope, apiService) {
  const name = $('#name-category').text()
  apiService.categoryMovie(name).then(function (response) {
    console.log(response.data)
    $scope.categoryMovie = response.data.listMovie
  })
}])
