angular.module('Movie', ['ngCookies']).factory('apiService', ['$http', '$cookies', function ($http, $cookies) {
  return {
    createMovie: function (data) {
      return $http.post('/api/movie/create', data)
    },
    getMovies: function () {
      return $http.get('/api/movie/lists')
    },
    detailMovies: function (res) {
      return $http.get('/api/movie/detail/' + res)
    },
    createCategory: function (data) {
      return $http.post('/api/category/create', data)
    },
    listCategory: function () {
      return $http.get('/api/category/list')
    },
    categoryMovie: function (category) {
      return $http.get('/api/movie/category/' + category)
    },
    updateMovie: function (id) {
      return $http.post('/api/movie/detail/update/' + id)
    },
    createUser: function (data) {
      return $http.post('/api/user/create', data)
    },
    loginUser: function (data) {
      return $http.put('/api/user/login', data)
    },
    infomationUser: function (id) {
      return $http.get('/api/user/' + id)
    },
    updateUser: function (data) {
      return $http.post('/api/user/update/' + data.id, data)
    },
    passwordUser: function (data) {
      return $http.post('/api/user/password/ + data.id', data)
    }
  }
}])

// angular.module('userAction', ['ngCookies']).factory('apiService', ['$http', '$cookies', function ($http, $cookies) {
//   return {
//     createUser: function (data) {
//       return $http.post('api/user/create', data)
//     },
//     loginUser: function (data) {
//       $http.put('api/user/login', data).then(function (res) {
//         console.log(res.data.token)
//         $cookies.put('token', res.data.token)
//         $cookies.put('currentUser', data.username)
//         console.log(res)
//       })
//     }
//   }
// }])
