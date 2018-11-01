var myApp = angular.module('Movie')
myApp.controller('userPassword', ['$scope', 'apiService', function ($scope, apiService) {
  const id = $.cookie('id')
  $scope.isError = false
  $scope.isCheckPass = false
  $scope.isEditSusscess = false
  $scope.postData = function () {
    if ($scope.newPass !== $scope.newPassValid) {
      $scope.isError = true
    } else {
      var data = {
        id: id,
        password: $scope.confirmPass,
        newPass: $scope.newPass
      }
      apiService.passwordUser(data).then(function (response) {
        if (response.data.result === false) {
          $scope.isCheckPass = true
        } else if (response.data.result) {
          $scope.isEditSusscess = true
          $scope.isError = false
          $scope.isCheckPass = false
        }
        console.log(response.data.result)
      })
    }
  }
}])
