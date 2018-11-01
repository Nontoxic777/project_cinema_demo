var myApp = angular.module('Movie')
myApp.controller('userInfomation', ['$scope', 'apiService', function ($scope, apiService) {
  const id = $.cookie('id')
  $scope.username = $.cookie('currentUser')
  $scope.isEditting = false
  $scope.isErr = false
  console.log(id)

  $scope.changePass = function () {
    window.location.href = '/user/password'
  }

  apiService.infomationUser(id).then(function (response) {
    console.log(response)
    $scope.infomation = response.data.user
  })

  $scope.postData = function () {
    if (!$scope.username) {
      $scope.isErr = true
    } else {
      var data = {
        username: $scope.username,
        id: id
      }
      apiService.updateUser(data).then(function (response) {
        $.cookie('currentUser', response.data.username)
        window.location.reload(true)
      })
    }
  }
}])
