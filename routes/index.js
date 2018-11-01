var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')

require('../api/models/Category')
require('../api/models/Movie')
require('../api/models/User')

var mongoDB = 'mongodb://datsp314:Datsp314@ds137581.mlab.com:37581/datsp314'
mongoose.connect(mongoDB, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error: '))

const movieRouter = require('../api/router/movie')
const categoryRouter = require('../api/router/category')
const userRouter = require('../api/router/user')

router.use('/api/movie', movieRouter)
router.use('/api/category', categoryRouter)
router.use('/api/user', userRouter)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('movie/list-phim', { title: 'Trang Chủ' })
})

// CATEGORY ACTION
router.get('/tao-category', function (req, res, next) {
  res.render('movie/tao-category', { title: 'Thể Loại Mới' })
})

// USER ACTION
router.get('/dang-ky', function (req, res, next) {
  res.render('user/signup', { title: 'Đăng ký' })
})

router.get('/dang-nhap', function (req, res, next) {
  res.render('user/login', { title: 'Đăng nhập' })
})

router.get('/user/password', function (req, res, next) {
  res.render('user/changePassword', { title: 'Thay đổi mật khẩu' })
})

router.get('/user/:id', function (req, res, next) {
  let id = req.params.id
  res.render('user/dashboard', { title: 'Thông Tin User', id: id })
})

// MOVIE ACTION
router.get('/phim/tao-phim', function (req, res, next) {
  res.render('movie/tao-phim', { title: 'Tạo Phim Mới' })
})

router.get('/phim/list-phim', function (req, res, next) {
  res.render('movie/list-phim', { title: 'Danh Sach Movie' }) // Đường dẫn templates
})

router.get('/phim/list/:name', function (req, res, next) {
  res.render('movie/category-phim', { title: 'Chi Tiết Phim', name: req.params.name })
})

router.get('/phim/update/:id', function (req, res, next) {
  let id = req.body.id
  res.render('movie/update-phim', { title: 'Chi Tiết Phim', id: id })
})

router.get('/phim/:id', function (req, res, next) {
  let id = req.params.id
  res.render('movie/detail-phim', { title: 'Chi Tiết Phim', id: id })
})

module.exports = router
