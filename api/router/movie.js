var express = require('express')
var router = express.Router()
var expressUpload = require('express-fileupload')
var path = require('path')

const movieController = require('../controllers/movieController')
router.get('/detail/:id', async function (req, res) {
  try {
    const detail = await movieController.detailMovie(req.params.id)
    console.log('Hi')
    res.send(detail)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

// TO DO UPDATE MOVIE
router.post('/detail/update/:id', async function (req, res) {
  try {
    const updateMovie = await movieController.updateMovie(req.body)
    console.log(updateMovie.result)
    res.send(updateMovie)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.get('/category/:name', async function (req, res) {
  try {
    console.log(req.params)
    const listMovie = await movieController.categoryMovie(req.params.name)
    console.log(listMovie)
    res.send(listMovie)
  } catch (err) {
    console.log('hi')
    console.log(err)
    res.send(err)
  }
})

// respond with "hello world" when a GET request is made to the homepage
router.get('/lists', async function (req, res) {
  try {
    const list = await movieController.listMovie()
    res.send(list)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.post('/create', expressUpload(), async function (req, res) {
  try {
    console.log(req.files)
    const url = path.join(path.join(__dirname, '../../'),'public/user_photo/') + req.files.userfile.name
    req.files.userfile.mv(url, async function () {
      req.body.image = req.files.userfile.name
      let movie = await movieController.createMovie(req.body)
      res.send(movie)
    })
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router
