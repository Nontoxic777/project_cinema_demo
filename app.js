var createError = require('http-errors')
var express = require('express')
// var session = require('express-session')

var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')

var app = express()

// connect Mongo
const mongoose = require('mongoose')
require('./api/models/Movie')
require('./api/models/User')
var mongoDB = 'mongodb://datsp314:Datsp314@ds137581.mlab.com:37581/datsp314'
mongoose.connect(mongoDB, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error: '))

// var userLoginRouter = require('./api/router/user/login')
// var userSignupRouter = require('./api/router/user/signup')
// var userLogoutRouter = require('./api/router/user/logout')
// var movieRouter = require('./api/router/movie')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
