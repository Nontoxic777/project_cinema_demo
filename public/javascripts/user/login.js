var myApp = angular.module('userAction')

myApp.controller('userLogin', ['$scope', 'apiService', function ($scope, apiService) {
  $scope.userLogin = function () {
    var data = {
      username: $scope.username,
      password: $scope.password,
      passwordValid: '',
      email: ''
    }
    console.log(data)
    apiService.loginUser(data)
  }
}])
