var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('movie/list-phim', { title: 'Trang Chủ' })
})

router.get('/tao-phim', function (req, res, next) {
  res.render('movie/tao-phim', { title: 'Tạo Phim Mới' })
})

router.get('/danh-sach-phim', function (req, res, next) {
  res.render('movie/list-phim', { title: 'Danh Sach Movie' }) // Đường dẫn templates
})

router.get('/dang-ky-tai-khoan', function (req, res, next) {
  res.render('user/signup', { title: 'Đăng ký' })
})

router.get('/dang-nhap', function (req, res, next) {
  res.render('user/login', { title: 'Đăng nhập' })
})

module.exports = router
