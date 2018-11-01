var mongoose = require('mongoose')
// require('')
// const Category = mongoose.model('Category')

var Schema = mongoose.Schema

var MovieSchema = new Schema(
  {
    name: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    kind: {type: String, required: true},
    releaseDate: {type: Number},
    content: {type: String},
    createDate: {type: Number, default: Date.now()},
    image: {type: String, default: 'Movie.jpg'}
    // sorf ng-repeat
  }
)

// Tạo phương thức ảo cho tên phim
// MovieSchema
// .virtual('name')
// .get(function () {
//   return this.name + ', ' + this.kind;
// });

// Phương thức ảo cho url Phim
// MovieSchema
// .virtual('url')
// .get(function () {
//   return '/movie/' + this._id;
// });

// Xuất mô hình
module.exports = mongoose.model('Movie', MovieSchema)
