var createError = require('http-errors')
var express = require('express')
// var session = require('express-session')

var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

// connect Mongo
const mongoose = require('mongoose')
require('./api/models/Movie')
require('./api/models/User')
var mongoDB = 'mongodb://datsp314:Datsp314@ds137581.mlab.com:37581/datsp314'
mongoose.connect(mongoDB, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error: '))

var userRouter = require('./api/router/user')
var movieRouter = require('./api/router/movie')

// var movieListRouter = require('./api/router/movieList')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
// app.use(session())
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }))

// app.use(function (req, res, next) {
//   if (!req.session.views) {
//     req.session.views = {}
//   }

//   // get the url pathname
//   var pathname = parseurl(req).pathname

//   // count the views
//   req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

//   next()
// })

// app.get('/foo', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
// })

// app.get('/bar', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
// })

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api/movie/create', movieRouter)
app.use('/api/movie/list', movieRouter)
app.use('/api/user/create', userRouter)
app.use('/api/user/login', userRouter)

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
