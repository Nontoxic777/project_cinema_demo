var myApp = angular.module('userAction')

myApp.controller('CreateController', ['$scope', 'apiService', function ($scope, apiService) {
  $scope.postData = function () {
    var data = {
      username: $scope.username,
      password: $scope.password,
      passwordValid: $scope.passwordValid,
      email: $scope.email
    }
    console.log(data)
    apiService.createUser(data)
  }
}])
