const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')
const Category = mongoose.model('Category')

const createMovie = async (data) => {
  var IDcategory = await Category.findOne({name: data.kind}, 'name')
  // var IDuser = await 
  let movie = new Movie({
    name: data.name,
    category: IDcategory,
    kind: data.kind,
    releaseDate: data.releaseDate,
    content: data.content,
    image: data.image
  })
  movie = await movie.save()
  return {movie: movie}
}

const categoryMovie = async (category) => {
  var result = false
  const categoryID = await Category.findOne({name: category})
  if (!categoryID) {
    console.log('Category không tồn tại')
    result = false
    const err = 'Category không tồn tại'
    return {result: result, err: err}
  } else {
    const listMovie = await Movie.find({ category: categoryID._id })
    if (!listMovie) {
      console.log('Xin lỗi, hiện chưa có phim nào trong thể loại này')
      result = false
      const err = 'Xin lỗi, hiện chưa có phim nào trong thể loại này'
      return {result: result, err: err}
    } else {
      result = true
      return {result: result, listMovie: listMovie}
    }
  }
}

let updateMovie = async (update) => {
  let result = false
  let movie = await Movie.findOne({_id: update.id})
  if (!movie) {
    console('Movie không tồn tại')
    let err = 'Movie không tồn tại'
    result = false
    return {result: result, err: err}
  } else {
    var IDcategory = await Category.findOne({name: update.kind}, 'name')
    if (!IDcategory) {
      console.log('Thể loại phim không tồn tại')
      let err = 'Thể loại phim không tồn tại'
      return {result: result, err: err}
    } else {
      movie.name = update.name
      movie.category = IDcategory
      movie.kind = update.kind
      movie.releaseDate = update.releaseDate
      movie.content = update.content
      movie.image = update.image
      movie = await movie.save()
      result = true
      return {result: result, movie: movie}
    }
  }
}

// .find({ category : category._id })
// .exec(function (err, stories) {
//   if (err) return handleError(err);
//   // trả về tất cả các tác phẩm có id của Bob.
// });

const listMovie = async () => {
  const list = await Movie.find().sort({releaseDate: -1})
  return {list: list}
}

const detailMovie = async (id) => {
  const detail = await Movie.findOne({_id: id})
  return {detail: detail}
}

module.exports = {
  createMovie: createMovie,
  listMovie: listMovie,
  detailMovie: detailMovie,
  categoryMovie: categoryMovie,
  updateMovie: updateMovie
}
