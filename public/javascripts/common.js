function timestampToString (timestamp) {
  var date = new Date(timestamp)
  var str = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear()
  return str
}

// var filmPhoto = $('.img-thumbnail.img-fluid')

// filmPhoto.mouseover(function () {
//   filmPhoto.css('background-color', '#dddfe2')
// })
