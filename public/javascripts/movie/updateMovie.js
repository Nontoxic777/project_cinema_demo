var myApp = angular.module('Movie')
myApp.controller('movieUpdate', ['$scope', 'apiService', function ($scope, apiService) {
  $scope.movieUpdate = function () {
    let file
    var formData = new FormData()
    var d = $('#datepicker').datepicker('getDate')
    day_stem = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    // day = d.getDate() + (d.getMonth() + 1)*30 + d.getFullYear()*365;
    function parseDMY (s) {
      var b = s.split(/\D/)
      var d = new Date(b[2], --b[1], b[0])
      return d && d.getMonth() == b[1] ? d : new Date(NaN)
    }
    if (!$scope.movieName || !$scope.movieKind) {
      $('#alertMovieUpdate').removeClass('hide')
    } else {
      var time = parseDMY(day_stem).getTime()
      formData.append('name', $scope.movieName)
      formData.append('kind', $scope.movieKind)
      formData.append('releaseDate', time)
      formData.append('content', $scope.movieContent)
      let id = $('#idMovieUpdate').text()
      $.ajax({ url: '/api/movie/detail/update/' + id, method: 'post', data: formData, contentType: false, processData: false })
    }

    function readURL (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = function (e) {
          $('#blahUpdate').attr('src', e.target.result)
        }
        formData.append('userfile', input.files[0])
        console.log(input.files[0])
        console.log(formData)
        reader.readAsDataURL(input.files[0])
      }
    }
    $('#myFileUpdate').change(function () {
      readURL(this)
    })
    // END FORM DATA
    // apiService.createMovie(data)
  }
}])
