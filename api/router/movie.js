var express = require('express')
var router = express.Router()

const movieController = require('../controllers/movieController')

// respond with "hello world" when a GET request is made to the homepage
router.post('/', async function (req, res) {
  try{
    var movie = await movieController.createMovie(req.body)
    res.send(movie)
  }
  catch(err){
    console.log(err)
    res.send(err)
  }

})

module.exports = router;
