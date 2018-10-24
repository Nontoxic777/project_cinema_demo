var mongoose = require('mongoose');
// require('')

var Schema = mongoose.Schema;

var MovieSchema = new Schema(
  {
    name : {type: String, required: true},
    kind : {type: String, required: true},
    releaseDate : {type: Number},
    content : {type: String},
  }
);

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
module.exports = mongoose.model('Movie', MovieSchema);
