var myApp = angular.module('Movie')
myApp.controller('CreateController', ['$scope', 'apiService', function ($scope, apiService) {
  let file
  var formData = new FormData()
  apiService.listCategory().then(function (response) {
    $scope.listCategory = response.data.list
  })
  $scope.movieName = ''
  $scope.movieContent = ''
  $scope.postData = function () {
    var d = $('#datepicker').datepicker('getDate')
    day_stem = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    // day = d.getDate() + (d.getMonth() + 1)*30 + d.getFullYear()*365;
    function parseDMY (s) {
      var b = s.split(/\D/)
      var d = new Date(b[2], --b[1], b[0])
      return d && d.getMonth() == b[1] ? d : new Date(NaN)
    }
    var time = parseDMY(day_stem).getTime()
    console.log(parseDMY(day_stem).getTime())
    // var data = {
    //   name: $scope.movieName,
    //   kind: $scope.movieKind,
    //   releaseDate: time,
    //   content: $scope.movieContent
    // }
    formData.append('name', $scope.movieName)
    formData.append('kind', $scope.movieKind)
    formData.append('releaseDate', time)
    formData.append('content', $scope.movieContent)
    console.log(formData)

    $.ajax({ url: '/api/movie/create', method: 'post', data: formData, contentType: false, processData: false })
    // console.log(data)
    // FORMDAT
  }

  function readURL (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader()

      reader.onload = function (e) {
        $('#blah').attr('src', e.target.result)
      }
      formData.append('userfile', input.files[0])
      console.log(input.files[0])
      console.log(formData)
      reader.readAsDataURL(input.files[0])
    }
  }
  $('#myFile').change(function () {
    readURL(this)
  })
  // END FORM DATA
  // apiService.createMovie(data)
}])
