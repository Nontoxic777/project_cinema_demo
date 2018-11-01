var myApp = angular.module('Movie')
myApp.controller('userLogin', ['$scope', '$rootScope', 'apiService', function ($scope, $rootScope, apiService) {
  console.log('ok')
  $scope.userLogin = function () {
    if (!$scope.email || !$scope.password) {
      $('#alertLogin').removeClass('hide')
      window.location.href = '#'
    } else {
      $('#alertLogin').addClass('hide')
      var token = $.cookie('token')
      var email = $.cookie('emailUser')
      if (token !== null && email !== null) {
        $rootScope.token = token
        $rootScope.emailUser = email
      }
      console.log(token)
      var data = {
        email: $scope.email,
        password: $scope.password
      }
      apiService.loginUser(data).then(function (res) {
        console.log(res.data.token)
        // $cookies.put('token', res.data.token)
        $.cookie('token', res.data.token)
        // $cookies.put('currentUser', data.username)
        $.cookie('currentUser', res.data.username.username)
        $.cookie('id',res.data.username._id)
        $.cookie('emailUser', data.email)
        console.log(res.data.err)
        if (res.data.token === undefined) {
          window.location.href = '#'
          $('#alertLogin').text('Thông tin bạn nhập sai, vui lòng kiểm tra lại!')
          $('#alertLogin').removeClass('hide')
        } else {
          window.location.href = '/'
        }
      })
    }
  }
}])
