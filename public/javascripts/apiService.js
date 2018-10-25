angular.module('Movie', []).factory('apiService', ['$http', function ($http) {
  return {
    createMovie: function (data) {
      return $http.post('/api/movie', data)
    },
    getMovies: function (req) {
      return $http.get('api/movieList')
    }
  }
}])
