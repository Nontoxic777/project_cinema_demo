var myApp = angular.module('Movie')
myApp.controller('userUpdate', ['$scope', 'apiService', function ($scope, apiService) {
  $scope.userUpdate = function () {
    const email = $.cookie('emailUser')
    if (!$scope.Upusername && !$scope.Uppassword) {
      $('#updateUserAlert').removeClass('hide')
      window.location.href = '#'
    } else {
      const data = {
        email: email,
        username: $scope.Upusername,
        password: $scope.Uppassword,
        passwordValid: $scope.UppasswordValid
      }
      apiService.updateUser(data).then(function (response) {
        console.log(response)
        if (response.data.result) {
          $.cookie('currentUser', response.data.username)
          window.location.href = '/'
        } else {
          $('#updateUserAlert').text(response.data.err)
          $('#updateUserAlert').removeClass('hide')
          window.location.href = '#'
        }
      })
    }
  }
}])
