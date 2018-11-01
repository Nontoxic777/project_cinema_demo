var myApp = angular.module('Movie')
myApp.controller('detailMovie', ['$scope', 'apiService', function ($scope, apiService) {
  var name = $('#id-movie').text()
  apiService.detailMovies(name).then(function (res) {
    console.log(res.data.detail)
    $scope.detail_movie = res.data.detail
  })
}
])
