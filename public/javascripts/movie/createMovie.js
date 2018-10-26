// var app = angular.module('myApp', []);
// app.controller('personCtrl', function($scope) {
//     // $scope.movieImg = "";
//     $scope.movieName = "";
//     // $scope.movieKind = "";
//     // $scope.movieDate = "";
//     $scope.movieContent = "";
//     $scope.postData = function() {
//         var data = {
//           "name" : $scope.movieName,
//           "kind" : "Hello",
//           "date" : Date.now(),
//           "content" : $scope.movieContent,
//         }
//         // return data;
//         return 'Dat';
//     };
// });

var myApp = angular.module('Movie')
myApp.controller('CreateController', ['$scope', 'apiService', function ($scope, apiService) {
  $scope.movieName = ''
  $scope.movieKind = 'Lãng mạn - Tình cảm'
  $scope.movieContent = ''
  $scope.postData = function () {
    var data = {
      name: $scope.movieName,
      kind: $scope.movieKind,
      releaseDate: Date.now(),
      content: $scope.movieContent
    }
    console.log(data)
    apiService.createMovie(data)
  }
}])
