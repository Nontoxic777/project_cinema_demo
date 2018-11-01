var myApp = angular.module('Movie')
myApp.controller('Categorylist', ['$scope', 'apiService', function ($scope, apiService) {
  apiService.listCategory().then(function (response) {
    $scope.categoryMovie = response.data.list
  })
}
])
