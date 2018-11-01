console.log('sigup')
var myApp = angular.module('Movie')
myApp.controller('userSignup', ['$scope', 'apiService', function ($scope, apiService) {
  // console.log('ok')
  $scope.userSignin = function () {
    console.log('ok')
    const checkForm = (!$scope.email || !$scope.username || !$scope.password || !$scope.passwordValid)
    console.log(checkForm)
    if (checkForm) {
      window.location.href = '#'
      $('#signinAlert').removeClass('hide')
    } else if ($scope.password !== $scope.passwordValid) {
      window.location.href = '#'
      $('#signinAlert').text('Mật khẩu bạn nhập không giống nhau. Vui lòng kiểm tra lại')
      $('#signinAlert').removeClass('hide')
    } else {
      $('#signinAlert').addClass('hide')
      var data = {
        username: $scope.username,
        password: $scope.password,
        passwordValid: $scope.passwordValid,
        email: $scope.email
      }
      apiService.createUser(data).then(function (res) {
        console.log(res)
        $.cookie('token', res.data.token)
        $.cookie('currentUser', data.username)
        $.cookie('emailUser', data.username)
        $.cookie('id', res.data.id)
        if (res.data.token === undefined) {
          window.location.href = '#'
          $('#signinAlert').text(res.data.err)
          $('#signinAlert').removeClass('hide')
        } else {
          window.location.href = '/'
        }
      })
    }
  }
}])
console.log('end')
