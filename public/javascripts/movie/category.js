var myApp = angular.module('Movie')
myApp.controller('Category', ['$scope', 'apiService', function ($scope, apiService) {
  $scope.postData = function () {
    var data = {
      name: $scope.nameCategory
    }
    console.log(data)
    apiService.createCategory(data)
  }
}])
