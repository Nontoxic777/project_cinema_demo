const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')

const createMovie = async (data) => {
  let movie = new Movie({
    name : data.name,
    kind : data.kind,
    releaseDate : data.releaseDate,
    content : data.content,
  })
  movie =  await movie.save()
  return {movie:movie}
}

module.exports = {
  createMovie : createMovie
}
