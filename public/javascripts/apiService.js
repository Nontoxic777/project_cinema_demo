angular.module('Movie', []).factory('apiService', ['$http', function ($http) {
  return {
    createMovie: function (data) {
      return $http.post('/api/movie/create', data)
    },
    getMovies: function (req) {
      return $http.get('api/movie/list')
    }
  }
}])

angular.module('userAction', []).factory('apiService', ['$http', function ($http) {
  return {
    createUser: function (data) {
      return $http.post('api/user/create', data)
    },
    loginUser: function (data) {
      return $http.post('api/user/login', data)
    }
  }
}])
